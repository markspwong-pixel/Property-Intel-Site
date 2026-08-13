import React, { useState } from 'react';
import { SentimentAlert, DistrictData } from '../types';

interface KeyAnalyticsRowProps {
  alerts: SentimentAlert[];
  selectedDistrict: DistrictData;
  onSelectDistrict: (districtId: string) => void;
  onOpenAffordabilityModal: () => void;
  onOpenReturnsModal: () => void;
}

export const KeyAnalyticsRow: React.FC<KeyAnalyticsRowProps> = ({
  alerts,
  selectedDistrict,
  onSelectDistrict,
  onOpenAffordabilityModal,
  onOpenReturnsModal,
}) => {
  const [returnTimeframe, setReturnTimeframe] = useState<'10Y' | '5Y' | '20Y'>('10Y');

  // Return rates based on timeframe
  const returnsData = {
    '5Y': { prop: '7.4%', sti: '5.2%', bond: '2.9%', propWidth: '80%', stiWidth: '55%', bondWidth: '30%' },
    '10Y': { prop: '6.8%', sti: '4.1%', bond: '3.2%', propWidth: '75%', stiWidth: '45%', bondWidth: '35%' },
    '20Y': { prop: '8.2%', sti: '4.8%', bond: '2.8%', propWidth: '90%', stiWidth: '50%', bondWidth: '28%' },
  }[returnTimeframe];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* 1. Affordability Index Card */}
      <div
        onClick={onOpenAffordabilityModal}
        className="data-card p-5 rounded-2xl flex flex-col relative overflow-hidden group cursor-pointer hover:border-white/30 transition-all shadow-xl"
      >
        <div className="absolute top-0 right-0 p-4 text-white/5 group-hover:text-blue-400/20 transition-colors pointer-events-none">
          <span className="material-symbols-outlined text-[64px]">account_balance</span>
        </div>

        <h4 className="text-slate-300 text-xs font-semibold uppercase tracking-wider mb-4">
          Affordability Index
        </h4>

        <div className="flex-1">
          <p className="text-white text-4xl font-extrabold mb-1.5 tracking-tight font-mono">
            {selectedDistrict.affordabilityIndex}x
          </p>
          <p className="text-slate-300 text-xs leading-relaxed max-w-[88%]">
            Median property price in {selectedDistrict.name} is currently {selectedDistrict.affordabilityIndex} times the median annual household income.
          </p>
        </div>

        <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono">
          <span className="text-slate-400">Vs. Hong Kong (21.5x)</span>
          <span className="text-emerald-400 font-bold bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
            More Afford.
          </span>
        </div>
      </div>

      {/* 2. Market Sentiment Alerts Card */}
      <div className="data-card p-5 rounded-2xl flex flex-col relative overflow-hidden">
        <h4 className="text-slate-300 text-xs font-semibold uppercase tracking-wider mb-4 flex justify-between items-center">
          <span>Market Sentiment Alerts</span>
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-400"></span>
          </span>
        </h4>

        <div className="flex-1 space-y-3 overflow-y-auto max-h-[160px] pr-1">
          {alerts.map((alert) => {
            const isPositive = alert.type === 'positive';
            return (
              <div
                key={alert.id}
                onClick={() => onSelectDistrict(alert.districtId)}
                className={`p-2.5 rounded-xl border-l-4 cursor-pointer transition-all duration-200 hover:translate-x-1 flex justify-between items-center ${
                  isPositive
                    ? 'bg-white/5 border-emerald-400 hover:bg-white/10'
                    : 'bg-white/5 border-rose-500 hover:bg-white/10'
                }`}
              >
                <div>
                  <p className="text-sm font-bold text-white">{alert.districtName}</p>
                  <p className="text-[11px] text-slate-300 mt-0.5">{alert.subTitle}</p>
                </div>
                <span
                  className={`material-symbols-outlined text-[20px] ${
                    isPositive ? 'text-emerald-400' : 'text-rose-400'
                  }`}
                >
                  {isPositive ? 'trending_up' : 'trending_down'}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* 3. Historical Comparison Card */}
      <div className="data-card p-5 rounded-2xl flex flex-col">
        <div className="flex justify-between items-center mb-4">
          <h4 className="text-slate-300 text-xs font-semibold uppercase tracking-wider">
            Returns: Prop vs STI ({returnTimeframe})
          </h4>
          <div className="flex items-center gap-1 text-[10px] font-mono bg-slate-950/40 p-0.5 rounded-xl border border-white/10">
            {(['5Y', '10Y', '20Y'] as const).map((tf) => (
              <button
                key={tf}
                onClick={() => setReturnTimeframe(tf)}
                className={`px-2 py-0.5 rounded-lg font-bold transition-all ${
                  returnTimeframe === tf ? 'bg-white text-slate-950 shadow' : 'text-slate-400 hover:text-white'
                }`}
              >
                {tf}
              </button>
            ))}
          </div>
        </div>

        <div className="flex-1 flex flex-col justify-center">
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-1.5">
                <span className="text-slate-200 font-medium">SG Property (Private)</span>
                <span className="text-emerald-400 font-mono font-bold">{returnsData.prop} p.a.</span>
              </div>
              <div className="w-full bg-slate-950/40 rounded-full h-2 overflow-hidden border border-white/10">
                <div
                  className="bg-blue-400 h-full rounded-full transition-all duration-500 shadow-md shadow-blue-500/30"
                  style={{ width: returnsData.propWidth }}
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm mb-1.5">
                <span className="text-slate-300">STI Index</span>
                <span className="text-slate-300 font-mono font-semibold">{returnsData.sti} p.a.</span>
              </div>
              <div className="w-full bg-slate-950/40 rounded-full h-2 overflow-hidden border border-white/10">
                <div
                  className="bg-white/30 h-full rounded-full transition-all duration-500"
                  style={{ width: returnsData.stiWidth }}
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm mb-1.5">
                <span className="text-slate-300">SG 10Y Bond</span>
                <span className="text-slate-300 font-mono font-semibold">{returnsData.bond} p.a.</span>
              </div>
              <div className="w-full bg-slate-950/40 rounded-full h-2 overflow-hidden border border-white/10">
                <div
                  className="bg-white/15 h-full rounded-full transition-all duration-500"
                  style={{ width: returnsData.bondWidth }}
                />
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={onOpenReturnsModal}
          className="mt-3 text-right text-xs text-blue-400 hover:underline font-mono"
        >
          View Full Asset Benchmark &rarr;
        </button>
      </div>
    </div>
  );
};
