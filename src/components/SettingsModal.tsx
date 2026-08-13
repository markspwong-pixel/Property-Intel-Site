import React, { useState } from 'react';

interface SettingsModalProps {
  onClose: () => void;
}

export const SettingsModal: React.FC<SettingsModalProps> = ({ onClose }) => {
  const [currency, setCurrency] = useState<'SGD' | 'USD' | 'HKD'>('SGD');
  const [theme, setTheme] = useState<'dark' | 'glass'>('dark');
  const [autoRefresh, setAutoRefresh] = useState(true);

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="glass-panel border border-white/20 rounded-3xl p-6 w-full max-w-lg shadow-2xl space-y-5 animate-in fade-in zoom-in-95">
        <div className="flex justify-between items-center border-b border-white/10 pb-4">
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <span className="material-symbols-outlined text-blue-400">settings</span>
            Terminal Configuration
          </h3>
          <button onClick={onClose} className="text-slate-400 hover:text-white p-1 rounded-full hover:bg-white/10">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <div className="space-y-4 text-sm">
          <div>
            <label className="text-xs text-slate-300 font-mono uppercase block mb-2">Currency Display</label>
            <div className="grid grid-cols-3 gap-2">
              {(['SGD', 'USD', 'HKD'] as const).map((curr) => (
                <button
                  key={curr}
                  onClick={() => setCurrency(curr)}
                  className={`py-2.5 px-3 rounded-xl border font-mono text-xs font-bold transition-all ${
                    currency === curr
                      ? 'bg-blue-500/20 border-blue-400 text-white shadow-lg shadow-blue-500/10'
                      : 'bg-white/5 border-white/10 text-slate-400 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {curr}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between p-3.5 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-md">
            <div>
              <p className="font-bold text-white">Live URA Caveat Stream</p>
              <p className="text-xs text-slate-400">Auto-refresh caveats feed every 60 seconds</p>
            </div>
            <input
              type="checkbox"
              checked={autoRefresh}
              onChange={(e) => setAutoRefresh(e.target.checked)}
              className="accent-blue-400"
            />
          </div>

          <div className="p-3.5 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-md">
            <p className="text-xs text-slate-300 font-mono font-semibold">Terminal Version: v2.4.8-PROD</p>
            <p className="text-xs text-slate-400 font-mono mt-0.5">Singapore URA & MAS Data Gateway</p>
          </div>
        </div>

        <div className="flex justify-end pt-3 border-t border-white/10">
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-white text-slate-950 font-bold text-xs uppercase tracking-wider rounded-full hover:bg-slate-200 transition-all shadow-lg"
          >
            Save Configuration
          </button>
        </div>
      </div>
    </div>
  );
};
