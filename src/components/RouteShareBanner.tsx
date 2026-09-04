import React, { useState } from 'react';
import { AppRoute } from '../types';
import { useTheme } from '../context/ThemeContext';
import { Share2, Check, Copy, Link as LinkIcon } from 'lucide-react';

interface RouteShareBannerProps {
  currentRoute: AppRoute;
}

export const RouteShareBanner: React.FC<RouteShareBannerProps> = ({ currentRoute }) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [copied, setCopied] = useState(false);

  const getRoutePath = (route: AppRoute) => {
    switch (route) {
      case 'home': return '/';
      case 'sobrenos': return '/sobrenos';
      case 'atuacao': return '/atuacao';
      case 'casos': return '/casos';
      case 'conteudos': return '/conteudos';
      case 'faq': return '/faq';
      case 'contato': return '/contato';
      default: return '/';
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
    <div id="route-indicator-bar" className={`border-y py-2 px-4 text-xs transition-colors ${
      isDark ? 'bg-[#0a0e17] border-[#1c273c]' : 'bg-[#faf8f5] border-[#ebdcc9]'
    }`}>
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <LinkIcon className="w-3.5 h-3.5 text-[#b89058]" />
          <span className={`text-[11px] hidden sm:inline ${isDark ? 'text-[#64748b]' : 'text-[#8c642b]'}`}>
            Página ativa:
          </span>
          <code className={`px-2 py-0.5 rounded-lg border font-mono text-[11px] font-bold ${
            isDark 
              ? 'bg-[#151e2d] border-[#233148] text-[#c5a880]' 
              : 'bg-white border-[#ebdcc9] text-[#8c642b]'
          }`}>
            {displayUrl}
          </code>
        </div>

        <button
          id="copy-current-route-btn"
          onClick={copyUrl}
          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-xl border text-[11px] font-bold transition-all touch-press cursor-pointer select-none ${
            isDark 
              ? 'bg-[#172235] hover:bg-[#1e2c45] border-[#283955] text-[#cbd5e1]' 
              : 'bg-white hover:bg-[#f3ece0] border-[#ebdcc9] text-[#554228] shadow-sm'
          }`}
          title="Copiar link direto desta página"
        >
          {copied ? (
            <>
              <Check className="w-3 h-3 text-emerald-500" />
              <span className="text-emerald-600 font-bold">Link copiado!</span>
            </>
          ) : (
            <>
              <Share2 className="w-3 h-3 text-[#b89058]" />
              <span>Compartilhar link desta página</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};
