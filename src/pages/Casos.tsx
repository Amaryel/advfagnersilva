import React, { useState } from 'react';
import { AppRoute, CasePrecedent } from '../types';
import { casePrecedents, lawyerProfile, getWhatsAppUrl } from '../data/lawyerData';
import { useTheme } from '../context/ThemeContext';
import { 
  Scale, 
  Search, 
  ExternalLink, 
  ShieldCheck, 
  FileText, 
  BookOpen, 
  Instagram, 
  Globe, 
  CheckCircle2, 
  ArrowUpRight, 
  MessageSquare, 
  Layers, 
  Award,
  ChevronRight,
  Filter,
  X,
  Gavel
} from 'lucide-react';

interface CasosProps {
  navigate: (route: AppRoute) => void;
}

export const Casos: React.FC<CasosProps> = ({ navigate }) => {
  const { theme } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCaseModal, setSelectedCaseModal] = useState<CasePrecedent | null>(null);

  const categories = [
    { id: 'all', label: 'Todos os Casos' },
    { id: 'Habeas Corpus', label: 'Habeas Corpus' },
    { id: 'Audiência de Custódia', label: 'Custódia' },
    { id: 'Tribunal do Júri', label: 'Tribunal do Júri' },
    { id: 'Acordo ANPP', label: 'Acordo ANPP' },
    { id: 'Execução Penal', label: 'Execução Penal' },
    { id: 'Inquérito Policial', label: 'Inquéritos' },
  ];

  const filteredCases = casePrecedents.filter((c) => {
    const matchesCat = selectedCategory === 'all' || c.category === selectedCategory;
    const query = searchQuery.toLowerCase();
    const matchesQuery = 
      c.title.toLowerCase().includes(query) ||
      c.caseSummary.toLowerCase().includes(query) ||
      c.legalThesis.toLowerCase().includes(query) ||
      c.court.toLowerCase().includes(query) ||
      c.tags.some(t => t.toLowerCase().includes(query));
    return matchesCat && matchesQuery;
  });

  const isDark = theme === 'dark';

  return (
    <div className={`py-10 sm:py-16 ${isDark ? 'text-[#e2e8f0]' : 'text-[#1e293b]'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className={`border-b pb-8 space-y-3 ${isDark ? 'border-[#1c273c]' : 'border-[#ebdcc9]'}`}>
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#b89058] font-bold">
            <BookOpen className="w-4 h-4" />
            <span>Jurisprudência & Precedentes</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif tracking-tight leading-tight text-[#0f2137] dark:text-[#f8fafc]">
            Casos Trabalhados & <br className="hidden sm:inline" />
            <span className="gold-gradient-text">Atuação Processual</span>
          </h1>
          <p className={`text-sm sm:text-base max-w-3xl leading-relaxed ${isDark ? 'text-[#94a3b8]' : 'text-[#475569]'}`}>
            Acompanhe o histórico de teses jurídicas defensivas, decisões paradigmáticas e consultas oficiais no Processo Judicial Eletrônico (PJe TJ-PI) e no Cadastro Nacional dos Advogados (CNA/OAB).
          </p>
        </div>

        {/* Quick Access Badges / External Official Portals */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* PJe TJ-PI Card */}
          <a
            id="link-portal-pje-1g"
            href={lawyerProfile.pje1gUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`p-6 rounded-3xl border transition-all duration-300 flex items-start justify-between group interactive-card ${
              isDark 
                ? 'bg-[#0f1522] border-[#1e293b]' 
                : 'bg-white border-[#ebdcc9] shadow-sm'
            }`}
          >
            <div className="space-y-3">
              <div className="soft-icon-pod !p-2 !rounded-2xl">
                <Globe className="w-5 h-5 text-[#b89058]" />
              </div>
              <h2 className="font-serif font-bold text-base text-[#0f2137] dark:text-[#f8fafc] group-hover:text-[#b89058] transition-colors">
                PJe TJ-PI (1º & 2º Graus)
              </h2>
              <p className={`text-xs line-clamp-2 leading-relaxed ${isDark ? 'text-[#94a3b8]' : 'text-[#475569]'}`}>
                Acesso oficial ao sistema de Processo Judicial Eletrônico do Poder Judiciário do Estado do Piauí.
              </p>
            </div>
            <ArrowUpRight className="w-4 h-4 text-[#b89058] shrink-0" />
          </a>

          {/* OAB CNA Card */}
          <a
            id="link-portal-oab-cna"
            href={lawyerProfile.oabCnaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`p-6 rounded-3xl border transition-all duration-300 flex items-start justify-between group interactive-card ${
              isDark 
                ? 'bg-[#0f1522] border-[#1e293b]' 
                : 'bg-white border-[#ebdcc9] shadow-sm'
            }`}
          >
            <div className="space-y-3">
              <div className="soft-icon-pod !p-2 !rounded-2xl">
                <ShieldCheck className="w-5 h-5 text-[#b89058]" />
              </div>
              <h2 className="font-serif font-bold text-base text-[#0f2137] dark:text-[#f8fafc] group-hover:text-[#b89058] transition-colors">
                Cadastro Nacional (CNA/OAB)
              </h2>
              <p className={`text-xs line-clamp-2 leading-relaxed ${isDark ? 'text-[#94a3b8]' : 'text-[#475569]'}`}>
                Consulta pública de regularidade e inscrição profissional da Ordem dos Advogados do Brasil.
              </p>
            </div>
            <ArrowUpRight className="w-4 h-4 text-[#b89058] shrink-0" />
          </a>

          {/* Instagram Card */}
          <a
            id="link-portal-instagram"
            href={lawyerProfile.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`p-6 rounded-3xl border transition-all duration-300 flex items-start justify-between group interactive-card ${
              isDark 
                ? 'bg-[#0f1522] border-[#1e293b]' 
                : 'bg-white border-[#ebdcc9] shadow-sm'
            }`}
          >
            <div className="space-y-3">
              <div className="soft-icon-pod !p-2 !rounded-2xl">
                <Instagram className="w-5 h-5 text-[#e1306c]" />
              </div>
              <h2 className="font-serif font-bold text-base text-[#0f2137] dark:text-[#f8fafc] group-hover:text-[#b89058] transition-colors">
                Instagram @advfagnersilva
              </h2>
              <p className={`text-xs line-clamp-2 leading-relaxed ${isDark ? 'text-[#94a3b8]' : 'text-[#475569]'}`}>
                Publicações, orientações jurídicas e bastidores da prática forense no Piauí.
              </p>
            </div>
            <ArrowUpRight className="w-4 h-4 text-[#b89058] shrink-0" />
          </a>
        </div>

        {/* Filter & Search Bar */}
        <div className={`p-6 rounded-3xl border space-y-4 ${
          isDark ? 'bg-[#0d121c] border-[#1e2a3f]' : 'bg-white border-[#ebdcc9] shadow-sm'
        }`}>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#64748b]" />
              <input
                id="search-cases-input"
                type="text"
                placeholder="Buscar por tese, tribunal, assunto..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`w-full pl-10 pr-4 py-2.5 rounded-2xl border text-xs focus:outline-none transition-all ${
                  isDark 
                    ? 'bg-[#101624] border-[#223049] text-[#f8fafc] focus:border-[#c5a880]' 
                    : 'bg-[#faf8f5] border-[#ebdcc9] text-[#0f2137] focus:border-[#b89058]'
                }`}
              />
            </div>

            {/* Total Results Count */}
            <span className="text-xs font-mono text-[#64748b] font-semibold">
              Exibindo {filteredCases.length} caso(s)
            </span>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 pt-1 border-t border-current/10">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-2xl text-xs font-bold transition-all touch-press cursor-pointer select-none ${
                  selectedCategory === cat.id
                    ? 'bg-[#b89058] text-white shadow-sm'
                    : isDark
                      ? 'bg-[#101624] text-[#94a3b8] hover:text-[#f8fafc]'
                      : 'bg-[#faf8f5] border border-[#ebdcc9] text-[#475569] hover:text-[#0f2137]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCases.map((c) => (
            <div
              key={c.id}
              className={`p-6 rounded-3xl border flex flex-col justify-between space-y-5 interactive-card ${
                isDark 
                  ? 'bg-[#0d121c] border-[#1e2a3f] shadow-xl' 
                  : 'bg-white border-[#ebdcc9] shadow-sm'
              }`}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-[#b89058]/15 text-[#8c642b] dark:text-[#c5a880] border border-[#b89058]/30">
                    {c.category}
                  </span>
                  <span className="text-[11px] font-mono text-[#64748b] font-medium">
                    {c.dateOrYear}
                  </span>
                </div>

                <h3 className="font-serif font-bold text-base text-[#0f2137] dark:text-[#f8fafc] leading-snug">
                  {c.title}
                </h3>

                <p className={`text-xs leading-relaxed ${isDark ? 'text-[#94a3b8]' : 'text-[#475569]'}`}>
                  {c.caseSummary}
                </p>

                <div className={`p-3.5 rounded-2xl border text-xs space-y-1 ${
                  isDark ? 'bg-[#101624] border-[#1d2b40]' : 'bg-[#faf8f5] border-[#ebdcc9]'
                }`}>
                  <span className="text-[10px] font-mono uppercase font-bold text-[#b89058] block">
                    Resultado Obtido:
                  </span>
                  <p className="text-[11px] font-semibold text-[#0f2137] dark:text-[#cbd5e1] leading-relaxed">
                    {c.outcome}
                  </p>
                </div>
              </div>

              {/* Card Footer */}
              <div className="pt-3 border-t border-current/10 flex items-center justify-between">
                <button
                  onClick={() => setSelectedCaseModal(c)}
                  className="text-xs font-bold text-[#b89058] hover:underline flex items-center gap-1 touch-press cursor-pointer select-none"
                >
                  <span>Ver Detalhes & Tese</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>

                <a
                  href={getWhatsAppUrl(`Olá, Dr. Fagner Silva. Gostaria de entender mais sobre o caso "${c.title}".`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl bg-gradient-to-r from-[#25D366] to-[#128C7E] text-black shadow-sm touch-press"
                  title="Consultar caso no WhatsApp"
                >
                  <MessageSquare className="w-3.5 h-3.5 fill-black/20" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Case Details Modal */}
      {selectedCaseModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className={`max-w-2xl w-full rounded-3xl border p-6 sm:p-8 space-y-6 shadow-2xl relative max-h-[90vh] overflow-y-auto ${
            isDark ? 'bg-[#0d121c] border-[#25354e] text-[#e2e8f0]' : 'bg-white border-[#ebdcc9] text-[#1e293b]'
          }`}>
            <button
              onClick={() => setSelectedCaseModal(null)}
              className="absolute top-5 right-5 p-2 rounded-full border border-current/20 text-[#64748b] hover:text-[#0f2137] dark:hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="space-y-2">
              <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-[#b89058]/15 text-[#8c642b] dark:text-[#c5a880] border border-[#b89058]/30 inline-block">
                {selectedCaseModal.category}
              </span>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#0f2137] dark:text-[#f8fafc]">
                {selectedCaseModal.title}
              </h2>
              <span className="text-xs font-mono text-[#64748b] block">
                Órgão Julgador: {selectedCaseModal.court}
              </span>
            </div>

            <div className="space-y-4 text-xs sm:text-sm leading-relaxed">
              <div className="space-y-1">
                <h3 className="font-serif font-bold text-xs uppercase text-[#b89058]">Contexto dos Fatos:</h3>
                <p className={isDark ? 'text-[#cbd5e1]' : 'text-[#475569]'}>{selectedCaseModal.caseSummary}</p>
              </div>

              <div className="space-y-1">
                <h3 className="font-serif font-bold text-xs uppercase text-[#b89058]">Tese Jurídica Sustentada:</h3>
                <p className={isDark ? 'text-[#cbd5e1]' : 'text-[#475569]'}>{selectedCaseModal.legalThesis}</p>
              </div>

              <div className={`p-4 rounded-2xl border ${
                isDark ? 'bg-[#101624] border-[#1d2b40]' : 'bg-[#faf8f5] border-[#ebdcc9]'
              }`}>
                <h3 className="font-serif font-bold text-xs uppercase text-emerald-600 mb-1">Decisão / Resultado:</h3>
                <p className="font-semibold text-xs leading-relaxed">{selectedCaseModal.outcome}</p>
              </div>
            </div>

            <div className="pt-4 border-t flex flex-col sm:flex-row items-center gap-3">
              <a
                href={getWhatsAppUrl(`Olá, Dr. Fagner Silva. Gostaria de agendar uma consulta sobre a tese "${selectedCaseModal.title}".`)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:flex-1 py-3.5 px-4 rounded-2xl bg-gradient-to-r from-[#25D366] to-[#128C7E] text-black font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md btn-shimmer"
              >
                <MessageSquare className="w-4 h-4 fill-black/20" />
                <span>Consultar Caso no WhatsApp</span>
              </a>

              <button
                onClick={() => setSelectedCaseModal(null)}
                className={`w-full sm:w-auto py-3.5 px-5 rounded-2xl border text-xs uppercase tracking-wider font-bold ${
                  isDark ? 'border-[#2d3e5b] hover:bg-[#141d2e]' : 'border-[#ebdcc9] bg-white hover:bg-[#faf8f5]'
                }`}
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
