#!/usr/bin/env python3
"""SourcingBridge 每日价格刷新：CJ API → products.json → 重 build → push（GitHub Actions 自动部署）。

CJ API key 存在 ~/.config/sourcing-bridge/cj_api_key（600 权限），没有 key 时静默退出。
"""
import json, os, subprocess, sys, time, urllib.request

KEY_FILE = os.path.expanduser('~/.config/sourcing-bridge/cj_api_key')
SITE_DIR = os.path.expanduser('~/workspace/sourcing-bridge')
DATA_FILE = os.path.join(SITE_DIR, 'data/products.json')
API = 'https://developers.cjdropshipping.com/api2.0/v1'
COUNTRIES = ['US', 'CA', 'GB']

def log(*a): print('[refresh]', *a, flush=True)

def call(path, params=None, method='GET', token=None, body=None, _retry=0):
    from urllib.parse import urlencode
    import urllib.error
    q = ''
    if params:
        q = '?' + urlencode({k: v for k, v in params.items() if v is not None})
    data = json.dumps(body).encode() if body is not None else None
    req = urllib.request.Request(API + path + q, data=data, method=method)
    req.add_header('Content-Type', 'application/json')
    if token:
        req.add_header('CJ-Access-Token', token)
    try:
        with urllib.request.urlopen(req, timeout=30) as r:
            return json.load(r)
    except urllib.error.HTTPError as e:
        if e.code == 429 and _retry < 5:
            wait = 60 * (_retry + 1)
            log(f'429 rate limited, waiting {wait}s (retry {_retry+1}/5)')
            time.sleep(wait)
            return call(path, params, method, token, body, _retry + 1)
        raise

def get_access_token(api_key):
    d = call('/authentication/getAccessToken', body={'apiKey': api_key}, method='POST')
    return d['data']['accessToken']

def main():
    if not os.path.exists(KEY_FILE):
        log('no CJ API key yet — waiting for Peng to provide one; skipping')
        return 0
    token = open(KEY_FILE).read().strip()
    if not token:
        log('key file empty; skipping'); return 0
    # API key -> short-lived access token
    token = get_access_token(token)
    log('access token acquired')

    old = json.load(open(DATA_FILE))
    slugs = [p['slug'] for p in old['products']]
    by_pid = {p['pid']: p['slug'] for p in old['products']}
    updated, failed = 0, []
    for pid, slug in by_pid.items():
        try:
            d = call('/product/productDetail/query', {'id': pid}, token=token)['data']
            best = None
            for v in d.get('stanProducts') or []:
                try: c = float(str(v.get('sellprice')).split('--')[0].split('-')[0])
                except Exception: continue
                if c and (best is None or c < best[0]): best = (c, v.get('id'))
            if not best: failed.append(slug); continue
            cost, vid = best
            fr = call('/logistic/freightCalculate',
                      {'startCountryCode': 'CN', 'endCountryCode': 'CA',
                       'products': json.dumps([{'vid': vid, 'quantity': 1}])},
                      token=token)
            opts = sorted(
                ({'name': o.get('logisticName'),
                  'price': float(str(o.get('logisticPrice')).split('-')[0]),
                  'aging': o.get('logisticAging')}
                 for o in fr.get('data') or []),
                key=lambda o: o['price'])
            if not opts: failed.append(slug); continue
            for p in old['products']:
                if p['slug'] == slug:
                    p['cost_usd'] = round(cost, 2)
                    p['freight_ca'] = {'carrier': opts[0]['name'],
                                       'price_usd': round(opts[0]['price'], 2),
                                       'aging_days': opts[0]['aging']}
                    p['freight_options_count'] = len(opts)
                    p['landed_ca_usd'] = round(cost + opts[0]['price'], 2)
                    updated += 1
            time.sleep(1)
        except Exception as e:
            log(f'{slug}: {str(e)[:100]}'); failed.append(slug)
    old['generated_at'] = time.strftime('%Y-%m-%dT%H:%M:%S')
    old['data_date'] = time.strftime('%Y-%m-%d')
    json.dump(old, open(DATA_FILE, 'w'), ensure_ascii=False, indent=1)
    log(f'updated {updated}/{len(by_pid)}, failed: {failed}')

    # rebuild + push (GitHub Actions deploys)
    r = subprocess.run(['npm', 'run', 'build'], cwd=SITE_DIR, capture_output=True, text=True)
    if r.returncode != 0:
        log('BUILD FAILED'); print(r.stderr[-2000:]); return 1
    subprocess.run(['git', 'add', 'data/products.json'], cwd=SITE_DIR, check=True)
    st = subprocess.run(['git', 'status', '--porcelain'], cwd=SITE_DIR, capture_output=True, text=True).stdout
    if 'products.json' in st:
        subprocess.run(['git', '-c', 'user.name=Pocoyo', '-c', 'user.email=pocoyo@local',
                        'commit', '-m', f'Daily price refresh {old["data_date"]}'], cwd=SITE_DIR, check=True)
        subprocess.run(['git', 'push', 'origin', 'main'], cwd=SITE_DIR, check=True)
        log('pushed; GitHub Actions will deploy')
    else:
        log('no price changes; nothing to push')
    return 0

if __name__ == '__main__':
    sys.exit(main())
