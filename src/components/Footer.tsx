import React from 'react';
import { AppRoute } from '../types';
import { lawyerProfile, getWhatsAppUrl } from '../data/lawyerData';
import { useTheme } from '../context/ThemeContext';
import { 
  Scale, 
  Phone, 
  MapPin, 
  Mail, 
  Clock, 
  ShieldCheck, 
  ExternalLink,
  ArrowUpRight,
  Landmark,
  Instagram,
  Globe,
  BookOpen,
  MessageSquare
} from 'lucide-react';

interface FooterProps {
  navigate: (route: AppRoute) => void;
}

export const Footer: React.FC<FooterProps> = ({ navigate }) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const handleNav = (route: AppRoute) => {
    navigate(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer 
      id="site-footer" 
      className={`border-t pt-16 pb-12 transition-colors ${
        isDark 
          ? 'bg-[#06090f] border-[#182335] text-[#94a3b8]' 
          : 'bg-[#faf6f0] border-[#ebdcc9] text-[#475569]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-14">
          
          {/* Col 1: Brand & Institutional Overview */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="soft-icon-pod !p-2.5 !rounded-2xl">
                <Scale className="w-5 h-5 stroke-[1.5]" />
              </div>
              <div>
                <h3 className={`font-serif text-base tracking-wide uppercase font-bold ${
                  isDark ? 'text-[#f8fafc]' : 'text-[#0f2137]'
                }`}>
                  Dr. Fagner Silva
                </h3>
                <p className="text-[11px] text-[#b89058] tracking-wider uppercase font-bold">
                  Advogado Criminalista • Isaías Coelho/PI
                </p>
              </div>
            </div>

            <p className="text-xs leading-relaxed">
              Defesa penal técnica, estratégica e intransigente em favor das garantias constitucionais, do devido processo legal e da liberdade individual perante o TJ-PI e tribunais superiores.
            </p>

            <div className={`p-4 rounded-2xl border text-xs space-y-1.5 ${
              isDark ? 'bg-[#0d131f] border-[#1e293b]' : 'bg-white border-[#ebdcc9] shadow-sm'
            }`}>
              <div className={`flex items-center gap-2 font-bold ${isDark ? 'text-[#cbd5e1]' : 'text-[#0f2137]'}`}>
                <Landmark className="w-4 h-4 text-[#b89058]" />
                <span>Atuação Institucional & Comunitária</span>
              </div>
              <p className={`text-[11px] leading-relaxed ${isDark ? 'text-[#64748b]' : 'text-[#64748b]'}`}>
                {lawyerProfile.mandate} — Compromisso cívico com a legalidade, representação popular e direitos fundamentais.
              </p>
            </div>

            {/* Social & Official Portals */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <a
                id="footer-instagram-link"
                href={lawyerProfile.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl border text-xs font-bold transition-all touch-press ${
                  isDark ? 'bg-[#111724] border-[#22304a] text-[#e1306c] hover:bg-[#1a2336]' : 'bg-white border-[#ebdcc9] text-[#e1306c] hover:bg-[#faf7f2] shadow-sm'
                }`}
              >
                <Instagram className="w-4 h-4" />
                <span>@advfagnersilva</span>
              </a>

              <a
                id="footer-pje-link"
                href={lawyerProfile.pje1gUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl border text-xs font-bold transition-all touch-press ${
                  isDark ? 'bg-[#111724] border-[#22304a] text-[#c5a880] hover:bg-[#1a2336]' : 'bg-white border-[#ebdcc9] text-[#8c642b] hover:bg-[#faf7f2] shadow-sm'
                }`}
              >
                <Globe className="w-4 h-4" />
                <span>PJe TJ-PI</span>
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Map */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className={`text-xs font-serif uppercase tracking-widest font-bold border-b pb-2 ${
              isDark ? 'text-[#f1f5f9] border-[#1e293b]' : 'text-[#0f2137] border-[#ebdcc9]'
            }`}>
              Navegação
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button 
                  id="footer-link-home"
                  onClick={() => handleNav('home')} 
                  className="hover:text-[#b89058] transition-colors flex items-center gap-1.5 font-medium"
                >
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#b89058]" />
                  <span>Início</span>
                </button>
              </li>
              <li>
                <button 
                  id="footer-link-sobrenos"
                  onClick={() => handleNav('sobrenos')} 
                  className="hover:text-[#b89058] transition-colors flex items-center gap-1.5 font-medium"
                >
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#b89058]" />
                  <span>Sobre o Advogado</span>
                </button>
              </li>
              <li>
                <button 
                  id="footer-link-atuacao"
                  onClick={() => handleNav('atuacao')} 
                  className="hover:text-[#b89058] transition-colors flex items-center gap-1.5 font-medium"
                >
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#b89058]" />
                  <span>Áreas de Atuação</span>
                </button>
              </li>
              <li>
                <button 
                  id="footer-link-casos"
                  onClick={() => handleNav('casos')} 
                  className="hover:text-[#b89058] transition-colors flex items-center gap-1.5 font-medium"
                >
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#b89058]" />
                  <span>Casos & PJe</span>
                </button>
              </li>
              <li>
                <button 
                  id="footer-link-conteudos"
                  onClick={() => handleNav('conteudos')} 
                  className="hover:text-[#b89058] transition-colors flex items-center gap-1.5 font-medium"
                >
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#b89058]" />
                  <span>Artigos & Orientações</span>
                </button>
              </li>
              <li>
                <button 
                  id="footer-link-faq"
                  onClick={() => handleNav('faq')} 
                  className="hover:text-[#b89058] transition-colors flex items-center gap-1.5 font-medium"
                >
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#b89058]" />
                  <span>Perguntas Frequentes</span>
                </button>
              </li>
              <li>
                <button 
                  id="footer-link-contato"
                  onClick={() => handleNav('contato')} 
                  className="hover:text-[#b89058] transition-colors flex items-center gap-1.5 font-medium"
                >
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#b89058]" />
                  <span>Contato & Plantão</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Specializations */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className={`text-xs font-serif uppercase tracking-widest font-bold border-b pb-2 ${
              isDark ? 'text-[#f1f5f9] border-[#1e293b]' : 'text-[#0f2137] border-[#ebdcc9]'
            }`}>
              Especialidades Penais
            </h4>
            <ul className="space-y-2 text-xs">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#b89058]" />
                <span>Flagrantes & Delegacia de Polícia</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#b89058]" />
                <span>Audiência de Custódia TJ-PI</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#b89058]" />
                <span>Habeas Corpus & Liminares</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#b89058]" />
                <span>Tribunal do Júri (Plenário)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#b89058]" />
                <span>Execução Penal & Progressão</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#b89058]" />
                <span>Acordo de Não Persecução (ANPP)</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Emergency Plantão */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className={`text-xs font-serif uppercase tracking-widest font-bold border-b pb-2 ${
              isDark ? 'text-[#f1f5f9] border-[#1e293b]' : 'text-[#0f2137] border-[#ebdcc9]'
            }`}>
              Plantão & Atendimento
            </h4>
            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2.5">
                <div className="soft-icon-pod !p-1.5 shrink-0 mt-0.5">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="block font-bold text-[#0f2137] dark:text-[#f8fafc]">
                    Plantão Telefônico 24 Horas
                  </span>
                  <a href={`tel:${lawyerProfile.phoneRaw}`} className="text-[#b89058] font-bold hover:underline">
                    {lawyerProfile.phoneFormatted}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="soft-icon-pod !p-1.5 shrink-0 mt-0.5">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="block font-bold text-[#0f2137] dark:text-[#f8fafc]">
                    Comarca de Atuação
                  </span>
                  <span className="text-[11px] leading-tight block">
                    {lawyerProfile.address}
                  </span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  id="footer-whatsapp-plantao-btn"
                  href={getWhatsAppUrl('Olá, Dr. Fagner Silva. Preciso de atendimento criminal de urgência.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-2xl bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#20bd5a] hover:to-[#0f776a] text-black font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md btn-shimmer touch-press cursor-pointer select-none text-center"
                >
                  <MessageSquare className="w-4 h-4 fill-black/20" />
                  <span>WhatsApp de Plantão</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar with Regulatory Notice */}
        <div className={`pt-8 border-t flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] ${
          isDark ? 'border-[#182335] text-[#64748b]' : 'border-[#ebdcc9] text-[#64748b]'
        }`}>
          <div>
            © {new Date().getFullYear()} Dr. Fagner Silva Advocacia Criminal. Todos os direitos reservados.
          </div>

          <div className="flex items-center gap-2 text-center md:text-right">
            <ShieldCheck className="w-3.5 h-3.5 text-[#b89058]" />
            <span>Exercício profissional pautado no Código de Ética e Disciplina da OAB.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
