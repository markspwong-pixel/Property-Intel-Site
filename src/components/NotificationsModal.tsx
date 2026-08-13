import React from 'react';
import { SentimentAlert } from '../types';

interface NotificationsModalProps {
  alerts: SentimentAlert[];
  onClose: () => void;
  onSelectDistrict: (districtId: string) => void;
}

export const NotificationsModal: React.FC<NotificationsModalProps> = ({
  alerts,
  onClose,
  onSelectDistrict,
}) => {
  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="glass-panel border border-white/20 rounded-3xl p-6 w-full max-w-lg shadow-2xl space-y-4 animate-in fade-in zoom-in-95">
        <div className="flex justify-between items-center border-b border-white/10 pb-4">
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <span className="material-symbols-outlined text-blue-400">notifications</span>
            Real-Time Market Alerts
          </h3>
          <button onClick={onClose} className="text-slate-400 hover:text-white p-1 rounded-full hover:bg-white/10">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <div className="space-y-3 max-h-[60vh] overflow-y-auto pr-1">
          {alerts.map((alert) => (
            <div
              key={alert.id}
              onClick={() => {
                onSelectDistrict(alert.districtId);
                onClose();
              }}
              className="p-3.5 bg-white/5 border border-white/10 rounded-2xl hover:border-white/30 transition-all cursor-pointer backdrop-blur-md"
            >
              <div className="flex justify-between items-start mb-1">
                <span className="font-bold text-sm text-white">{alert.districtName}</span>
                <span className="text-[10px] text-slate-400 font-mono">{alert.timestamp}</span>
              </div>
              <p className="text-xs font-bold text-blue-300 mb-1">{alert.subTitle}</p>
              <p className="text-xs text-slate-300 leading-relaxed">{alert.message}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-end pt-3 border-t border-white/10">
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-white text-slate-950 font-bold text-xs uppercase tracking-wider rounded-full hover:bg-slate-200 transition-all shadow-lg"
          >
            Acknowledge All
          </button>
        </div>
      </div>
    </div>
  );
};
