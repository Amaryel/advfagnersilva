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
    <div id="conteudos-page-root" className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16 space-y-12 ${isDark ? 'text-[#e2e8f0]' : 'text-[#0f172a]'}`}>
      
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`border-b pb-8 space-y-3 ${isDark ? 'border-[#1c273c]' : 'border-[#cbd5e1]'}`}
      >
        <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#c5a880] font-semibold">
          <BookOpen className="w-4 h-4" />
          <span>Informação Jurídica & Direitos do Cidadão</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold">
          Conteúdos & <span className="gold-gradient-text">Orientações Práticas</span>
        </h1>
        <p className={`text-sm sm:text-base max-w-3xl leading-relaxed ${isDark ? 'text-[#94a3b8]' : 'text-[#475569]'}`}>
          Artigos informativos de caráter estritamente educativo para esclarecer direitos fundamentais em situações policiais e processuais criminais.
        </p>
      </motion.div>

      {/* Instagram Banner */}
      <div className={`p-6 rounded-2xl border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-xl ${
        isDark ? 'bg-gradient-to-r from-[#111726] to-[#0c121e] border-[#23314d]' : 'bg-white border-[#cbd5e1]'
      }`}>
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-amber-600 via-rose-600 to-purple-600 flex items-center justify-center text-white shrink-0 shadow-lg">
            <Instagram className="w-6 h-6" />
          </div>
          <div>
            <h3 className={`font-serif text-base font-bold ${isDark ? 'text-[#f8fafc]' : 'text-[#0f172a]'}`}>
              Acompanhe Orientações Diárias no Instagram
            </h3>
            <p className="text-xs text-[#c5a880] font-mono mt-0.5 font-semibold">
              {lawyerProfile.instagram}
            </p>
          </div>
        </div>

        <a
          id="instagram-confirm-btn"
          href={lawyerProfile.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white text-xs font-bold uppercase tracking-wider transition-opacity hover:opacity-90 shadow-md"
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
            className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all ${
              selectedCategory === cat
                ? 'bg-[#c5a880] text-[#070a10] shadow-md shadow-[#c5a880]/20'
                : isDark
                  ? 'bg-[#0e1420] border border-[#223049] text-[#94a3b8] hover:text-[#f8fafc]'
                  : 'bg-white border border-[#cbd5e1] text-[#475569] hover:text-[#0f172a]'
            }`}
          >
            {cat === 'all' ? `Todos os Artigos (${contentArticles.length})` : cat}
          </button>
        ))}
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredArticles.map((article) => (
          <article
            key={article.id}
            id={`article-card-${article.id}`}
            className={`rounded-2xl border overflow-hidden flex flex-col justify-between transition-all duration-300 shadow-xl group ${
              isDark 
                ? 'bg-[#0d121c] border-[#1f2c42] hover:border-[#c5a880]/70' 
                : 'bg-white border-[#cbd5e1] hover:border-[#c5a880] shadow-md hover:shadow-lg'
            }`}
          >
            {/* Image Thumbnail */}
            <div className="relative h-48 w-full overflow-hidden">
              <SafeImage
                src={article.imageUrl}
                alt={article.title}
                className="w-full h-full object-cover img-zoom brightness-[0.75] contrast-[1.1]"
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${
                isDark ? 'from-[#0d121c] via-[#0d121c]/40' : 'from-white via-white/30'
              } to-transparent`} />

              <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                <span className="px-2.5 py-1 rounded-md bg-[#080b12]/80 backdrop-blur-sm border border-[#c5a880]/50 text-[#c5a880] text-[10px] font-mono font-bold uppercase tracking-wider">
                  {article.category}
                </span>

                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#080b12]/80 backdrop-blur-sm border border-[#2b3c58] text-[#94a3b8] text-[10px] font-mono">
                  <Clock className="w-3 h-3 text-[#c5a880]" />
                  <span>{article.readTime}</span>
                </div>
              </div>

              <div className="absolute bottom-3 left-5 right-5">
                <h2 className={`font-serif text-lg sm:text-xl font-bold group-hover:text-[#c5a880] transition-colors leading-snug ${
                  isDark ? 'text-[#f8fafc]' : 'text-[#0f172a]'
                }`}>
                  {article.title}
                </h2>
              </div>
            </div>

            {/* Article Content Preview */}
            <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
              <p className={`text-xs sm:text-sm leading-relaxed ${isDark ? 'text-[#94a3b8]' : 'text-[#475569]'}`}>
                {article.summary}
              </p>

              {/* Card Footer */}
              <div className={`pt-4 border-t flex items-center justify-between gap-4 text-xs ${
                isDark ? 'border-[#1a2638]' : 'border-[#cbd5e1]'
              }`}>
                <button
                  id={`read-article-btn-${article.id}`}
                  onClick={() => setSelectedArticle(article)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#c5a880] hover:text-[#dfc399] transition-colors uppercase tracking-wider"
                >
                  <span>Ler Artigo Completo</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleShare(article)}
                    className={`p-2 rounded-lg border transition-colors ${
                      isDark 
                        ? 'border-[#223049] text-[#94a3b8] hover:text-[#f8fafc] hover:bg-[#141d2c]' 
                        : 'border-[#cbd5e1] text-[#64748b] hover:text-[#0f172a] hover:bg-[#f1f5f9]'
                    }`}
                    title="Copiar link do artigo"
                  >
                    {copiedId === article.id ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Share2 className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

            </div>
          </article>
        ))}
      </div>

      {/* Full Article Modal */}
      <AnimatePresence>
        {selectedArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className={`relative max-w-3xl w-full rounded-2xl border p-6 sm:p-10 shadow-2xl my-8 ${
                isDark ? 'bg-[#0d121c] border-[#22314d] text-[#f8fafc]' : 'bg-white border-[#cbd5e1] text-[#0f172a]'
              }`}
            >
              <button
                onClick={() => setSelectedArticle(null)}
                className={`absolute top-5 right-5 p-2 rounded-full transition-colors ${
                  isDark ? 'bg-[#141b29] hover:bg-[#1f2a3e] text-[#94a3b8]' : 'bg-[#f1f5f9] hover:bg-[#e2e8f0] text-[#64748b]'
                }`}
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-6">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase bg-[#c5a880]/15 text-[#c5a880] border border-[#c5a880]/30">
                    {selectedArticle.category}
                  </span>
                  <span className="text-xs text-[#64748b] font-mono">{selectedArticle.readTime}</span>
                </div>

                <h2 className="font-serif text-2xl sm:text-3xl font-bold">
                  {selectedArticle.title}
                </h2>

                <div className="relative h-60 w-full rounded-xl overflow-hidden">
                  <SafeImage
                    src={selectedArticle.imageUrl}
                    alt={selectedArticle.title}
                    className="w-full h-full object-cover brightness-[0.8]"
                  />
                </div>

                <div className={`space-y-4 text-sm leading-relaxed ${isDark ? 'text-[#cbd5e1]' : 'text-[#334155]'}`}>
                  {selectedArticle.fullContent.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>

                <div className={`pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-4 ${
                  isDark ? 'border-[#1b263b]' : 'border-[#cbd5e1]'
                }`}>
                  <a
                    href={getWhatsAppUrl(`Olá, Dr. Fagner Silva. Li o artigo "${selectedArticle.title}" e gostaria de tirar uma dúvida.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto py-3 px-6 rounded-xl bg-gradient-to-r from-[#c5a880] to-[#dfc399] text-[#070a10] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Esclarecer Dúvida no WhatsApp</span>
                  </a>

                  <button
                    onClick={() => setSelectedArticle(null)}
                    className={`text-xs font-semibold uppercase tracking-wider ${isDark ? 'text-[#94a3b8] hover:text-white' : 'text-[#64748b] hover:text-[#0f172a]'}`}
                  >
                    Fechar
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
};
