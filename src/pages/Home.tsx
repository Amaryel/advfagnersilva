import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { AppRoute, PracticeArea, CasePrecedent } from '../types';
import { 
  lawyerProfile, 
  practiceAreas, 
  casePrecedents, 
  getWhatsAppUrl 
} from '../data/lawyerData';
import { useTheme } from '../context/ThemeContext';
import { SafeImage } from '../components/SafeImage';
import { 
  Scale, 
  ShieldAlert, 
  PhoneCall, 
  Clock, 
  CheckCircle2, 
  ArrowRight, 
  Building2, 
  FileText, 
  Landmark, 
  AlertTriangle, 
  Instagram, 
  Globe, 
  ExternalLink,
  ChevronRight,
  Gavel,
  BookOpen,
  Compass,
  Lock,
  MessageSquare
} from 'lucide-react';

interface HomeProps {
  navigate: (route: AppRoute) => void;
}

export const Home: React.FC<HomeProps> = ({ navigate }) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const [activeTriage, setActiveTriage] = useState<'flagrante' | 'intimacao' | 'custodia' | 'juri' | 'execucao'>('flagrante');

  const featuredAreas = practiceAreas.slice(0, 4);
  const featuredCases = casePrecedents.slice(0, 3);

  const triageOptions = [
    {
      id: 'flagrante',
      title: 'Prisão em Flagrante',
      subtitle: 'Atuação imediata na Delegacia',
      icon: AlertTriangle,
      urgency: 'Urgência Máxima • 24 Horas',
      guidance: 'Nas primeiras horas após a prisão, nossa prioridade absoluta é resguardar o direito ao silêncio, verificar a legalidade da abordagem policial e preparar a fundamentação para a liberdade provisória ou relaxamento do flagrante.',
      steps: ['Contato direto com a autoridade policial', 'Garantia de integridade física e direitos', 'Pedido de relaxamento ou liberdade sem fiança'],
      waMessage: 'Olá, Dr. Fagner Silva. Preciso de atendimento URGENTE para uma PRISÃO EM FLAGRANTE em andamento.'
    },
    {
      id: 'intimacao',
      title: 'Intimação Policial',
      subtitle: 'Como agir ao ser chamado a depor',
      icon: FileText,
      urgency: 'Atuação Preventiva',
      guidance: 'Comparecer a uma delegacia sem assistência técnica prévia pode gerar prejuízos irreparáveis. O advogado examina os autos do inquérito de antemão e orienta detalhadamente o depoimento para evitar autoincriminação indevida.',
      steps: ['Habilitação e cópia integral do inquérito', 'Análise das provas e declarações prévias', 'Acompanhamento presencial no interrogatório'],
      waMessage: 'Olá, Dr. Fagner Silva. Recebi uma INTIMAÇÃO POLICIAL para depor e gostaria de acompanhamento preventivo.'
    },
    {
      id: 'custodia',
      title: 'Audiência de Custódia',
      subtitle: 'Defesa da liberdade perante o Juiz',
      icon: Gavel,
      urgency: 'Prazo Legal de 24h',
      guidance: 'A audiência de custódia é o momento decisivo para demonstrar a desnecessidade da prisão preventiva, comprovando residência fixa, trabalho lícito e propondo medidas cautelares alternativas ao cárcere.',
      steps: ['Entrevista prévia e reservada com o custodiado', 'Comprovação de requisitos subjetivos favoráveis', 'Sustentação oral pela concessão de liberdade'],
      waMessage: 'Olá, Dr. Fagner Silva. Preciso de assistência para uma AUDIÊNCIA DE CUSTÓDIA marcada no TJ-PI.'
    },
    {
      id: 'juri',
      title: 'Tribunal do Júri',
      subtitle: 'Crimes dolosos contra a vida',
      icon: Scale,
      urgency: 'Alta Complexidade Técnica',
      guidance: 'Atuação artesanal e minuciosa desde a 1ª fase (pronúncia) até os debates orais em plenário diante dos jurados populares, sustentando legítima defesa, desclassificação ou clemência.',
      steps: ['Reconstituição e perícia técnica detalhada', 'Preparação de testemunhas e quesitos', 'Defesa combativa e sustentação em plenário'],
      waMessage: 'Olá, Dr. Fagner Silva. Gostaria de conversar sobre a defesa de um processo em fase de TRIBUNAL DO JÚRI no TJ-PI.'
    },
    {
      id: 'execucao',
      title: 'Execução Penal & Regime',
      subtitle: 'Benefícios e direitos do apenado',
      icon: Lock,
      urgency: 'Cálculo de Benefícios',
      guidance: 'Garantimos que o cumprimento da pena observe estritamente os prazos legais, requerendo progressão para o semiaberto/aberto, livramento condicional e remição de pena por trabalho e estudo.',
      steps: ['Cálculo dos percentuais de pena cumprida', 'Certidão de bom comportamento carcerário', 'Pedido formal de progressão ou remição'],
      waMessage: 'Olá, Dr. Fagner Silva. Gostaria de solicitar o cálculo e pedido de PROGRESSÃO DE REGIME / BENEFÍCIOS de execução penal para um familiar.'
    }
  ];

  const currentTriageData = triageOptions.find(t => t.id === activeTriage) || triageOptions[0];

  return (
    <div id="home-page-root" className={`space-y-16 md:space-y-24 py-4 md:py-8 transition-colors ${isDark ? 'text-[#e2e8f0]' : 'text-[#0f172a]'}`}>
      
      {/* HERO SECTION */}
      <section id="hero-section" className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-2 sm:pt-6">
        
        {/* Ambient Subtle Glows */}
        <div className={`absolute top-10 left-1/4 -translate-y-1/2 -translate-x-1/2 w-[400px] sm:w-[550px] h-[400px] sm:h-[550px] rounded-full blur-[120px] pointer-events-none ${
          isDark ? 'bg-[#c5a880]/12' : 'bg-[#c5a880]/20'
        }`} />
        
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Main Hero Copy */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 sm:space-y-7"
          >
            {/* Tag Badge */}
            <div className={`inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full text-xs font-mono tracking-wider shadow-sm border ${
              isDark 
                ? 'bg-[#101622] border-[#26354d] text-[#c5a880]' 
                : 'bg-[#faf7f2] border-[#c5a880]/40 text-[#855d21]'
            }`}>
              <span className="w-2 h-2 rounded-full bg-[#c5a880] animate-pulse"></span>
              <span className="uppercase font-semibold">Direito Penal & Processual Penal</span>
              <span className={isDark ? 'text-[#475569]' : 'text-[#cbd5e1]'}>|</span>
              <span className={isDark ? 'text-[#cbd5e1]' : 'text-[#475569]'}>Isaías Coelho • PI</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-5xl font-bold tracking-tight leading-[1.15]">
              Defesa Técnica e Estratégica na <span className="gold-gradient-text font-extrabold">Advocacia Criminal</span>.
            </h1>

            {/* Sub-headline */}
            <p className={`text-base sm:text-lg leading-relaxed max-w-2xl font-normal ${isDark ? 'text-[#94a3b8]' : 'text-[#475569]'}`}>
              Atuação combativa e pautada no rigor da lei para assegurar a ampla defesa, o devido processo legal e a preservação irrestrita da liberdade individual na comarca de Isaías Coelho, Vale do Canindé e em todo o Piauí.
            </p>

            {/* Quick Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs">
              <div className={`p-3.5 rounded-xl border flex items-center gap-3 interactive-card ${
                isDark 
                  ? 'bg-[#0d121c]/90 border-[#1f2b3e] hover:border-[#c5a880]/50' 
                  : 'bg-white border-[#cbd5e1] shadow-sm hover:border-[#c5a880]'
              }`}>
                <div className="p-2 rounded-lg bg-amber-500/15 border border-amber-500/30 text-amber-500 shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <div className={`font-semibold ${isDark ? 'text-[#f1f5f9]' : 'text-[#0f172a]'}`}>Plantão 24h</div>
                  <div className={`text-[11px] ${isDark ? 'text-[#64748b]' : 'text-[#64748b]'}`}>Flagrantes & Urgências</div>
                </div>
              </div>

              <div className={`p-3.5 rounded-xl border flex items-center gap-3 interactive-card ${
                isDark 
                  ? 'bg-[#0d121c]/90 border-[#1f2b3e] hover:border-[#c5a880]/50' 
                  : 'bg-white border-[#cbd5e1] shadow-sm hover:border-[#c5a880]'
              }`}>
                <div className="p-2 rounded-lg bg-[#c5a880]/15 border border-[#c5a880]/30 text-[#c5a880] shrink-0">
                  <Building2 className="w-4 h-4" />
                </div>
                <div>
                  <div className={`font-semibold ${isDark ? 'text-[#f1f5f9]' : 'text-[#0f172a]'}`}>Atuação Regional</div>
                  <div className={`text-[11px] ${isDark ? 'text-[#64748b]' : 'text-[#64748b]'}`}>Vale do Canindé & TJ-PI</div>
                </div>
              </div>

              <div className={`p-3.5 rounded-xl border flex items-center gap-3 interactive-card ${
                isDark 
                  ? 'bg-[#0d121c]/90 border-[#1f2b3e] hover:border-[#c5a880]/50' 
                  : 'bg-white border-[#cbd5e1] shadow-sm hover:border-[#c5a880]'
              }`}>
                <div className="p-2 rounded-lg bg-emerald-500/15 border border-emerald-500/30 text-emerald-500 shrink-0">
                  <Landmark className="w-4 h-4" />
                </div>
                <div>
                  <div className={`font-semibold ${isDark ? 'text-[#f1f5f9]' : 'text-[#0f172a]'}`}>Atuação Cívica</div>
                  <div className={`text-[11px] ${isDark ? 'text-[#64748b]' : 'text-[#64748b]'}`}>Vereador em Isaías Coelho</div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <a
                id="hero-whatsapp-cta-primary"
                href={getWhatsAppUrl('Olá, Dr. Fagner Silva. Preciso de atendimento criminal e gostaria de apresentar meu caso.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-gradient-to-r from-[#c5a880] to-[#dfc399] hover:from-[#dfc399] hover:to-[#c5a880] text-[#070a10] font-bold text-xs tracking-wider uppercase shadow-xl shadow-[#c5a880]/20 btn-shimmer touch-press border border-[#f3e7d3]/30 cursor-pointer select-none"
              >
                <ShieldAlert className="w-4 h-4 text-[#070a10]" />
                <span>Atendimento no WhatsApp</span>
              </a>

              <button
                id="hero-view-areas-btn"
                onClick={() => {
                  navigate('atuacao');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl border text-xs font-semibold tracking-wider uppercase backdrop-blur-sm touch-press cursor-pointer select-none ${
                  isDark 
                    ? 'bg-[#111726]/90 hover:bg-[#182338] border-[#273752] hover:border-[#c5a880]/60 text-[#e2e8f0]' 
                    : 'bg-white hover:bg-[#f8fafc] border-[#cbd5e1] hover:border-[#c5a880] text-[#0f172a] shadow-sm'
                }`}
              >
                <span>Conhecer Áreas de Atuação</span>
                <ArrowRight className="w-4 h-4 text-[#c5a880]" />
              </button>
            </div>
          </motion.div>

          {/* Visual Showcase Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-5"
          >
            <div className="relative group">
              {/* Outer Glow */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-[#c5a880]/30 via-transparent to-[#2b3c5a]/40 opacity-80 blur-md group-hover:opacity-100 transition-opacity pointer-events-none" />

              <div className={`relative border rounded-2xl overflow-hidden shadow-2xl space-y-0 interactive-card ${
                isDark ? 'bg-[#0c1018] border-[#223049]' : 'bg-white border-[#cbd5e1]'
              }`}>
                
                {/* Visual Image Header */}
                <div className="relative h-56 w-full overflow-hidden">
                  <SafeImage
                    src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1000&q=80"
                    alt="Tribunal de Justiça e Defesa Criminal"
                    className="w-full h-full object-cover img-zoom brightness-[0.8] contrast-[1.1]"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${
                    isDark ? 'from-[#0c1018] via-[#0c1018]/40' : 'from-white via-white/30'
                  } to-transparent`} />
                  
                  {/* Floating Badge */}
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[#080b12]/80 backdrop-blur-md border border-[#c5a880]/60 text-[#c5a880] text-[10px] font-mono uppercase tracking-widest flex items-center gap-1.5 shadow-lg">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Advocacia Criminal</span>
                  </div>

                  <div className="absolute bottom-3 left-4 right-4">
                    <span className="text-[10px] font-mono tracking-widest uppercase text-[#c5a880] font-semibold block">
                      Isaías Coelho — Piauí
                    </span>
                    <h2 className={`font-serif text-xl font-bold ${isDark ? 'text-[#f8fafc]' : 'text-[#0f172a]'}`}>
                      Dr. Fagner Silva
                    </h2>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 space-y-5">
                  <p className={`text-xs leading-relaxed ${isDark ? 'text-[#94a3b8]' : 'text-[#475569]'}`}>
                    Assistência jurídica integral em delegacias, audiências de custódia, Tribunal do Júri e recursos perante o Tribunal de Justiça do Piauí e Tribunais Superiores em Brasília.
                  </p>

                  <div className={`p-3.5 rounded-xl border-l-4 border-[#c5a880] space-y-1 ${
                    isDark ? 'bg-[#121824]' : 'bg-[#faf7f2]'
                  }`}>
                    <div className={`font-semibold text-xs flex items-center gap-1.5 ${isDark ? 'text-[#f1f5f9]' : 'text-[#0f172a]'}`}>
                      <Landmark className="w-3.5 h-3.5 text-[#c5a880]" />
                      <span>{lawyerProfile.mandate}</span>
                    </div>
                    <p className={`text-[11px] ${isDark ? 'text-[#64748b]' : 'text-[#64748b]'}`}>
                      Vínculo ético com a comunidade de Isaías Coelho e compromisso com os direitos fundamentais.
                    </p>
                  </div>

                  <div className={`pt-2 border-t grid grid-cols-2 gap-3 text-[11px] ${isDark ? 'border-[#1b263b]' : 'border-[#e2e8f0]'}`}>
                    <div>
                      <span className="block text-[10px] uppercase font-mono text-[#64748b]">Telefone Direto:</span>
                      <a href={`tel:${lawyerProfile.phoneRaw}`} className={`font-bold hover:text-[#c5a880] transition-colors ${isDark ? 'text-[#f1f5f9]' : 'text-[#0f172a]'}`}>
                        {lawyerProfile.phoneFormatted}
                      </a>
                    </div>
                    <div>
                      <span className="block text-[10px] uppercase font-mono text-[#64748b]">Plantão:</span>
                      <span className="text-emerald-500 font-semibold flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span>
                        Disponível 24h
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 pt-1">
                    <button
                      id="hero-card-view-about-btn"
                      onClick={() => {
                        navigate('sobrenos');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className={`w-full py-2.5 px-3 rounded-xl border text-xs font-semibold tracking-wider uppercase flex items-center justify-center gap-1.5 touch-press cursor-pointer select-none ${
                        isDark 
                          ? 'bg-[#162032] hover:bg-[#1e2d46] border-[#2b3c5a] text-[#c5a880]' 
                          : 'bg-[#faf7f2] hover:bg-[#f5eee3] border-[#c5a880]/50 text-[#855d21]'
                      }`}
                    >
                      <span>Perfil Completo</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>

                    <a
                      id="hero-card-instagram-btn"
                      href={lawyerProfile.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full py-2.5 px-3 rounded-xl border text-xs font-semibold tracking-wider uppercase flex items-center justify-center gap-1.5 touch-press cursor-pointer select-none ${
                        isDark 
                          ? 'bg-[#162032] hover:bg-[#1e2d46] border-[#2b3c5a] text-[#e1306c]' 
                          : 'bg-white hover:bg-[#f8fafc] border-[#cbd5e1] text-[#e1306c]'
                      }`}
                    >
                      <Instagram className="w-3.5 h-3.5" />
                      <span>Instagram</span>
                    </a>
                  </div>

                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* INTERACTIVE EMERGENCY TRIAGE MODULE */}
      <section id="triage-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`rounded-2xl border p-6 sm:p-10 shadow-2xl relative overflow-hidden space-y-8 transition-colors ${
          isDark 
            ? 'bg-gradient-to-b from-[#101624] via-[#0d121c] to-[#090d16] border-[#22314a]' 
            : 'bg-white border-[#cbd5e1]'
        }`}>
          
          {/* Section Header */}
          <div className={`flex flex-col md:flex-row md:items-end justify-between gap-4 border-b pb-6 ${
            isDark ? 'border-[#1b273b]' : 'border-[#cbd5e1]'
          }`}>
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#c5a880] font-semibold">
                <Compass className="w-4 h-4" />
                <span>Orientação Imediata</span>
              </div>
              <h2 className={`font-serif text-2xl sm:text-3xl font-bold ${isDark ? 'text-[#f8fafc]' : 'text-[#0f172a]'}`}>
                Triagem Rápida de Atendimento Criminal
              </h2>
              <p className={`text-xs sm:text-sm max-w-2xl ${isDark ? 'text-[#94a3b8]' : 'text-[#475569]'}`}>
                Selecione a situação atual para visualizar as recomendações defensivas imediatas e acionar o canal direto correspondente.
              </p>
            </div>

            <div className="text-xs font-mono text-amber-500 bg-amber-500/10 border border-amber-500/30 px-3 py-1.5 rounded-lg flex items-center gap-2 self-start md:self-auto font-semibold">
              <ShieldAlert className="w-3.5 h-3.5" />
              <span>Plantão: (89) 99414-8236</span>
            </div>
          </div>

          {/* Triage Selector Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
            {triageOptions.map((opt) => {
              const IconComponent = opt.icon;
              const isActive = activeTriage === opt.id;
              return (
                <button
                  key={opt.id}
                  onClick={() => setActiveTriage(opt.id as any)}
                  className={`p-3.5 rounded-xl text-left border flex flex-col justify-between gap-3 interactive-card touch-press cursor-pointer select-none ${
                    isActive
                      ? isDark
                        ? 'bg-[#182338] border-[#c5a880] shadow-lg shadow-[#c5a880]/15 text-[#f8fafc]'
                        : 'bg-[#faf6f0] border-[#c5a880] shadow-md text-[#0f172a]'
                      : isDark
                        ? 'bg-[#0b0f17] border-[#1a2538] hover:border-[#2b3d5b] text-[#94a3b8] hover:text-[#cbd5e1]'
                        : 'bg-[#f8fafc] border-[#cbd5e1] hover:border-[#94a3b8] text-[#475569] hover:text-[#0f172a]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <IconComponent className={`w-5 h-5 ${isActive ? 'text-[#c5a880]' : 'text-[#64748b]'}`} />
                    {isActive && <span className="w-2 h-2 rounded-full bg-[#c5a880]" />}
                  </div>
                  <div>
                    <div className="font-serif text-xs font-bold leading-snug">
                      {opt.title}
                    </div>
                    <div className="text-[10px] text-[#64748b] mt-0.5 line-clamp-1">
                      {opt.subtitle}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Triage Guidance Display */}
          <div className={`border rounded-xl p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center ${
            isDark ? 'bg-[#090d16] border-[#1d2b40]' : 'bg-[#fafafa] border-[#cbd5e1]'
          }`}>
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded text-[10px] uppercase font-mono font-bold tracking-wider bg-[#c5a880]/15 text-[#c5a880] border border-[#c5a880]/30">
                  {currentTriageData.urgency}
                </span>
                <span className="text-xs text-[#64748b] font-medium font-mono">
                  {currentTriageData.subtitle}
                </span>
              </div>

              <h3 className={`font-serif text-xl sm:text-2xl font-bold ${isDark ? 'text-[#f8fafc]' : 'text-[#0f172a]'}`}>
                {currentTriageData.title}
              </h3>

              <p className={`text-xs sm:text-sm leading-relaxed ${isDark ? 'text-[#cbd5e1]' : 'text-[#334155]'}`}>
                {currentTriageData.guidance}
              </p>

              <div className="space-y-2 pt-2">
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#64748b] block font-semibold">
                  Ações Imediatas Recomendadas:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                  {currentTriageData.steps.map((step, idx) => (
                    <div 
                      key={idx} 
                      className={`p-2.5 rounded-lg border flex items-start gap-2 interactive-card ${
                        isDark ? 'bg-[#101624] border-[#1b273b] text-[#cbd5e1]' : 'bg-white border-[#cbd5e1] text-[#334155]'
                      }`}
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#c5a880] shrink-0 mt-0.5" />
                      <span className="text-[11px] font-medium">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Direct Triage CTA */}
            <div className="lg:col-span-4 flex flex-col gap-3">
              <a
                id={`triage-wa-btn-${currentTriageData.id}`}
                href={getWhatsAppUrl(currentTriageData.waMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-5 rounded-xl bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#20bd5a] hover:to-[#0f776a] text-black font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg btn-shimmer touch-press cursor-pointer select-none text-center"
              >
                <MessageSquare className="w-4 h-4 fill-black/20" />
                <span>Acionar Plantão para este Caso</span>
              </a>

              <a
                href={`tel:${lawyerProfile.phoneRaw}`}
                className={`w-full py-3 px-4 rounded-xl border text-xs uppercase tracking-wider font-semibold flex items-center justify-center gap-2 touch-press cursor-pointer select-none ${
                  isDark 
                    ? 'border-[#293b58] text-[#cbd5e1] hover:bg-[#131b2a]' 
                    : 'border-[#cbd5e1] text-[#334155] hover:bg-white bg-[#f1f5f9]'
                }`}
              >
                <PhoneCall className="w-3.5 h-3.5 text-[#c5a880]" />
                <span>Ligar Agora ({lawyerProfile.phoneFormatted})</span>
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* FEATURED PRACTICE AREAS SECTION */}
      <section id="featured-areas-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#c5a880] font-semibold">
                <Scale className="w-4 h-4" />
                <span>Práticas Criminais Especializadas</span>
              </div>
              <h2 className={`font-serif text-2xl sm:text-4xl font-bold mt-1 ${isDark ? 'text-[#f8fafc]' : 'text-[#0f172a]'}`}>
                Principais Áreas de Atuação
              </h2>
            </div>

            <button
              onClick={() => {
                navigate('atuacao');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 text-xs uppercase font-bold tracking-wider text-[#c5a880] hover:underline touch-press cursor-pointer select-none"
            >
              <span>Ver todas as especialidades</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredAreas.map((area) => (
              <div
                key={area.id}
                className={`rounded-2xl border overflow-hidden flex flex-col justify-between interactive-card group ${
                  isDark 
                    ? 'bg-[#0c1018] border-[#1e2a3f] hover:border-[#c5a880]/80 shadow-xl' 
                    : 'bg-white border-[#cbd5e1] hover:border-[#c5a880] shadow-md hover:shadow-lg'
                }`}
              >
                <div className="relative h-44 w-full overflow-hidden">
                  <SafeImage
                    src={area.imageUrl}
                    alt={area.title}
                    className="w-full h-full object-cover img-zoom brightness-[0.75] contrast-[1.1]"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${
                    isDark ? 'from-[#0c1018]' : 'from-white'
                  } via-transparent to-transparent`} />
                  
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-md bg-[#080b12]/80 backdrop-blur-sm border border-[#c5a880]/50 text-[#c5a880] text-[10px] font-mono font-bold uppercase tracking-wider">
                      {area.badge || 'Direito Penal'}
                    </span>
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className={`font-serif text-base font-bold group-hover:text-[#c5a880] transition-colors ${
                      isDark ? 'text-[#f8fafc]' : 'text-[#0f172a]'
                    }`}>
                      {area.title}
                    </h3>
                    <p className={`text-xs mt-2 line-clamp-3 leading-relaxed ${
                      isDark ? 'text-[#94a3b8]' : 'text-[#64748b]'
                    }`}>
                      {area.description}
                    </p>
                  </div>

                  <div className="pt-2">
                    <a
                      href={getWhatsAppUrl(`Olá, Dr. Fagner Silva. Gostaria de atendimento sobre ${area.title}.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#c5a880] hover:text-[#dfc399] transition-colors uppercase tracking-wider touch-press"
                    >
                      <span>Consultar área</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CASE PRECEDENTS TEASER */}
      <section id="cases-teaser-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`p-8 sm:p-10 rounded-2xl border shadow-xl space-y-6 ${
          isDark ? 'bg-[#0d121c] border-[#1e293b]' : 'bg-[#faf7f2] border-[#cbd5e1]'
        }`}>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b pb-6 border-current/10">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#c5a880] font-semibold">
                <BookOpen className="w-4 h-4" />
                <span>PJe TJ-PI & Jurisprudência</span>
              </div>
              <h2 className={`font-serif text-2xl sm:text-3xl font-bold mt-1 ${isDark ? 'text-[#f8fafc]' : 'text-[#0f172a]'}`}>
                Casos & Precedentes Trabalhados
              </h2>
            </div>

            <button
              onClick={() => {
                navigate('casos');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 text-xs uppercase font-bold tracking-wider text-[#c5a880] hover:underline touch-press cursor-pointer select-none"
            >
              <span>Ver todos os casos e PJe TJ-PI</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {featuredCases.map((c) => (
              <div 
                key={c.id} 
                className={`p-5 rounded-xl border flex flex-col justify-between gap-3 interactive-card ${
                  isDark ? 'bg-[#121824] border-[#1f2d43]' : 'bg-white border-[#cbd5e1] shadow-sm'
                }`}
              >
                <div className="space-y-2">
                  <span className="text-[10px] font-mono uppercase font-bold text-[#c5a880] bg-[#c5a880]/15 px-2 py-0.5 rounded border border-[#c5a880]/30 inline-block">
                    {c.category}
                  </span>
                  <h3 className={`font-serif font-bold text-sm ${isDark ? 'text-[#f8fafc]' : 'text-[#0f172a]'}`}>
                    {c.title}
                  </h3>
                  <p className={`text-xs line-clamp-3 leading-relaxed ${isDark ? 'text-[#94a3b8]' : 'text-[#64748b]'}`}>
                    {c.caseSummary}
                  </p>
                </div>

                <div className="pt-2 border-t border-current/10 flex items-center justify-between text-xs">
                  <span className="text-[11px] font-mono text-[#64748b]">{c.dateOrYear}</span>
                  <button
                    onClick={() => {
                      navigate('casos');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="text-[#c5a880] font-bold text-xs hover:underline flex items-center gap-1 touch-press cursor-pointer select-none"
                  >
                    <span>Ver tese</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL INSTITUTIONAL BANNER */}
      <section id="cta-bottom-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`rounded-2xl border p-8 sm:p-12 text-center space-y-6 shadow-2xl relative overflow-hidden ${
          isDark 
            ? 'bg-gradient-to-r from-[#101726] via-[#141e30] to-[#0c121e] border-[#25354e]' 
            : 'bg-gradient-to-r from-[#f5ede0] via-white to-[#faf3e8] border-[#cbd5e1]'
        }`}>
          <div className="max-w-2xl mx-auto space-y-3">
            <h2 className={`font-serif text-2xl sm:text-4xl font-bold ${isDark ? 'text-[#f8fafc]' : 'text-[#0f172a]'}`}>
              Precisa de assistência criminal imediata?
            </h2>
            <p className={`text-xs sm:text-sm leading-relaxed ${isDark ? 'text-[#94a3b8]' : 'text-[#475569]'}`}>
              O Dr. Fagner Silva está disponível no plantão telefônico e no WhatsApp oficial para orientar e atuar com celeridade e rigor técnico.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a
              id="cta-bottom-whatsapp-btn"
              href={getWhatsAppUrl('Olá, Dr. Fagner Silva. Gostaria de orientação jurídica criminal.')}
              target="_blank"
              rel="noopener noreferrer"
              className="py-3.5 px-6 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-black font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg btn-shimmer touch-press cursor-pointer select-none"
            >
              <MessageSquare className="w-4 h-4 fill-black/20" />
              <span>Chamar no WhatsApp de Plantão</span>
            </a>

            <a
              id="cta-bottom-call-btn"
              href={`tel:${lawyerProfile.phoneRaw}`}
              className={`py-3.5 px-6 rounded-xl border text-xs uppercase tracking-wider font-semibold flex items-center gap-2 touch-press cursor-pointer select-none ${
                isDark 
                  ? 'border-[#2e4060] bg-[#121927] text-[#cbd5e1] hover:bg-[#1a2438]' 
                  : 'border-[#cbd5e1] bg-white text-[#0f172a] hover:bg-[#f8fafc]'
              }`}
            >
              <PhoneCall className="w-4 h-4 text-[#c5a880]" />
              <span>Ligar: {lawyerProfile.phoneFormatted}</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
