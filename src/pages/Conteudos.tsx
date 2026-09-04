import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { AppRoute, ContentArticle } from '../types';
import { contentArticles, lawyerProfile, getWhatsAppUrl } from '../data/lawyerData';
import { useTheme } from '../context/ThemeContext';
import { SafeImage } from '../components/SafeImage';
import { 
  BookOpen, 
  Clock, 
  ExternalLink, 
  ArrowRight, 
  Share2, 
  X, 
  Check, 
  Instagram, 
  MessageCircle,
  Tag,
  MessageSquare
} from 'lucide-react';

interface ConteudosProps {
  navigate: (route: AppRoute) => void;
}

export const Conteudos: React.FC<ConteudosProps> = ({ navigate }) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const [selectedArticle, setSelectedArticle] = useState<ContentArticle | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = ['all', ...Array.from(new Set(contentArticles.map(a => a.category)))];

  const handleShare = (article: ContentArticle) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(`${window.location.origin}?page=conteudos&artigo=${article.id}`);
      setCopiedId(article.id);
      setTimeout(() => setCopiedId(null), 2000);
    }
  };

  const filteredArticles = selectedCategory === 'all'
    ? contentArticles
    : contentArticles.filter(a => a.category === selectedCategory);

  return (
    <div id="conteudos-page-root" className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16 space-y-12 ${
      isDark ? 'text-[#e2e8f0]' : 'text-[#1e293b]'
    }`}>
      
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`border-b pb-8 space-y-3 ${isDark ? 'border-[#1c273c]' : 'border-[#ebdcc9]'}`}
      >
        <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#b89058] font-bold">
          <BookOpen className="w-4 h-4" />
          <span>Informação Jurídica & Direitos do Cidadão</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0f2137] dark:text-[#f8fafc]">
          Conteúdos & <span className="gold-gradient-text">Orientações Práticas</span>
        </h1>
        <p className={`text-sm sm:text-base max-w-3xl leading-relaxed ${isDark ? 'text-[#94a3b8]' : 'text-[#475569]'}`}>
          Artigos informativos de caráter estritamente educativo para esclarecer direitos fundamentais em situações policiais e processuais criminais.
        </p>
      </motion.div>

      {/* Instagram Banner */}
      <div className={`p-6 sm:p-8 rounded-3xl border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-xl interactive-card ${
        isDark ? 'bg-[#101726] border-[#22314d]' : 'bg-white border-[#ebdcc9]'
      }`}>
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-600 via-rose-600 to-purple-600 flex items-center justify-center text-white shrink-0 shadow-lg">
            <Instagram className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-serif text-base font-bold text-[#0f2137] dark:text-[#f8fafc]">
              Acompanhe Orientações Diárias no Instagram
            </h3>
            <p className="text-xs text-[#b89058] font-mono mt-0.5 font-bold">
              {lawyerProfile.instagram}
            </p>
          </div>
        </div>

        <a
          id="instagram-confirm-btn"
          href={lawyerProfile.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white text-xs font-bold uppercase tracking-wider transition-opacity hover:opacity-90 shadow-md touch-press"
        >
          <span>Seguir @advfagnersilva</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Category Filter Chips */}
      <div className="flex flex-wrap items-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-2xl text-xs font-bold uppercase tracking-wider transition-all touch-press cursor-pointer select-none ${
              selectedCategory === cat
                ? 'bg-[#b89058] text-white shadow-sm'
                : isDark
                  ? 'bg-[#0e1420] border border-[#223049] text-[#94a3b8] hover:text-[#f8fafc]'
                  : 'bg-white border border-[#ebdcc9] text-[#475569] hover:text-[#0f2137]'
            }`}
          >
            {cat === 'all' ? 'Todos os Conteúdos' : cat}
          </button>
        ))}
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredArticles.map((article) => (
          <div
            key={article.id}
            className={`rounded-3xl border overflow-hidden flex flex-col justify-between interactive-card group ${
              isDark ? 'bg-[#0d121c] border-[#1e2a3f] shadow-xl' : 'bg-white border-[#ebdcc9] shadow-sm'
            }`}
          >
            <div className="relative h-48 w-full overflow-hidden">
              <SafeImage
                src={article.imageUrl}
                alt={article.title}
                className="w-full h-full object-cover img-zoom brightness-[0.85] contrast-[1.05]"
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${
                isDark ? 'from-[#0d121c]' : 'from-white'
              } via-transparent to-transparent`} />
              
              <div className="absolute top-3 left-3">
                <span className="px-3 py-1 rounded-full bg-white/95 dark:bg-[#080b12]/80 backdrop-blur-md border border-[#b89058]/50 text-[#8c642b] dark:text-[#c5a880] text-[10px] font-mono font-bold uppercase tracking-wider shadow-sm">
                  {article.category}
                </span>
              </div>
            </div>

            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-[11px] font-mono text-[#64748b]">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{article.readTime}</span>
                  <span>•</span>
                  <span>{article.date}</span>
                </div>

                <h3 className="font-serif text-base font-bold text-[#0f2137] dark:text-[#f8fafc] group-hover:text-[#b89058] transition-colors leading-snug">
                  {article.title}
                </h3>

                <p className={`text-xs leading-relaxed line-clamp-3 ${isDark ? 'text-[#94a3b8]' : 'text-[#475569]'}`}>
                  {article.summary}
                </p>
              </div>

              <div className="pt-3 border-t border-current/10 flex items-center justify-between text-xs">
                <button
                  onClick={() => setSelectedArticle(article)}
                  className="font-bold text-[#b89058] hover:underline flex items-center gap-1 touch-press cursor-pointer select-none"
                >
                  <span>Ler artigo completo</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => handleShare(article)}
                  className="p-2 rounded-xl border border-current/20 text-[#64748b] hover:text-[#b89058] transition-colors"
                  title="Copiar link do artigo"
                >
                  {copiedId === article.id ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Share2 className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Article Read Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className={`max-w-2xl w-full rounded-3xl border p-6 sm:p-8 space-y-6 shadow-2xl relative max-h-[90vh] overflow-y-auto ${
            isDark ? 'bg-[#0d121c] border-[#25354e] text-[#e2e8f0]' : 'bg-white border-[#ebdcc9] text-[#1e293b]'
          }`}>
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-5 right-5 p-2 rounded-full border border-current/20 text-[#64748b] hover:text-[#0f2137] dark:hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="space-y-2">
              <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-[#b89058]/15 text-[#8c642b] dark:text-[#c5a880] border border-[#b89058]/30 inline-block">
                {selectedArticle.category}
              </span>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#0f2137] dark:text-[#f8fafc]">
                {selectedArticle.title}
              </h2>
              <div className="flex items-center gap-2 text-xs font-mono text-[#64748b]">
                <span>{selectedArticle.date}</span>
                <span>•</span>
                <span>Tempo de leitura: {selectedArticle.readTime}</span>
              </div>
            </div>

            <div className="space-y-4 text-xs sm:text-sm leading-relaxed">
              {selectedArticle.fullContent.map((paragraph, pIdx) => (
                <p key={pIdx} className={isDark ? 'text-[#cbd5e1]' : 'text-[#475569]'}>
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="pt-4 border-t flex flex-col sm:flex-row items-center gap-3">
              <a
                href={getWhatsAppUrl(`Olá, Dr. Fagner Silva. Li o artigo "${selectedArticle.title}" e gostaria de tirar uma dúvida.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:flex-1 py-3.5 px-4 rounded-2xl bg-gradient-to-r from-[#25D366] to-[#128C7E] text-black font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md btn-shimmer"
              >
                <MessageSquare className="w-4 h-4 fill-black/20" />
                <span>Tirar Dúvida no WhatsApp</span>
              </a>

              <button
                onClick={() => setSelectedArticle(null)}
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
