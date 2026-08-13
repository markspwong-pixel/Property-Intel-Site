import React from 'react';
import { DistrictData } from '../types';
import { DisqusForum } from './DisqusForum';

interface OverviewViewProps {
  districts: DistrictData[];
  onSelectDistrict: (districtId: string) => void;
}

export const OverviewView: React.FC<OverviewViewProps> = ({ districts, onSelectDistrict }) => {
  // Top yield districts
  const topYieldDistricts = [...districts].sort((a, b) => b.avgRentalYield - a.avgRentalYield).slice(0, 5);

  return (
    <div className="space-y-6">
      {/* Macro Indicators Header Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="data-card p-4 rounded-2xl border border-white/10 shadow-xl">
          <p className="text-xs text-slate-300 font-semibold uppercase tracking-wider">URA Property Price Index</p>
          <div className="flex items-baseline justify-between mt-2">
            <span className="text-2xl font-mono font-extrabold text-white">201.4</span>
            <span className="text-xs font-mono text-emerald-400 font-bold flex items-center">
              <span className="material-symbols-outlined text-[16px]">trending_up</span> +1.8% QoQ
            </span>
          </div>
          <p className="text-[11px] text-slate-400 mt-1">Base year 2018 = 100</p>
        </div>

        <div className="data-card p-4 rounded-2xl border border-white/10 shadow-xl">
          <p className="text-xs text-slate-300 font-semibold uppercase tracking-wider">30D Total Volume</p>
          <div className="flex items-baseline justify-between mt-2">
            <span className="text-2xl font-mono font-extrabold text-white">$2.48B</span>
            <span className="text-xs font-mono text-emerald-400 font-bold flex items-center">
              <span className="material-symbols-outlined text-[16px]">trending_up</span> +5.2% MoM
            </span>
          </div>
          <p className="text-[11px] text-slate-400 mt-1">Private & HDB resale combined</p>
        </div>

        <div className="data-card p-4 rounded-2xl border border-white/10 shadow-xl">
          <p className="text-xs text-slate-300 font-semibold uppercase tracking-wider">Avg Mortgage Fixed Rate</p>
          <div className="flex items-baseline justify-between mt-2">
            <span className="text-2xl font-mono font-extrabold text-blue-300">3.40%</span>
            <span className="text-xs font-mono text-emerald-400 font-bold flex items-center">
              <span className="material-symbols-outlined text-[16px]">trending_down</span> -0.15% MoM
            </span>
          </div>
          <p className="text-[11px] text-slate-400 mt-1">3-Year fixed average package</p>
        </div>

        <div className="data-card p-4 rounded-2xl border border-white/10 shadow-xl">
          <p className="text-xs text-slate-300 font-semibold uppercase tracking-wider">Highest District Yield</p>
          <div className="flex items-baseline justify-between mt-2">
            <span className="text-2xl font-mono font-extrabold text-emerald-400">4.6%</span>
            <span className="text-xs font-mono text-slate-200 font-bold">D19 (Hougang)</span>
          </div>
          <p className="text-[11px] text-slate-400 mt-1">Rental gross yield benchmark</p>
        </div>
      </div>

      {/* Top Performing Districts & Market Heat Leaderboard */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-8 data-card p-5 rounded-2xl border border-white/10 shadow-xl overflow-hidden">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h3 className="font-bold text-lg text-white">Singapore Districts Performance Ranking</h3>
              <p className="text-xs text-slate-300 mt-0.5">Click any district to inspect district trends & data</p>
            </div>
            <span className="text-xs font-mono text-blue-400 font-bold">28 Total Districts</span>
          </div>

          <div className="overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full text-left text-sm">
              <thead className="bg-white/5 text-xs text-slate-300 font-mono uppercase backdrop-blur-md">
                <tr>
                  <th className="p-3">District</th>
                  <th className="p-3">Region</th>
                  <th className="p-3">Score</th>
                  <th className="p-3">Yield</th>
                  <th className="p-3">Median PSF</th>
                  <th className="p-3">30D Volume</th>
                  <th className="p-3">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {districts.map((d) => (
                  <tr key={d.id} className="hover:bg-white/10 transition-colors">
                    <td className="p-3 font-semibold text-white">
                      {d.name} <span className="text-xs text-slate-400">({d.shortName})</span>
                    </td>
                    <td className="p-3">
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-white/10 text-slate-200 border border-white/15">
                        {d.region}
                      </span>
                    </td>
                    <td className="p-3 font-mono font-bold text-emerald-400">{d.score}</td>
                    <td className="p-3 font-mono text-blue-300 font-bold">{d.avgRentalYield}%</td>
                    <td className="p-3 font-mono text-slate-200">${d.medianPsf.toLocaleString()}</td>
                    <td className="p-3 font-mono text-slate-200">{d.transactionVolume30d}</td>
                    <td className="p-3">
                      <button
                        onClick={() => onSelectDistrict(d.id)}
                        className="text-xs bg-white text-slate-950 hover:bg-slate-200 font-bold px-3 py-1 rounded-full transition-all shadow"
                      >
                        Inspect
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Rental Yield Leaderboard */}
        <div className="lg:col-span-4 data-card p-5 rounded-2xl border border-white/10 shadow-xl">
          <h3 className="font-bold text-lg text-white mb-4">Top Gross Rental Yields</h3>

          <div className="space-y-3">
            {topYieldDistricts.map((d, index) => (
              <div
                key={d.id}
                onClick={() => onSelectDistrict(d.id)}
                className="p-3.5 rounded-xl bg-white/5 border border-white/10 hover:border-emerald-400/50 hover:bg-white/10 transition-all cursor-pointer flex justify-between items-center group backdrop-blur-md"
              >
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 font-mono text-xs font-bold flex items-center justify-center border border-emerald-500/30">
                    #{index + 1}
                  </span>
                  <div>
                    <p className="font-bold text-sm text-white group-hover:text-emerald-400 transition-colors">
                      {d.name} ({d.shortName})
                    </p>
                    <p className="text-xs text-slate-400">{d.subregions.slice(0, 24)}...</p>
                  </div>
                </div>
                <div className="text-right font-mono">
                  <p className="text-base font-bold text-emerald-400">{d.avgRentalYield}%</p>
                  <p className="text-[10px] text-slate-400">${d.medianPsf} PSF</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Discussion Forum under Overview Section */}
      <DisqusForum
        pageIdentifier="propintel-singapore-overview"
        title="Singapore Real Estate Macro Overview Discussion"
      />
    </div>
  );
};
