import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { AppRoute, PracticeArea } from '../types';
import { practiceAreas, getWhatsAppUrl, lawyerProfile } from '../data/lawyerData';
import { useTheme } from '../context/ThemeContext';
import { SafeImage } from '../components/SafeImage';
import { 
  ShieldAlert, 
  FileSearch, 
  Scale, 
  ScrollText, 
  LockOpen, 
  Briefcase, 
  CheckCircle2, 
  ArrowRight, 
  PhoneCall, 
  Clock, 
  Filter,
  MessageSquare,
  Sparkles,
  Gavel,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';

interface AtuacaoProps {
  navigate: (route: AppRoute) => void;
}

export const Atuacao: React.FC<AtuacaoProps> = ({ navigate }) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [selectedAreaId, setSelectedAreaId] = useState<string>('all');

  const getIcon = (name: string) => {
    switch (name) {
      case 'ShieldAlert': return ShieldAlert;
      case 'FileSearch': return FileSearch;
      case 'Scale': return Scale;
      case 'ScrollText': return ScrollText;
      case 'LockOpen': return LockOpen;
      default: return Gavel;
    }
  };

  const filteredAreas = selectedAreaId === 'all' 
    ? practiceAreas 
    : practiceAreas.filter(a => a.id === selectedAreaId);

  return (
    <div id="atuacao-page-root" className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16 space-y-12 ${
      isDark ? 'text-[#e2e8f0]' : 'text-[#1e293b]'
    }`}>
      
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`border-b pb-8 space-y-3 ${isDark ? 'border-[#1c273c]' : 'border-[#ebdcc9]'}`}
      >
        <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#b89058] font-bold">
          <Scale className="w-4 h-4" />
          <span>Especialidades Jurídicas</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0f2137] dark:text-[#f8fafc]">
          Áreas de Atuação em <span className="gold-gradient-text">Direito Criminal</span>
        </h1>
        <p className={`text-sm sm:text-base max-w-3xl leading-relaxed ${isDark ? 'text-[#94a3b8]' : 'text-[#475569]'}`}>
          Atuação especializada em todas as etapas da persecução penal, com foco na garantia da ampla defesa, nulidade de provas ilegais e busca pela liberdade processual no Piauí e Tribunais Superiores.
        </p>
      </motion.div>

      {/* Filter Chips */}
      <div className="flex flex-wrap items-center gap-2 pt-1">
        <div className="flex items-center gap-1.5 text-xs text-[#64748b] mr-2 font-bold">
          <Filter className="w-3.5 h-3.5 text-[#b89058]" />
          <span>Filtrar:</span>
        </div>

        <button
          onClick={() => setSelectedAreaId('all')}
          className={`px-4 py-2 rounded-2xl text-xs font-bold uppercase tracking-wider transition-all touch-press cursor-pointer select-none ${
            selectedAreaId === 'all'
              ? 'bg-[#b89058] text-white shadow-md'
              : isDark
                ? 'bg-[#0e1420] border border-[#223049] text-[#94a3b8] hover:text-[#f8fafc]'
                : 'bg-white border border-[#ebdcc9] text-[#475569] hover:text-[#0f2137]'
          }`}
        >
          Todas ({practiceAreas.length})
        </button>

        {practiceAreas.map((area) => (
          <button
            key={area.id}
            onClick={() => setSelectedAreaId(area.id)}
            className={`px-3.5 py-2 rounded-2xl text-xs font-bold uppercase tracking-wider transition-all touch-press cursor-pointer select-none ${
              selectedAreaId === area.id
                ? 'bg-[#b89058] text-white shadow-md'
                : isDark
                  ? 'bg-[#0e1420] border border-[#223049] text-[#94a3b8] hover:text-[#f8fafc]'
                  : 'bg-white border border-[#ebdcc9] text-[#475569] hover:text-[#0f2137]'
            }`}
          >
            {area.title}
          </button>
        ))}
      </div>

      {/* Areas Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence>
          {filteredAreas.map((area) => {
            const IconComp = getIcon(area.iconName);
            const isImmediate = area.urgencyLevel === 'immediate';

            return (
              <motion.div
                key={area.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className={`rounded-3xl border overflow-hidden flex flex-col justify-between interactive-card group ${
                  isDark 
                    ? 'bg-[#0d121c] border-[#1e2a3f] shadow-xl' 
                    : 'bg-white border-[#ebdcc9] shadow-sm'
                }`}
              >
                {/* Visual Header Image */}
                <div className="relative h-52 w-full overflow-hidden">
                  <SafeImage
                    src={area.imageUrl}
                    alt={area.title}
                    className="w-full h-full object-cover img-zoom brightness-[0.85] contrast-[1.05]"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${
                    isDark ? 'from-[#0d121c]' : 'from-white'
                  } via-transparent to-transparent`} />
                  
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider border shadow-md ${
                      isImmediate
                        ? 'bg-amber-500/90 text-[#070a10] border-amber-300 font-extrabold'
                        : 'bg-white/95 dark:bg-[#080b12]/80 backdrop-blur-md text-[#8c642b] dark:text-[#c5a880] border-[#b89058]/50'
                    }`}>
                      {area.badge || 'Direito Penal'}
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-5 right-5 flex items-center gap-3">
                    <div className="soft-icon-pod !p-2 !rounded-xl shrink-0 shadow-md">
                      <IconComp className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-mono uppercase tracking-wider text-[#b89058] font-bold">
                      {area.subtitle}
                    </span>
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                  <div className="space-y-3">
                    <h3 className="font-serif text-xl font-bold text-[#0f2137] dark:text-[#f8fafc] group-hover:text-[#b89058] transition-colors">
                      {area.title}
                    </h3>
                    
                    <p className={`text-xs leading-relaxed ${isDark ? 'text-[#cbd5e1]' : 'text-[#475569]'}`}>
                      {area.description}
                    </p>

                    {/* Step details checklist */}
                    <div className="space-y-1.5 pt-2 border-t border-current/10">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#64748b] block font-bold">
                        Destaques da Atuação:
                      </span>
                      {area.details.map((detail, dIdx) => (
                        <div key={dIdx} className="flex items-start gap-2 text-xs">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#b89058] shrink-0 mt-0.5" />
                          <span className={`text-[11px] ${isDark ? 'text-[#94a3b8]' : 'text-[#334155]'}`}>{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-current/10 flex flex-col gap-2">
                    <a
                      id={`area-whatsapp-btn-${area.id}`}
                      href={getWhatsAppUrl(area.whatsappMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-whatsapp w-full py-3 px-4 text-xs uppercase tracking-wider text-center select-none"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Falar sobre esta Área</span>
                    </a>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Emergency Plantão 24h Box */}
      <div className={`p-8 rounded-3xl border shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 ${
        isDark ? 'bg-[#101726] border-[#22314a]' : 'bg-[#faf5ed] border-[#ebdcc9]'
      }`}>
        <div className="space-y-2 text-center md:text-left">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase font-bold text-[#b89058]">
            <Clock className="w-4 h-4" />
            <span>Plantão de Urgência 24 Horas</span>
          </div>
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#0f2137] dark:text-[#f8fafc]">
            Ocorrência ou Flagrante em Andamento?
          </h3>
          <p className={`text-xs max-w-xl leading-relaxed ${isDark ? 'text-[#94a3b8]' : 'text-[#554228]'}`}>
            Não preste declarações em delegacia sem a presença de advogado. Acione o plantão criminal imediatamente para resguardo dos direitos constitucionais.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3">
          <a
            href={getWhatsAppUrl('Olá, Dr. Fagner Silva. Preciso de atendimento criminal em regime de plantão urgente.')}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp py-3 px-6 text-xs uppercase tracking-wider select-none"
          >
            <MessageSquare className="w-4 h-4" />
            <span>WhatsApp Plantão</span>
          </a>

          <a
            href={`tel:${lawyerProfile.phoneRaw}`}
            className="btn-secondary py-3 px-5 text-xs uppercase tracking-wider select-none"
          >
            <PhoneCall className="w-3.5 h-3.5 text-[#b89058]" />
            <span>Ligar Agora</span>
          </a>
        </div>
      </div>

    </div>
  );
};
