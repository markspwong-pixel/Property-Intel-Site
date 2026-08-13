import React from 'react';
import { DiscussionEmbed, CommentCount } from 'disqus-react';

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
  const shortname = 'mcp-website';
  const currentUrl = pageUrl || (typeof window !== 'undefined' ? window.location.href : 'https://propintel-sg.com');

  const config = {
    url: currentUrl,
    identifier: pageIdentifier,
    title: title,
    language: 'en',
  };

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
          <span className="px-3 py-1 bg-blue-500/10 text-blue-300 border border-blue-500/20 text-xs font-mono font-medium rounded-full flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[14px]">chat</span>
            <CommentCount shortname={shortname} config={config}>
              Comments
            </CommentCount>
          </span>
        </div>
      </div>

      {/* Disqus Embed Thread Container */}
      <div className="min-h-[320px] bg-white/5 p-4 sm:p-6 rounded-xl border border-white/10">
        <DiscussionEmbed shortname={shortname} config={config} />
      </div>
    </div>
  );
};
