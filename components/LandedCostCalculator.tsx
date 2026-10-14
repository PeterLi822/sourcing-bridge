'use client';

import { useState } from 'react';
import { PRODUCTS, formatUSD } from '@/lib/products';

interface Preset { slug: string; name: string; cost: number; freight: number | null }

const PRESETS: Preset[] = PRODUCTS.map((p) => ({
  slug: p.slug, name: p.name, cost: p.cost_usd,
  freight: p.freight_ca.price_usd,
})).sort((a, b) => a.name.localeCompare(b.name));

export default function LandedCostCalculator() {
  const [presetSlug, setPresetSlug] = useState('');
  const [productCost, setProductCost] = useState('2.00');
  const [freight, setFreight] = useState('5.00');
  const [quantity, setQuantity] = useState('1');
  const [dutyRate, setDutyRate] = useState('0');

  const applyPreset = (slug: string) => {
    setPresetSlug(slug);
    const p = PRESETS.find((x) => x.slug === slug);
    if (p) {
      setProductCost(p.cost.toFixed(2));
      setFreight(p.freight !== null ? p.freight.toFixed(2) : '5.00');
    }
  };

  const cost = parseFloat(productCost) || 0;
  const ship = parseFloat(freight) || 0;
  const qty = Math.max(1, parseInt(quantity) || 1);
  const duty = parseFloat(dutyRate) || 0;

  const goodsValue = cost * qty;
  const dutyAmount = goodsValue * (duty / 100);
  const totalLanded = goodsValue + ship + dutyAmount;
  const perUnit = totalLanded / qty;

  const inputCls = "w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500";

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 md:p-8">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Start from a curated product (optional)
            </label>
            <select
              value={presetSlug}
              onChange={(e) => applyPreset(e.target.value)}
              className={inputCls}
            >
              <option value="">— Enter numbers manually —</option>
              {PRESETS.map((p) => (
                <option key={p.slug} value={p.slug}>
                  {p.name.slice(0, 55)}{p.name.length > 55 ? '…' : ''} (${p.cost.toFixed(2)})
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Product cost per unit (USD)</label>
            <input type="number" min="0" step="0.01" value={productCost}
              onChange={(e) => { setProductCost(e.target.value); setPresetSlug(''); }} className={inputCls} />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Freight for the order (USD)</label>
            <input type="number" min="0" step="0.01" value={freight}
              onChange={(e) => { setFreight(e.target.value); setPresetSlug(''); }} className={inputCls} />
            <p className="text-xs text-gray-500 mt-1">Total shipping charged for this order (all units combined).</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Quantity</label>
              <input type="number" min="1" step="1" value={quantity}
                onChange={(e) => setQuantity(e.target.value)} className={inputCls} />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Duty / tax rate (%)</label>
              <input type="number" min="0" step="0.1" value={dutyRate}
                onChange={(e) => setDutyRate(e.target.value)} className={inputCls} />
            </div>
          </div>
        </div>

        <div className="bg-emerald-50 rounded-xl p-6 flex flex-col justify-center">
          <h3 className="text-sm font-semibold text-emerald-900 uppercase tracking-wide mb-4">Your landed cost</h3>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between"><span className="text-gray-600">Goods ({qty} × {formatUSD(cost)})</span><span className="font-medium">{formatUSD(goodsValue)}</span></div>
            <div className="flex justify-between"><span className="text-gray-600">Freight</span><span className="font-medium">{formatUSD(ship)}</span></div>
            <div className="flex justify-between"><span className="text-gray-600">Duties &amp; taxes ({duty}%)</span><span className="font-medium">{formatUSD(dutyAmount)}</span></div>
            <div className="border-t border-emerald-200 pt-3 flex justify-between text-base">
              <span className="font-semibold text-emerald-900">Total landed</span>
              <span className="font-bold text-emerald-900">{formatUSD(totalLanded)}</span>
            </div>
            <div className="flex justify-between text-base">
              <span className="font-semibold text-emerald-900">Per unit</span>
              <span className="font-bold text-2xl text-emerald-700">{formatUSD(perUnit)}</span>
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-4">
            Estimate only. Preset freight figures are real CJ Dropshipping quotes (China → Canada) checked on 2026-10-05; your actual freight depends on the carrier, weight, and destination.
          </p>
        </div>
      </div>
    </div>
  );
}
