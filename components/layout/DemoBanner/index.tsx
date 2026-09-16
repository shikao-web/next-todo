// components/DemoBanner.tsx
import React from 'react';
import { CodeXml, ExternalLink } from 'lucide-react';

export default function DemoBanner() {
  const GITHUB_REPO_URL = "https://github.com/shikao-web/next-todo";

  return (
    <aside aria-label="デモ案内" className="bg-slate-900 text-slate-200 text-xs sm:text-sm py-2.5 px-4 border-b border-slate-800">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
        <div className="flex items-center gap-2">
          <span className="bg-amber-500/20 text-amber-300 text-[10px] font-semibold px-2 py-0.5 rounded-full border border-amber-500/30 shrink-0">
            DEMO
          </span>
          <p className="text-slate-300 m-0 p-0">
            これはポートフォリオ用デモです。予告なくデータを初期化する場合があります。
          </p>
        </div>

        <a
          href={GITHUB_REPO_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 font-medium text-slate-100 hover:text-white bg-slate-800 hover:bg-slate-700 px-3 py-1 rounded-md transition-colors border border-slate-700 shrink-0"
        >
          {/* GitHubアイコンの代わりに CodeXml を使用 */}
          <CodeXml className="w-3.5 h-3.5 text-slate-400" />
          <span>ソースコードを見る</span>
          <ExternalLink className="w-3 h-3 text-slate-400" />
        </a>
      </div>
    </aside>
  );
}