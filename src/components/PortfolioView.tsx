import React, { useState } from 'react';
import { PORTFOLIO_MOCK_PROPERTIES } from '../data/singaporeDistricts';
import { PortfolioProperty } from '../types';

export const PortfolioView: React.FC = () => {
  const [properties, setProperties] = useState<PortfolioProperty[]>(PORTFOLIO_MOCK_PROPERTIES);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  // Form states
  const [newPropName, setNewPropName] = useState('');
  const [newDistrict, setNewDistrict] = useState('D10');
  const [newType, setNewType] = useState<'Condo' | 'Landed' | 'HDB'>('Condo');
  const [newPurchasePrice, setNewPurchasePrice] = useState(2500000);
  const [newCurrentValue, setNewCurrentValue] = useState(2800000);
  const [newMonthlyRent, setNewMonthlyRent] = useState(8500);

  const totalValuation = properties.reduce((acc, p) => acc + p.currentValue, 0);
  const totalCostBasis = properties.reduce((acc, p) => acc + p.purchasePrice, 0);
  const totalUnrealizedGain = totalValuation - totalCostBasis;
  const gainPercentage = (totalUnrealizedGain / totalCostBasis) * 100;
  const totalMonthlyIncome = properties.reduce((acc, p) => acc + p.monthlyRent, 0);
  const blendedYield = ((totalMonthlyIncome * 12) / totalValuation) * 100;

  const handleAddProperty = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPropName) return;

    const newProp: PortfolioProperty = {
      id: `port-${Date.now()}`,
      propertyName: newPropName,
      districtId: newDistrict,
      propertyType: newType,
      purchasePrice: newPurchasePrice,
      currentValue: newCurrentValue,
      monthlyRent: newMonthlyRent,
      tenure: 'Freehold',
      sqft: 1200,
      purchaseYear: 2024,
      occupancyStatus: 'Rented',
    };

    setProperties([...properties, newProp]);
    setIsAddModalOpen(false);
    setNewPropName('');
  };

  return (
    <div className="space-y-6">
      {/* Portfolio Summary Header */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="data-card p-5 rounded-2xl border border-white/10 shadow-xl">
          <p className="text-xs text-slate-300 font-semibold uppercase tracking-wider">Total Portfolio Value</p>
          <p className="text-3xl font-mono font-extrabold text-white mt-2">${totalValuation.toLocaleString()}</p>
          <p className="text-xs text-emerald-400 font-mono mt-1 font-bold">
            +${totalUnrealizedGain.toLocaleString()} ({gainPercentage.toFixed(1)}% ROI)
          </p>
        </div>

        <div className="data-card p-5 rounded-2xl border border-white/10 shadow-xl">
          <p className="text-xs text-slate-300 font-semibold uppercase tracking-wider">Monthly Rental Income</p>
          <p className="text-3xl font-mono font-extrabold text-emerald-400 mt-2">${totalMonthlyIncome.toLocaleString()}/mo</p>
          <p className="text-xs text-slate-300 font-mono mt-1">${(totalMonthlyIncome * 12).toLocaleString()} Annualized</p>
        </div>

        <div className="data-card p-5 rounded-2xl border border-white/10 shadow-xl">
          <p className="text-xs text-slate-300 font-semibold uppercase tracking-wider">Blended Net Yield</p>
          <p className="text-3xl font-mono font-extrabold text-blue-300 mt-2">{blendedYield.toFixed(2)}%</p>
          <p className="text-xs text-slate-400 font-mono mt-1">Vs SG Benchmark (3.8%)</p>
        </div>

        <div className="data-card p-5 rounded-2xl border border-white/10 shadow-xl">
          <p className="text-xs text-slate-300 font-semibold uppercase tracking-wider">Total Holdings</p>
          <p className="text-3xl font-mono font-extrabold text-white mt-2">{properties.length} Assets</p>
          <p className="text-xs text-emerald-400 font-mono mt-1 font-bold">100% Occupied</p>
        </div>
      </div>

      {/* Property Holdings Table */}
      <div className="data-card p-6 rounded-2xl border border-white/10 shadow-xl overflow-hidden">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h3 className="font-bold text-xl text-white">Institutional Asset Holdings</h3>
            <p className="text-xs text-slate-300 mt-0.5">Track real estate assets, rental income, and valuation gains</p>
          </div>

          <button
            onClick={() => setIsAddModalOpen(true)}
            className="bg-white text-slate-950 font-bold text-xs uppercase tracking-widest py-2.5 px-5 rounded-full hover:bg-slate-200 transition-all flex items-center gap-2 shadow-lg shadow-white/10"
          >
            <span className="material-symbols-outlined text-[18px]">add</span>
            Add Property
          </button>
        </div>

        <div className="overflow-x-auto rounded-xl border border-white/10">
          <table className="w-full text-left text-sm text-slate-200">
            <thead className="bg-white/5 text-xs text-slate-300 font-mono uppercase backdrop-blur-md">
              <tr>
                <th className="p-3.5">Property / Unit</th>
                <th className="p-3.5">District</th>
                <th className="p-3.5">Type</th>
                <th className="p-3.5">Cost Basis</th>
                <th className="p-3.5">Current Value</th>
                <th className="p-3.5">Monthly Rent</th>
                <th className="p-3.5">Yield</th>
                <th className="p-3.5">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              {properties.map((p) => {
                const gain = p.currentValue - p.purchasePrice;
                const propYield = ((p.monthlyRent * 12) / p.currentValue) * 100;

                return (
                  <tr key={p.id} className="hover:bg-white/10 transition-colors">
                    <td className="p-3.5 font-bold text-white">{p.propertyName}</td>
                    <td className="p-3.5 font-mono text-xs">
                      <span className="px-2.5 py-0.5 rounded-full bg-white/10 text-slate-200 border border-white/15 font-bold">
                        {p.districtId}
                      </span>
                    </td>
                    <td className="p-3.5 text-xs">{p.propertyType}</td>
                    <td className="p-3.5 font-mono text-slate-300">${p.purchasePrice.toLocaleString()}</td>
                    <td className="p-3.5 font-mono font-bold text-white">
                      ${p.currentValue.toLocaleString()}
                      <span className="block text-[10px] text-emerald-400">
                        +${gain.toLocaleString()}
                      </span>
                    </td>
                    <td className="p-3.5 font-mono text-emerald-400 font-bold">
                      ${p.monthlyRent.toLocaleString()}/mo
                    </td>
                    <td className="p-3.5 font-mono text-blue-300 font-bold">{propYield.toFixed(2)}%</td>
                    <td className="p-3.5">
                      <span className="text-xs px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-bold">
                        {p.occupancyStatus}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Property Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="glass-panel border border-white/20 rounded-3xl p-6 w-full max-w-md shadow-2xl space-y-4">
            <h3 className="text-lg font-bold text-white mb-4">Add Asset to Portfolio</h3>

            <form onSubmit={handleAddProperty} className="space-y-4">
              <div>
                <label className="text-xs text-slate-300 block mb-1">Property Name / Unit</label>
                <input
                  type="text"
                  placeholder="e.g. Boulevard Vue #18-01"
                  value={newPropName}
                  onChange={(e) => setNewPropName(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-2 px-3 text-sm text-slate-100 placeholder:text-slate-400 focus:outline-none focus:border-white/30"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs text-slate-300 block mb-1">District</label>
                  <select
                    value={newDistrict}
                    onChange={(e) => setNewDistrict(e.target.value)}
                    className="w-full bg-slate-900 border border-white/10 rounded-xl py-2 px-3 text-sm text-slate-100"
                  >
                    <option value="D9">D9 (Orchard)</option>
                    <option value="D10">D10 (Tanglin)</option>
                    <option value="D15">D15 (East Coast)</option>
                    <option value="D1">D1 (CBD)</option>
                    <option value="D19">D19 (Hougang)</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs text-slate-300 block mb-1">Type</label>
                  <select
                    value={newType}
                    onChange={(e) => setNewType(e.target.value as any)}
                    className="w-full bg-slate-900 border border-white/10 rounded-xl py-2 px-3 text-sm text-slate-100"
                  >
                    <option value="Condo">Condo</option>
                    <option value="Landed">Landed</option>
                    <option value="HDB">HDB</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs text-slate-300 block mb-1">Purchase Price (SGD)</label>
                <input
                  type="number"
                  value={newPurchasePrice}
                  onChange={(e) => setNewPurchasePrice(Number(e.target.value))}
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-2 px-3 text-sm font-mono text-slate-100"
                />
              </div>

              <div>
                <label className="text-xs text-slate-300 block mb-1">Current Estimated Value (SGD)</label>
                <input
                  type="number"
                  value={newCurrentValue}
                  onChange={(e) => setNewCurrentValue(Number(e.target.value))}
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-2 px-3 text-sm font-mono text-slate-100"
                />
              </div>

              <div>
                <label className="text-xs text-slate-300 block mb-1">Monthly Rent (SGD)</label>
                <input
                  type="number"
                  value={newMonthlyRent}
                  onChange={(e) => setNewMonthlyRent(Number(e.target.value))}
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-2 px-3 text-sm font-mono text-slate-100"
                />
              </div>

              <div className="flex justify-end gap-2 pt-4 border-t border-white/10">
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  className="px-4 py-2 text-xs font-semibold text-slate-300 hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-white text-slate-950 text-xs font-bold uppercase tracking-wider rounded-full hover:bg-slate-200"
                >
                  Save Asset
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
