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
    <div id="faq-page-root" className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16 space-y-12 ${isDark ? 'text-[#e2e8f0]' : 'text-[#0f172a]'}`}>
      
      {/* Header */}
      <div className={`border-b pb-8 space-y-3 ${isDark ? 'border-[#1c273c]' : 'border-[#cbd5e1]'}`}>
        <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#c5a880] font-semibold">
          <HelpCircle className="w-4 h-4" />
          <span>Perguntas Frequentes & Esclarecimentos</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold">
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
            className={`w-full pl-10 pr-4 py-3 rounded-xl border text-xs transition-colors focus:outline-none focus:ring-2 focus:ring-[#c5a880]/50 ${
              isDark 
                ? 'bg-[#0e1420] border-[#233148] text-[#f8fafc] placeholder-[#64748b]' 
                : 'bg-white border-[#cbd5e1] text-[#0f172a] placeholder-[#94a3b8] shadow-sm'
            }`}
          />
        </div>

        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold uppercase tracking-wider transition-colors ${
              selectedCategory === 'all'
                ? 'bg-[#c5a880] text-[#0b0e14] shadow-md shadow-[#c5a880]/20'
                : isDark
                  ? 'bg-[#111724] border border-[#223049] text-[#94a3b8] hover:text-[#f8fafc]'
                  : 'bg-white border border-[#cbd5e1] text-[#475569] hover:text-[#0f172a]'
            }`}
          >
            Todas ({faqList.length})
          </button>
          <button
            onClick={() => setSelectedCategory('urgencias')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold uppercase tracking-wider transition-colors ${
              selectedCategory === 'urgencias'
                ? 'bg-[#c5a880] text-[#0b0e14] shadow-md shadow-[#c5a880]/20'
                : isDark
                  ? 'bg-[#111724] border border-[#223049] text-[#94a3b8] hover:text-[#f8fafc]'
                  : 'bg-white border border-[#cbd5e1] text-[#475569] hover:text-[#0f172a]'
            }`}
          >
            Prisões & Urgências
          </button>
          <button
            onClick={() => setSelectedCategory('processual')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold uppercase tracking-wider transition-colors ${
              selectedCategory === 'processual'
                ? 'bg-[#c5a880] text-[#0b0e14] shadow-md shadow-[#c5a880]/20'
                : isDark
                  ? 'bg-[#111724] border border-[#223049] text-[#94a3b8] hover:text-[#f8fafc]'
                  : 'bg-white border border-[#cbd5e1] text-[#475569] hover:text-[#0f172a]'
            }`}
          >
            Fase Processual & Recursos
          </button>
          <button
            onClick={() => setSelectedCategory('atendimento')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold uppercase tracking-wider transition-colors ${
              selectedCategory === 'atendimento'
                ? 'bg-[#c5a880] text-[#0b0e14] shadow-md shadow-[#c5a880]/20'
                : isDark
                  ? 'bg-[#111724] border border-[#223049] text-[#94a3b8] hover:text-[#f8fafc]'
                  : 'bg-white border border-[#cbd5e1] text-[#475569] hover:text-[#0f172a]'
            }`}
          >
            Atendimento & Comarcas
          </button>
        </div>
      </div>

      {/* FAQ Accordion List */}
      <div className="space-y-4">
        {filteredFaqs.map((faq) => {
          const isOpen = !!openItems[faq.id];
          return (
            <div
              key={faq.id}
              id={`faq-item-${faq.id}`}
              className={`rounded-2xl border transition-all duration-300 overflow-hidden shadow-sm ${
                isDark 
                  ? 'bg-[#0d121c] border-[#1e2a3d] hover:border-[#2b3c58]' 
                  : 'bg-white border-[#cbd5e1] hover:border-[#c5a880]'
              }`}
            >
              <button
                onClick={() => toggleItem(faq.id)}
                className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4"
              >
                <div className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-[#c5a880]/15 text-[#c5a880] mt-0.5 shrink-0">
                    <Scale className="w-3.5 h-3.5" />
                  </div>
                  <span className={`font-serif text-sm sm:text-base font-bold leading-snug ${isDark ? 'text-[#f8fafc]' : 'text-[#0f172a]'}`}>
                    {faq.question}
                  </span>
                </div>
                <div className="text-[#c5a880] shrink-0">
                  {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </div>
              </button>

              {isOpen && (
                <div className={`px-5 sm:px-6 pb-6 pt-2 space-y-4 border-t ${
                  isDark ? 'border-[#172233]' : 'border-[#cbd5e1]'
                }`}>
                  <p className={`text-xs sm:text-sm leading-relaxed ${isDark ? 'text-[#cbd5e1]' : 'text-[#334155]'}`}>
                    {faq.answer}
                  </p>

                  <div className={`p-3.5 rounded-xl border flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                    isDark ? 'bg-[#101726] border-[#1d273a]' : 'bg-[#faf7f2] border-[#cbd5e1]'
                  }`}>
                    <span className={`text-[11px] ${isDark ? 'text-[#94a3b8]' : 'text-[#64748b]'}`}>
                      Precisa de esclarecimento específico para o seu caso?
                    </span>
                    <a
                      id={`faq-wa-btn-${faq.id}`}
                      href={getWhatsAppUrl(faq.whatsappFollowUp)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#c5a880] hover:text-[#dfc399] uppercase tracking-wider"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>Falar sobre esta dúvida</span>
                    </a>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {filteredFaqs.length === 0 && (
        <div className="text-center py-12">
          <p className={`text-xs sm:text-sm ${isDark ? 'text-[#94a3b8]' : 'text-[#64748b]'}`}>
            Nenhuma resposta localizada com os termos informados.
          </p>
          <a
            href={getWhatsAppUrl('Olá, Dr. Fagner Silva. Gostaria de tirar uma dúvida jurídica que não encontrei no FAQ.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-xl bg-[#c5a880] text-[#0b0e14] font-bold text-xs uppercase"
          >
            <span>Perguntar diretamente no WhatsApp</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      )}

      {/* Bottom Emergency Banner */}
      <div className={`p-8 rounded-2xl border text-center space-y-4 ${
        isDark ? 'bg-[#0d121c] border-[#223048]' : 'bg-[#faf7f2] border-[#cbd5e1]'
      }`}>
        <h3 className={`font-serif text-lg sm:text-xl font-bold ${isDark ? 'text-[#f8fafc]' : 'text-[#0f172a]'}`}>
          Sua dúvida envolve uma situação urgente ou prisão recente?
        </h3>
        <p className={`text-xs sm:text-sm max-w-xl mx-auto leading-relaxed ${isDark ? 'text-[#94a3b8]' : 'text-[#64748b]'}`}>
          Em casos de flagrante delito ou mandado de prisão, não hesite em acionar o plantão telefônico a qualquer hora.
        </p>
        <div className="pt-2">
          <a
            href={getWhatsAppUrl('Olá, Dr. Fagner Silva. Tenho uma URGÊNCIA CRIMINAL e preciso de assistência imediata.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 py-3 px-6 rounded-xl bg-gradient-to-r from-[#25D366] to-[#128C7E] text-black font-bold text-xs uppercase tracking-wider shadow-lg active:scale-95 transition-transform"
          >
            <ShieldAlert className="w-4 h-4 text-black fill-black/20" />
            <span>Chamar no WhatsApp de Plantão</span>
          </a>
        </div>
      </div>

    </div>
  );
};
