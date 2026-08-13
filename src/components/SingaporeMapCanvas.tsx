import React, { useState } from 'react';
import { DistrictData, RegionGroup } from '../types';

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
  const [regionFilter, setRegionFilter] = useState<'ALL' | RegionGroup>('ALL');
  const [mapMetric, setMapMetric] = useState<'score' | 'yield' | 'volume' | 'psf'>('score');

  const selectedDistrict = districts.find((d) => d.id === selectedDistrictId) || districts[0];
  const activeTooltipDistrict = hoveredDistrict || selectedDistrict;

  // Filter districts based on region
  const filteredDistricts = regionFilter === 'ALL'
    ? districts
    : districts.filter((d) => d.region === regionFilter);

  // Region badge styles
  const getRegionBadge = (region: RegionGroup) => {
    switch (region) {
      case 'CCR':
        return 'bg-amber-500/20 text-amber-300 border-amber-500/30';
      case 'RCR':
        return 'bg-blue-500/20 text-blue-300 border-blue-500/30';
      case 'OCR':
        return 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30';
      default:
        return 'bg-slate-500/20 text-slate-300 border-slate-500/30';
    }
  };

  // Color mapper based on selected metric or region
  const getDistrictFill = (district: DistrictData) => {
    const isSelected = district.id === selectedDistrictId;
    const isDimmed = regionFilter !== 'ALL' && district.region !== regionFilter;

    if (isDimmed) return 'rgba(30, 41, 59, 0.3)';

    if (mapMetric === 'score') {
      if (district.score >= 8.5) return isSelected ? '#10b981' : 'rgba(16, 185, 129, 0.7)';
      if (district.score >= 7.8) return isSelected ? '#0d9488' : 'rgba(13, 148, 136, 0.65)';
      if (district.score >= 7.2) return isSelected ? '#2563eb' : 'rgba(37, 99, 235, 0.6)';
      return isSelected ? '#f59e0b' : 'rgba(245, 158, 11, 0.5)';
    } else if (mapMetric === 'yield') {
      if (district.avgRentalYield >= 4.4) return isSelected ? '#10b981' : 'rgba(16, 185, 129, 0.75)';
      if (district.avgRentalYield >= 4.0) return isSelected ? '#3b82f6' : 'rgba(59, 130, 246, 0.65)';
      return isSelected ? '#818cf8' : 'rgba(129, 140, 248, 0.5)';
    } else if (mapMetric === 'volume') {
      if (district.transactionVolume30d >= 180) return isSelected ? '#10b981' : 'rgba(16, 185, 129, 0.75)';
      if (district.transactionVolume30d >= 120) return isSelected ? '#2563eb' : 'rgba(37, 99, 235, 0.65)';
      return isSelected ? '#636e83' : 'rgba(99, 110, 131, 0.5)';
    } else {
      // PSF metric
      if (district.medianPsf >= 2400) return isSelected ? '#f59e0b' : 'rgba(245, 158, 11, 0.75)';
      if (district.medianPsf >= 1900) return isSelected ? '#3b82f6' : 'rgba(59, 130, 246, 0.65)';
      return isSelected ? '#10b981' : 'rgba(16, 185, 129, 0.5)';
    }
  };

  return (
    <div className="data-card rounded-2xl relative overflow-hidden flex flex-col h-full min-h-[560px] border border-white/10 shadow-2xl backdrop-blur-md">
      {/* Top Header Bar */}
      <div className="p-4 border-b border-white/10 flex flex-wrap justify-between items-center bg-white/5 gap-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-blue-400 text-xl">map</span>
            <h3 className="font-bold text-lg text-white tracking-tight">
              Singapore 28 Districts Vector Heatmap
            </h3>
          </div>
          <p className="text-slate-300 text-xs mt-0.5">
            URA Region Classification: CCR (Core Central), RCR (Rest of Central), OCR (Outside Central).
          </p>
        </div>

        {/* Region Filter Buttons & Metric Selectors */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Region Tabs */}
          <div className="flex items-center gap-1 bg-slate-950/60 p-1 rounded-xl border border-white/10 text-xs">
            {(['ALL', 'CCR', 'RCR', 'OCR'] as const).map((reg) => (
              <button
                key={reg}
                onClick={() => setRegionFilter(reg)}
                className={`px-2.5 py-1 rounded-lg font-bold transition-all ${
                  regionFilter === reg
                    ? reg === 'CCR'
                      ? 'bg-amber-500 text-slate-950 shadow'
                      : reg === 'RCR'
                      ? 'bg-blue-500 text-white shadow'
                      : reg === 'OCR'
                      ? 'bg-emerald-500 text-slate-950 shadow'
                      : 'bg-white text-slate-950 shadow'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {reg}
              </button>
            ))}
          </div>

          {/* Metric Switcher */}
          <div className="flex items-center gap-1 bg-slate-950/60 p-1 rounded-xl border border-white/10 text-xs">
            <button
              onClick={() => setMapMetric('score')}
              className={`px-2.5 py-1 rounded-lg font-bold transition-all ${
                mapMetric === 'score' ? 'bg-white text-slate-950 shadow' : 'text-slate-400 hover:text-white'
              }`}
            >
              Score
            </button>
            <button
              onClick={() => setMapMetric('yield')}
              className={`px-2.5 py-1 rounded-lg font-bold transition-all ${
                mapMetric === 'yield' ? 'bg-white text-slate-950 shadow' : 'text-slate-400 hover:text-white'
              }`}
            >
              Yield
            </button>
            <button
              onClick={() => setMapMetric('volume')}
              className={`px-2.5 py-1 rounded-lg font-bold transition-all ${
                mapMetric === 'volume' ? 'bg-white text-slate-950 shadow' : 'text-slate-400 hover:text-white'
              }`}
            >
              Volume
            </button>
            <button
              onClick={() => setMapMetric('psf')}
              className={`px-2.5 py-1 rounded-lg font-bold transition-all ${
                mapMetric === 'psf' ? 'bg-white text-slate-950 shadow' : 'text-slate-400 hover:text-white'
              }`}
            >
              PSF
            </button>
          </div>
        </div>
      </div>

      {/* Main SVG Vector Canvas */}
      <div className="flex-1 relative bg-slate-950/60 flex items-center justify-center p-3 sm:p-5 overflow-hidden">
        {/* Background Radial Mesh */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-950/80 to-slate-950 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)] [background-size:20px_20px] opacity-30 pointer-events-none" />

        <svg
          viewBox="0 0 840 480"
          className="w-full h-full max-h-[440px] drop-shadow-2xl select-none relative z-10"
        >
          {/* Singapore Main Island Coastline Background Shadow */}
          <path
            d="M 40,240 C 70,100 220,50 420,50 C 620,50 780,120 800,240 C 810,320 740,380 620,380 C 480,390 320,430 200,380 C 100,340 30,290 40,240 Z"
            fill="#030712"
            stroke="rgba(255, 255, 255, 0.15)"
            strokeWidth="2"
            strokeDasharray="4 4"
          />

          {/* All 28 District Polygon Vector Paths */}
          {districts.map((d) => {
            const isSelected = d.id === selectedDistrictId;
            const isHovered = hoveredDistrict?.id === d.id;
            const isDimmed = regionFilter !== 'ALL' && d.region !== regionFilter;
            const fill = getDistrictFill(d);

            return (
              <g
                key={d.id}
                className={`transition-all duration-200 ${
                  isDimmed ? 'opacity-30 pointer-events-auto' : 'cursor-pointer opacity-100'
                }`}
                onClick={() => onSelectDistrict(d.id)}
                onMouseEnter={() => setHoveredDistrict(d)}
                onMouseLeave={() => setHoveredDistrict(null)}
              >
                {/* District Shape Path */}
                <path
                  d={d.svgPathD}
                  fill={fill}
                  stroke={
                    isSelected
                      ? '#38bdf8'
                      : isHovered
                      ? '#ffffff'
                      : d.region === 'CCR'
                      ? 'rgba(245, 158, 11, 0.5)'
                      : d.region === 'RCR'
                      ? 'rgba(59, 130, 246, 0.5)'
                      : 'rgba(16, 185, 129, 0.5)'
                  }
                  strokeWidth={isSelected ? '3' : isHovered ? '2.5' : '1.5'}
                  rx="6"
                  className="transition-all duration-200 hover:brightness-125 filter drop-shadow-md"
                />

                {/* District Label text (e.g. D1, D9, D15, D28) */}
                <text
                  x={d.labelPos.x}
                  y={d.labelPos.y}
                  textAnchor="middle"
                  dominantBaseline="central"
                  fill={isSelected ? '#ffffff' : isHovered ? '#ffffff' : '#e2e8f0'}
                  fontSize={isSelected ? '12' : '10'}
                  fontWeight={isSelected || isHovered ? '800' : '700'}
                  pointerEvents="none"
                  className="font-mono tracking-tight"
                >
                  {d.id}
                </text>
              </g>
            );
          })}
        </svg>

        {/* Floating Inspector Card for Active/Hovered District */}
        <div className="absolute top-4 left-4 z-20 glass-panel p-4 rounded-2xl shadow-2xl border border-white/20 pointer-events-none transition-all duration-200 max-w-[280px]">
          <div className="flex items-center justify-between gap-2 border-b border-white/10 pb-2 mb-2">
            <div>
              <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider block">
                {activeTooltipDistrict.id} • URA District
              </span>
              <p className="font-bold text-white text-base leading-tight">
                {activeTooltipDistrict.name}
              </p>
              <p className="text-xs text-blue-300 font-medium">
                {activeTooltipDistrict.shortName}
              </p>
            </div>
            <span
              className={`text-[10px] px-2 py-0.5 rounded-full font-bold border font-mono ${getRegionBadge(
                activeTooltipDistrict.region
              )}`}
            >
              {activeTooltipDistrict.region}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2 text-xs font-mono">
            <div className="bg-white/5 p-2 rounded-xl border border-white/10">
              <span className="text-slate-400 text-[10px] block">Attractiveness</span>
              <span className="text-emerald-400 font-bold text-sm">
                {activeTooltipDistrict.score.toFixed(1)} / 10
              </span>
            </div>

            <div className="bg-white/5 p-2 rounded-xl border border-white/10">
              <span className="text-slate-400 text-[10px] block">Gross Yield</span>
              <span className="text-blue-300 font-bold text-sm">
                {activeTooltipDistrict.avgRentalYield}%
              </span>
            </div>

            <div className="bg-white/5 p-2 rounded-xl border border-white/10">
              <span className="text-slate-400 text-[10px] block">Median PSF</span>
              <span className="text-amber-300 font-bold text-sm">
                ${activeTooltipDistrict.medianPsf.toLocaleString()}
              </span>
            </div>

            <div className="bg-white/5 p-2 rounded-xl border border-white/10">
              <span className="text-slate-400 text-[10px] block">30D Volume</span>
              <span className="text-slate-200 font-bold text-sm">
                {activeTooltipDistrict.transactionVolume30d} txns
              </span>
            </div>
          </div>

          <p className="text-[11px] text-slate-300 mt-2.5 leading-snug line-clamp-2">
            {activeTooltipDistrict.subregions}
          </p>
        </div>

        {/* Region Classification Legend Bar */}
        <div className="absolute bottom-4 right-4 z-20 flex flex-wrap items-center gap-3 text-xs bg-slate-950/80 p-2.5 px-4 rounded-2xl border border-white/15 backdrop-blur-md">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-md bg-amber-500/60 border border-amber-400"></span>
            <span className="font-semibold text-slate-200">CCR (D1-2, 4, 6-7, 9-11)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-md bg-blue-500/60 border border-blue-400"></span>
            <span className="font-semibold text-slate-200">RCR (D3, 5, 8, 12-15, 21)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-md bg-emerald-500/60 border border-emerald-400"></span>
            <span className="font-semibold text-slate-200">OCR (D16-20, 22-28)</span>
          </div>
        </div>
      </div>
    </div>
  );
};
