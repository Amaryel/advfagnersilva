import React, { useState, useEffect } from 'react';
import { AppRoute } from './types';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { WhatsAppFloating } from './components/WhatsAppFloating';
import { RouteShareBanner } from './components/RouteShareBanner';
import { MobileQuickBar } from './components/MobileQuickBar';
import { Home } from './pages/Home';
import { Sobre } from './pages/Sobre';
import { Atuacao } from './pages/Atuacao';
import { Casos } from './pages/Casos';
import { Conteudos } from './pages/Conteudos';
import { Faq } from './pages/Faq';
import { Contato } from './pages/Contato';

function AppContent() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const getInitialRoute = (): AppRoute => {
    // Check search param first (?page=casos, ?page=atuacao)
    const params = new URLSearchParams(window.location.search);
    const pageParam = params.get('page');
    if (pageParam && ['home', 'sobrenos', 'atuacao', 'casos', 'conteudos', 'faq', 'contato'].includes(pageParam)) {
      return pageParam as AppRoute;
    }

    // Check pathname (/sobrenos, /atuacao, /casos, etc.)
    const path = window.location.pathname.replace(/^\/+|\/+$/g, '');
    if (path === 'sobrenos') return 'sobrenos';
    if (path === 'atuacao') return 'atuacao';
    if (path === 'casos') return 'casos';
    if (path === 'conteudos') return 'conteudos';
    if (path === 'faq') return 'faq';
    if (path === 'contato') return 'contato';

    return 'home';
  };

  const [currentRoute, setCurrentRoute] = useState<AppRoute>(getInitialRoute);

  const navigate = (route: AppRoute) => {
    setCurrentRoute(route);
    const newUrl = route === 'home' 
      ? window.location.pathname 
      : `${window.location.pathname}?page=${route}`;
    
    try {
      window.history.pushState({ route }, '', newUrl);
    } catch (e) {
      // Fallback in restricted iframe environments
    }
  };

  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      if (event.state && event.state.route) {
        setCurrentRoute(event.state.route);
      } else {
        setCurrentRoute(getInitialRoute());
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const renderCurrentPage = () => {
    switch (currentRoute) {
      case 'home':
        return <Home navigate={navigate} />;
      case 'sobrenos':
        return <Sobre navigate={navigate} />;
      case 'atuacao':
        return <Atuacao navigate={navigate} />;
      case 'casos':
        return <Casos navigate={navigate} />;
      case 'conteudos':
        return <Conteudos navigate={navigate} />;
      case 'faq':
        return <Faq navigate={navigate} />;
      case 'contato':
        return <Contato navigate={navigate} />;
      default:
        return <Home navigate={navigate} />;
    }
  };

  return (
    <div 
      id="advocacia-app-root" 
      className={`min-h-screen flex flex-col font-sans selection:bg-[#c5a880] selection:text-[#0b0e14] transition-colors duration-300 pb-20 lg:pb-0 ${
        isDark ? 'bg-[#070a10] text-[#e2e8f0]' : 'bg-[#f8fafc] text-[#0f172a]'
      }`}
    >
      {/* Top Navbar */}
      <Navbar currentRoute={currentRoute} navigate={navigate} />

      {/* Route Share Bar for Direct URL sharing */}
      <RouteShareBanner currentRoute={currentRoute} />

      {/* Main Content Area */}
      <main className="flex-1 w-full relative">
        {renderCurrentPage()}
      </main>

      {/* Floating WhatsApp Action Widget (Desktop & Tablet) */}
      <div className="hidden lg:block">
        <WhatsAppFloating />
      </div>

      {/* Floating Sticky Quick Action Bar (Mobile only, for ultra-easy customer service) */}
      <MobileQuickBar navigate={navigate} />

      {/* Institutional Footer */}
      <Footer navigate={navigate} />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
