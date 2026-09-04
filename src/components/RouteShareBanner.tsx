import React, { useState } from 'react';
import { AppRoute } from '../types';
import { Share2, Check, Copy, Link as LinkIcon } from 'lucide-react';

interface RouteShareBannerProps {
  currentRoute: AppRoute;
}

export const RouteShareBanner: React.FC<RouteShareBannerProps> = ({ currentRoute }) => {
  const [copied, setCopied] = useState(false);

  const getRoutePath = (route: AppRoute) => {
    switch (route) {
      case 'home': return '/';
      case 'sobrenos': return '/sobrenos';
      case 'atuacao': return '/atuacao';
      case 'conteudos': return '/conteudos';
      case 'faq': return '/faq';
      case 'contato': return '/contato';
    }
  };

  const currentPath = getRoutePath(currentRoute);
  const displayUrl = `advocaciacriminal.pi.leg.br${currentPath}`;

  const copyUrl = () => {
    const fullUrl = `${window.location.origin}${window.location.pathname}?page=${currentRoute}`;
    navigator.clipboard.writeText(fullUrl).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }).catch(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  return (
    <div id="route-indicator-bar" className="bg-[#0e1420] border-y border-[#1c273c] py-2 px-4 text-xs">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-[#94a3b8]">
          <LinkIcon className="w-3.5 h-3.5 text-[#c5a880]" />
          <span className="text-[11px] text-[#64748b] hidden sm:inline">Rota independente ativa:</span>
          <code className="px-2 py-0.5 rounded bg-[#151e2d] border border-[#233148] text-[#c5a880] font-mono text-[11px]">
            {displayUrl}
          </code>
        </div>

        <button
          id="copy-current-route-btn"
          onClick={copyUrl}
          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#172235] hover:bg-[#1e2c45] border border-[#283955] text-[#cbd5e1] hover:text-[#f8fafc] text-[11px] transition-colors"
          title="Copiar link direto desta página"
        >
          {copied ? (
            <>
              <Check className="w-3 h-3 text-emerald-400" />
              <span className="text-emerald-400 font-medium">Link da página copiado!</span>
            </>
          ) : (
            <>
              <Share2 className="w-3 h-3 text-[#94a3b8]" />
              <span>Compartilhar esta página</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};
