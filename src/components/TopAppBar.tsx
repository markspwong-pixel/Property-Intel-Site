import React, { useState, useRef, useEffect } from 'react';
import { DistrictData } from '../types';

interface TopAppBarProps {
  title: string;
  districts: DistrictData[];
  onSelectDistrict: (districtId: string) => void;
  onApplyFilters: () => void;
  onOpenNotifications: () => void;
  notificationCount: number;
}

export const TopAppBar: React.FC<TopAppBarProps> = ({
  title,
  districts,
  onSelectDistrict,
  onApplyFilters,
  onOpenNotifications,
  notificationCount,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  const filteredDistricts = searchQuery.trim()
    ? districts.filter(
        (d) =>
          d.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          d.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
          d.shortName.toLowerCase().includes(searchQuery.toLowerCase()) ||
          d.subregions.toLowerCase().includes(searchQuery.toLowerCase()) ||
          d.topDevelopments.some((dev) => dev.name.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    : [];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="fixed top-0 right-0 left-64 z-30 flex justify-between items-center h-16 px-6 bg-slate-950/30 backdrop-blur-2xl border-b border-white/10 text-slate-100">
      {/* Title & Search Bar */}
      <div className="flex items-center gap-4 flex-1">
        <h2 className="font-bold text-2xl text-white tracking-tight">{title}</h2>

        <div className="hidden md:flex items-center ml-8 max-w-md w-full relative" ref={searchRef}>
          <span className="material-symbols-outlined absolute left-3.5 text-slate-400 text-[20px]">
            search
          </span>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setIsSearchOpen(true);
            }}
            onFocus={() => setIsSearchOpen(true)}
            placeholder="Search District, Postal Code, Project..."
            className="w-full bg-white/5 border border-white/10 rounded-full py-1.5 pl-11 pr-4 text-sm text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-white/30 focus:border-white/30 transition-all backdrop-blur-md"
          />

          {/* Instant Search Results Dropdown */}
          {isSearchOpen && filteredDistricts.length > 0 && (
            <div className="absolute top-full left-0 right-0 mt-2 glass-panel rounded-2xl shadow-2xl z-50 max-h-80 overflow-y-auto divide-y divide-white/10">
              {filteredDistricts.map((d) => (
                <button
                  key={d.id}
                  onClick={() => {
                    onSelectDistrict(d.id);
                    setIsSearchOpen(false);
                    setSearchQuery('');
                  }}
                  className="w-full text-left p-3.5 hover:bg-white/10 transition-colors flex items-center justify-between group"
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-sm text-white group-hover:text-blue-300">
                        {d.name} ({d.id})
                      </span>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/10 text-slate-200 border border-white/15">
                        {d.region}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 mt-0.5">{d.subregions}</p>
                  </div>
                  <div className="text-right font-mono text-xs">
                    <p className="text-emerald-400 font-semibold">{d.avgRentalYield}% Yield</p>
                    <p className="text-slate-300">${d.medianPsf} PSF</p>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Quick Action Icons & Apply Filters */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1 border-r border-white/10 pr-3 mr-1">
          <button
            onClick={onApplyFilters}
            title="Toggle Quick Filter Overlay"
            className="p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-xl transition-colors relative group"
          >
            <span className="material-symbols-outlined text-[20px]">tune</span>
            <span className="absolute top-2 right-2 w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
          </button>

          <button
            onClick={onOpenNotifications}
            title="Notifications"
            className="p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-xl transition-colors relative group"
          >
            <span className="material-symbols-outlined text-[20px]">notifications</span>
            {notificationCount > 0 && (
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-orange-400 rounded-full animate-pulse"></span>
            )}
          </button>

          <button
            title="User Profile"
            className="p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-xl transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">account_circle</span>
          </button>
        </div>

        <button
          onClick={onOpenNotifications}
          className="hidden lg:flex items-center gap-2 text-slate-300 hover:text-white text-xs font-semibold uppercase tracking-wider px-3 py-1.5 hover:bg-white/10 rounded-xl transition-colors"
        >
          Notifications
        </button>

        <button
          onClick={onApplyFilters}
          className="bg-white text-slate-950 font-bold text-xs uppercase tracking-wider py-2 px-5 rounded-full hover:bg-slate-200 transition-all shadow-lg shadow-white/10 active:scale-95"
        >
          Apply Filters
        </button>
      </div>
    </header>
  );
};
