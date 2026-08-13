import React from 'react';

interface SideNavBarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenExportModal: () => void;
  onOpenSettingsModal: () => void;
  onOpenSupportModal: () => void;
}

export const SideNavBar: React.FC<SideNavBarProps> = ({
  activeTab,
  setActiveTab,
  onOpenExportModal,
  onOpenSettingsModal,
  onOpenSupportModal,
}) => {
  const navItems = [
    { id: 'overview', label: 'Overview', icon: 'dashboard' },
    { id: 'market-trends', label: 'Market Trends', icon: 'trending_up' },
    { id: 'portfolio', label: 'Portfolio', icon: 'account_balance_wallet' },
    { id: 'analytics', label: 'Analytics', icon: 'analytics' },
    { id: 'discussion', label: 'Discussion Forum', icon: 'forum' },
  ];

  return (
    <nav className="flex flex-col h-screen fixed left-0 top-0 z-40 bg-slate-950/40 backdrop-blur-2xl text-slate-300 border-r border-white/10 w-64 select-none">
      {/* Header / Brand */}
      <div className="p-6 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-white font-black text-xl shadow-lg shadow-blue-500/10 backdrop-blur-md">
            P
          </div>
          <div>
            <h1 className="font-bold text-lg text-white tracking-tight leading-none">PropIntel SG</h1>
            <p className="text-slate-400 text-[10px] mt-1 font-mono uppercase tracking-widest">Terminal v2.4</p>
          </div>
        </div>
      </div>

      {/* Main Tabs */}
      <div className="flex-1 py-4 flex flex-col gap-1.5 overflow-y-auto px-3">
        {navItems.map((item) => {
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-sm transition-all duration-200 text-left group ${
                isActive
                  ? 'text-white bg-white/10 border-r-2 border-blue-400 shadow-lg shadow-blue-500/10 backdrop-blur-md'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <span
                className={`material-symbols-outlined text-[20px] transition-colors ${
                  isActive ? 'text-blue-400' : 'text-slate-400 group-hover:text-slate-200'
                }`}
              >
                {item.icon}
              </span>
              <span>{item.label}</span>
            </button>
          );
        })}
      </div>

      {/* Footer / Bottom Section */}
      <div className="p-4 border-t border-white/10 flex flex-col gap-3">
        <button
          onClick={onOpenExportModal}
          className="w-full bg-white text-slate-950 hover:bg-slate-100 font-bold text-xs uppercase tracking-widest py-3 px-4 rounded-full transition-all flex items-center justify-center gap-2 shadow-lg shadow-white/10 active:scale-[0.98]"
        >
          <span className="material-symbols-outlined text-[18px]">download</span>
          Export Report
        </button>

        <div className="flex flex-col gap-1 mt-1">
          <button
            onClick={onOpenSettingsModal}
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-slate-400 hover:text-white hover:bg-white/5 transition-all text-left"
          >
            <span className="material-symbols-outlined text-[18px]">settings</span>
            <span>Settings</span>
          </button>
          <button
            onClick={onOpenSupportModal}
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-slate-400 hover:text-white hover:bg-white/5 transition-all text-left"
          >
            <span className="material-symbols-outlined text-[18px]">help_outline</span>
            <span>Support</span>
          </button>
        </div>

        {/* User Profile Footer */}
        <div className="mt-2 flex items-center gap-3 px-2 pt-3 border-t border-white/10">
          <img
            className="w-8 h-8 rounded-full object-cover border border-white/20"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8oPLxEn1pOjjfizGdAy8W8BbI0VJVNc_7RB34hZE6HrA8lP0SY8rSPpYE1NNxp5Fy6tuZ2jrSCkLRquy2MjcyPIpGamnBmr6UewelRmE8NHz1yT2un9-ECfvtCpcZVnqIG51sENzmlcNGhG_A8gp59LEpJX03SxTHjTQUgeO1nWRo_kqej8MpvwXB8gzIMIGeP1hh6nG4xlAj7J1CArevP9mO7ULl_z-Eq8HXZTt3mIgOQCi2QJ3e"
            alt="Institutional Investor Avatar"
          />
          <div className="flex-1 min-w-0">
            <p className="text-[11px] font-semibold text-slate-200 truncate">Institutional Investor</p>
            <p className="text-[10px] text-slate-400 font-mono truncate">ID: IN-8924</p>
          </div>
        </div>
      </div>
    </nav>
  );
};
