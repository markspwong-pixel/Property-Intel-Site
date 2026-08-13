import React, { useState } from 'react';

export const AnalyticsView: React.FC = () => {
  const [loanAmount, setLoanAmount] = useState(2000000);
  const [tenureYears, setTenureYears] = useState(30);

  // Interest rate steps for sensitivity matrix
  const rates = [2.5, 3.0, 3.5, 4.0, 4.5];

  const calculateMortgage = (amount: number, rate: number, years: number) => {
    const monthlyRate = rate / 100 / 12;
    const totalMonths = years * 12;
    if (monthlyRate === 0) return amount / totalMonths;
    return (amount * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) / (Math.pow(1 + monthlyRate, totalMonths) - 1);
  };

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="data-card p-6 rounded-2xl border border-white/10 flex justify-between items-center shadow-xl">
        <div>
          <h2 className="text-xl font-bold text-white">Institutional Property Analytics</h2>
          <p className="text-xs text-slate-300 mt-1">
            Supply pipeline forecasts, mortgage sensitivity matrices, and buyer tax breakdown.
          </p>
        </div>
        <div className="text-right font-mono text-xs text-emerald-400 font-bold">
          <span className="material-symbols-outlined align-middle mr-1 text-[18px]">verified</span>
          URA Master Plan 2026 Aligned
        </div>
      </div>

      {/* Grid Row 1: Supply Pipeline (2024-2028) & Foreign Buyer Duty */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Supply Pipeline Card */}
        <div className="data-card p-5 rounded-2xl border border-white/10 shadow-xl">
          <h3 className="font-bold text-lg text-white mb-4 flex justify-between items-center">
            <span>Singapore New Private Supply Pipeline (Units)</span>
            <span className="text-xs font-mono text-blue-300 font-bold">2024 - 2028 TOP</span>
          </h3>

          <div className="space-y-4">
            {[
              { year: '2024', ccr: 3200, rcr: 4800, ocr: 5100, total: 13100 },
              { year: '2025', ccr: 2800, rcr: 3900, ocr: 4200, total: 10900 },
              { year: '2026', ccr: 1900, rcr: 3100, ocr: 3800, total: 8800 },
              { year: '2027', ccr: 2200, rcr: 3500, ocr: 4500, total: 10200 },
              { year: '2028 (Proj)', ccr: 1500, rcr: 2900, ocr: 3600, total: 8000 },
            ].map((s) => (
              <div key={s.year} className="bg-white/5 p-3.5 rounded-xl border border-white/10 backdrop-blur-md">
                <div className="flex justify-between text-xs font-mono mb-1.5">
                  <span className="text-white font-bold">Year {s.year}</span>
                  <span className="text-emerald-400 font-bold">{s.total.toLocaleString()} Units</span>
                </div>
                <div className="w-full bg-slate-950/40 h-2.5 rounded-full overflow-hidden flex border border-white/10">
                  <div
                    className="bg-blue-400 h-full"
                    style={{ width: `${(s.ccr / s.total) * 100}%` }}
                    title={`CCR: ${s.ccr}`}
                  />
                  <div
                    className="bg-indigo-300 h-full"
                    style={{ width: `${(s.rcr / s.total) * 100}%` }}
                    title={`RCR: ${s.rcr}`}
                  />
                  <div
                    className="bg-emerald-400 h-full"
                    style={{ width: `${(s.ocr / s.total) * 100}%` }}
                    title={`OCR: ${s.ocr}`}
                  />
                </div>
                <div className="flex justify-between text-[10px] text-slate-400 mt-1 font-mono">
                  <span>CCR: {s.ccr}</span>
                  <span>RCR: {s.rcr}</span>
                  <span>OCR: {s.ocr}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Buyer Stamp Duty (ABSD) Matrix Card */}
        <div className="data-card p-5 rounded-2xl border border-white/10 shadow-xl flex flex-col justify-between">
          <div>
            <h3 className="font-bold text-lg text-white mb-4">
              Additional Buyer's Stamp Duty (ABSD) Reference
            </h3>

            <div className="overflow-x-auto rounded-xl border border-white/10">
              <table className="w-full text-left text-xs font-mono">
                <thead className="bg-white/5 text-slate-300 uppercase backdrop-blur-md">
                  <tr>
                    <th className="p-3">Buyer Profile</th>
                    <th className="p-3">1st Property</th>
                    <th className="p-3">2nd Property</th>
                    <th className="p-3">3rd+ Property</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10 text-slate-200">
                  <tr>
                    <td className="p-3 font-bold text-blue-300">Singapore Citizen</td>
                    <td className="p-3 text-emerald-400 font-bold">0%</td>
                    <td className="p-3">20%</td>
                    <td className="p-3 text-rose-400 font-bold">30%</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-blue-300">Permanent Resident (PR)</td>
                    <td className="p-3">5%</td>
                    <td className="p-3">30%</td>
                    <td className="p-3 text-rose-400 font-bold">35%</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-blue-300">Foreigner (Non-PR)</td>
                    <td className="p-3 text-rose-400 font-bold">60%</td>
                    <td className="p-3 text-rose-400 font-bold">60%</td>
                    <td className="p-3 text-rose-400 font-bold">60%</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-blue-300">Entities / Trusts</td>
                    <td className="p-3 text-rose-400 font-bold">65%</td>
                    <td className="p-3 text-rose-400 font-bold">65%</td>
                    <td className="p-3 text-rose-400 font-bold">65%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <p className="text-xs text-slate-400 mt-4 italic">
            *US Citizens & Iceland/Liechtenstein/Norway/Switzerland nationals qualify for Citizen rate under FTA treaties.
          </p>
        </div>
      </div>

      {/* Row 2: Interest Rate Sensitivity Matrix */}
      <div className="data-card p-6 rounded-2xl border border-white/10 shadow-xl">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h3 className="font-bold text-lg text-white">Mortgage Payment Sensitivity Matrix</h3>
            <p className="text-xs text-slate-300 mt-0.5">
              Simulate monthly debt servicing across interest rate shifts
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-300 font-mono">Loan Amount:</span>
              <select
                value={loanAmount}
                onChange={(e) => setLoanAmount(Number(e.target.value))}
                className="bg-slate-900 border border-white/10 text-xs font-mono rounded-xl text-slate-100 py-1 px-2.5 focus:outline-none"
              >
                <option value={1000000}>$1,000,000 SGD</option>
                <option value={2000000}>$2,000,000 SGD</option>
                <option value={3000000}>$3,000,000 SGD</option>
                <option value={5000000}>$5,000,000 SGD</option>
              </select>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
          {rates.map((rate) => {
            const monthly = calculateMortgage(loanAmount, rate, tenureYears);
            return (
              <div
                key={rate}
                className={`p-4 rounded-xl border text-center font-mono transition-all ${
                  rate === 3.5
                    ? 'bg-blue-500/20 border-blue-400 shadow-lg shadow-blue-500/10'
                    : 'bg-white/5 border-white/10 hover:border-white/20'
                }`}
              >
                <p className="text-xs text-slate-400">Fixed Rate</p>
                <p className="text-lg font-bold text-blue-300 mt-1">{rate}%</p>
                <p className="text-base font-extrabold text-white mt-2">
                  ${Math.round(monthly).toLocaleString()}
                </p>
                <p className="text-[10px] text-slate-400">per month ({tenureYears} yrs)</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
