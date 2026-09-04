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
  Gavel,
  MessageSquare,
  Award,
  HeartHandshake
} from 'lucide-react';

interface SobreProps {
  navigate: (route: AppRoute) => void;
}

export const Sobre: React.FC<SobreProps> = ({ navigate }) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div id="sobre-page-root" className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16 space-y-16 ${
      isDark ? 'text-[#e2e8f0]' : 'text-[#1e293b]'
    }`}>
      
      {/* Header Title Section */}
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`border-b pb-8 space-y-3 ${isDark ? 'border-[#1c273c]' : 'border-[#ebdcc9]'}`}
      >
        <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#b89058] font-bold">
          <Scale className="w-4 h-4" />
          <span>Perfil & Trajetória Profissional</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0f2137] dark:text-[#f8fafc]">
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
          <div className="relative group">
            {/* Golden Ambient Radial Halo */}
            <div className="lawyer-portrait-halo" />

            <div className={`relative rounded-3xl overflow-hidden border shadow-xl space-y-0 transition-colors interactive-card ${
              isDark ? 'bg-[#0d121c] border-[#233148]' : 'bg-white border-[#ebdcc9]'
            }`}>
              
              {/* Visual Image Header */}
              <div className="relative h-72 sm:h-80 w-full overflow-hidden">
                <SafeImage
                  src={lawyerProfile.avatarUrl || "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=900&q=80"}
                  alt="Dr. Fagner Silva - Advogado Criminalista"
                  className="w-full h-full object-cover object-top img-zoom brightness-[0.92] contrast-[1.05]"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${
                  isDark ? 'from-[#0d121c] via-[#0d121c]/40' : 'from-[#0f2137] via-[#0f2137]/30'
                } to-transparent`} />
                
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <div className="portrait-glass-badge px-3 py-1.5 rounded-full text-[#8c642b] dark:text-[#c5a880] text-[10px] font-mono uppercase tracking-widest flex items-center gap-1.5 shadow-md font-bold">
                    <Scale className="w-3.5 h-3.5" />
                    <span>Advocacia Criminal</span>
                  </div>

                  <div className="portrait-glass-badge px-2.5 py-1.5 rounded-full text-[#8c642b] dark:text-[#c5a880] text-[10px] font-mono uppercase tracking-widest flex items-center gap-1.5 shadow-md font-bold">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <span>OAB/PI Ativo</span>
                  </div>
                </div>

                <div className="absolute bottom-4 left-5 right-5 text-white">
                  <h2 className="font-serif text-2xl font-bold text-white drop-shadow-md">
                    Dr. Fagner Silva
                  </h2>
                  <span className="text-xs text-[#e5d4be] font-mono uppercase tracking-wider block mt-0.5 font-bold drop-shadow-sm">
                    Isaías Coelho / PI • Todo o Piauí
                  </span>
                </div>
              </div>

            {/* Quick Facts List */}
            <div className="p-6 space-y-3 text-xs">
              <div className={`flex items-center justify-between p-3.5 rounded-2xl border ${
                isDark ? 'bg-[#101624] border-[#1d273a]' : 'bg-[#faf8f5] border-[#ebdcc9]'
              }`}>
                <span className="text-[#64748b] font-medium">Especialidade:</span>
                <span className="font-bold text-[#0f2137] dark:text-[#f1f5f9] text-right">Direito Penal & Processual</span>
              </div>

              <div className={`flex items-center justify-between p-3.5 rounded-2xl border ${
                isDark ? 'bg-[#101624] border-[#1d273a]' : 'bg-[#faf8f5] border-[#ebdcc9]'
              }`}>
                <span className="text-[#64748b] font-medium">Mandato Público:</span>
                <span className="font-bold text-[#b89058] text-right">Vereador em Isaías Coelho/PI</span>
              </div>

              <div className={`flex items-center justify-between p-3.5 rounded-2xl border ${
                isDark ? 'bg-[#101624] border-[#1d273a]' : 'bg-[#faf8f5] border-[#ebdcc9]'
              }`}>
                <span className="text-[#64748b] font-medium">Inscrição Profissional:</span>
                <span className="font-mono font-bold text-[#0f2137] dark:text-[#cbd5e1]">{lawyerProfile.oabNumber}</span>
              </div>

              <div className={`flex items-center justify-between p-3.5 rounded-2xl border ${
                isDark ? 'bg-[#101624] border-[#1d273a]' : 'bg-[#faf8f5] border-[#ebdcc9]'
              }`}>
                <span className="text-[#64748b] font-medium">Instagram Oficial:</span>
                <a 
                  href={lawyerProfile.instagramUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-bold text-[#e1306c] hover:underline flex items-center gap-1"
                >
                  <Instagram className="w-3.5 h-3.5" />
                  <span>{lawyerProfile.instagram}</span>
                </a>
              </div>

              <div className="pt-2">
                <a
                  id="sobre-whatsapp-direct-btn"
                  href={getWhatsAppUrl('Olá, Dr. Fagner Silva. Gostaria de agendar um atendimento.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp w-full py-3.5 px-4 text-xs uppercase tracking-wider text-center select-none"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Falar no WhatsApp com o Dr. Fagner</span>
                </a>
              </div>
            </div>

          </div>
          </div>

          {/* Council & Civic Mandate Box */}
          <div className={`p-6 rounded-3xl border space-y-3 ${
            isDark ? 'bg-[#101726] border-[#1f2e46]' : 'bg-[#faf5ed] border-[#e5d5c0]'
          }`}>
            <div className="flex items-center gap-2.5">
              <div className="soft-icon-pod !p-2 shrink-0">
                <Landmark className="w-4 h-4" />
              </div>
              <h3 className="font-serif font-bold text-sm text-[#0f2137] dark:text-[#f8fafc]">
                Representatividade Popular
              </h3>
            </div>
            <p className={`text-xs leading-relaxed ${isDark ? 'text-[#94a3b8]' : 'text-[#554228]'}`}>
              Como <strong>Vereador no Município de Isaías Coelho - PI</strong>, o Dr. Fagner Silva dedica-se à defesa do interesse público, fiscalização das leis e fortalecimento dos direitos da população do semiárido piauiense.
            </p>
          </div>
        </motion.div>

        {/* Right Column: Bio & Core Values */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 space-y-8"
        >
          
          <div className="space-y-4">
            <h2 className="font-serif text-2xl font-bold text-[#0f2137] dark:text-[#f8fafc]">
              Vocação para a Defesa Penal e Rigor Técnico
            </h2>
            
            <div className={`space-y-4 text-xs sm:text-sm leading-relaxed ${isDark ? 'text-[#cbd5e1]' : 'text-[#475569]'}`}>
              <p>
                A advocacia criminal é o bastião que assegura que nenhum cidadão seja julgado sem o devido processo legal, sem a ampla defesa e sem o contraditório garantidos pela Constituição Federal de 1988.
              </p>
              <p>
                Com atuação centrada em <strong>Isaías Coelho</strong>, na Comarca de <strong>Simplício Mendes</strong> e em todo o Estado do Piauí (incluindo sustentação em 2º Grau perante as Câmaras Criminais do TJ-PI), o Dr. Fagner Silva alia profundo conhecimento jurisprudencial à presença constante nas delegacias e fóruns.
              </p>
              <p>
                O compromisso do escritório é tratar cada caso como único: nada de teses padronizadas ou atuações automáticas. Cada inquérito e ação penal é detalhadamente dissecado em busca de nulidades, violações de garantias e elementos de prova favoráveis.
              </p>
            </div>
          </div>

          {/* Pillars of Practice */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-bold text-[#0f2137] dark:text-[#f8fafc]">
              Pilares de Atuação do Escritório
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className={`p-5 rounded-2xl border space-y-2 interactive-card ${
                isDark ? 'bg-[#0d131f] border-[#1e2a3f]' : 'bg-white border-[#ebdcc9] shadow-sm'
              }`}>
                <div className="soft-icon-pod !p-2">
                  <ShieldCheck className="w-5 h-5 stroke-[1.5]" />
                </div>
                <h4 className="font-serif font-bold text-xs text-[#0f2137] dark:text-[#f8fafc]">
                  Sigilo Absoluto
                </h4>
                <p className={`text-xs leading-relaxed ${isDark ? 'text-[#94a3b8]' : 'text-[#64748b]'}`}>
                  Todas as informações, consultas e documentos são resguardados pelo mais rigoroso sigilo profissional.
                </p>
              </div>

              <div className={`p-5 rounded-2xl border space-y-2 interactive-card ${
                isDark ? 'bg-[#0d131f] border-[#1e2a3f]' : 'bg-white border-[#ebdcc9] shadow-sm'
              }`}>
                <div className="soft-icon-pod !p-2">
                  <HeartHandshake className="w-5 h-5 stroke-[1.5]" />
                </div>
                <h4 className="font-serif font-bold text-xs text-[#0f2137] dark:text-[#f8fafc]">
                  Atendimento Humanizado
                </h4>
                <p className={`text-xs leading-relaxed ${isDark ? 'text-[#94a3b8]' : 'text-[#64748b]'}`}>
                  Acolhimento transparente à família do custodiado com atualizações constantes sobre o andamento do processo.
                </p>
              </div>

              <div className={`p-5 rounded-2xl border space-y-2 interactive-card ${
                isDark ? 'bg-[#0d131f] border-[#1e2a3f]' : 'bg-white border-[#ebdcc9] shadow-sm'
              }`}>
                <div className="soft-icon-pod !p-2">
                  <Compass className="w-5 h-5 stroke-[1.5]" />
                </div>
                <h4 className="font-serif font-bold text-xs text-[#0f2137] dark:text-[#f8fafc]">
                  Prontidão em Urgências
                </h4>
                <p className={`text-xs leading-relaxed ${isDark ? 'text-[#94a3b8]' : 'text-[#64748b]'}`}>
                  Plantão ativo 24h para acompanhamento em flagrantes, interrogatórios e audiências de custódia.
                </p>
              </div>

              <div className={`p-5 rounded-2xl border space-y-2 interactive-card ${
                isDark ? 'bg-[#0d131f] border-[#1e2a3f]' : 'bg-white border-[#ebdcc9] shadow-sm'
              }`}>
                <div className="soft-icon-pod !p-2">
                  <Award className="w-5 h-5 stroke-[1.5]" />
                </div>
                <h4 className="font-serif font-bold text-xs text-[#0f2137] dark:text-[#f8fafc]">
                  Rigor Técnico no PJe
                </h4>
                <p className={`text-xs leading-relaxed ${isDark ? 'text-[#94a3b8]' : 'text-[#64748b]'}`}>
                  Peças jurídicas fundamentadas em jurisprudência recente dos Tribunais Superiores (STF e STJ).
                </p>
              </div>
            </div>
          </div>

          {/* Call to Next Section */}
          <div className={`p-6 rounded-3xl border flex flex-col sm:flex-row items-center justify-between gap-4 ${
            isDark ? 'bg-[#101726] border-[#1f2e46]' : 'bg-[#faf8f5] border-[#ebdcc9]'
          }`}>
            <div>
              <h4 className="font-serif font-bold text-sm text-[#0f2137] dark:text-[#f8fafc]">
                Conheça as Áreas de Atuação Penal
              </h4>
              <p className={`text-xs ${isDark ? 'text-[#94a3b8]' : 'text-[#64748b]'}`}>
                Flagrantes, Júri, Audiência de Custódia, Execução Penal e mais.
              </p>
            </div>
            <button
              onClick={() => {
                navigate('atuacao');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="btn-primary px-5 py-3 text-xs uppercase tracking-wider select-none"
            >
              <span>Ver Áreas</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </motion.div>

      </div>

    </div>
  );
};
