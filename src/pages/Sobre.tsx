import React from 'react';
import { motion } from 'motion/react';
import { AppRoute } from '../types';
import { lawyerProfile, getWhatsAppUrl } from '../data/lawyerData';
import { useTheme } from '../context/ThemeContext';
import { SafeImage } from '../components/SafeImage';
import { 
  Scale, 
  Landmark, 
  BookOpen, 
  ShieldCheck, 
  PhoneCall, 
  ArrowRight,
  Compass,
  CheckCircle2,
  Instagram,
  Globe,
  ExternalLink,
  Building2,
  Gavel
} from 'lucide-react';

interface SobreProps {
  navigate: (route: AppRoute) => void;
}

export const Sobre: React.FC<SobreProps> = ({ navigate }) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div id="sobre-page-root" className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16 space-y-16 ${isDark ? 'text-[#e2e8f0]' : 'text-[#0f172a]'}`}>
      
      {/* Header Title Section */}
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`border-b pb-8 space-y-3 ${isDark ? 'border-[#1c273c]' : 'border-[#cbd5e1]'}`}
      >
        <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#c5a880] font-semibold">
          <Scale className="w-4 h-4" />
          <span>Perfil & Trajetória Profissional</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold">
          Sobre o <span className="gold-gradient-text">Dr. Fagner Silva</span>
        </h1>
        <p className={`text-sm sm:text-base max-w-3xl leading-relaxed ${isDark ? 'text-[#94a3b8]' : 'text-[#475569]'}`}>
          Defesa técnica criminal especializada, aliada à representatividade comunitária e compromisso público na cidade de Isaías Coelho e em todo o Estado do Piauí.
        </p>
      </motion.div>

      {/* Main Profile Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Left Column: Portrait & Key Facts */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 space-y-6"
        >
          <div className={`rounded-2xl overflow-hidden border shadow-2xl space-y-0 transition-colors ${
            isDark ? 'bg-[#0d121c] border-[#233148]' : 'bg-white border-[#cbd5e1]'
          }`}>
            
            {/* Visual Image Header */}
            <div className="relative h-64 w-full overflow-hidden">
              <SafeImage
                src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=1000&q=80"
                alt="Balança da Justiça e Vade Mecum - Dr. Fagner Silva"
                className="w-full h-full object-cover img-zoom brightness-[0.75] contrast-[1.1]"
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${
                isDark ? 'from-[#0d121c] via-[#0d121c]/40' : 'from-white via-white/30'
              } to-transparent`} />
              
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full bg-[#080b12]/80 backdrop-blur-md border border-[#c5a880]/60 text-[#c5a880] text-[10px] font-mono uppercase tracking-widest flex items-center gap-1.5 shadow-md font-semibold">
                  <Scale className="w-3.5 h-3.5" />
                  <span>Direito Criminal</span>
                </span>
              </div>

              <div className="absolute bottom-4 left-4 right-4">
                <h2 className={`font-serif text-xl font-bold ${isDark ? 'text-[#f8fafc]' : 'text-[#0f172a]'}`}>
                  Dr. Fagner Silva
                </h2>
                <span className="text-xs text-[#c5a880] font-mono uppercase tracking-wider block mt-0.5 font-semibold">
                  Advogado Criminalista • Isaías Coelho/PI
                </span>
              </div>
            </div>

            {/* Quick Facts List */}
            <div className="p-6 space-y-3 text-xs">
              <div className={`flex items-center justify-between p-3 rounded-xl border ${
                isDark ? 'bg-[#101624] border-[#1d273a]' : 'bg-[#fafafa] border-[#e2e8f0]'
              }`}>
                <span className="text-[#64748b] font-medium">Especialidade:</span>
                <span className="font-semibold text-right">{lawyerProfile.specialty}</span>
              </div>

              <div className={`flex items-center justify-between p-3 rounded-xl border ${
                isDark ? 'bg-[#101624] border-[#1d273a]' : 'bg-[#fafafa] border-[#e2e8f0]'
              }`}>
                <span className="text-[#64748b] font-medium">Atuação Cívica:</span>
                <span className="text-[#c5a880] font-semibold text-right">{lawyerProfile.mandate}</span>
              </div>

              <div className={`flex items-center justify-between p-3 rounded-xl border ${
                isDark ? 'bg-[#101624] border-[#1d273a]' : 'bg-[#fafafa] border-[#e2e8f0]'
              }`}>
                <span className="text-[#64748b] font-medium">Comarca Base:</span>
                <span className="font-semibold">{lawyerProfile.city} — {lawyerProfile.state}</span>
              </div>

              <div className={`flex items-center justify-between p-3 rounded-xl border ${
                isDark ? 'bg-[#101624] border-[#1d273a]' : 'bg-[#fafafa] border-[#e2e8f0]'
              }`}>
                <span className="text-[#64748b] font-medium">Inscrição OAB:</span>
                <a 
                  href={lawyerProfile.oabCnaUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[#c5a880] font-mono text-[11px] font-bold hover:underline flex items-center gap-1"
                >
                  <span>Consulta CNA/OAB</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Direct WhatsApp Contact Button */}
              <div className="pt-3">
                <a
                  id="sobre-direct-whatsapp-btn"
                  href={getWhatsAppUrl('Olá, Dr. Fagner Silva. Gostaria de agendar uma consulta sobre um caso criminal.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#c5a880] to-[#dfc399] hover:from-[#dfc399] hover:to-[#c5a880] text-[#070a10] font-bold text-xs uppercase tracking-wider transition-all shadow-lg active:scale-95"
                >
                  <PhoneCall className="w-4 h-4 text-[#070a10]" />
                  <span>Falar no WhatsApp com o Advogado</span>
                </a>
              </div>
            </div>

          </div>

          {/* Regional Roots Card */}
          <div className={`p-6 rounded-2xl border space-y-3 ${
            isDark ? 'bg-[#0d121c] border-[#1e2a3e]' : 'bg-white border-[#cbd5e1] shadow-sm'
          }`}>
            <div className="flex items-center gap-2 text-[#c5a880] text-xs font-mono uppercase tracking-wider font-semibold">
              <Compass className="w-4 h-4" />
              <span>Conhecimento Forense Regional</span>
            </div>
            <p className={`text-xs leading-relaxed ${isDark ? 'text-[#94a3b8]' : 'text-[#64748b]'}`}>
              Atuação direta na comarca de Isaías Coelho, Simplício Mendes, Picos, Floriano, Oeiras e Teresina, compreendendo as particularidades das delegacias e varas criminais piauienses.
            </p>
          </div>
        </motion.div>

        {/* Right Column: Bio, Philosophy & Editorial Details */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 space-y-8"
        >
          
          <div className={`space-y-4 text-xs sm:text-sm leading-relaxed ${isDark ? 'text-[#cbd5e1]' : 'text-[#334155]'}`}>
            <h3 className={`font-serif text-xl sm:text-2xl font-bold ${isDark ? 'text-[#f8fafc]' : 'text-[#0f172a]'}`}>
              Defesa Penal Qualificada & Compromisso com as Liberdades
            </h3>
            
            <p>
              A advocacia criminal exige rigor técnico absoluto, acompanhamento ágil dos prazos e profundo domínio dos entendimentos firmados pelos Tribunais Superiores (TJ-PI, STJ e STF). Diante de uma imputação penal, o advogado é o guardião indispensável das garantias constitucionais.
            </p>

            <p>
              O escritório do <strong className="text-[#c5a880]">Dr. Fagner Silva</strong> fundamenta sua atuação na ética, na combatividade desprovida de preconceitos e na busca incessante pela estrita legalidade, quer em sede de prisões em flagrante e audiências de custódia, quer em sustentações orais perante o Tribunal do Júri e câmaras criminais.
            </p>

            <div className={`p-5 rounded-xl border-l-4 border-[#c5a880] space-y-2 ${
              isDark ? 'bg-[#101726]' : 'bg-[#faf6f0]'
            }`}>
              <h4 className={`font-serif text-sm font-bold flex items-center gap-2 ${isDark ? 'text-[#f8fafc]' : 'text-[#0f172a]'}`}>
                <Landmark className="w-4 h-4 text-[#c5a880]" />
                <span>Atuação Institucional como Vereador</span>
              </h4>
              <p className={`text-xs ${isDark ? 'text-[#94a3b8]' : 'text-[#64748b]'}`}>
                Como Vereador no Município de Isaías Coelho - PI, Dr. Fagner Silva exerce mandato cívico dedicado ao aprimoramento das políticas públicas, à fiscalização do patrimônio público e à proximidade permanente com a população local.
              </p>
            </div>
          </div>

          {/* Pillars of Practice */}
          <div className="space-y-4">
            <h3 className={`font-serif text-lg font-bold ${isDark ? 'text-[#f8fafc]' : 'text-[#0f172a]'}`}>
              Pilares da Atuação Criminal
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className={`p-4 rounded-xl border space-y-2 ${
                isDark ? 'bg-[#0e1422] border-[#1f2d44]' : 'bg-white border-[#cbd5e1] shadow-sm'
              }`}>
                <div className="flex items-center gap-2 text-[#c5a880] font-semibold text-xs">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Atendimento Imediato 24h</span>
                </div>
                <p className={`text-xs ${isDark ? 'text-[#94a3b8]' : 'text-[#64748b]'}`}>
                  Pronta resposta para flagrantes, mandados de prisão e custódia em qualquer horário do dia ou da noite.
                </p>
              </div>

              <div className={`p-4 rounded-xl border space-y-2 ${
                isDark ? 'bg-[#0e1422] border-[#1f2d44]' : 'bg-white border-[#cbd5e1] shadow-sm'
              }`}>
                <div className="flex items-center gap-2 text-[#c5a880] font-semibold text-xs">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Sigilo Absoluto</span>
                </div>
                <p className={`text-xs ${isDark ? 'text-[#94a3b8]' : 'text-[#64748b]'}`}>
                  Garantia estrita do segredo profissional e proteção incondicional das informações do constituinte.
                </p>
              </div>

              <div className={`p-4 rounded-xl border space-y-2 ${
                isDark ? 'bg-[#0e1422] border-[#1f2d44]' : 'bg-white border-[#cbd5e1] shadow-sm'
              }`}>
                <div className="flex items-center gap-2 text-[#c5a880] font-semibold text-xs">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Atuação Artesanal & Estratégica</span>
                </div>
                <p className={`text-xs ${isDark ? 'text-[#94a3b8]' : 'text-[#64748b]'}`}>
                  Cada processo recebe estudo técnico aprofundado e teses sob medida, repudiando soluções padronizadas.
                </p>
              </div>

              <div className={`p-4 rounded-xl border space-y-2 ${
                isDark ? 'bg-[#0e1422] border-[#1f2d44]' : 'bg-white border-[#cbd5e1] shadow-sm'
              }`}>
                <div className="flex items-center gap-2 text-[#c5a880] font-semibold text-xs">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Transparência Total</span>
                </div>
                <p className={`text-xs ${isDark ? 'text-[#94a3b8]' : 'text-[#64748b]'}`}>
                  Contratos claros, prestação contínua de contas sobre cada andamento processual e realismo técnico.
                </p>
              </div>
            </div>
          </div>

          {/* Social & Official Portals Links */}
          <div className={`p-5 rounded-2xl border flex flex-wrap items-center justify-between gap-4 ${
            isDark ? 'bg-[#0d121c] border-[#1f2d43]' : 'bg-[#faf7f2] border-[#cbd5e1]'
          }`}>
            <div className="flex items-center gap-3">
              <a
                href={lawyerProfile.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#e1306c]/15 text-[#e1306c] border border-[#e1306c]/30 text-xs font-bold hover:bg-[#e1306c]/25 transition-colors"
              >
                <Instagram className="w-4 h-4" />
                <span>@advfagnersilva</span>
              </a>

              <a
                href={lawyerProfile.pje1gUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#c5a880]/15 text-[#c5a880] border border-[#c5a880]/30 text-xs font-bold hover:bg-[#c5a880]/25 transition-colors"
              >
                <Globe className="w-4 h-4" />
                <span>PJe TJ-PI</span>
              </a>
            </div>

            <button
              onClick={() => {
                navigate('atuacao');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-xs uppercase tracking-wider font-bold text-[#c5a880] hover:underline flex items-center gap-1.5"
            >
              <span>Ver Áreas de Atuação</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </motion.div>

      </div>

    </div>
  );
};
