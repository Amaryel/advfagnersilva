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
  BookOpen
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
          : 'bg-[#f1f5f9] border-[#cbd5e1] text-[#475569]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-14">
          
          {/* Col 1: Brand & Institutional Overview */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-md border flex items-center justify-center text-[#c5a880] shadow-sm ${
                isDark ? 'bg-[#121927] border-[#c5a880]/40' : 'bg-white border-[#c5a880]'
              }`}>
                <Scale className="w-5 h-5" />
              </div>
              <div>
                <h3 className={`font-serif text-base tracking-wide uppercase font-bold ${
                  isDark ? 'text-[#f8fafc]' : 'text-[#0f172a]'
                }`}>
                  Dr. Fagner Silva
                </h3>
                <p className="text-[11px] text-[#c5a880] tracking-wider uppercase font-semibold">
                  Advogado Criminalista • Isaías Coelho/PI
                </p>
              </div>
            </div>

            <p className="text-xs leading-relaxed">
              Defesa penal técnica, estratégica e intransigente em favor das garantias constitucionais, do devido processo legal e da liberdade individual em todas as instâncias judiciais.
            </p>

            <div className={`p-3.5 rounded-lg border text-xs space-y-1.5 ${
              isDark ? 'bg-[#0d131f] border-[#1e293b]' : 'bg-white border-[#e2e8f0]'
            }`}>
              <div className={`flex items-center gap-2 font-semibold ${isDark ? 'text-[#cbd5e1]' : 'text-[#0f172a]'}`}>
                <Landmark className="w-3.5 h-3.5 text-[#c5a880]" />
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
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-semibold transition-colors ${
                  isDark ? 'bg-[#111724] border-[#22304a] text-[#e1306c] hover:bg-[#1a2336]' : 'bg-white border-[#cbd5e1] text-[#e1306c] hover:bg-[#f8fafc]'
                }`}
              >
                <Instagram className="w-3.5 h-3.5" />
                <span>@advfagnersilva</span>
              </a>

              <a
                id="footer-pje-link"
                href={lawyerProfile.pje1gUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-semibold transition-colors ${
                  isDark ? 'bg-[#111724] border-[#22304a] text-[#c5a880] hover:bg-[#1a2336]' : 'bg-white border-[#cbd5e1] text-[#8b6225] hover:bg-[#f8fafc]'
                }`}
              >
                <Globe className="w-3.5 h-3.5" />
                <span>PJe TJ-PI</span>
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Map */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className={`text-xs font-serif uppercase tracking-widest font-bold border-b pb-2 ${
              isDark ? 'text-[#f1f5f9] border-[#1e293b]' : 'text-[#0f172a] border-[#cbd5e1]'
            }`}>
              Navegação
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button 
                  id="footer-link-home"
                  onClick={() => handleNav('home')} 
                  className="hover:text-[#c5a880] transition-colors flex items-center gap-1.5"
                >
                  <ArrowUpRight className="w-3 h-3 text-[#c5a880]" />
                  <span>Início</span>
                </button>
              </li>
              <li>
                <button 
                  id="footer-link-sobrenos"
                  onClick={() => handleNav('sobrenos')} 
                  className="hover:text-[#c5a880] transition-colors flex items-center gap-1.5"
                >
                  <ArrowUpRight className="w-3 h-3 text-[#c5a880]" />
                  <span>Sobre o Advogado</span>
                </button>
              </li>
              <li>
                <button 
                  id="footer-link-atuacao"
                  onClick={() => handleNav('atuacao')} 
                  className="hover:text-[#c5a880] transition-colors flex items-center gap-1.5"
                >
                  <ArrowUpRight className="w-3 h-3 text-[#c5a880]" />
                  <span>Áreas de Atuação</span>
                </button>
              </li>
              <li>
                <button 
                  id="footer-link-casos"
                  onClick={() => handleNav('casos')} 
                  className="hover:text-[#c5a880] transition-colors flex items-center gap-1.5 font-semibold text-[#c5a880]"
                >
                  <ArrowUpRight className="w-3 h-3 text-[#c5a880]" />
                  <span>Casos & PJe TJ-PI</span>
                </button>
              </li>
              <li>
                <button 
                  id="footer-link-conteudos"
                  onClick={() => handleNav('conteudos')} 
                  className="hover:text-[#c5a880] transition-colors flex items-center gap-1.5"
                >
                  <ArrowUpRight className="w-3 h-3 text-[#c5a880]" />
                  <span>Conteúdos & Artigos</span>
                </button>
              </li>
              <li>
                <button 
                  id="footer-link-faq"
                  onClick={() => handleNav('faq')} 
                  className="hover:text-[#c5a880] transition-colors flex items-center gap-1.5"
                >
                  <ArrowUpRight className="w-3 h-3 text-[#c5a880]" />
                  <span>Perguntas Frequentes</span>
                </button>
              </li>
              <li>
                <button 
                  id="footer-link-contato"
                  onClick={() => handleNav('contato')} 
                  className="hover:text-[#c5a880] transition-colors flex items-center gap-1.5"
                >
                  <ArrowUpRight className="w-3 h-3 text-[#c5a880]" />
                  <span>Central de Contato</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Práticas Criminais */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className={`text-xs font-serif uppercase tracking-widest font-bold border-b pb-2 ${
              isDark ? 'text-[#f1f5f9] border-[#1e293b]' : 'text-[#0f172a] border-[#cbd5e1]'
            }`}>
              Atuação Penal
            </h4>
            <ul className="space-y-2 text-xs">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c5a880]"></span>
                <span>Prisões em Flagrante & Custódia (24h)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c5a880]"></span>
                <span>Inquéritos & Investigação Policial</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c5a880]"></span>
                <span>Tribunal do Júri (Crimes Dolosos)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c5a880]"></span>
                <span>Habeas Corpus & Recursos no TJ-PI/STJ</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c5a880]"></span>
                <span>Acordo de Não Persecução Penal (ANPP)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c5a880]"></span>
                <span>Execução Penal & Progressão de Regime</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Contato & Plantão */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className={`text-xs font-serif uppercase tracking-widest font-bold border-b pb-2 ${
              isDark ? 'text-[#f1f5f9] border-[#1e293b]' : 'text-[#0f172a] border-[#cbd5e1]'
            }`}>
              Plantão 24 Horas
            </h4>

            <div className="space-y-2.5 text-xs">
              <a 
                id="footer-whatsapp-btn"
                href={getWhatsAppUrl('Olá, Dr. Fagner Silva. Gostaria de atendimento criminal pelo site.')}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-lg border flex items-center justify-between transition-all group ${
                  isDark 
                    ? 'bg-[#111827] border-[#233149] hover:border-[#c5a880] text-[#f8fafc]' 
                    : 'bg-white border-[#cbd5e1] hover:border-[#c5a880] text-[#0f172a] shadow-sm'
                }`}
              >
                <div>
                  <div className="text-[10px] uppercase font-mono text-[#c5a880] font-semibold">WhatsApp de Plantão</div>
                  <div className="font-bold text-sm">{lawyerProfile.phoneFormatted}</div>
                </div>
                <ExternalLink className="w-4 h-4 text-[#c5a880] group-hover:scale-110 transition-transform" />
              </a>

              <div className="flex items-start gap-2.5 text-xs pt-1">
                <MapPin className="w-4 h-4 text-[#c5a880] shrink-0 mt-0.5" />
                <div>
                  <span className={`font-semibold block ${isDark ? 'text-[#e2e8f0]' : 'text-[#0f172a]'}`}>Localização:</span>
                  <span>{lawyerProfile.city} — {lawyerProfile.state}</span>
                  <p className="text-[10px] font-mono text-[#64748b] mt-0.5">{lawyerProfile.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 text-xs">
                <Mail className="w-4 h-4 text-[#c5a880] shrink-0 mt-0.5" />
                <div>
                  <span className={`font-semibold block ${isDark ? 'text-[#e2e8f0]' : 'text-[#0f172a]'}`}>E-mail de Contato:</span>
                  <span className="text-[11px] font-mono text-[#64748b]">{lawyerProfile.email}</span>
                </div>
              </div>

              <div className={`flex items-center gap-2 text-xs pt-1 font-semibold ${isDark ? 'text-[#cbd5e1]' : 'text-[#0f172a]'}`}>
                <Clock className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Plantão de Flagrantes: Disponibilidade 24h</span>
              </div>
            </div>
          </div>

        </div>

        {/* Legal Disclaimer & Compliance */}
        <div className={`border-t pt-8 text-[11px] space-y-3 leading-relaxed ${
          isDark ? 'border-[#182030] text-[#64748b]' : 'border-[#cbd5e1] text-[#64748b]'
        }`}>
          <div className={`flex items-center gap-2 font-semibold ${isDark ? 'text-[#94a3b8]' : 'text-[#334155]'}`}>
            <ShieldCheck className="w-4 h-4 text-[#c5a880]" />
            <span>Nota de Conformidade Ética — OAB/CFOAB & Provimento nº 205/2021</span>
          </div>
          <p>
            Este portal possui caráter estritamente institucional e informativo sobre garantias processuais e direitos penais, em conformidade com o Código de Ética e Disciplina da OAB. O exercício da advocacia é atividade de meio.
          </p>
          <div className={`flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-3 border-t text-[10px] ${
            isDark ? 'border-[#121824] text-[#475569]' : 'border-[#e2e8f0] text-[#64748b]'
          }`}>
            <p>
              © {new Date().getFullYear()} Dr. Fagner Silva • Advocacia Criminal • Isaías Coelho/PI
            </p>
            <div className="flex items-center gap-3">
              <a 
                href={lawyerProfile.oabCnaUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-[#c5a880] transition-colors underline"
              >
                Consulta Cadastro Nacional de Advogados (CNA/OAB)
              </a>
              <span>•</span>
              <a 
                href={lawyerProfile.pje1gUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-[#c5a880] transition-colors underline"
              >
                PJe TJ-PI
              </a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

