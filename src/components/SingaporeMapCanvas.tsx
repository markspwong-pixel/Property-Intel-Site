import React, { useState } from 'react';
import { DistrictData } from '../types';

interface SingaporeMapCanvasProps {
  districts: DistrictData[];
  selectedDistrictId: string;
  onSelectDistrict: (districtId: string) => void;
}

export const SingaporeMapCanvas: React.FC<SingaporeMapCanvasProps> = ({
  districts,
  selectedDistrictId,
  onSelectDistrict,
}) => {
  const [hoveredDistrict, setHoveredDistrict] = useState<DistrictData | null>(null);
  const [mapMetric, setMapMetric] = useState<'score' | 'yield' | 'volume'>('score');

  const selectedDistrict = districts.find((d) => d.id === selectedDistrictId) || districts[0];
  const activeTooltipDistrict = hoveredDistrict || selectedDistrict;

  // Color mapper based on score or yield
  const getDistrictColor = (district: DistrictData) => {
    const isSelected = district.id === selectedDistrictId;
    if (mapMetric === 'score') {
      if (district.score >= 8.5) return isSelected ? '#10b981' : 'rgba(16, 185, 129, 0.7)';
      if (district.score >= 7.8) return isSelected ? '#0d9488' : 'rgba(13, 148, 136, 0.6)';
      if (district.score >= 7.2) return isSelected ? '#2563eb' : 'rgba(37, 99, 235, 0.5)';
      return isSelected ? '#f59e0b' : 'rgba(245, 158, 11, 0.4)';
    } else if (mapMetric === 'yield') {
      if (district.avgRentalYield >= 4.2) return isSelected ? '#10b981' : 'rgba(16, 185, 129, 0.7)';
      if (district.avgRentalYield >= 3.8) return isSelected ? '#3b82f6' : 'rgba(59, 130, 246, 0.6)';
      return isSelected ? '#818cf8' : 'rgba(129, 140, 248, 0.4)';
    } else {
      if (district.transactionVolume30d > 180) return isSelected ? '#10b981' : 'rgba(16, 185, 129, 0.7)';
      if (district.transactionVolume30d > 120) return isSelected ? '#2563eb' : 'rgba(37, 99, 235, 0.6)';
      return isSelected ? '#636e83' : 'rgba(99, 110, 131, 0.5)';
    }
  };

  return (
    <div className="data-card rounded-xl relative overflow-hidden flex flex-col h-full min-h-[480px]">
      {/* Header bar */}
      <div className="p-4 border-b border-white/10 flex flex-wrap justify-between items-center bg-white/5 gap-3">
        <div>
          <h3 className="font-bold text-lg text-white tracking-tight">
            Investment Attractiveness Heatmap
          </h3>
          <p className="text-slate-300 text-xs mt-0.5">
            Based on composite yield, transaction volume, and 5Y growth projections.
          </p>
        </div>

        {/* Legend & Metric Switcher */}
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-1.5 text-xs bg-slate-950/40 p-1 rounded-xl border border-white/10 backdrop-blur-md">
            <button
              onClick={() => setMapMetric('score')}
              className={`px-3 py-1 rounded-lg font-bold transition-all ${
                mapMetric === 'score' ? 'bg-white text-slate-950 shadow' : 'text-slate-300 hover:text-white'
              }`}
            >
              Score
            </button>
            <button
              onClick={() => setMapMetric('yield')}
              className={`px-3 py-1 rounded-lg font-bold transition-all ${
                mapMetric === 'yield' ? 'bg-white text-slate-950 shadow' : 'text-slate-300 hover:text-white'
              }`}
            >
              Yield
            </button>
            <button
              onClick={() => setMapMetric('volume')}
              className={`px-3 py-1 rounded-lg font-bold transition-all ${
                mapMetric === 'volume' ? 'bg-white text-slate-950 shadow' : 'text-slate-300 hover:text-white'
              }`}
            >
              Volume
            </button>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono">
            <span className="text-rose-400 font-bold">Low</span>
            <div className="w-28 h-2 rounded-full bg-gradient-to-r from-rose-500 via-blue-500 to-emerald-400 border border-white/20" />
            <span className="text-emerald-400 font-bold">High</span>
          </div>
        </div>
      </div>

      {/* SVG Map Canvas View */}
      <div className="flex-1 relative bg-slate-950/40 flex items-center justify-center p-4 overflow-hidden backdrop-blur-md">
        {/* Background Grid Lines */}
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.15)_1px,transparent_1px)] [background-size:16px_16px] opacity-40 pointer-events-none" />

        <svg
          viewBox="0 0 800 450"
          className="w-full h-full max-h-[380px] drop-shadow-2xl select-none"
        >
          {/* Main Singapore Island Outline Backdrop */}
          <path
            d="M 60,250 C 90,210 150,170 230,150 C 310,130 420,110 520,120 C 620,130 720,160 760,210 C 780,240 760,280 720,310 C 680,340 620,360 540,360 C 440,370 320,380 220,350 C 130,320 70,290 60,250 Z"
            fill="#050b18"
            stroke="rgba(255, 255, 255, 0.2)"
            strokeWidth="2"
            strokeDasharray="4 4"
          />

          {/* District Polygons */}
          {districts.map((d) => {
            const isSelected = d.id === selectedDistrictId;
            const isHovered = hoveredDistrict?.id === d.id;
            const fillColor = getDistrictColor(d);

            return (
              <g key={d.id} className="cursor-pointer transition-all duration-200">
                <path
                  d={d.svgPathD}
                  fill={fillColor}
                  stroke={isSelected ? '#10b981' : isHovered ? '#b4c5ff' : '#434655'}
                  strokeWidth={isSelected ? '3' : isHovered ? '2' : '1'}
                  className="transition-all duration-300 hover:brightness-125"
                  onClick={() => onSelectDistrict(d.id)}
                  onMouseEnter={() => setHoveredDistrict(d)}
                  onMouseLeave={() => setHoveredDistrict(null)}
                />

                {/* District Label Tag */}
                <text
                  x={d.labelPos.x}
                  y={d.labelPos.y}
                  textAnchor="middle"
                  dominantBaseline="central"
                  fill={isSelected ? '#ffffff' : '#d4e4fa'}
                  fontSize={isSelected ? '12' : '10'}
                  fontWeight={isSelected ? '800' : '600'}
                  pointerEvents="none"
                  className="font-mono"
                >
                  {d.id}
                </text>
              </g>
            );
          })}
        </svg>

        {/* Floating Overlay Data Tooltip (Exactly as designed in screenshot mockup) */}
        <div className="absolute top-12 left-1/2 transform -translate-x-1/2 glass-panel p-3.5 rounded-lg shadow-2xl border-l-4 border-[#10b981] pointer-events-none transition-all duration-200 min-w-[210px]">
          <div className="flex items-center justify-between gap-2">
            <p className="font-bold text-[#d4e4fa] text-sm tracking-tight">
              {activeTooltipDistrict.name} ({activeTooltipDistrict.shortName})
            </p>
            <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#10b981]/20 text-[#10b981] font-bold border border-[#10b981]/40">
              {activeTooltipDistrict.region}
            </span>
          </div>

          <div className="flex items-center justify-between mt-2 pt-2 border-t border-[#434655]/40 text-xs">
            <span className="text-[#c3c6d7]">Score:</span>
            <span className="text-[#10b981] font-mono font-bold text-sm">
              {activeTooltipDistrict.score.toFixed(1)} / 10
            </span>
          </div>

          <div className="flex items-center justify-between mt-1 text-xs">
            <span className="text-[#c3c6d7]">Avg Rental Yield:</span>
            <span className="text-[#b4c5ff] font-mono font-semibold">
              {activeTooltipDistrict.avgRentalYield}%
            </span>
          </div>
        </div>

        {/* Interactive Map Region Indicator Label */}
        <div className="absolute bottom-4 left-4 flex items-center gap-2 text-xs text-[#8d90a0] font-mono bg-[#051424]/80 px-3 py-1.5 rounded-md border border-[#273647]">
          <span className="material-symbols-outlined text-[18px] text-[#2563eb]">map</span>
          <span>Interactive Vector Map (28 Singapore Districts)</span>
        </div>
      </div>
    </div>
  );
};
