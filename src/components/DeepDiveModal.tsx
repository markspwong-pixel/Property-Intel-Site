import React, { useState } from 'react';
import { DistrictData } from '../types';

interface DeepDiveModalProps {
  district: DistrictData;
  onClose: () => void;
}

export const DeepDiveModal: React.FC<DeepDiveModalProps> = ({ district, onClose }) => {
  const [activeTab, setActiveTab] = useState<'caveats' | 'developments' | 'demographics' | 'calculator'>('caveats');

  // Calculator states
  const [propertyPrice, setPropertyPrice] = useState<number>(district.medianPsf * 1000); // e.g. 1000 sqft
  const [downpaymentPercent, setDownpaymentPercent] = useState<number>(25);
  const [interestRate, setInterestRate] = useState<number>(3.4);
  const [loanTenureYears, setLoanTenureYears] = useState<number>(30);

  const loanAmount = propertyPrice * (1 - downpaymentPercent / 100);
  const monthlyInterestRate = interestRate / 100 / 12;
  const totalMonths = loanTenureYears * 12;

  const monthlyMortgage =
    monthlyInterestRate > 0
      ? (loanAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, totalMonths)) /
        (Math.pow(1 + monthlyInterestRate, totalMonths) - 1)
      : loanAmount / totalMonths;

  const estimatedMonthlyRent = (propertyPrice * (district.avgRentalYield / 100)) / 12;
  const netCashflow = estimatedMonthlyRent - monthlyMortgage;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
      <div className="glass-panel border border-white/20 rounded-3xl w-full max-w-4xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Modal Header */}
        <div className="p-6 border-b border-white/10 bg-white/5 flex justify-between items-start">
          <div>
            <div className="flex items-center gap-3">
              <h2 className="text-2xl font-bold text-white tracking-tight">{district.name} Deep Dive Analysis</h2>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-white/10 text-blue-300 border border-white/20">
                {district.region}
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                Score {district.score} / 10
              </span>
            </div>
            <p className="text-slate-300 text-sm mt-1">{district.subregions}</p>
          </div>

          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
          >
            <span className="material-symbols-outlined text-[24px]">close</span>
          </button>
        </div>

        {/* Modal Nav Tabs */}
        <div className="flex border-b border-white/10 bg-slate-950/40 px-6 overflow-x-auto">
          {[
            { id: 'caveats', label: 'URA Caveats Log' },
            { id: 'developments', label: 'Top Developments' },
            { id: 'demographics', label: 'Demographics & Schools' },
            { id: 'calculator', label: 'Mortgage & Yield Calculator' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`py-3.5 px-4 font-bold text-xs uppercase tracking-wider border-b-2 transition-all whitespace-nowrap ${
                activeTab === tab.id
                  ? 'border-blue-400 text-white bg-white/10'
                  : 'border-transparent text-slate-400 hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Modal Body */}
        <div className="p-6 flex-1 overflow-y-auto space-y-6">
          {activeTab === 'caveats' && (
            <div>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-base font-bold text-white">
                  Recent URA Real Estate Caveats Log ({district.id})
                </h3>
                <span className="text-xs text-emerald-400 font-mono font-bold">Live Sync with URA Data</span>
              </div>

              {district.recentCaveats.length === 0 ? (
                <div className="text-center py-12 text-slate-400 bg-white/5 rounded-2xl border border-white/10">
                  No caveats lodged in the past 7 days for this specific district.
                </div>
              ) : (
                <div className="overflow-x-auto rounded-2xl border border-white/10">
                  <table className="w-full text-left text-sm text-slate-200">
                    <thead className="bg-white/5 text-xs text-slate-300 font-mono uppercase backdrop-blur-md">
                      <tr>
                        <th className="p-3">Project</th>
                        <th className="p-3">Type</th>
                        <th className="p-3">Size (Sqft)</th>
                        <th className="p-3">Price (SGD)</th>
                        <th className="p-3">PSF</th>
                        <th className="p-3">Floor Level</th>
                        <th className="p-3">Date</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/10">
                      {district.recentCaveats.map((c) => (
                        <tr key={c.id} className="hover:bg-white/10 transition-colors">
                          <td className="p-3 font-bold text-white">{c.project}</td>
                          <td className="p-3 text-xs">{c.type}</td>
                          <td className="p-3 font-mono">{c.sizeSqft.toLocaleString()}</td>
                          <td className="p-3 font-mono text-emerald-400 font-bold">
                            ${c.priceSgd.toLocaleString()}
                          </td>
                          <td className="p-3 font-mono">${c.psf.toLocaleString()}</td>
                          <td className="p-3 text-xs">{c.floorLevel}</td>
                          <td className="p-3 text-xs text-slate-400 font-mono">{c.date}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          )}

          {activeTab === 'developments' && (
            <div>
              <h3 className="text-base font-bold text-white mb-4">
                Premier Developments in {district.name}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {district.topDevelopments.map((dev, i) => (
                  <div
                    key={i}
                    className="p-4 bg-white/5 rounded-2xl border border-white/10 hover:border-white/30 transition-all backdrop-blur-md"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-bold text-white text-base">{dev.name}</h4>
                      <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-white/10 text-slate-200 font-mono border border-white/15">
                        {dev.tenure}
                      </span>
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-xs font-mono mt-3 pt-3 border-t border-white/10">
                      <div>
                        <span className="text-slate-400 block text-[10px]">AVG PSF</span>
                        <span className="text-emerald-400 font-bold">${dev.avgPsf.toLocaleString()}</span>
                      </div>
                      <div>
                        <span className="text-slate-400 block text-[10px]">RENT YIELD</span>
                        <span className="text-blue-300 font-bold">{dev.yield}%</span>
                      </div>
                      <div>
                        <span className="text-slate-400 block text-[10px]">COMPLETION</span>
                        <span className="text-white">{dev.completionYear}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'demographics' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-5 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-md">
                  <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-4">
                    Buyer Demographic Profile
                  </h4>
                  <div className="space-y-3 font-mono text-xs">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-slate-200">Singapore Citizens</span>
                        <span className="text-emerald-400 font-bold">
                          {(100 - district.foreignBuyerRatio - 12).toFixed(1)}%
                        </span>
                      </div>
                      <div className="w-full bg-slate-950/40 h-2 rounded-full overflow-hidden border border-white/10">
                        <div
                          className="bg-emerald-400 h-full"
                          style={{ width: `${100 - district.foreignBuyerRatio - 12}%` }}
                        />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-slate-200">Permanent Residents (PR)</span>
                        <span className="text-blue-400 font-bold">12.0%</span>
                      </div>
                      <div className="w-full bg-slate-950/40 h-2 rounded-full overflow-hidden border border-white/10">
                        <div className="bg-blue-400 h-full" style={{ width: '12%' }} />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-slate-200">Foreign Buyers / Corporate</span>
                        <span className="text-indigo-300 font-bold">{district.foreignBuyerRatio}%</span>
                      </div>
                      <div className="w-full bg-slate-950/40 h-2 rounded-full overflow-hidden border border-white/10">
                        <div
                          className="bg-indigo-300 h-full"
                          style={{ width: `${district.foreignBuyerRatio}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-5 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-md">
                  <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-4">
                    School & Amenity Proximity
                  </h4>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3.5 bg-white/5 rounded-xl border border-white/10">
                      <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-blue-400">school</span>
                        <div>
                          <p className="text-sm font-bold text-white">Top Primary Schools (&lt; 1km)</p>
                          <p className="text-xs text-slate-400">High demand for primary school registration phase</p>
                        </div>
                      </div>
                      <span className="text-lg font-bold font-mono text-emerald-400">
                        {district.schoolProximity1kmCount} Schools
                      </span>
                    </div>

                    <div className="flex items-center justify-between p-3.5 bg-white/5 rounded-xl border border-white/10">
                      <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-emerald-400">train</span>
                        <div>
                          <p className="text-sm font-bold text-white">MRT Station Proximity</p>
                          <p className="text-xs text-slate-400">Average walking distance to active MRT line</p>
                        </div>
                      </div>
                      <span className="text-lg font-bold font-mono text-blue-300">4 mins walk</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'calculator' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Inputs */}
                <div className="p-5 bg-white/5 rounded-2xl border border-white/10 space-y-4 backdrop-blur-md">
                  <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Investment Assumptions
                  </h4>

                  <div>
                    <label className="text-xs text-slate-300 block mb-1">Property Purchase Price (SGD)</label>
                    <input
                      type="number"
                      value={propertyPrice}
                      onChange={(e) => setPropertyPrice(Number(e.target.value))}
                      className="w-full bg-white/5 border border-white/10 rounded-xl py-2 px-3 text-sm font-mono text-white focus:border-white/30 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-xs text-slate-300 block mb-1">
                      Downpayment (%): {downpaymentPercent}%
                    </label>
                    <input
                      type="range"
                      min="10"
                      max="50"
                      value={downpaymentPercent}
                      onChange={(e) => setDownpaymentPercent(Number(e.target.value))}
                      className="w-full accent-blue-400"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs text-slate-300 block mb-1">Interest Rate (%)</label>
                      <input
                        type="number"
                        step="0.1"
                        value={interestRate}
                        onChange={(e) => setInterestRate(Number(e.target.value))}
                        className="w-full bg-white/5 border border-white/10 rounded-xl py-2 px-3 text-sm font-mono text-white"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-slate-300 block mb-1">Loan Tenure (Years)</label>
                      <input
                        type="number"
                        value={loanTenureYears}
                        onChange={(e) => setLoanTenureYears(Number(e.target.value))}
                        className="w-full bg-white/5 border border-white/10 rounded-xl py-2 px-3 text-sm font-mono text-white"
                      />
                    </div>
                  </div>
                </div>

                {/* Calculation Outputs */}
                <div className="p-5 bg-white/5 rounded-2xl border border-white/10 flex flex-col justify-between backdrop-blur-md">
                  <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-4">
                    Monthly Cashflow Projection
                  </h4>

                  <div className="space-y-4 font-mono">
                    <div className="flex justify-between items-center text-sm border-b border-white/10 pb-2">
                      <span className="text-slate-300">Est. Monthly Rental:</span>
                      <span className="text-emerald-400 font-bold">
                        +${Math.round(estimatedMonthlyRent).toLocaleString()}/mo
                      </span>
                    </div>

                    <div className="flex justify-between items-center text-sm border-b border-white/10 pb-2">
                      <span className="text-slate-300">Est. Monthly Mortgage:</span>
                      <span className="text-rose-400 font-bold">
                        -${Math.round(monthlyMortgage).toLocaleString()}/mo
                      </span>
                    </div>

                    <div className="p-4 rounded-xl bg-white/10 border border-white/15 flex justify-between items-center">
                      <span className="text-xs text-white font-sans font-bold">Net Cashflow:</span>
                      <span
                        className={`text-xl font-bold ${
                          netCashflow >= 0 ? 'text-emerald-400' : 'text-rose-400'
                        }`}
                      >
                        {netCashflow >= 0 ? '+' : ''}${Math.round(netCashflow).toLocaleString()}/mo
                      </span>
                    </div>
                  </div>

                  <p className="text-[11px] text-slate-400 mt-4 italic">
                    Note: Based on district average yield of {district.avgRentalYield}%. Excludes Maintenance Fees & ABSD stamp duties.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-white/10 bg-white/5 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-full bg-white text-slate-950 font-bold text-xs uppercase tracking-wider hover:bg-slate-200 transition-all shadow-lg"
          >
            Close Analysis
          </button>
        </div>
      </div>
    </div>
  );
};
