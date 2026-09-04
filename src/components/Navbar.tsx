import React, { useState, useEffect } from 'react';
import { AppRoute } from '../types';
import { lawyerProfile, getWhatsAppUrl } from '../data/lawyerData';
import { useTheme } from '../context/ThemeContext';
import { 
  Scale, 
  Menu, 
  X, 
  PhoneCall, 
  ShieldAlert, 
  Sun, 
  Moon, 
  Instagram, 
  Globe, 
  BookOpen
} from 'lucide-react';

interface NavbarProps {
  currentRoute: AppRoute;
  navigate: (route: AppRoute) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentRoute, navigate }) => {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const isDark = theme === 'dark';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { label: string; route: AppRoute; path: string }[] = [
    { label: 'Início', route: 'home', path: '/' },
    { label: 'Sobre', route: 'sobrenos', path: '/sobrenos' },
    { label: 'Atuação', route: 'atuacao', path: '/atuacao' },
    { label: 'Casos & PJe', route: 'casos', path: '/casos' },
    { label: 'Conteúdos', route: 'conteudos', path: '/conteudos' },
    { label: 'FAQ', route: 'faq', path: '/faq' },
    { label: 'Contato', route: 'contato', path: '/contato' },
  ];

  const handleNavClick = (route: AppRoute) => {
    navigate(route);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top Urgent Notice Bar */}
      <aside 
        aria-label="Aviso de atendimento de urgência"
        id="plantao-urgent-bar" 
        className={`text-xs py-2 px-4 transition-colors ${
          isDark 
            ? 'bg-[#0f1420] border-b border-[#1e293d] text-[#94a3b8]' 
            : 'bg-[#f1f5f9] border-b border-[#e2e8f0] text-[#475569]'
        }`}
      >
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
            </span>
            <span className={`font-semibold ${isDark ? 'text-[#cbd5e1]' : 'text-[#0f172a]'}`}>
              Plantão Criminal 24h:
            </span>
            <span className="hidden md:inline">
              Isaías Coelho • Comarca de Simplício Mendes • Todo o Piauí
            </span>
          </div>

          <div className="flex items-center gap-3 text-xs">
            {/* Instagram link */}
            <a
              id="topbar-instagram-link"
              href={lawyerProfile.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-[#c5a880] transition-colors font-medium"
              title="Instagram @advfagnersilva"
            >
              <Instagram className="w-3.5 h-3.5 text-[#e1306c]" />
              <span className="hidden sm:inline">@advfagnersilva</span>
            </a>

            <span className={isDark ? 'text-[#334155]' : 'text-[#cbd5e1]'}>|</span>

            {/* PJe TJPI link */}
            <a
              id="topbar-pje-link"
              href={lawyerProfile.pje1gUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-[#c5a880] transition-colors font-medium"
              title="Acessar PJe TJ-PI"
            >
              <Globe className="w-3.5 h-3.5 text-[#c5a880]" />
              <span>PJe TJ-PI</span>
            </a>

            <span className={isDark ? 'text-[#334155]' : 'text-[#cbd5e1]'}>|</span>

            <a 
              id="topbar-phone-link"
              href={`tel:${lawyerProfile.phoneRaw}`} 
              className={`hover:text-[#c5a880] transition-colors flex items-center gap-1.5 font-semibold ${
                isDark ? 'text-[#e2e8f0]' : 'text-[#0f172a]'
              }`}
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#c5a880]" />
              <span>{lawyerProfile.phoneFormatted}</span>
            </a>
          </div>
        </div>
      </aside>

      {/* Main Header */}
      <header 
        id="main-site-header"
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled 
            ? isDark 
              ? 'bg-[#0b0e14]/95 backdrop-blur-md border-b border-[#1f293d] shadow-xl py-3' 
              : 'bg-white/95 backdrop-blur-md border-b border-[#e2e8f0] shadow-md py-3'
            : isDark
              ? 'bg-[#0b0e14]/85 backdrop-blur-sm border-b border-[#171e2e] py-4'
              : 'bg-white/90 backdrop-blur-sm border-b border-[#e2e8f0] py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo Brand */}
          <button 
            id="brand-logo-btn"
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 text-left group focus:outline-none"
          >
            <div className={`w-10 h-10 rounded-md border flex items-center justify-center text-[#c5a880] shadow-sm transition-colors ${
              isDark 
                ? 'bg-[#151c2a] border-[#c5a880]/40 group-hover:border-[#c5a880]' 
                : 'bg-[#faf7f2] border-[#c5a880] group-hover:bg-[#f5eee3]'
            }`}>
              <Scale className="w-5 h-5 stroke-[1.8]" />
            </div>
            <div>
              <div className="font-serif tracking-wide text-sm uppercase font-bold flex items-center gap-1.5">
                <span className={isDark ? 'text-[#f8fafc]' : 'text-[#0f172a]'}>
                  Dr. Fagner Silva
                </span>
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#c5a880]"></span>
              </div>
              <p className={`text-[11px] tracking-wider uppercase font-medium ${isDark ? 'text-[#94a3b8]' : 'text-[#64748b]'}`}>
                Advocacia Criminal • Isaías Coelho/PI
              </p>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-1" aria-label="Navegação principal">
            {navItems.map((item) => {
              const isActive = currentRoute === item.route;
              return (
                <button
                  key={item.route}
                  id={`nav-link-${item.route}`}
                  onClick={() => handleNavClick(item.route)}
                  className={`px-3 py-2 text-xs uppercase tracking-wider font-semibold transition-all relative ${
                    isActive
                      ? 'text-[#c5a880]'
                      : isDark
                        ? 'text-[#94a3b8] hover:text-[#f8fafc]'
                        : 'text-[#475569] hover:text-[#0f172a]'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#c5a880] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Action CTAs & Theme Toggle */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Theme Toggle Button */}
            <button
              id="theme-toggle-btn"
              onClick={toggleTheme}
              aria-label={isDark ? 'Ativar tema claro' : 'Ativar tema escuro'}
              className={`p-2 rounded-lg border transition-colors flex items-center gap-1.5 text-xs font-medium ${
                isDark 
                  ? 'bg-[#141c2b] border-[#223049] text-amber-300 hover:bg-[#1c273c]' 
                  : 'bg-[#f1f5f9] border-[#cbd5e1] text-slate-700 hover:bg-[#e2e8f0]'
              }`}
              title={isDark ? 'Mudar para Tema Claro' : 'Mudar para Tema Escuro'}
            >
              {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
              <span className="hidden md:inline text-[11px] font-semibold">
                {isDark ? 'Claro' : 'Escuro'}
              </span>
            </button>

            {/* Instagram Quick Link */}
            <a
              id="header-instagram-btn"
              href={lawyerProfile.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`hidden sm:flex p-2 rounded-lg border transition-colors items-center justify-center ${
                isDark
                  ? 'bg-[#141c2b] border-[#223049] text-[#e1306c] hover:bg-[#1c273c]'
                  : 'bg-[#f1f5f9] border-[#cbd5e1] text-[#e1306c] hover:bg-[#e2e8f0]'
              }`}
              title="Instagram @advfagnersilva"
            >
              <Instagram className="w-4 h-4" />
            </a>

            {/* Main Urgent WhatsApp CTA */}
            <a
              id="header-urgent-whatsapp-cta"
              href={getWhatsAppUrl('Olá, Dr. Fagner Silva. Gostaria de solicitar atendimento criminal com o escritório.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#c5a880] hover:bg-[#d4b992] text-[#0b0e14] font-bold text-xs tracking-wider uppercase transition-all shadow-md shadow-[#c5a880]/10 hover:shadow-[#c5a880]/20 active:scale-[0.98]"
            >
              <ShieldAlert className="w-3.5 h-3.5 shrink-0" />
              <span>Falar no WhatsApp</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`xl:hidden p-2 rounded-lg border focus:outline-none transition-colors ${
                isDark 
                  ? 'border-[#223049] text-[#94a3b8] hover:text-[#f8fafc] hover:bg-[#161f30]' 
                  : 'border-[#cbd5e1] text-[#475569] hover:text-[#0f172a] hover:bg-[#f1f5f9]'
              }`}
              aria-label="Abrir menu de navegação"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div 
            id="mobile-nav-drawer" 
            className={`xl:hidden border-t px-4 pt-4 pb-6 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200 ${
              isDark ? 'border-[#1e293b] bg-[#0b0e14]' : 'border-[#e2e8f0] bg-white'
            }`}
          >
            <div className="flex flex-col gap-1">
              {navItems.map((item) => {
                const isActive = currentRoute === item.route;
                return (
                  <button
                    key={item.route}
                    id={`mobile-nav-link-${item.route}`}
                    onClick={() => handleNavClick(item.route)}
                    className={`flex items-center justify-between px-4 py-3 rounded-lg text-sm uppercase tracking-wider font-semibold text-left transition-colors ${
                      isActive
                        ? isDark 
                          ? 'bg-[#182133] text-[#c5a880] border-l-4 border-[#c5a880]' 
                          : 'bg-[#faf5ed] text-[#8b6225] border-l-4 border-[#c5a880]'
                        : isDark 
                          ? 'text-[#94a3b8] hover:bg-[#131b2a] hover:text-[#f8fafc]' 
                          : 'text-[#475569] hover:bg-[#f8fafc] hover:text-[#0f172a]'
                    }`}
                  >
                    <span>{item.label}</span>
                    <span className="text-xs font-mono text-[#64748b] lowercase">{item.path}</span>
                  </button>
                );
              })}
            </div>

            <div className={`mt-5 pt-4 border-t flex flex-col gap-2.5 ${isDark ? 'border-[#1e293b]' : 'border-[#e2e8f0]'}`}>
              {/* Instagram & PJe buttons */}
              <div className="grid grid-cols-2 gap-2">
                <a
                  href={lawyerProfile.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg border text-xs font-semibold ${
                    isDark ? 'border-[#223049] text-[#e1306c] bg-[#121824]' : 'border-[#cbd5e1] text-[#e1306c] bg-[#f8fafc]'
                  }`}
                >
                  <Instagram className="w-3.5 h-3.5" />
                  <span>Instagram</span>
                </a>

                <a
                  href={lawyerProfile.pje1gUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg border text-xs font-semibold ${
                    isDark ? 'border-[#223049] text-[#c5a880] bg-[#121824]' : 'border-[#cbd5e1] text-[#8b6225] bg-[#f8fafc]'
                  }`}
                >
                  <Globe className="w-3.5 h-3.5" />
                  <span>PJe TJ-PI</span>
                </a>
              </div>

              <a
                id="mobile-urgent-btn"
                href={getWhatsAppUrl('Olá, Dr. Fagner Silva. Preciso de atendimento criminal em regime de urgência.')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-[#c5a880] text-[#0b0e14] text-xs uppercase tracking-wider font-bold shadow-lg"
              >
                <ShieldAlert className="w-4 h-4" />
                <span>Atendimento no WhatsApp</span>
              </a>

              <a
                id="mobile-direct-call"
                href={`tel:${lawyerProfile.phoneRaw}`}
                className={`w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg border text-xs uppercase tracking-wider font-semibold transition-colors ${
                  isDark 
                    ? 'border-[#2d3a52] text-[#cbd5e1] hover:bg-[#131b2a]' 
                    : 'border-[#cbd5e1] text-[#334155] hover:bg-[#f1f5f9]'
                }`}
              >
                <PhoneCall className="w-3.5 h-3.5 text-[#c5a880]" />
                <span>Ligar: {lawyerProfile.phoneFormatted}</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

