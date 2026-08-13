import React, { useEffect } from 'react';

declare global {
  interface Window {
    DISQUS?: {
      reset: (options: { reload: boolean; config?: (this: any) => void }) => void;
    };
    disqus_config?: (this: any) => void;
  }
}

interface DisqusForumProps {
  pageIdentifier?: string;
  pageUrl?: string;
  title?: string;
}

export const DisqusForum: React.FC<DisqusForumProps> = ({
  pageIdentifier = 'propintel-singapore-overview',
  pageUrl,
  title = 'Institutional Investor Discussion Forum',
}) => {
  useEffect(() => {
    const currentUrl = pageUrl || window.location.href;

    // Define global disqus_config on window
    window.disqus_config = function (this: any) {
      this.page.url = currentUrl;
      this.page.identifier = pageIdentifier;
      this.page.title = title;
    };

    // Load count.js script
    if (!document.getElementById('dsq-count-scr')) {
      const countScript = document.createElement('script');
      countScript.id = 'dsq-count-scr';
      countScript.src = '//mark-or4q4t384v.disqus.com/count.js';
      countScript.async = true;
      (document.head || document.body).appendChild(countScript);
    }

    // Load main embed script or reset if window.DISQUS is already initialized
    if (window.DISQUS) {
      try {
        window.DISQUS.reset({
          reload: true,
          config: function (this: any) {
            this.page.url = currentUrl;
            this.page.identifier = pageIdentifier;
            this.page.title = title;
          },
        });
      } catch (err) {
        console.warn('Disqus reset error:', err);
      }
    } else {
      // Remove stale script if present so fresh embed.js script loads
      const existingScript = document.getElementById('disqus-embed-script');
      if (existingScript) {
        existingScript.remove();
      }

      const s = document.createElement('script');
      s.id = 'disqus-embed-script';
      s.src = 'https://mark-or4q4t384v.disqus.com/embed.js';
      s.setAttribute('data-timestamp', (+new Date()).toString());
      s.async = true;
      (document.head || document.body).appendChild(s);
    }
  }, [pageIdentifier, pageUrl, title]);

  return (
    <div className="data-card p-6 rounded-2xl border border-white/10 shadow-xl backdrop-blur-md">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 mb-5 border-b border-white/10">
        <div>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-blue-400 text-[24px]">forum</span>
            <h3 className="text-xl font-bold text-white tracking-tight">{title}</h3>
          </div>
          <p className="text-slate-300 text-xs mt-1">
            Share market insights, discuss Singapore URA caveat trends, and debate district potential.
          </p>
        </div>

        <div className="flex items-center gap-2 self-start sm:self-auto">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-blue-500/10 text-blue-300 border border-blue-500/20 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            Disqus Live Forum
          </span>
        </div>
      </div>

      {/* Disqus Embed Thread Container */}
      <div className="min-h-[320px] bg-white/5 p-4 sm:p-6 rounded-xl border border-white/10">
        <div id="disqus_thread" className="min-h-[280px]"></div>
        <noscript>
          Please enable JavaScript to view the{' '}
          <a href="https://disqus.com/?ref_noscript" className="text-blue-400 underline">
            comments powered by Disqus.
          </a>
        </noscript>
      </div>
    </div>
  );
};


