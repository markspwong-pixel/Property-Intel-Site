import React, { useState } from 'react';
import { DiscussionEmbed, CommentCount } from 'disqus-react';

interface ArticleTopic {
  id: string;
  title: string;
  url: string;
  category: string;
  author: string;
  date: string;
  summary: string;
}

const COMMUNITY_TOPICS: ArticleTopic[] = [
  {
    id: 'sg-macro-property-outlook-2026',
    title: 'Singapore Real Estate Macro Outlook 2026: Interest Rates & URA Master Plan',
    url: typeof window !== 'undefined' ? `${window.location.origin}/community/macro-2026` : 'https://propintel-sg.com/community/macro-2026',
    category: 'Macro Economy',
    author: 'PropIntel Research Team',
    date: 'Aug 2026',
    summary: 'Analysis of URA private residential price index, interest rate adjustments, and institutional capital inflows across Core Central Region (CCR) properties.',
  },
  {
    id: 'district-9-orchard-growth-debate',
    title: 'District 9 (Orchard / River Valley) Yield vs Capital Appreciation Analysis',
    url: typeof window !== 'undefined' ? `${window.location.origin}/community/d9-analysis` : 'https://propintel-sg.com/community/d9-analysis',
    category: 'District Deep Dive',
    author: 'Institutional Desk',
    date: 'Aug 2026',
    summary: 'Evaluating PSF trends, resale volume benchmarks, and rental yields in D9 luxury market segment.',
  },
  {
    id: 'rcr-vs-ocr-yield-compressions',
    title: 'Rest of Central Region (RCR) vs Outside Central Region (OCR) Yield Strategies',
    url: typeof window !== 'undefined' ? `${window.location.origin}/community/rcr-ocr-strategies` : 'https://propintel-sg.com/community/rcr-ocr-strategies',
    category: 'Strategy & Returns',
    author: 'Senior Property Analyst',
    date: 'Aug 2026',
    summary: 'Comparing rental yield resilience in suburban hub developments against prime fringe growth corridors.',
  },
];

export const CommunityView: React.FC = () => {
  const [selectedTopic, setSelectedTopic] = useState<ArticleTopic>(COMMUNITY_TOPICS[0]);

  const disqusShortname = 'mcp-website';

  const disqusConfig = {
    url: selectedTopic.url,
    identifier: selectedTopic.id,
    title: selectedTopic.title,
    language: 'en',
  };

  return (
    <div className="space-y-6">
      {/* Banner Header */}
      <div className="data-card p-6 rounded-2xl border border-white/10 shadow-2xl bg-gradient-to-r from-blue-950/40 via-slate-900/60 to-purple-950/40 backdrop-blur-xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-blue-400 text-3xl">groups</span>
              <h2 className="text-2xl font-bold text-white tracking-tight">Institutional Community Forum</h2>
            </div>
            <p className="text-slate-300 text-sm mt-1 max-w-2xl">
              Engage with Singapore real estate investors, portfolio managers, and research analysts. Share market sentiment, caveat analysis, and district forecasts.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="px-4 py-2 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-300 font-mono text-xs flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Disqus React Active</span>
            </div>
          </div>
        </div>
      </div>

      {/* Topic Selector Tabs */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {COMMUNITY_TOPICS.map((topic) => {
          const isSelected = selectedTopic.id === topic.id;
          const topicConfig = {
            url: topic.url,
            identifier: topic.id,
            title: topic.title,
          };

          return (
            <button
              key={topic.id}
              onClick={() => setSelectedTopic(topic)}
              className={`p-5 rounded-xl border text-left transition-all duration-200 flex flex-col justify-between ${
                isSelected
                  ? 'bg-blue-600/20 border-blue-500/50 text-white shadow-lg shadow-blue-500/10'
                  : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10 hover:border-white/20'
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="px-2.5 py-0.5 rounded-md text-[10px] font-mono font-semibold uppercase tracking-wider bg-white/10 text-slate-300">
                    {topic.category}
                  </span>
                  {/* Disqus CommentCount Component */}
                  <span className="text-xs text-blue-400 font-mono font-medium flex items-center gap-1 bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/20">
                    <span className="material-symbols-outlined text-[14px]">chat_bubble_outline</span>
                    <CommentCount shortname={disqusShortname} config={topicConfig}>
                      Comments
                    </CommentCount>
                  </span>
                </div>
                <h3 className="font-bold text-sm text-white line-clamp-2 leading-snug">{topic.title}</h3>
                <p className="text-xs text-slate-400 mt-2 line-clamp-2">{topic.summary}</p>
              </div>

              <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                <span>By {topic.author}</span>
                <span>{topic.date}</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Main Discussion Area with DiscussionEmbed */}
      <div className="data-card p-6 rounded-2xl border border-white/10 shadow-2xl backdrop-blur-xl bg-slate-900/60">
        <div className="pb-4 mb-6 border-b border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <span className="px-2.5 py-1 rounded bg-blue-500/10 text-blue-300 border border-blue-500/20 text-xs font-mono font-medium uppercase tracking-wider">
              {selectedTopic.category}
            </span>
            <h3 className="text-xl font-bold text-white mt-2 tracking-tight">{selectedTopic.title}</h3>
            <p className="text-xs text-slate-400 mt-1">{selectedTopic.summary}</p>
          </div>

          <div className="flex items-center gap-2 self-start sm:self-auto text-xs text-blue-300 font-mono bg-blue-500/10 px-3 py-1.5 rounded-lg border border-blue-500/20">
            <span className="material-symbols-outlined text-[16px]">forum</span>
            <CommentCount shortname={disqusShortname} config={disqusConfig}>
              0 Comments
            </CommentCount>
          </div>
        </div>

        {/* Disqus DiscussionEmbed Component */}
        <div className="bg-white/5 p-4 sm:p-6 rounded-xl border border-white/10 min-h-[350px]">
          <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
        </div>
      </div>
    </div>
  );
};
