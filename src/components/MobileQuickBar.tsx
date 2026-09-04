import React from 'react';
import { lawyerProfile, getWhatsAppUrl } from '../data/lawyerData';
import { useTheme } from '../context/ThemeContext';
import { AppRoute } from '../types';
import { 
  PhoneCall, 
  MessageSquare, 
  ShieldAlert, 
  Mail, 
  Scale
} from 'lucide-react';

interface MobileQuickBarProps {
  navigate: (route: AppRoute) => void;
}

export const MobileQuickBar: React.FC<MobileQuickBarProps> = ({ navigate }) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div 
      id="mobile-quick-action-bar" 
      className={`fixed bottom-0 left-0 right-0 z-50 lg:hidden px-3 py-2.5 backdrop-blur-xl border-t shadow-2xl transition-all ${
        isDark 
          ? 'bg-[#090d16]/95 border-[#1e293d]' 
          : 'bg-white/95 border-[#cbd5e1] shadow-[0_-8px_25px_rgba(0,0,0,0.08)]'
      }`}
    >
      <div className="max-w-md mx-auto grid grid-cols-4 gap-2 items-center">
        
        {/* WhatsApp Plantão (Priority #1) */}
        <a
          id="mobile-quick-wa-btn"
          href={getWhatsAppUrl('Olá, Dr. Fagner Silva. Preciso de atendimento criminal de urgência!')}
          target="_blank"
          rel="noopener noreferrer"
          className="col-span-2 py-2.5 px-3 rounded-xl bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#20bd5a] hover:to-[#0f776a] text-black font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-md btn-shimmer touch-press transition-all cursor-pointer select-none"
        >
          <MessageSquare className="w-4 h-4 fill-black/20 shrink-0" />
          <span className="font-extrabold text-[11px] truncate">WhatsApp 24h</span>
        </a>

        {/* Direct Call (Emergency #2) */}
        <a
          id="mobile-quick-call-btn"
          href={`tel:${lawyerProfile.phoneRaw}`}
          className={`py-2.5 px-2 rounded-xl border font-bold text-[11px] uppercase tracking-wider flex flex-col items-center justify-center gap-0.5 shadow-sm touch-press transition-all cursor-pointer select-none ${
            isDark 
              ? 'bg-red-950/40 border-red-800/80 text-red-300 hover:bg-red-900/50 active:bg-red-900' 
              : 'bg-red-50 border-red-300 text-red-700 hover:bg-red-100 active:bg-red-200'
          }`}
        >
          <PhoneCall className="w-3.5 h-3.5 text-red-500 shrink-0" />
          <span className="leading-none text-[10px]">Ligar 24h</span>
        </a>

        {/* Contact / Triage Form */}
        <button
          id="mobile-quick-contact-btn"
          onClick={() => {
            navigate('contato');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className={`py-2.5 px-2 rounded-xl border font-bold text-[11px] uppercase tracking-wider flex flex-col items-center justify-center gap-0.5 shadow-sm touch-press transition-all cursor-pointer select-none ${
            isDark 
              ? 'bg-[#151c2c] border-[#25354e] text-[#c5a880] hover:bg-[#1b253b] active:bg-[#202b42]' 
              : 'bg-[#faf6f0] border-[#c5a880] text-[#855d21] hover:bg-[#f3ece0] active:bg-[#ede3d3]'
          }`}
        >
          <Mail className="w-3.5 h-3.5 text-[#c5a880] shrink-0" />
          <span className="leading-none text-[10px]">Dúvidas</span>
        </button>

      </div>
    </div>
  );
};
