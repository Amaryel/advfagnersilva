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
  Filter
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
    <div className={`py-12 sm:py-16 ${isDark ? 'text-[#e2e8f0]' : 'text-[#0f172a]'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Breadcrumb & Title */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-4 border transition-colors bg-[#c5a880]/10 border-[#c5a880]/30 text-[#c5a880]">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Jurisprudência & Precedentes</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif tracking-tight leading-tight">
            Casos Trabalhados & <br className="hidden sm:inline" />
            <span className="gold-gradient-text">Atuação Processual</span>
          </h1>
          <p className={`mt-4 text-base sm:text-lg leading-relaxed ${isDark ? 'text-[#94a3b8]' : 'text-[#475569]'}`}>
            Acompanhe o histórico de teses jurídicas defensivas, decisões paradigmáticas e consultas oficiais no Processo Judicial Eletrônico (PJe TJ-PI) e no Cadastro Nacional dos Advogados (CNA/OAB).
          </p>
        </div>

        {/* Quick Access Badges / External Official Portals */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {/* PJe TJ-PI Card */}
          <a
            id="link-portal-pje-1g"
            href={lawyerProfile.pje1gUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`p-5 rounded-lg border transition-all duration-300 flex items-start justify-between group ${
              isDark 
                ? 'bg-[#0f1522] border-[#1e293b] hover:border-[#c5a880]/60 hover:bg-[#131b2c]' 
                : 'bg-white border-[#e2e8f0] shadow-sm hover:border-[#c5a880] hover:shadow-md'
            }`}
          >
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#c5a880]">
                <Globe className="w-4 h-4" />
                <span>Tribunal de Justiça do Piauí</span>
              </div>
              <h2 className="font-serif font-bold text-base group-hover:text-[#c5a880] transition-colors">
                PJe TJ-PI (1º & 2º Graus)
              </h2>
              <p className={`text-xs line-clamp-2 ${isDark ? 'text-[#94a3b8]' : 'text-[#64748b]'}`}>
                Acesso oficial ao sistema de Processo Judicial Eletrônico do Poder Judiciário do Estado do Piauí.
              </p>
              <div className="flex items-center gap-1.5 text-xs font-semibold text-[#c5a880] pt-1">
                <span>Acessar pje.tjpi.jus.br</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>
          </a>

          {/* OAB CNA Card */}
          <a
            id="link-portal-oab-cna"
            href={lawyerProfile.oabCnaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`p-5 rounded-lg border transition-all duration-300 flex items-start justify-between group ${
              isDark 
                ? 'bg-[#0f1522] border-[#1e293b] hover:border-[#c5a880]/60 hover:bg-[#131b2c]' 
                : 'bg-white border-[#e2e8f0] shadow-sm hover:border-[#c5a880] hover:shadow-md'
            }`}
          >
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#c5a880]">
                <ShieldCheck className="w-4 h-4" />
                <span>Conselho Federal da OAB</span>
              </div>
              <h2 className="font-serif font-bold text-base group-hover:text-[#c5a880] transition-colors">
                Cadastro Nacional de Advogados (CNA)
              </h2>
              <p className={`text-xs line-clamp-2 ${isDark ? 'text-[#94a3b8]' : 'text-[#64748b]'}`}>
                Consulta pública e regularidade da inscrição profissional do Dr. Fagner Silva perante a Ordem dos Advogados do Brasil.
              </p>
              <div className="flex items-center gap-1.5 text-xs font-semibold text-[#c5a880] pt-1">
                <span>Consultar cna.oab.org.br</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>
          </a>

          {/* Instagram @advfagnersilva Card */}
          <a
            id="link-portal-instagram-adv"
            href={lawyerProfile.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`p-5 rounded-lg border transition-all duration-300 flex items-start justify-between group ${
              isDark 
                ? 'bg-[#0f1522] border-[#1e293b] hover:border-[#c5a880]/60 hover:bg-[#131b2c]' 
                : 'bg-white border-[#e2e8f0] shadow-sm hover:border-[#c5a880] hover:shadow-md'
            }`}
          >
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#c5a880]">
                <Instagram className="w-4 h-4" />
                <span>Instagram Oficial</span>
              </div>
              <h2 className="font-serif font-bold text-base group-hover:text-[#c5a880] transition-colors">
                @advfagnersilva
              </h2>
              <p className={`text-xs line-clamp-2 ${isDark ? 'text-[#94a3b8]' : 'text-[#64748b]'}`}>
                Atualizações jurídicas diárias, vídeos com direitos do cidadão e bastidores da atuação criminalista em Isaías Coelho e PI.
              </p>
              <div className="flex items-center gap-1.5 text-xs font-semibold text-[#c5a880] pt-1">
                <span>Seguir no Instagram</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>
          </a>
        </div>

        {/* Search & Category Filter Bar */}
        <div className={`p-4 sm:p-6 rounded-xl border mb-8 ${isDark ? 'bg-[#0d121c] border-[#1e293b]' : 'bg-white border-[#e2e8f0] shadow-sm'}`}>
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className={`absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 ${isDark ? 'text-[#64748b]' : 'text-[#94a3b8]'}`} />
              <input
                id="search-cases-input"
                type="text"
                placeholder="Buscar por tese jurídica, tribunal (TJ-PI, Custódia, Júri) ou palavra-chave..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`w-full pl-10 pr-4 py-2.5 rounded-lg text-sm border focus:outline-none focus:ring-2 focus:ring-[#c5a880]/50 transition-colors ${
                  isDark 
                    ? 'bg-[#131b2a] border-[#223049] text-[#f8fafc] placeholder-[#64748b]' 
                    : 'bg-[#f8fafc] border-[#cbd5e1] text-[#0f172a] placeholder-[#94a3b8]'
                }`}
              />
            </div>

            {/* Category Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 lg:pb-0 scrollbar-none">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  id={`filter-case-${cat.id}`}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3 py-1.5 rounded-md text-xs font-medium whitespace-nowrap transition-all ${
                    selectedCategory === cat.id
                      ? 'bg-[#c5a880] text-[#070a10] font-semibold shadow'
                      : isDark
                        ? 'bg-[#141b28] text-[#94a3b8] hover:text-[#f8fafc] hover:bg-[#1a2334]'
                        : 'bg-[#f1f5f9] text-[#475569] hover:text-[#0f172a] hover:bg-[#e2e8f0]'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Precedents & Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCases.map((c) => (
            <div
              key={c.id}
              id={`case-card-${c.id}`}
              className={`rounded-xl border p-6 flex flex-col justify-between transition-all duration-300 group hover:-translate-y-1 ${
                isDark 
                  ? 'bg-[#0d121c] border-[#1e293b] hover:border-[#c5a880]/50 shadow-lg shadow-black/20' 
                  : 'bg-white border-[#e2e8f0] hover:border-[#c5a880] shadow-sm hover:shadow-lg'
              }`}
            >
              <div>
                {/* Badge & Court */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-2.5 py-1 rounded text-[11px] font-semibold tracking-wider uppercase bg-[#c5a880]/15 text-[#c5a880] border border-[#c5a880]/30">
                    {c.category}
                  </span>
                  <span className={`text-[11px] font-mono ${isDark ? 'text-[#64748b]' : 'text-[#94a3b8]'}`}>
                    {c.dateOrYear}
                  </span>
                </div>

                <h3 className="font-serif font-bold text-lg leading-snug group-hover:text-[#c5a880] transition-colors mb-2">
                  {c.title}
                </h3>

                <p className={`text-xs font-medium mb-3 flex items-center gap-1.5 ${isDark ? 'text-[#cbd5e1]' : 'text-[#334155]'}`}>
                  <Scale className="w-3.5 h-3.5 text-[#c5a880]" />
                  <span>{c.court}</span>
                </p>

                <p className={`text-xs leading-relaxed line-clamp-3 mb-4 ${isDark ? 'text-[#94a3b8]' : 'text-[#64748b]'}`}>
                  {c.caseSummary}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {c.tags.map((tag, idx) => (
                    <span 
                      key={idx}
                      className={`text-[10px] px-2 py-0.5 rounded ${
                        isDark ? 'bg-[#151c2a] text-[#94a3b8]' : 'bg-[#f1f5f9] text-[#475569]'
                      }`}
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="pt-4 border-t border-dashed border-slate-700/40 flex items-center justify-between gap-2">
                <button
                  id={`btn-open-case-${c.id}`}
                  onClick={() => setSelectedCaseModal(c)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#c5a880] hover:underline"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Ver Detalhes da Tese</span>
                </button>

                <a
                  id={`btn-case-whatsapp-${c.id}`}
                  href={getWhatsAppUrl(`Olá, Dr. Fagner Silva. Vi o caso sobre "${c.title}" no seu site e gostaria de uma consulta jurídica para uma situação parecida.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-md transition-colors ${
                    isDark 
                      ? 'bg-[#172030] text-[#c5a880] hover:bg-[#c5a880] hover:text-[#070a10]' 
                      : 'bg-[#f1f5f9] text-[#0f172a] hover:bg-[#c5a880] hover:text-[#070a10]'
                  }`}
                  title="Consultar caso similar no WhatsApp"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {filteredCases.length === 0 && (
          <div className="text-center py-16">
            <p className={`text-base ${isDark ? 'text-[#94a3b8]' : 'text-[#64748b]'}`}>
              Nenhum caso ou precedente encontrado para os critérios pesquisados.
            </p>
            <button
              onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
              className="mt-4 px-4 py-2 rounded-md bg-[#c5a880] text-[#070a10] font-semibold text-xs uppercase tracking-wider"
            >
              Limpar Filtros
            </button>
          </div>
        )}

        {/* Ethical Disclaimer Notice */}
        <div className={`mt-12 p-6 rounded-xl border text-xs leading-relaxed ${isDark ? 'bg-[#0a0e16] border-[#1e293b] text-[#64748b]' : 'bg-[#f8fafc] border-[#e2e8f0] text-[#64748b]'}`}>
          <div className="flex items-start gap-3">
            <ShieldCheck className="w-4 h-4 text-[#c5a880] shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-[#94a3b8] uppercase tracking-wider block mb-1">
                Nota de Conformidade Ética (Código de Ética e Disciplina da OAB & Provimento nº 205/2021)
              </span>
              <p>
                Os precedentes, teses e decisões informadas neste portal têm caráter estritamente informativo e pedagógico, visando elucidar garantias constitucionais e o funcionamento dos tribunais brasileiros. Em observância ao Código de Ética da Advocacia, os relatos não representam promessa ou garantia de resultado idêntico em demandas futuras, uma vez que cada caso concreto possui particularidades probatórias e fáticas únicas.
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* Case Details Modal */}
      {selectedCaseModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
          <div 
            className={`max-w-2xl w-full max-h-[90vh] overflow-y-auto rounded-xl border p-6 sm:p-8 shadow-2xl relative ${
              isDark ? 'bg-[#0d121c] border-[#24324a] text-[#f8fafc]' : 'bg-white border-[#cbd5e1] text-[#0f172a]'
            }`}
          >
            <div className="flex items-center justify-between gap-4 mb-4">
              <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase bg-[#c5a880]/15 text-[#c5a880] border border-[#c5a880]/30">
                {selectedCaseModal.category}
              </span>
              <button
                id="btn-close-case-modal"
                onClick={() => setSelectedCaseModal(null)}
                className={`p-1.5 rounded-md hover:bg-[#1e293b] transition-colors text-sm font-bold ${isDark ? 'text-[#94a3b8]' : 'text-[#64748b]'}`}
              >
                ✕ Fechar
              </button>
            </div>

            <h2 className="text-xl sm:text-2xl font-bold font-serif mb-2">
              {selectedCaseModal.title}
            </h2>

            <div className={`flex items-center gap-2 text-xs mb-6 font-medium ${isDark ? 'text-[#94a3b8]' : 'text-[#64748b]'}`}>
              <Scale className="w-4 h-4 text-[#c5a880]" />
              <span>{selectedCaseModal.court}</span>
              <span>•</span>
              <span>{selectedCaseModal.dateOrYear}</span>
            </div>

            <div className="space-y-6 text-sm">
              <div>
                <h4 className="font-serif font-bold text-xs uppercase tracking-wider text-[#c5a880] mb-2 flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5" />
                  <span>Resumo do Fato & Contexto Processual</span>
                </h4>
                <p className={`leading-relaxed ${isDark ? 'text-[#cbd5e1]' : 'text-[#334155]'}`}>
                  {selectedCaseModal.caseSummary}
                </p>
              </div>

              <div>
                <h4 className="font-serif font-bold text-xs uppercase tracking-wider text-[#c5a880] mb-2 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Tese Jurídica Sustentada</span>
                </h4>
                <div className={`p-4 rounded-lg border-l-4 border-[#c5a880] ${isDark ? 'bg-[#121927]' : 'bg-[#f8fafc]'}`}>
                  <p className={`leading-relaxed italic ${isDark ? 'text-[#e2e8f0]' : 'text-[#1e293b]'}`}>
                    "{selectedCaseModal.legalThesis}"
                  </p>
                </div>
              </div>

              <div>
                <h4 className="font-serif font-bold text-xs uppercase tracking-wider text-emerald-400 mb-2 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Decisão Judicial & Desfecho</span>
                </h4>
                <p className={`leading-relaxed font-medium ${isDark ? 'text-[#f1f5f9]' : 'text-[#0f172a]'}`}>
                  {selectedCaseModal.outcome}
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-700/40 flex flex-col sm:flex-row items-center justify-between gap-3">
              <a
                href={selectedCaseModal.pjeLink || lawyerProfile.pje1gUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 text-xs font-semibold ${isDark ? 'text-[#94a3b8] hover:text-[#f8fafc]' : 'text-[#64748b] hover:text-[#0f172a]'}`}
              >
                <Globe className="w-3.5 h-3.5 text-[#c5a880]" />
                <span>Consultar no PJe TJ-PI</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <a
                href={getWhatsAppUrl(`Olá, Dr. Fagner Silva. Gostaria de uma análise jurídica fundamentada para uma situação semelhante ao caso "${selectedCaseModal.title}".`)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-[#c5a880] hover:bg-[#d4b992] text-[#070a10] font-bold text-xs uppercase tracking-wider transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Consultar no WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
