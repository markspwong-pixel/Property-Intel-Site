import React from 'react';
import { DistrictData, PropertyType, BudgetRange, TransactionMode, SentimentAlert } from '../types';
import { SingaporeMapCanvas } from './SingaporeMapCanvas';
import { DistrictBreakdownCard } from './DistrictBreakdownCard';
import { KeyAnalyticsRow } from './KeyAnalyticsRow';

interface MarketTrendsViewProps {
  districts: DistrictData[];
  selectedDistrict: DistrictData;
  onSelectDistrict: (districtId: string) => void;
  propertyType: PropertyType;
  setPropertyType: (type: PropertyType) => void;
  budgetRange: BudgetRange;
  setBudgetRange: (range: BudgetRange) => void;
  transactionMode: TransactionMode;
  setTransactionMode: (mode: TransactionMode) => void;
  sentimentAlerts: SentimentAlert[];
  onOpenDeepDive: (district: DistrictData) => void;
  onOpenAffordabilityModal: () => void;
  onOpenReturnsModal: () => void;
}

export const MarketTrendsView: React.FC<MarketTrendsViewProps> = ({
  districts,
  selectedDistrict,
  onSelectDistrict,
  propertyType,
  setPropertyType,
  budgetRange,
  setBudgetRange,
  transactionMode,
  setTransactionMode,
  sentimentAlerts,
  onOpenDeepDive,
  onOpenAffordabilityModal,
  onOpenReturnsModal,
}) => {
  return (
    <div className="space-y-6">
      {/* Control Bar / Filters */}
      <div className="glass-panel p-4 rounded-2xl flex flex-wrap items-center justify-between gap-4 shadow-xl">
        {/* Property Type Filter Chips */}
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-slate-300 text-xs font-bold uppercase tracking-wider font-mono">
            PROPERTY TYPE:
          </span>
          <div className="flex rounded-xl border border-white/10 overflow-hidden bg-white/5 backdrop-blur-md">
            {(['All', 'HDB', 'Condo', 'Landed'] as PropertyType[]).map((type) => {
              const isActive = propertyType === type;
              return (
                <button
                  key={type}
                  onClick={() => setPropertyType(type)}
                  className={`px-4 py-2 text-xs font-bold transition-all duration-200 border-r border-white/10 last:border-r-0 ${
                    isActive
                      ? 'bg-white/20 text-white backdrop-blur-md'
                      : 'text-slate-300 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {type}
                </button>
              );
            })}
          </div>
        </div>

        {/* Budget & Sales/Rent Toggle */}
        <div className="flex items-center gap-4 flex-wrap">
          <div className="flex items-center gap-2">
            <span className="text-slate-300 text-xs font-bold uppercase tracking-wider font-mono">
              BUDGET:
            </span>
            <select
              value={budgetRange}
              onChange={(e) => setBudgetRange(e.target.value as BudgetRange)}
              className="bg-white/5 border border-white/10 rounded-xl text-xs text-slate-100 py-2 pl-3 pr-8 focus:ring-1 focus:ring-white/30 focus:border-white/30 font-mono cursor-pointer backdrop-blur-md"
            >
              <option value="Any" className="bg-slate-900 text-slate-100">Any</option>
              <option value="< $1M" className="bg-slate-900 text-slate-100">&lt; $1M</option>
              <option value="$1M - $2M" className="bg-slate-900 text-slate-100">$1M - $2M</option>
              <option value="$2M - $5M" className="bg-slate-900 text-slate-100">$2M - $5M</option>
              <option value="> $5M" className="bg-slate-900 text-slate-100">&gt; $5M</option>
            </select>
          </div>

          <div className="h-6 w-px bg-white/10 hidden sm:block" />

          {/* Segmented Control Pill Toggle */}
          <div className="bg-slate-950/50 rounded-full p-1 flex items-center border border-white/10 relative shadow-inner">
            <button
              onClick={() => setTransactionMode('Sales')}
              className={`relative z-10 px-5 py-1.5 text-xs font-bold rounded-full w-20 text-center transition-all ${
                transactionMode === 'Sales'
                  ? 'bg-white text-slate-950 shadow-md font-bold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Sales
            </button>
            <button
              onClick={() => setTransactionMode('Rent')}
              className={`relative z-10 px-5 py-1.5 text-xs font-bold rounded-full w-20 text-center transition-all ${
                transactionMode === 'Rent'
                  ? 'bg-white text-slate-950 shadow-md font-bold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Rent
            </button>
          </div>
        </div>
      </div>

      {/* Hero Section: Map Canvas (8 cols) & District Sidebar (4 cols) */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 min-h-[500px]">
        <div className="xl:col-span-8">
          <SingaporeMapCanvas
            districts={districts}
            selectedDistrictId={selectedDistrict.id}
            onSelectDistrict={onSelectDistrict}
          />
        </div>

        <div className="xl:col-span-4">
          <DistrictBreakdownCard
            district={selectedDistrict}
            onOpenDeepDive={onOpenDeepDive}
          />
        </div>
      </div>

      {/* Key Analytics Row */}
      <KeyAnalyticsRow
        alerts={sentimentAlerts}
        selectedDistrict={selectedDistrict}
        onSelectDistrict={onSelectDistrict}
        onOpenAffordabilityModal={onOpenAffordabilityModal}
        onOpenReturnsModal={onOpenReturnsModal}
      />
    </div>
  );
};
