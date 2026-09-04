import React, { useState, useEffect } from 'react';
import { AppRoute } from '../types';
import { lawyerProfile, getWhatsAppUrl } from '../data/lawyerData';
import { useTheme } from '../context/ThemeContext';
import { SafeImage } from './SafeImage';
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
  MessageSquare
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
    { label: 'Sobre o Advogado', route: 'sobrenos', path: '/sobrenos' },
    { label: 'Áreas de Atuação', route: 'atuacao', path: '/atuacao' },
    { label: 'Casos & PJe', route: 'casos', path: '/casos' },
    { label: 'Artigos & Orientações', route: 'conteudos', path: '/conteudos' },
    { label: 'Dúvidas (FAQ)', route: 'faq', path: '/faq' },
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
            : 'bg-[#faf6f0] border-b border-[#ebdcc9] text-[#554228]'
        }`}
      >
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className={`font-bold ${isDark ? 'text-[#cbd5e1]' : 'text-[#2b1f0d]'}`}>
              Plantão Criminal 24h:
            </span>
            <span className="hidden md:inline font-medium">
              Isaías Coelho • Simplício Mendes • Todo o Piauí
            </span>
          </div>

          <div className="flex items-center gap-3 text-xs">
            {/* Instagram link */}
            <a
              id="topbar-instagram-link"
              href={lawyerProfile.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-[#b89058] transition-colors font-semibold touch-press"
              title="Instagram @advfagnersilva"
            >
              <Instagram className="w-3.5 h-3.5 text-[#e1306c]" />
              <span className="hidden sm:inline">@advfagnersilva</span>
            </a>

            <span className={isDark ? 'text-[#334155]' : 'text-[#d9cbba]'}>|</span>

            {/* PJe TJPI link */}
            <a
              id="topbar-pje-link"
              href={lawyerProfile.pje1gUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-[#b89058] transition-colors font-semibold touch-press"
              title="Acessar PJe TJ-PI"
            >
              <Globe className="w-3.5 h-3.5 text-[#b89058]" />
              <span>PJe TJ-PI</span>
            </a>

            <span className={isDark ? 'text-[#334155]' : 'text-[#d9cbba]'}>|</span>

            <a 
              id="topbar-phone-link"
              href={`tel:${lawyerProfile.phoneRaw}`} 
              className={`hover:text-[#b89058] transition-colors flex items-center gap-1.5 font-bold touch-press ${
                isDark ? 'text-[#e2e8f0]' : 'text-[#0f2137]'
              }`}
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#b89058]" />
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
              : 'bg-white/95 backdrop-blur-md border-b border-[#ebdcc9] shadow-md py-3'
            : isDark
              ? 'bg-[#0b0e14]/85 backdrop-blur-sm border-b border-[#171e2e] py-3.5'
              : 'bg-[#fcfaf7]/90 backdrop-blur-sm border-b border-[#ebdcc9] py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo Brand */}
          <button 
            id="brand-logo-btn"
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 text-left group focus:outline-none touch-press cursor-pointer select-none"
          >
            <div className="soft-icon-pod !p-2.5 !rounded-2xl">
              <Scale className="w-5 h-5 stroke-[1.5]" />
            </div>
            <div>
              <div className="font-serif tracking-wide text-base uppercase font-bold flex items-center gap-1.5 text-[#0f2137] dark:text-[#f8fafc]">
                <span>Dr. Fagner Silva</span>
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#b89058]"></span>
              </div>
              <p className={`text-[11px] tracking-wider uppercase font-semibold ${isDark ? 'text-[#94a3b8]' : 'text-[#8c642b]'}`}>
                Advocacia Criminal • Isaías Coelho / PI
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
                  className={`px-3 py-2 text-xs uppercase tracking-wider font-bold transition-all relative touch-press cursor-pointer select-none ${
                    isActive
                      ? 'text-[#b89058]'
                      : isDark
                        ? 'text-[#94a3b8] hover:text-[#f8fafc] hover:bg-[#141b28]/60 rounded-xl'
                        : 'text-[#475569] hover:text-[#0f2137] hover:bg-[#f4ece0]/60 rounded-xl'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#b89058] rounded-full" />
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
              className={`p-2 rounded-2xl border transition-all flex items-center gap-1.5 text-xs font-semibold touch-press cursor-pointer select-none ${
                isDark 
                  ? 'bg-[#141c2b] border-[#223049] text-amber-300 hover:bg-[#1c273c]' 
                  : 'bg-white border-[#ebdcc9] text-slate-700 hover:bg-[#faf7f2] shadow-sm'
              }`}
              title={isDark ? 'Mudar para Tema Claro' : 'Mudar para Tema Escuro'}
            >
              {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
              <span className="hidden md:inline text-[11px] font-bold">
                {isDark ? 'Claro' : 'Escuro'}
              </span>
            </button>

            {/* Instagram Quick Link */}
            <a
              id="header-instagram-btn"
              href={lawyerProfile.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`hidden sm:flex p-2 rounded-2xl border transition-all items-center justify-center touch-press ${
                isDark
                  ? 'bg-[#141c2b] border-[#223049] text-[#e1306c] hover:bg-[#1c273c]'
                  : 'bg-white border-[#ebdcc9] text-[#e1306c] hover:bg-[#faf7f2] shadow-sm'
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
              className="btn-whatsapp px-3.5 py-2 text-xs font-bold tracking-wide select-none"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Plantão</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`xl:hidden p-2 rounded-xl border focus:outline-none transition-all touch-press ${
                isDark 
                  ? 'border-[#223049] text-[#94a3b8] hover:text-[#f8fafc] hover:bg-[#161f30]' 
                  : 'border-[#ebdcc9] text-[#475569] hover:text-[#0f2137] bg-white shadow-sm'
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
            className={`xl:hidden border-t px-4 pt-3 pb-6 shadow-xl animate-in fade-in slide-in-from-top-2 duration-150 ${
              isDark ? 'border-[#1e293b] bg-[#0b0e14]' : 'border-[#ebdcc9] bg-white'
            }`}
          >
            {/* Lawyer Mini Profile Badge */}
            <div 
              onClick={() => handleNavClick('sobrenos')}
              className={`mb-3 p-3 rounded-2xl border flex items-center gap-3 cursor-pointer select-none interactive-card ${
                isDark ? 'bg-[#101726] border-[#22334e]' : 'bg-[#faf6f0] border-[#ebdcc9]'
              }`}
            >
              <div className="relative w-12 h-12 rounded-xl overflow-hidden shrink-0 border border-[#b89058]/50 shadow-md">
                <SafeImage
                  src={lawyerProfile.avatarUrl || "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=900&q=80"}
                  alt="Dr. Fagner Silva"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5">
                  <span className="font-serif font-bold text-sm text-[#0f2137] dark:text-[#f8fafc] truncate">
                    Dr. Fagner Silva
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0"></span>
                </div>
                <p className="text-[11px] text-[#b89058] font-mono uppercase tracking-wider font-semibold truncate">
                  Advocacia Criminal • Isaías Coelho
                </p>
                <span className={`text-[10px] block truncate ${isDark ? 'text-[#94a3b8]' : 'text-[#64748b]'}`}>
                  {lawyerProfile.mandate}
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-1">
              {navItems.map((item) => {
                const isActive = currentRoute === item.route;
                return (
                  <button
                    key={item.route}
                    id={`mobile-nav-link-${item.route}`}
                    onClick={() => handleNavClick(item.route)}
                    className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs uppercase tracking-wider font-bold text-left transition-all touch-press cursor-pointer select-none ${
                      isActive
                        ? isDark 
                          ? 'bg-[#182133] text-[#c5a880] border-l-2 border-[#c5a880]' 
                          : 'bg-[#faf5ed] text-[#8c642b] border-l-2 border-[#b89058]'
                        : isDark 
                          ? 'text-[#94a3b8] hover:bg-[#131b2a] hover:text-[#f8fafc]' 
                          : 'text-[#475569] hover:bg-[#faf7f2] hover:text-[#0f2137]'
                    }`}
                  >
                    <span>{item.label}</span>
                    <span className="text-[10px] font-mono text-[#64748b] lowercase">{item.path}</span>
                  </button>
                );
              })}
            </div>

            <div className={`mt-4 pt-4 border-t flex flex-col gap-2.5 ${isDark ? 'border-[#1e293b]' : 'border-[#ebdcc9]'}`}>
              {/* Instagram & PJe buttons */}
              <div className="grid grid-cols-2 gap-2">
                <a
                  href={lawyerProfile.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl border text-xs font-semibold touch-press ${
                    isDark ? 'border-[#223049] text-[#e1306c] bg-[#121824]' : 'border-[#ebdcc9] text-[#e1306c] bg-[#faf7f2]'
                  }`}
                >
                  <Instagram className="w-3.5 h-3.5" />
                  <span>Instagram</span>
                </a>

                <a
                  href={lawyerProfile.pje1gUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl border text-xs font-semibold touch-press ${
                    isDark ? 'border-[#223049] text-[#c5a880] bg-[#121824]' : 'border-[#ebdcc9] text-[#8c642b] bg-[#faf7f2]'
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
                className="btn-whatsapp w-full py-3 px-4 text-xs tracking-wider uppercase font-bold"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Atendimento no WhatsApp</span>
              </a>

              <a
                id="mobile-direct-call"
                href={`tel:${lawyerProfile.phoneRaw}`}
                className={`btn-secondary w-full py-2.5 px-4 text-xs uppercase tracking-wider font-bold`}
              >
                <PhoneCall className="w-3.5 h-3.5 text-[#b89058]" />
                <span>Ligar: {lawyerProfile.phoneFormatted}</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
