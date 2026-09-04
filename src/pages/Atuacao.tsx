import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { AppRoute, PracticeArea } from '../types';
import { practiceAreas, getWhatsAppUrl } from '../data/lawyerData';
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
  Sparkles
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
      default: return Briefcase;
    }
  };

  const filteredAreas = selectedAreaId === 'all' 
    ? practiceAreas 
    : practiceAreas.filter(a => a.id === selectedAreaId);

  return (
    <div id="atuacao-page-root" className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16 space-y-12 ${isDark ? 'text-[#e2e8f0]' : 'text-[#0f172a]'}`}>
      
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`border-b pb-8 space-y-3 ${isDark ? 'border-[#1c273c]' : 'border-[#cbd5e1]'}`}
      >
        <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#c5a880] font-semibold">
          <Scale className="w-4 h-4" />
          <span>Especialidades Jurídicas</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold">
          Áreas de Atuação em <span className="gold-gradient-text">Direito Criminal</span>
        </h1>
        <p className={`text-sm sm:text-base max-w-3xl leading-relaxed ${isDark ? 'text-[#94a3b8]' : 'text-[#475569]'}`}>
          Atuação especializada em todas as etapas da persecução penal, com foco na garantia da ampla defesa, nulidade de provas ilegais e busca pela liberdade processual no Piauí e Tribunais Superiores.
        </p>
      </motion.div>

      {/* Filter Chips */}
      <div className="flex flex-wrap items-center gap-2 pt-1">
        <div className="flex items-center gap-1.5 text-xs text-[#64748b] mr-2 font-medium">
          <Filter className="w-3.5 h-3.5 text-[#c5a880]" />
          <span>Filtrar:</span>
        </div>

        <button
          onClick={() => setSelectedAreaId('all')}
          className={`px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all ${
            selectedAreaId === 'all'
              ? 'bg-[#c5a880] text-[#070a10] shadow-md shadow-[#c5a880]/20'
              : isDark
                ? 'bg-[#0e1420] border border-[#223049] text-[#94a3b8] hover:text-[#f8fafc]'
                : 'bg-white border border-[#cbd5e1] text-[#475569] hover:text-[#0f172a]'
          }`}
        >
          Todas ({practiceAreas.length})
        </button>

        {practiceAreas.map((area) => (
          <button
            key={area.id}
            onClick={() => setSelectedAreaId(area.id)}
            className={`px-3.5 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all ${
              selectedAreaId === area.id
                ? 'bg-[#c5a880] text-[#070a10] shadow-md shadow-[#c5a880]/20'
                : isDark
                  ? 'bg-[#0e1420] border border-[#223049] text-[#94a3b8] hover:text-[#f8fafc]'
                  : 'bg-white border border-[#cbd5e1] text-[#475569] hover:text-[#0f172a]'
            }`}
          >
            {area.title}
          </button>
        ))}
      </div>

      {/* Practice Areas Grid */}
      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        <AnimatePresence>
          {filteredAreas.map((area) => {
            const IconComp = getIcon(area.iconName);
            return (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                key={area.id}
                id={`practice-card-${area.id}`}
                className={`rounded-2xl border overflow-hidden flex flex-col justify-between transition-all duration-300 shadow-xl group ${
                  isDark 
                    ? 'bg-[#0d121c] border-[#1f2d43] hover:border-[#c5a880]/80' 
                    : 'bg-white border-[#cbd5e1] hover:border-[#c5a880] shadow-md hover:shadow-lg'
                }`}
              >
                {/* Image Banner with SafeImage */}
                <div className="relative h-48 w-full overflow-hidden">
                  <SafeImage
                    src={area.imageUrl}
                    alt={area.title}
                    className="w-full h-full object-cover img-zoom brightness-[0.75] contrast-[1.1]"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${
                    isDark ? 'from-[#0d121c] via-[#0d121c]/40' : 'from-white via-white/30'
                  } to-transparent`} />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-[#0a0e16]/90 backdrop-blur-md border border-[#c5a880]/50 flex items-center justify-center text-[#c5a880] shadow-md">
                      <IconComp className="w-5 h-5" />
                    </div>

                    {area.urgencyLevel === 'immediate' ? (
                      <span className="px-2.5 py-1 rounded-full bg-red-950/90 border border-red-700 text-red-200 text-[10px] uppercase font-mono font-bold tracking-wider flex items-center gap-1.5 shadow-md">
                        <Clock className="w-3 h-3 text-red-400" />
                        <span>Plantão Imediato 24h</span>
                      </span>
                    ) : (
                      <span className="px-2.5 py-1 rounded-full bg-[#0a0e16]/80 backdrop-blur-sm border border-[#2b3c58] text-[#c5a880] text-[10px] uppercase font-mono font-semibold tracking-wider">
                        {area.badge || 'Atuação Penal'}
                      </span>
                    )}
                  </div>

                  <div className="absolute bottom-3 left-5 right-5">
                    <h2 className={`font-serif text-xl font-bold group-hover:text-[#c5a880] transition-colors leading-snug ${
                      isDark ? 'text-[#f8fafc]' : 'text-[#0f172a]'
                    }`}>
                      {area.title}
                    </h2>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <p className={`text-xs sm:text-sm leading-relaxed ${isDark ? 'text-[#cbd5e1]' : 'text-[#475569]'}`}>
                      {area.description}
                    </p>

                    <div className="space-y-2 pt-1">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-[#c5a880] block font-semibold">
                        Ações & Procedimentos Típicos:
                      </span>
                      <ul className="space-y-1.5">
                        {area.details.map((detail, idx) => (
                          <li key={idx} className={`text-xs flex items-start gap-2 ${isDark ? 'text-[#94a3b8]' : 'text-[#64748b]'}`}>
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#c5a880] shrink-0 mt-0.5" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className={`pt-4 border-t flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 ${
                    isDark ? 'border-[#1b263b]' : 'border-[#cbd5e1]'
                  }`}>
                    <a
                      id={`whatsapp-area-btn-${area.id}`}
                      href={getWhatsAppUrl(area.whatsappMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-[#c5a880] to-[#dfc399] hover:from-[#dfc399] hover:to-[#c5a880] text-[#070a10] font-bold text-xs uppercase tracking-wider transition-all shadow-md active:scale-95"
                    >
                      <MessageSquare className="w-3.5 h-3.5 text-[#070a10]" />
                      <span>Atendimento WhatsApp</span>
                    </a>

                    <button
                      onClick={() => {
                        navigate('contato');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className={`text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-center gap-1 py-2 ${
                        isDark ? 'text-[#94a3b8] hover:text-[#f8fafc]' : 'text-[#64748b] hover:text-[#0f172a]'
                      }`}
                    >
                      <span>Enviar Dúvida por E-mail</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>

    </div>
  );
};
