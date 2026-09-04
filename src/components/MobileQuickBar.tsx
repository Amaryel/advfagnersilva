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
          className="col-span-2 btn-whatsapp py-2.5 px-3 text-xs uppercase tracking-wider font-bold"
        >
          <MessageSquare className="w-4 h-4 shrink-0" />
          <span className="font-bold text-[11px] truncate">WhatsApp 24h</span>
        </a>

        {/* Direct Call (Emergency #2) */}
        <a
          id="mobile-quick-call-btn"
          href={`tel:${lawyerProfile.phoneRaw}`}
          className={`py-2 px-2 rounded-xl border font-bold text-[11px] uppercase tracking-wider flex flex-col items-center justify-center gap-0.5 shadow-sm touch-press transition-all cursor-pointer select-none ${
            isDark 
              ? 'bg-[#161c28] border-[#29384f] text-[#cbd5e1] hover:bg-[#1d2638]' 
              : 'bg-[#faf8f5] border-[#dfd2be] text-[#0f2137] hover:bg-[#f3ece0]'
          }`}
        >
          <PhoneCall className="w-3.5 h-3.5 text-[#b89058] shrink-0" />
          <span className="leading-none text-[10px]">Ligar 24h</span>
        </a>

        {/* Contact / Triage Form */}
        <button
          id="mobile-quick-contact-btn"
          onClick={() => {
            navigate('contato');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className={`py-2 px-2 rounded-xl border font-bold text-[11px] uppercase tracking-wider flex flex-col items-center justify-center gap-0.5 shadow-sm touch-press transition-all cursor-pointer select-none ${
            isDark 
              ? 'bg-[#161c28] border-[#29384f] text-[#c5a880] hover:bg-[#1d2638]' 
              : 'bg-[#faf8f5] border-[#dfd2be] text-[#8c642b] hover:bg-[#f3ece0]'
          }`}
        >
          <Mail className="w-3.5 h-3.5 text-[#b89058] shrink-0" />
          <span className="leading-none text-[10px]">Dúvidas</span>
        </button>

      </div>
    </div>
  );
};
