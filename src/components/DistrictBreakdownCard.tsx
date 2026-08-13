import React, { useState } from 'react';
import { DistrictData } from '../types';

interface DistrictBreakdownCardProps {
  district: DistrictData;
  onOpenDeepDive: (district: DistrictData) => void;
}

export const DistrictBreakdownCard: React.FC<DistrictBreakdownCardProps> = ({
  district,
  onOpenDeepDive,
}) => {
  const [hoveredBarIndex, setHoveredBarIndex] = useState<number | null>(null);

  // Calculate max PSF for chart scaling
  const maxPsf = Math.max(...district.priceTrend20y.map((p) => p.psf));

  return (
    <div className="data-card rounded-xl flex flex-col h-full overflow-hidden">
      {/* Header */}
      <div className="p-4 border-b border-white/10 bg-white/5">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-bold text-xl text-white flex items-center gap-2 tracking-tight">
              {district.name}
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-white/10 text-blue-300 border border-white/20 tracking-wider">
                SELECTED
              </span>
            </h3>
            <p className="text-slate-300 text-sm mt-0.5">{district.subregions}</p>
          </div>
          <button
            onClick={() => onOpenDeepDive(district)}
            className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors"
            title="District options & details"
          >
            <span className="material-symbols-outlined text-[20px]">more_vert</span>
          </button>
        </div>
      </div>

      {/* Metrics Body */}
      <div className="p-5 flex-1 overflow-y-auto space-y-6">
        {/* Metric 1: Rental Yield */}
        <div>
          <p className="text-slate-300 text-xs uppercase tracking-wider mb-2 font-semibold">
            Avg. Rental Yield
          </p>
          <div className="flex items-end gap-3">
            <span className="text-4xl font-black text-white tracking-tight leading-none">
              {district.avgRentalYield}%
            </span>
            <span className="flex items-center text-emerald-400 text-sm font-mono pb-1 font-bold">
              <span className="material-symbols-outlined text-[16px] mr-0.5">trending_up</span>
              {district.yieldYoy >= 0 ? `+${district.yieldYoy}%` : `${district.yieldYoy}%`} YoY
            </span>
          </div>
        </div>

        <hr className="border-white/10" />

        {/* Metric 2: Transaction Volume */}
        <div>
          <p className="text-slate-300 text-xs uppercase tracking-wider mb-2 font-semibold">
            Transaction Volume (30D)
          </p>
          <div className="flex items-end gap-3">
            <span className="text-3xl font-extrabold text-white tracking-tight leading-none">
              {district.transactionVolume30d}
            </span>
            <span
              className={`flex items-center text-sm font-mono pb-1 font-bold ${
                district.volumeMom >= 0 ? 'text-emerald-400' : 'text-rose-400'
              }`}
            >
              <span className="material-symbols-outlined text-[16px] mr-0.5">
                {district.volumeMom >= 0 ? 'trending_up' : 'trending_down'}
              </span>
              {district.volumeMom >= 0 ? `+${district.volumeMom}%` : `${district.volumeMom}%`} MoM
            </span>
          </div>
        </div>

        <hr className="border-white/10" />

        {/* Metric 3: Price Trend 20Y PSF */}
        <div>
          <p className="text-slate-300 text-xs uppercase tracking-wider mb-3 font-semibold">
            Price Trend (20Y PSF)
          </p>

          <div className="h-28 w-full relative pt-4">
            {/* Bars container */}
            <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between h-20 px-1 gap-1.5">
              {district.priceTrend20y.map((point, index) => {
                const heightPercent = Math.max(20, Math.round((point.psf / maxPsf) * 100));
                const isHovered = hoveredBarIndex === index;

                return (
                  <div
                    key={point.year}
                    className="w-full relative group h-full flex items-end cursor-pointer"
                    onMouseEnter={() => setHoveredBarIndex(index)}
                    onMouseLeave={() => setHoveredBarIndex(null)}
                  >
                    {/* Hover tooltip */}
                    {isHovered && (
                      <div className="absolute -top-7 left-1/2 -translate-x-1/2 glass-panel text-white text-[10px] font-mono font-bold px-2 py-0.5 rounded-md border border-white/30 shadow-xl whitespace-nowrap z-20">
                        {point.year}: ${point.psf.toLocaleString()} PSF
                      </div>
                    )}

                    <div
                      style={{ height: `${heightPercent}%` }}
                      className={`w-full rounded-t-sm transition-all duration-200 ${
                        index === district.priceTrend20y.length - 1
                          ? 'bg-blue-400 group-hover:bg-blue-300 shadow-md shadow-blue-500/20'
                          : isHovered
                          ? 'bg-white/60'
                          : 'bg-blue-500/30 group-hover:bg-blue-400/50'
                      }`}
                    />
                  </div>
                );
              })}
            </div>

            <div className="absolute bottom-0 left-0 right-0 border-b border-white/10" />
          </div>

          <div className="flex justify-between text-[11px] text-slate-400 mt-2 font-mono">
            <span>2004 (${district.priceTrend20y[0]?.psf.toLocaleString()} PSF)</span>
            <span>2024 (${district.priceTrend20y[district.priceTrend20y.length - 1]?.psf.toLocaleString()} PSF)</span>
          </div>
        </div>

        {/* Deep Dive Action Button */}
        <button
          onClick={() => onOpenDeepDive(district)}
          className="w-full py-3 px-4 glass-panel border border-white/20 hover:border-blue-400/50 hover:bg-white/10 text-white rounded-xl font-bold text-xs uppercase tracking-widest transition-all duration-200 mt-4 flex items-center justify-center gap-2 group active:scale-[0.98] shadow-lg shadow-black/20"
        >
          <span>View Deep Dive Analysis</span>
          <span className="material-symbols-outlined text-[18px] text-blue-400 group-hover:translate-x-1 transition-transform">
            arrow_forward
          </span>
        </button>
      </div>
    </div>
  );
};
