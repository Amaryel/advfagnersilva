import React, { useState } from 'react';
import { lawyerProfile, getWhatsAppUrl } from '../data/lawyerData';
import { 
  MessageCircle, 
  X, 
  ShieldAlert, 
  Calendar, 
  FileText, 
  ArrowRight,
  PhoneCall
} from 'lucide-react';

export const WhatsAppFloating: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const quickOptions = [
    {
      label: 'Plantão de Urgência (Prisão/Flagrante)',
      desc: 'Atendimento emergencial imediato',
      icon: ShieldAlert,
      color: 'text-red-400 bg-red-950/40 border-red-800/50',
      message: 'Olá, Dr. Preciso de auxílio URGENTE para um caso de Prisão em Flagrante / Delegacia agora.'
    },
    {
      label: 'Agendar Consulta Jurídica',
      desc: 'Análise de inquérito ou processo em andamento',
      icon: Calendar,
      color: 'text-amber-300 bg-amber-950/40 border-amber-800/50',
      message: 'Olá, Dr. Gostaria de agendar uma consulta para avaliar um caso criminal.'
    },
    {
      label: 'Audiência ou Depoimento Marcado',
      desc: 'Acompanhamento em ato judicial ou policial',
      icon: FileText,
      color: 'text-blue-300 bg-blue-950/40 border-blue-800/50',
      message: 'Olá, Dr. Tenho uma audiência/oitiva agendada e preciso de acompanhamento de advogado.'
    }
  ];

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end">
      {/* Quick Menu Popover */}
      {isOpen && (
        <div 
          id="whatsapp-popover-menu"
          className="mb-3 w-80 sm:w-96 bg-[#0f1522] border border-[#26354f] rounded-lg shadow-2xl p-4 text-[#e2e8f0] animate-in fade-in slide-in-from-bottom-3 duration-200"
        >
          <div className="flex items-center justify-between pb-3 border-b border-[#1e2a3f]">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-xs font-serif uppercase tracking-wider font-bold text-[#f8fafc]">
                Atendimento Criminal Direto
              </span>
            </div>
            <button 
              id="whatsapp-popover-close-btn"
              onClick={() => setIsOpen(false)}
              className="text-[#94a3b8] hover:text-[#f8fafc] p-1 rounded transition-colors"
              aria-label="Fechar popover"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="py-2.5">
            <p className="text-[11px] text-[#94a3b8] mb-3">
              Selecione o tipo de atendimento para iniciar a conversa com mensagem contextualizada:
            </p>

            <div className="space-y-2">
              {quickOptions.map((opt, i) => {
                const IconComponent = opt.icon;
                return (
                  <a
                    key={i}
                    id={`wa-quick-option-${i}`}
                    href={getWhatsAppUrl(opt.message)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 p-2.5 rounded border border-[#1d273a] hover:border-[#c5a880] bg-[#121929] hover:bg-[#182238] transition-all group"
                  >
                    <div className={`p-2 rounded border ${opt.color} shrink-0 mt-0.5`}>
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs font-semibold text-[#f1f5f9] group-hover:text-[#c5a880] transition-colors flex items-center justify-between">
                        <span>{opt.label}</span>
                        <ArrowRight className="w-3 h-3 text-[#64748b] group-hover:translate-x-0.5 transition-transform" />
                      </div>
                      <div className="text-[11px] text-[#94a3b8] mt-0.5">
                        {opt.desc}
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          <div className="pt-3 border-t border-[#1e2a3f] flex items-center justify-between text-[11px]">
            <a 
              id="wa-popover-direct-link"
              href={getWhatsAppUrl('Olá, Dr. Gostaria de conversar com o senhor.')}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#c5a880] hover:underline font-medium"
            >
              Mensagem livre no WhatsApp
            </a>
            <a 
              id="wa-popover-phone-link"
              href={`tel:${lawyerProfile.phoneRaw}`} 
              className="text-[#94a3b8] hover:text-[#cbd5e1] flex items-center gap-1"
            >
              <PhoneCall className="w-3 h-3" />
              <span>Ligação</span>
            </a>
          </div>
        </div>
      )}

      {/* Main Trigger Button */}
      <button
        id="floating-whatsapp-main-btn"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2.5 px-4 py-3.5 rounded-full bg-gradient-to-r from-[#25D366] to-[#1eb655] hover:from-[#22c35e] hover:to-[#179e49] text-white shadow-xl shadow-emerald-950/50 hover:shadow-emerald-900/60 active:scale-95 transition-all group"
        aria-label="Abrir atendimento no WhatsApp"
      >
        <div className="relative">
          <MessageCircle className="w-5 h-5 fill-white stroke-[1.5]" />
          <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-400"></span>
          </span>
        </div>
        <span className="text-xs font-bold tracking-wide uppercase font-sans pr-1">
          WhatsApp Plantão 24h
        </span>
      </button>
    </div>
  );
};
