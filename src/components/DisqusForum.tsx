import React, { useEffect, useState } from 'react';

declare global {
  interface Window {
    DISQUS?: {
      reset: (options: { reload: boolean; config?: () => void }) => void;
    };
    disqus_config?: () => void;
  }
}

interface DisqusForumProps {
  pageIdentifier?: string;
  pageUrl?: string;
  title?: string;
}

export const DisqusForum: React.FC<DisqusForumProps> = ({
  pageIdentifier = 'propintel-sg-forum',
  pageUrl,
  title = 'Institutional Investor Discussion Forum',
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    const currentUrl = pageUrl || window.location.href;

    // Suppress cross-origin third-party script errors from crashing the app
    const handleGlobalError = (event: ErrorEvent) => {
      if (
        event.message === 'Script error.' ||
        (event.filename && event.filename.includes('disqus'))
      ) {
        // Prevent uncaught cross-origin script error from bubbling up
        event.preventDefault?.();
        return true;
      }
    };

    window.addEventListener('error', handleGlobalError);

    try {
      window.disqus_config = function (this: any) {
        this.page.url = currentUrl;
        this.page.identifier = pageIdentifier;
      };

      // Load Disqus count script safely
      if (!document.getElementById('dsq-count-scr')) {
        const countScript = document.createElement('script');
        countScript.id = 'dsq-count-scr';
        countScript.src = 'https://mark-or4q4t384v.disqus.com/count.js';
        countScript.async = true;
        countScript.onerror = () => {
          console.warn('Disqus count script failed to load.');
        };
        (document.head || document.body).appendChild(countScript);
      }

      // Ensure container exists in DOM before triggering DISQUS
      const threadContainer = document.getElementById('disqus_thread');
      if (threadContainer) {
        if (window.DISQUS) {
          try {
            window.DISQUS.reset({
              reload: true,
              config: function (this: any) {
                this.page.url = currentUrl;
                this.page.identifier = pageIdentifier;
              },
            });
            if (isMounted) setIsLoading(false);
          } catch (err) {
            console.warn('Disqus reset failed:', err);
          }
        } else {
          const existingScript = document.getElementById('disqus-embed-script');
          if (!existingScript) {
            const d = document;
            const s = d.createElement('script');
            s.id = 'disqus-embed-script';
            s.src = 'https://mark-or4q4t384v.disqus.com/embed.js';
            s.setAttribute('data-timestamp', (+new Date()).toString());
            s.async = true;

            s.onload = () => {
              if (isMounted) setIsLoading(false);
            };

            s.onerror = () => {
              if (isMounted) {
                setHasError(true);
                setIsLoading(false);
              }
            };

            (d.head || d.body).appendChild(s);
          } else {
            if (isMounted) setIsLoading(false);
          }
        }
      }
    } catch (e) {
      console.warn('Disqus initialization error:', e);
      if (isMounted) {
        setHasError(true);
        setIsLoading(false);
      }
    }

    return () => {
      isMounted = false;
      window.removeEventListener('error', handleGlobalError);
    };
  }, [pageIdentifier, pageUrl]);

  return (
    <div className="data-card p-6 rounded-2xl border border-white/10 shadow-xl overflow-hidden backdrop-blur-md">
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
            <span className={`w-2 h-2 rounded-full ${hasError ? 'bg-amber-400' : 'bg-emerald-400 animate-pulse'}`}></span>
            {hasError ? 'Disqus Offline' : 'Disqus Live Forum'}
          </span>
        </div>
      </div>

      {/* Disqus Embed Thread Container */}
      <div className="min-h-[280px] bg-white/5 p-4 sm:p-6 rounded-xl border border-white/10 relative">
        {hasError ? (
          <div className="text-center py-10 space-y-3">
            <span className="material-symbols-outlined text-amber-400 text-4xl">cloud_off</span>
            <p className="text-white font-bold text-sm">Disqus Embed Unavailable</p>
            <p className="text-slate-300 text-xs max-w-md mx-auto">
              The Disqus discussion service could not be loaded directly on this origin. You can visit the channel directly at{' '}
              <a
                href="https://disqus.com/home/forums/mark-or4q4t384v/"
                target="_blank"
                rel="noreferrer"
                className="text-blue-400 underline font-semibold"
              >
                Disqus Board (mark-or4q4t384v)
              </a>.
            </p>
          </div>
        ) : (
          <div id="disqus_thread"></div>
        )}

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

