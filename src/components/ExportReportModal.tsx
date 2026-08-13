import React, { useState } from 'react';
import { DistrictData } from '../types';

interface ExportReportModalProps {
  districts: DistrictData[];
  selectedDistrict: DistrictData;
  onClose: () => void;
}

export const ExportReportModal: React.FC<ExportReportModalProps> = ({
  districts,
  selectedDistrict,
  onClose,
}) => {
  const [reportType, setReportType] = useState<'pdf' | 'csv' | 'json'>('pdf');
  const [includeCaveats, setIncludeCaveats] = useState(true);
  const [isExporting, setIsExporting] = useState(false);
  const [isDone, setIsDone] = useState(false);

  const handleDownload = () => {
    setIsExporting(true);
    setTimeout(() => {
      setIsExporting(false);
      setIsDone(true);

      if (reportType === 'csv') {
        const headers = 'District ID,Name,Region,Score,Avg Rental Yield,Transaction Volume 30D,Median PSF\n';
        const rows = districts
          .map(
            (d) =>
              `"${d.id}","${d.name}","${d.region}",${d.score},${d.avgRentalYield},${d.transactionVolume30d},${d.medianPsf}`
          )
          .join('\n');
        const blob = new Blob([headers + rows], { type: 'text/csv' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `PropIntel_Singapore_District_Report_${Date.now()}.csv`;
        a.click();
      }
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="glass-panel border border-white/20 rounded-3xl p-6 w-full max-w-lg shadow-2xl space-y-5 animate-in fade-in zoom-in-95">
        <div className="flex justify-between items-center border-b border-white/10 pb-4">
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <span className="material-symbols-outlined text-blue-400">download</span>
            Export Institutional Market Report
          </h3>
          <button onClick={onClose} className="text-slate-400 hover:text-white p-1 rounded-full hover:bg-white/10">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <div>
          <label className="text-xs text-slate-300 font-mono uppercase block mb-2">Export Format</label>
          <div className="grid grid-cols-3 gap-3">
            {[
              { id: 'pdf', label: 'PDF Report', icon: 'picture_as_pdf' },
              { id: 'csv', label: 'CSV Dataset', icon: 'grid_on' },
              { id: 'json', label: 'JSON Feed', icon: 'code' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setReportType(item.id as any)}
                className={`p-3.5 rounded-xl border flex flex-col items-center justify-center gap-1 transition-all ${
                  reportType === item.id
                    ? 'bg-blue-500/20 border-blue-400 text-white font-bold shadow-lg shadow-blue-500/10'
                    : 'bg-white/5 border-white/10 text-slate-400 hover:text-white hover:bg-white/10'
                }`}
              >
                <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
                <span className="text-xs">{item.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-3 bg-white/5 p-4 rounded-xl border border-white/10 backdrop-blur-md">
          <div className="flex items-center justify-between">
            <span className="text-xs text-slate-300">Target Focus:</span>
            <span className="text-xs font-mono font-bold text-blue-300">
              {selectedDistrict.name} & All 28 Districts
            </span>
          </div>
          <div className="flex items-center justify-between">
            <label className="text-xs text-slate-300 cursor-pointer" htmlFor="includeCaveatsCheck">
              Include Recent URA Caveats Log
            </label>
            <input
              id="includeCaveatsCheck"
              type="checkbox"
              checked={includeCaveats}
              onChange={(e) => setIncludeCaveats(e.target.checked)}
              className="accent-blue-400"
            />
          </div>
        </div>

        {isDone ? (
          <div className="p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-center text-emerald-400 text-xs font-mono font-bold">
            Report downloaded successfully!
          </div>
        ) : null}

        <div className="flex justify-end gap-3 pt-3 border-t border-white/10">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-300 hover:text-white"
          >
            Cancel
          </button>
          <button
            onClick={handleDownload}
            disabled={isExporting}
            className="px-6 py-2.5 bg-white text-slate-950 font-bold text-xs uppercase tracking-wider rounded-full hover:bg-slate-200 transition-all shadow-lg flex items-center gap-2"
          >
            {isExporting ? (
              <>
                <span className="animate-spin material-symbols-outlined text-[18px]">progress_activity</span>
                Generating...
              </>
            ) : (
              'Generate & Download'
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
