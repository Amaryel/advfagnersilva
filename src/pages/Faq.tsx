import React, { useState } from 'react';
import { AppRoute, FaqItem } from '../types';
import { faqList, getWhatsAppUrl } from '../data/lawyerData';
import { useTheme } from '../context/ThemeContext';
import { 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  Search, 
  ArrowRight,
  ShieldAlert,
  Scale,
  MessageSquare,
  Sparkles
} from 'lucide-react';

interface FaqProps {
  navigate: (route: AppRoute) => void;
}

export const Faq: React.FC<FaqProps> = ({ navigate }) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const [openItems, setOpenItems] = useState<Record<string, boolean>>({
    'faq-1': true,
    'faq-2': true
  });
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'urgencias' | 'processual' | 'atendimento'>('all');

  const toggleItem = (id: string) => {
    setOpenItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const filteredFaqs = faqList.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = item.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div id="faq-page-root" className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16 space-y-12 ${
      isDark ? 'text-[#e2e8f0]' : 'text-[#1e293b]'
    }`}>
      
      {/* Header */}
      <div className={`border-b pb-8 space-y-3 ${isDark ? 'border-[#1c273c]' : 'border-[#ebdcc9]'}`}>
        <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#b89058] font-bold">
          <HelpCircle className="w-4 h-4" />
          <span>Perguntas Frequentes & Esclarecimentos</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0f2137] dark:text-[#f8fafc]">
          Dúvidas Recorrentes em <span className="gold-gradient-text">Matéria Criminal</span>
        </h1>
        <p className={`text-sm sm:text-base max-w-3xl leading-relaxed ${isDark ? 'text-[#94a3b8]' : 'text-[#475569]'}`}>
          Respostas objetivas e fundamentadas para as principais inquietações enfrentadas por investigados, acusados e seus familiares.
        </p>
      </div>

      {/* Controls: Search & Category Chips */}
      <div className="space-y-4">
        <div className="relative">
          <Search className="w-4 h-4 text-[#64748b] absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            id="faq-search-input"
            type="text"
            placeholder="Pesquisar dúvida específica (ex: prisão, flagrante, honorários, comarcas)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={`w-full pl-10 pr-4 py-3.5 rounded-2xl border text-xs transition-colors focus:outline-none focus:ring-2 focus:ring-[#b89058]/50 ${
              isDark 
                ? 'bg-[#0e1420] border-[#233148] text-[#f8fafc] placeholder-[#64748b]' 
                : 'bg-white border-[#ebdcc9] text-[#0f2137] placeholder-[#94a3b8] shadow-sm'
            }`}
          />
        </div>

        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-2xl text-xs font-bold uppercase tracking-wider transition-colors touch-press cursor-pointer select-none ${
              selectedCategory === 'all'
                ? 'bg-[#b89058] text-white shadow-sm'
                : isDark
                  ? 'bg-[#111724] border border-[#223049] text-[#94a3b8] hover:text-[#f8fafc]'
                  : 'bg-white border border-[#ebdcc9] text-[#475569] hover:text-[#0f2137]'
            }`}
          >
            Todas ({faqList.length})
          </button>
          <button
            onClick={() => setSelectedCategory('urgencias')}
            className={`px-4 py-2 rounded-2xl text-xs font-bold uppercase tracking-wider transition-colors touch-press cursor-pointer select-none ${
              selectedCategory === 'urgencias'
                ? 'bg-[#b89058] text-white shadow-sm'
                : isDark
                  ? 'bg-[#111724] border border-[#223049] text-[#94a3b8] hover:text-[#f8fafc]'
                  : 'bg-white border border-[#ebdcc9] text-[#475569] hover:text-[#0f2137]'
            }`}
          >
            Prisão & Flagrantes
          </button>
          <button
            onClick={() => setSelectedCategory('processual')}
            className={`px-4 py-2 rounded-2xl text-xs font-bold uppercase tracking-wider transition-colors touch-press cursor-pointer select-none ${
              selectedCategory === 'processual'
                ? 'bg-[#b89058] text-white shadow-sm'
                : isDark
                  ? 'bg-[#111724] border border-[#223049] text-[#94a3b8] hover:text-[#f8fafc]'
                  : 'bg-white border border-[#ebdcc9] text-[#475569] hover:text-[#0f2137]'
            }`}
          >
            PJe & Processos
          </button>
          <button
            onClick={() => setSelectedCategory('atendimento')}
            className={`px-4 py-2 rounded-2xl text-xs font-bold uppercase tracking-wider transition-colors touch-press cursor-pointer select-none ${
              selectedCategory === 'atendimento'
                ? 'bg-[#b89058] text-white shadow-sm'
                : isDark
                  ? 'bg-[#111724] border border-[#223049] text-[#94a3b8] hover:text-[#f8fafc]'
                  : 'bg-white border border-[#ebdcc9] text-[#475569] hover:text-[#0f2137]'
            }`}
          >
            Honorários & Plantão
          </button>
        </div>
      </div>

      {/* Accordion FAQ List */}
      <div className="space-y-4">
        {filteredFaqs.map((faq) => {
          const isOpen = !!openItems[faq.id];
          return (
            <div
              key={faq.id}
              className={`rounded-3xl border transition-all duration-200 overflow-hidden interactive-card ${
                isOpen
                  ? isDark
                    ? 'bg-[#0f1522] border-[#2d3f5e] shadow-xl'
                    : 'bg-white border-[#b89058] shadow-md'
                  : isDark
                    ? 'bg-[#0a0e16] border-[#182335] hover:border-[#22314a]'
                    : 'bg-white border-[#ebdcc9] hover:border-[#b89058] shadow-sm'
              }`}
            >
              <button
                onClick={() => toggleItem(faq.id)}
                className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 focus:outline-none touch-press cursor-pointer select-none"
              >
                <div className="flex items-center gap-3">
                  <div className="soft-icon-pod !p-2 !rounded-xl shrink-0">
                    <HelpCircle className="w-4 h-4" />
                  </div>
                  <h3 className="font-serif font-bold text-sm sm:text-base text-[#0f2137] dark:text-[#f8fafc]">
                    {faq.question}
                  </h3>
                </div>

                <div className="shrink-0 p-1 text-[#b89058]">
                  {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </div>
              </button>

              {isOpen && (
                <div className={`px-6 pb-6 pt-2 text-xs sm:text-sm leading-relaxed border-t ${
                  isDark ? 'border-[#1b263b] text-[#cbd5e1]' : 'border-[#ebdcc9] text-[#475569]'
                }`}>
                  <p>{faq.answer}</p>
                  
                  <div className="mt-4 pt-4 border-t border-current/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                    <span className="text-[11px] font-mono text-[#64748b]">
                      Precisa de esclarecimento personalizado sobre esta questão?
                    </span>
                    <a
                      href={getWhatsAppUrl(faq.whatsappFollowUp)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-[#25D366] to-[#128C7E] text-black font-bold text-xs uppercase tracking-wider shadow-sm btn-shimmer touch-press"
                    >
                      <MessageSquare className="w-3.5 h-3.5 fill-black/20" />
                      <span>Consultar no WhatsApp</span>
                    </a>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

    </div>
  );
};
