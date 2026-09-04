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
  MessageSquare,
  ShieldCheck,
  UserCheck,
  HeartHandshake,
  Award,
  Sparkles
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
      urgency: 'Urgência Máxima • Plantão 24 Horas',
      guidance: 'Nas primeiras horas após a prisão, nossa prioridade absoluta é resguardar o direito constitucional ao silêncio, fiscalizar a legalidade dos atos policiais e pleitear o relaxamento do flagrante ou concessão de liberdade provisória.',
      steps: ['Contato direto com a autoridade policial', 'Garantia de integridade física e direitos', 'Pedido imediato de liberdade sem fiança'],
      waMessage: 'Olá, Dr. Fagner Silva. Preciso de atendimento URGENTE para uma PRISÃO EM FLAGRANTE em andamento.'
    },
    {
      id: 'intimacao',
      title: 'Intimação Policial',
      subtitle: 'Orientação preventiva para depor',
      icon: FileText,
      urgency: 'Atuação Preventiva',
      guidance: 'Comparecer a uma delegacia sem assistência prévia pode gerar prejuízos irreversíveis. Examinamos os autos do inquérito de antemão (Súmula Vinculante 14/STF) e preparamos a oitiva técnica para evitar qualquer autoincriminação indevida.',
      steps: ['Habilitação e cópia integral do inquérito', 'Análise técnica de provas e declarações', 'Acompanhamento presencial no interrogatório'],
      waMessage: 'Olá, Dr. Fagner Silva. Recebi uma INTIMAÇÃO POLICIAL para depor e gostaria de acompanhamento preventivo.'
    },
    {
      id: 'custodia',
      title: 'Audiência de Custódia',
      subtitle: 'Defesa da liberdade perante o Juiz',
      icon: Gavel,
      urgency: 'Prazo Legal de 24h',
      guidance: 'A audiência de custódia é o momento crucial para impedir a conversão do flagrante em prisão preventiva, demonstrando ausência dos requisitos do Art. 312 do CPP e requerendo medidas cautelares em meio aberto.',
      steps: ['Entrevista reservada prévia com o custodiado', 'Comprovação de vínculos (residência e trabalho)', 'Sustentação oral pela concessão de liberdade'],
      waMessage: 'Olá, Dr. Fagner Silva. Preciso de assistência para uma AUDIÊNCIA DE CUSTÓDIA no TJ-PI.'
    },
    {
      id: 'juri',
      title: 'Tribunal do Júri',
      subtitle: 'Crimes dolosos contra a vida',
      icon: Scale,
      urgency: 'Sustentação em Plenário',
      guidance: 'Defesa combativa e técnica desde a fase de instrução e pronúncia até os debates orais em plenário diante dos jurados populares, fundamentando teses de legítima defesa, desclassificação ou clemência.',
      steps: ['Reconstituição dos fatos e análise pericial', 'Preparação minuciosa de testemunhas', 'Sustentação oral estratégica aos jurados'],
      waMessage: 'Olá, Dr. Fagner Silva. Gostaria de conversar sobre a defesa de um processo em fase de TRIBUNAL DO JÚRI no TJ-PI.'
    },
    {
      id: 'execucao',
      title: 'Execução Penal & Regime',
      subtitle: 'Progressão e direitos do apenado',
      icon: Lock,
      urgency: 'Cálculo de Benefícios',
      guidance: 'Garantimos que o cumprimento da pena observe estritamente os prazos legais, requerendo progressão para regime semiaberto/aberto, livramento condicional, saídas temporárias e remição por trabalho e estudo.',
      steps: ['Cálculo rigoroso do percentual cumprido', 'Juntada de certidão de bom comportamento', 'Pedido formal de progressão ou remição'],
      waMessage: 'Olá, Dr. Fagner Silva. Gostaria de solicitar o cálculo e pedido de PROGRESSÃO DE REGIME / BENEFÍCIOS de execução penal para um familiar.'
    }
  ];

  const currentTriageData = triageOptions.find(t => t.id === activeTriage) || triageOptions[0];

  const differentials = [
    {
      icon: Clock,
      title: 'Plantão Criminal 24 Horas',
      description: 'Disponibilidade ininterrupta para flagrantes, buscas e apreensões e audiências de custódia em Isaías Coelho e comarcas vizinhas.'
    },
    {
      icon: ShieldCheck,
      title: 'Defesa Artesanal & Estratégica',
      description: 'Cada caso é analisado de forma individualizada e minuciosa, elaborando peças sob medida fundamentadas na melhor jurisprudência.'
    },
    {
      icon: HeartHandshake,
      title: 'Atendimento Humanizado',
      description: 'Acolhimento empático com comunicação clara e transparente tanto para o cliente quanto para seus familiares em momentos difíceis.'
    },
    {
      icon: Landmark,
      title: 'Compromisso com a Região',
      description: 'Atuação ética e enraizada no Piauí, unindo advocacia criminal combativa e dedicação cívica como Vereador em Isaías Coelho.'
    }
  ];

  return (
    <div id="home-page-root" className={`space-y-16 md:space-y-24 py-4 md:py-8 transition-colors ${
      isDark ? 'text-[#e2e8f0]' : 'text-[#1e293b]'
    }`}>
      
      {/* 1. HERO SECTION (Lawyer Editorial Presentation) */}
      <section id="hero-section" className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 sm:pt-8">
        
        {/* Ambient Subtle Glows */}
        <div className={`absolute top-10 left-1/4 -translate-y-1/2 -translate-x-1/2 w-[450px] sm:w-[600px] h-[450px] sm:h-[600px] rounded-full blur-[130px] pointer-events-none ${
          isDark ? 'bg-[#c5a880]/12' : 'bg-[#e2d0b5]/35'
        }`} />
        
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-10 items-center">
          
          {/* Main Hero Copy (Left Column) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 sm:space-y-7"
          >
            {/* Tag Badge */}
            <div className={`inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs font-mono tracking-wider shadow-sm border ${
              isDark 
                ? 'bg-[#101622] border-[#26354d] text-[#c5a880]' 
                : 'bg-[#faf5ed] border-[#e5d5c0] text-[#8c642b]'
            }`}>
              <span className="w-2 h-2 rounded-full bg-[#b89058] animate-pulse"></span>
              <span className="uppercase font-bold">Advocacia Criminal Especializada</span>
              <span className={isDark ? 'text-[#475569]' : 'text-[#cbd5e1]'}>•</span>
              <span className="font-semibold">Isaías Coelho / PI</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.18] text-[#0f2137] dark:text-[#f8fafc]">
              Defesa Criminal Estratégica, <span className="gold-gradient-text font-extrabold">Combativa & Imediata</span>.
            </h1>

            {/* Mobile-Exclusive Lawyer Portrait Card with Visual Effects (Visible on Mobile & Tablet) */}
            <div className="block lg:hidden my-4">
              <div className="relative group">
                {/* Ambient Golden Radial Halo */}
                <div className="lawyer-portrait-halo" />

                <div className={`relative rounded-2xl overflow-hidden border shadow-xl interactive-card ${
                  isDark ? 'bg-[#0c1018] border-[#223049]' : 'bg-white border-[#ebdcc9]'
                }`}>
                  {/* Photo Container */}
                  <div className="relative h-64 sm:h-72 w-full overflow-hidden">
                    <SafeImage
                      src={lawyerProfile.avatarUrl || "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=900&q=80"}
                      alt="Dr. Fagner Silva - Advogado Criminalista"
                      className="w-full h-full object-cover object-top img-zoom brightness-[0.92] contrast-[1.05]"
                    />
                    
                    {/* Vignette Gradients */}
                    <div className={`absolute inset-0 bg-gradient-to-t ${
                      isDark ? 'from-[#0c1018] via-[#0c1018]/40' : 'from-[#0f2137] via-[#0f2137]/30'
                    } to-transparent`} />

                    {/* Top Badges */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                      <div className="portrait-glass-badge px-2.5 py-1 rounded-full text-[10px] font-mono font-bold flex items-center gap-1.5 text-[#8c642b] dark:text-[#c5a880]">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        <span>OAB/PI • Ativo</span>
                      </div>

                      <div className="portrait-glass-badge px-2.5 py-1 rounded-full text-[10px] font-mono font-bold text-[#b89058] flex items-center gap-1">
                        <Clock className="w-3 h-3 text-[#b89058]" />
                        <span>Plantão 24h</span>
                      </div>
                    </div>

                    {/* Bottom Info on Photo */}
                    <div className="absolute bottom-3 left-4 right-4 text-white">
                      <span className="text-[10px] font-mono tracking-widest uppercase text-[#e5d4be] font-bold block drop-shadow-sm">
                        Advocacia Criminal • Isaías Coelho / PI
                      </span>
                      <h2 className="font-serif text-2xl font-bold text-white drop-shadow-md">
                        Dr. Fagner Silva
                      </h2>
                    </div>
                  </div>

                  {/* Quick Card Sub-bar */}
                  <div className={`p-3.5 flex items-center justify-between gap-2 text-xs border-t ${
                    isDark ? 'bg-[#0f1420] border-[#1b263b]' : 'bg-[#faf8f5] border-[#ebdcc9]'
                  }`}>
                    <div className="flex items-center gap-2">
                      <div className="soft-icon-pod !p-1.5 shrink-0">
                        <Landmark className="w-3.5 h-3.5" />
                      </div>
                      <span className={`text-[11px] font-semibold truncate ${isDark ? 'text-[#cbd5e1]' : 'text-[#475569]'}`}>
                        {lawyerProfile.mandate}
                      </span>
                    </div>

                    <a
                      href={getWhatsAppUrl('Olá, Dr. Fagner Silva. Gostaria de solicitar atendimento criminal.')}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-whatsapp py-1.5 px-3 text-[11px] font-bold tracking-wide shrink-0"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Sub-headline */}
            <p className={`text-base sm:text-lg leading-relaxed max-w-2xl font-normal ${
              isDark ? 'text-[#94a3b8]' : 'text-[#475569]'
            }`}>
              Atendimento técnico de excelência para resguardar a liberdade, a integridade e os direitos fundamentais do investigado ou réu em sede policial, audiências de custódia, Tribunal do Júri e recursos no TJ-PI.
            </p>

            {/* Feature Pills with Soft Rounded Icons */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1 text-xs">
              <div className={`p-3.5 rounded-2xl border flex items-center gap-3 interactive-card ${
                isDark 
                  ? 'bg-[#0d121c] border-[#1f2b3e]' 
                  : 'bg-white border-[#e8dfd2] shadow-sm'
              }`}>
                <div className="soft-icon-pod !p-2 shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <div className={`font-bold ${isDark ? 'text-[#f1f5f9]' : 'text-[#0f2137]'}`}>Plantão 24h</div>
                  <div className={`text-[11px] ${isDark ? 'text-[#94a3b8]' : 'text-[#64748b]'}`}>Flagrantes & Custódias</div>
                </div>
              </div>

              <div className={`p-3.5 rounded-2xl border flex items-center gap-3 interactive-card ${
                isDark 
                  ? 'bg-[#0d121c] border-[#1f2b3e]' 
                  : 'bg-white border-[#e8dfd2] shadow-sm'
              }`}>
                <div className="soft-icon-pod !p-2 shrink-0">
                  <Building2 className="w-4 h-4" />
                </div>
                <div>
                  <div className={`font-bold ${isDark ? 'text-[#f1f5f9]' : 'text-[#0f2137]'}`}>Atuação Regional</div>
                  <div className={`text-[11px] ${isDark ? 'text-[#94a3b8]' : 'text-[#64748b]'}`}>Isaías Coelho & TJ-PI</div>
                </div>
              </div>

              <div className={`p-3.5 rounded-2xl border flex items-center gap-3 interactive-card ${
                isDark 
                  ? 'bg-[#0d121c] border-[#1f2b3e]' 
                  : 'bg-white border-[#e8dfd2] shadow-sm'
              }`}>
                <div className="soft-icon-pod !p-2 shrink-0">
                  <Landmark className="w-4 h-4" />
                </div>
                <div>
                  <div className={`font-bold ${isDark ? 'text-[#f1f5f9]' : 'text-[#0f2137]'}`}>Atuação Cívica</div>
                  <div className={`text-[11px] ${isDark ? 'text-[#94a3b8]' : 'text-[#64748b]'}`}>Vereador Municipal</div>
                </div>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <a
                id="hero-whatsapp-cta-primary"
                href={getWhatsAppUrl('Olá, Dr. Fagner Silva. Preciso de assistência criminal e gostaria de apresentar meu caso.')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp py-3.5 px-6 text-xs uppercase tracking-wider select-none"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Atendimento no WhatsApp</span>
              </a>

              <button
                id="hero-view-areas-btn"
                onClick={() => {
                  navigate('atuacao');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="btn-secondary py-3.5 px-6 text-xs uppercase tracking-wider select-none"
              >
                <span>Conhecer Especialidades</span>
                <ArrowRight className="w-4 h-4 text-[#b89058]" />
              </button>
            </div>
          </motion.div>

          {/* Lawyer Presentation Portrait Card (Right Column on Desktop) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="hidden lg:block lg:col-span-5"
          >
            <div className="relative group">
              {/* Golden Ambient Radial Halo */}
              <div className="lawyer-portrait-halo" />

              <div className={`relative border rounded-3xl overflow-hidden shadow-2xl interactive-card ${
                isDark ? 'bg-[#0c1018] border-[#223049]' : 'bg-white border-[#ebdcc9]'
              }`}>
                
                {/* Lawyer Portrait Image */}
                <div className="relative h-72 sm:h-80 w-full overflow-hidden">
                  <SafeImage
                    src={lawyerProfile.avatarUrl || "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=900&q=80"}
                    alt="Dr. Fagner Silva - Advogado Criminalista"
                    className="w-full h-full object-cover object-top img-zoom brightness-[0.92] contrast-[1.05]"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${
                    isDark ? 'from-[#0c1018] via-[#0c1018]/30' : 'from-[#0f2137] via-[#0f2137]/20'
                  } to-transparent`} />
                  
                  {/* Floating OAB Verification Badge */}
                  <div className="absolute top-4 right-4 portrait-glass-badge px-3 py-1.5 rounded-full text-[#8c642b] dark:text-[#c5a880] text-[10px] font-mono uppercase tracking-widest flex items-center gap-1.5 shadow-md">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <span className="font-bold">OAB/PI • Ativo</span>
                  </div>

                  <div className="absolute bottom-3 left-5 right-5 text-white">
                    <span className="text-[10px] font-mono tracking-widest uppercase text-[#e5d4be] font-bold block drop-shadow-sm">
                      Isaías Coelho — Piauí
                    </span>
                    <h2 className="font-serif text-2xl font-bold text-white drop-shadow-md">
                      Dr. Fagner Silva
                    </h2>
                  </div>
                </div>

                {/* Card Information */}
                <div className="p-6 space-y-4">
                  <p className={`text-xs leading-relaxed ${isDark ? 'text-[#94a3b8]' : 'text-[#475569]'}`}>
                    Atuação especializada no Direito Penal e Processual Penal com foco na ampla defesa, garantias constitucionais e acompanhamento combativo no Piauí.
                  </p>

                  <div className={`p-3.5 rounded-2xl border flex items-center gap-3 ${
                    isDark ? 'bg-[#121824] border-[#1e2a3d]' : 'bg-[#faf7f2] border-[#e8dac8]'
                  }`}>
                    <div className="soft-icon-pod !p-2 shrink-0">
                      <Landmark className="w-4 h-4" />
                    </div>
                    <div>
                      <div className={`font-bold text-xs ${isDark ? 'text-[#f1f5f9]' : 'text-[#0f2137]'}`}>
                        {lawyerProfile.mandate}
                      </div>
                      <p className={`text-[11px] ${isDark ? 'text-[#64748b]' : 'text-[#64748b]'}`}>
                        Câmara Municipal de Isaías Coelho
                      </p>
                    </div>
                  </div>

                  <div className={`pt-2 border-t grid grid-cols-2 gap-3 text-[11px] ${
                    isDark ? 'border-[#1b263b]' : 'border-[#e8dfd2]'
                  }`}>
                    <div>
                      <span className="block text-[10px] uppercase font-mono text-[#64748b]">Contato Direto:</span>
                      <a href={`tel:${lawyerProfile.phoneRaw}`} className="font-bold text-[#0f2137] dark:text-[#f1f5f9] hover:text-[#b89058] transition-colors">
                        {lawyerProfile.phoneFormatted}
                      </a>
                    </div>
                    <div>
                      <span className="block text-[10px] uppercase font-mono text-[#64748b]">Atendimento:</span>
                      <span className="text-emerald-600 font-bold flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span>
                        Plantão 24h
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
                      className={`w-full py-2.5 px-3 rounded-xl border text-xs font-bold tracking-wider uppercase flex items-center justify-center gap-1.5 touch-press cursor-pointer select-none ${
                        isDark 
                          ? 'bg-[#162032] hover:bg-[#1e2d46] border-[#2b3c5a] text-[#c5a880]' 
                          : 'bg-[#faf7f2] hover:bg-[#f5eee3] border-[#e8dac8] text-[#8c642b]'
                      }`}
                    >
                      <span>Trajetória</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    <a
                      id="hero-card-instagram-btn"
                      href={lawyerProfile.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full py-2.5 px-3 rounded-xl border text-xs font-bold tracking-wider uppercase flex items-center justify-center gap-1.5 touch-press cursor-pointer select-none ${
                        isDark 
                          ? 'bg-[#162032] hover:bg-[#1e2d46] border-[#2b3c5a] text-[#e1306c]' 
                          : 'bg-white hover:bg-[#faf7f2] border-[#e8dfd2] text-[#e1306c]'
                      }`}
                    >
                      <Instagram className="w-3.5 h-3.5" />
                      <span>@advfagnersilva</span>
                    </a>
                  </div>

                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* 2. WHY CHOOSE US / DIFFERENTIALS (Inspired by reference sites) */}
      <section id="differentials-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#b89058] font-bold">
            <Award className="w-4 h-4" />
            <span>Diferenciais Estratégicos</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#0f2137] dark:text-[#f8fafc]">
            Por que confiar sua defesa ao Dr. Fagner Silva?
          </h2>
          <p className={`text-xs sm:text-sm ${isDark ? 'text-[#94a3b8]' : 'text-[#475569]'}`}>
            A advocacia criminal exige resposta rápida, estudo processual aprofundado e compromisso intransigente com o sigilo e a liberdade.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {differentials.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div 
                key={idx}
                className={`p-6 rounded-3xl border flex flex-col justify-between space-y-4 interactive-card ${
                  isDark 
                    ? 'bg-[#0d121c] border-[#1e293b]' 
                    : 'bg-white border-[#e8dfd2] shadow-sm'
                }`}
              >
                <div className="space-y-4">
                  <div className="soft-icon-pod">
                    <IconComp className="w-6 h-6 stroke-[1.5]" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#0f2137] dark:text-[#f8fafc]">
                    {item.title}
                  </h3>
                  <p className={`text-xs leading-relaxed ${isDark ? 'text-[#94a3b8]' : 'text-[#475569]'}`}>
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. INTERACTIVE EMERGENCY TRIAGE MODULE */}
      <section id="triage-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`rounded-3xl border p-6 sm:p-10 shadow-xl relative overflow-hidden space-y-8 transition-colors ${
          isDark 
            ? 'bg-gradient-to-b from-[#101624] via-[#0d121c] to-[#090d16] border-[#22314a]' 
            : 'bg-white border-[#e8dfd2]'
        }`}>
          
          {/* Section Header */}
          <div className={`flex flex-col md:flex-row md:items-end justify-between gap-4 border-b pb-6 ${
            isDark ? 'border-[#1b273b]' : 'border-[#e8dfd2]'
          }`}>
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#b89058] font-bold">
                <Compass className="w-4 h-4" />
                <span>Orientação Imediata</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0f2137] dark:text-[#f8fafc]">
                Triagem Rápida de Atendimento Criminal
              </h2>
              <p className={`text-xs sm:text-sm max-w-2xl ${isDark ? 'text-[#94a3b8]' : 'text-[#475569]'}`}>
                Selecione a situação atual para visualizar as recomendações defensivas imediatas e acionar o canal direto correspondente.
              </p>
            </div>

            <div className="text-xs font-mono text-[#8c642b] dark:text-amber-400 bg-[#faf5ed] dark:bg-amber-500/10 border border-[#e5d5c0] dark:border-amber-500/30 px-3.5 py-2 rounded-xl flex items-center gap-2 self-start md:self-auto font-bold shadow-sm">
              <ShieldAlert className="w-4 h-4 text-amber-500" />
              <span>Plantão: (89) 99414-8236</span>
            </div>
          </div>

          {/* Triage Selector Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {triageOptions.map((opt) => {
              const IconComponent = opt.icon;
              const isActive = activeTriage === opt.id;
              return (
                <button
                  key={opt.id}
                  onClick={() => setActiveTriage(opt.id as any)}
                  className={`p-4 rounded-2xl text-left border flex flex-col justify-between gap-3 interactive-card touch-press cursor-pointer select-none ${
                    isActive
                      ? isDark
                        ? 'bg-[#182338] border-[#c5a880] shadow-lg shadow-[#c5a880]/15 text-[#f8fafc]'
                        : 'bg-[#faf5ed] border-[#b89058] shadow-md text-[#0f2137]'
                      : isDark
                        ? 'bg-[#0b0f17] border-[#1a2538] hover:border-[#2b3d5b] text-[#94a3b8] hover:text-[#cbd5e1]'
                        : 'bg-[#faf8f5] border-[#e8dfd2] hover:border-[#b89058] text-[#475569] hover:text-[#0f2137]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="soft-icon-pod !p-2">
                      <IconComponent className={`w-4 h-4 ${isActive ? 'text-[#b89058]' : 'text-[#64748b]'}`} />
                    </div>
                    {isActive && <span className="w-2.5 h-2.5 rounded-full bg-[#b89058]" />}
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
          <div className={`border rounded-2xl p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center ${
            isDark ? 'bg-[#090d16] border-[#1d2b40]' : 'bg-[#faf8f5] border-[#e8dfd2]'
          }`}>
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full text-[10px] uppercase font-mono font-bold tracking-wider bg-[#b89058]/15 text-[#8c642b] dark:text-[#c5a880] border border-[#b89058]/30">
                  {currentTriageData.urgency}
                </span>
                <span className="text-xs text-[#64748b] font-medium font-mono">
                  {currentTriageData.subtitle}
                </span>
              </div>

              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#0f2137] dark:text-[#f8fafc]">
                {currentTriageData.title}
              </h3>

              <p className={`text-xs sm:text-sm leading-relaxed ${isDark ? 'text-[#cbd5e1]' : 'text-[#334155]'}`}>
                {currentTriageData.guidance}
              </p>

              <div className="space-y-2 pt-2">
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#64748b] block font-bold">
                  Ações Imediatas Recomendadas:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                  {currentTriageData.steps.map((step, idx) => (
                    <div 
                      key={idx} 
                      className={`p-3 rounded-xl border flex items-start gap-2 interactive-card ${
                        isDark ? 'bg-[#101624] border-[#1b273b] text-[#cbd5e1]' : 'bg-white border-[#e8dfd2] text-[#334155]'
                      }`}
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#b89058] shrink-0 mt-0.5" />
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
                className="btn-whatsapp w-full py-3.5 px-5 text-xs uppercase tracking-wider text-center"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Acionar Plantão para este Caso</span>
              </a>

              <a
                href={`tel:${lawyerProfile.phoneRaw}`}
                className="btn-secondary w-full py-3 px-4 text-xs uppercase tracking-wider"
              >
                <PhoneCall className="w-3.5 h-3.5 text-[#b89058]" />
                <span>Ligar Agora ({lawyerProfile.phoneFormatted})</span>
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* 4. PRACTICE AREAS GRID */}
      <section id="featured-areas-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#b89058] font-bold">
                <Scale className="w-4 h-4" />
                <span>Práticas Criminais Especializadas</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-4xl font-bold mt-1 text-[#0f2137] dark:text-[#f8fafc]">
                Principais Áreas de Atuação
              </h2>
            </div>

            <button
              onClick={() => {
                navigate('atuacao');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 text-xs uppercase font-bold tracking-wider text-[#b89058] hover:underline touch-press cursor-pointer select-none"
            >
              <span>Ver todas as especialidades</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredAreas.map((area) => (
              <div
                key={area.id}
                className={`rounded-3xl border overflow-hidden flex flex-col justify-between interactive-card group ${
                  isDark 
                    ? 'bg-[#0c1018] border-[#1e2a3f] shadow-xl' 
                    : 'bg-white border-[#e8dfd2] shadow-sm'
                }`}
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <SafeImage
                    src={area.imageUrl}
                    alt={area.title}
                    className="w-full h-full object-cover img-zoom brightness-[0.85] contrast-[1.05]"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${
                    isDark ? 'from-[#0c1018]' : 'from-white'
                  } via-transparent to-transparent`} />
                  
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-full bg-white/90 dark:bg-[#080b12]/80 backdrop-blur-sm border border-[#b89058]/50 text-[#8c642b] dark:text-[#c5a880] text-[10px] font-mono font-bold uppercase tracking-wider shadow-sm">
                      {area.badge || 'Direito Penal'}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="font-serif text-base font-bold text-[#0f2137] dark:text-[#f8fafc] group-hover:text-[#b89058] transition-colors">
                      {area.title}
                    </h3>
                    <p className={`text-xs mt-2 line-clamp-3 leading-relaxed ${
                      isDark ? 'text-[#94a3b8]' : 'text-[#475569]'
                    }`}>
                      {area.description}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-current/10">
                    <a
                      href={getWhatsAppUrl(`Olá, Dr. Fagner Silva. Gostaria de atendimento sobre ${area.title}.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#b89058] hover:text-[#8c642b] transition-colors uppercase tracking-wider touch-press"
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

      {/* 5. CASE PRECEDENTS TEASER (PJe TJ-PI) */}
      <section id="cases-teaser-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`p-8 sm:p-10 rounded-3xl border shadow-xl space-y-6 ${
          isDark ? 'bg-[#0d121c] border-[#1e293b]' : 'bg-white border-[#e8dfd2]'
        }`}>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b pb-6 border-current/10">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#b89058] font-bold">
                <BookOpen className="w-4 h-4" />
                <span>PJe TJ-PI & Jurisprudência</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold mt-1 text-[#0f2137] dark:text-[#f8fafc]">
                Casos & Precedentes Trabalhados
              </h2>
            </div>

            <button
              onClick={() => {
                navigate('casos');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 text-xs uppercase font-bold tracking-wider text-[#b89058] hover:underline touch-press cursor-pointer select-none"
            >
              <span>Ver todos os precedentes</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {featuredCases.map((c) => (
              <div 
                key={c.id} 
                className={`p-6 rounded-2xl border flex flex-col justify-between gap-4 interactive-card ${
                  isDark ? 'bg-[#121824] border-[#1f2d43]' : 'bg-[#faf8f5] border-[#e8dfd2]'
                }`}
              >
                <div className="space-y-3">
                  <span className="text-[10px] font-mono uppercase font-bold text-[#8c642b] dark:text-[#c5a880] bg-[#b89058]/15 px-3 py-1 rounded-full border border-[#b89058]/30 inline-block">
                    {c.category}
                  </span>
                  <h3 className="font-serif font-bold text-sm text-[#0f2137] dark:text-[#f8fafc] leading-snug">
                    {c.title}
                  </h3>
                  <p className={`text-xs line-clamp-3 leading-relaxed ${isDark ? 'text-[#94a3b8]' : 'text-[#475569]'}`}>
                    {c.caseSummary}
                  </p>
                </div>

                <div className="pt-3 border-t border-current/10 flex items-center justify-between text-xs">
                  <span className="text-[11px] font-mono text-[#64748b]">{c.dateOrYear}</span>
                  <button
                    onClick={() => {
                      navigate('casos');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="text-[#b89058] font-bold text-xs hover:underline flex items-center gap-1 touch-press cursor-pointer select-none"
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

      {/* 6. FINAL REASSURING CALL TO ACTION BANNER */}
      <section id="cta-bottom-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`rounded-3xl border p-8 sm:p-12 text-center space-y-6 shadow-xl relative overflow-hidden ${
          isDark 
            ? 'bg-gradient-to-r from-[#101726] via-[#141e30] to-[#0c121e] border-[#25354e]' 
            : 'bg-gradient-to-r from-[#faf5ed] via-white to-[#f5eee3] border-[#e8dfd2]'
        }`}>
          <div className="max-w-2xl mx-auto space-y-3">
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#0f2137] dark:text-[#f8fafc]">
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
              className="btn-whatsapp py-3.5 px-6 text-xs uppercase tracking-wider select-none"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Chamar no WhatsApp de Plantão</span>
            </a>

            <a
              id="cta-bottom-call-btn"
              href={`tel:${lawyerProfile.phoneRaw}`}
              className="btn-secondary py-3.5 px-6 text-xs uppercase tracking-wider select-none"
            >
              <PhoneCall className="w-4 h-4 text-[#b89058]" />
              <span>Ligar: {lawyerProfile.phoneFormatted}</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
