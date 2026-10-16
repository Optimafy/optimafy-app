import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Calendar,
  Clock,
  ArrowRight,
  ArrowLeft,
  Search,
  Sparkles,
  Share2,
  Check,
  Tag,
  BookOpen,
  Workflow,
  Globe,
  Brain,
  BarChart3,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';
import { blogCategories } from '../types';
import type { BlogPost, BlogCategory } from '../types';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface BlogPageProps {
  onOpenAiStudio: (tab?: 'chat' | 'analyze') => void;
  onNavigateHome: () => void;
  initialPostSlug?: string | null;
}

/** Metadados visuais de cada categoria fixa do blog. */
const CATEGORY_META: Record<
  BlogCategory,
  { description: string; icon: LucideIcon; anchor: string }
> = {
  'Automação': {
    description:
      'Fluxos, integrações e rotinas que trabalham sozinhas para devolver tempo ao seu negócio.',
    icon: Workflow,
    anchor: 'automacao',
  },
  'Presença Digital (Web)': {
    description:
      'Sites, landing pages e SEO para ser encontrado e escolhido pelo cliente certo.',
    icon: Globe,
    anchor: 'presenca-digital',
  },
  'IA': {
    description:
      'Agentes, assistentes e copilotos aplicados à operação real de pequenas e médias empresas.',
    icon: Brain,
    anchor: 'ia',
  },
  'Business Intelligence (Análise de Dados)': {
    description:
      'Dados organizados em indicadores claros para decidir com segurança, não com achismo.',
    icon: BarChart3,
    anchor: 'business-intelligence',
  },
};

export function BlogPage({ onOpenAiStudio, onNavigateHome, initialPostSlug }: BlogPageProps) {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(() => {
    if (initialPostSlug) {
      return blogPosts.find((p) => p.slug === initialPostSlug) || null;
    }
    return null;
  });

  const [searchQuery, setSearchQuery] = useState('');
  const [copiedLink, setCopiedLink] = useState(false);

  /* ----------------------------------------------------------------
     Busca global (atravessa todas as categorias)
     ---------------------------------------------------------------- */
  const filteredPosts = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return blogPosts;

    return blogPosts.filter(
      (post) =>
        post.title.toLowerCase().includes(q) ||
        post.excerpt.toLowerCase().includes(q) ||
        post.category.toLowerCase().includes(q) ||
        post.tags.some((tag) => tag.toLowerCase().includes(q))
    );
  }, [searchQuery]);

  /* ----------------------------------------------------------------
     Agrupamento por categoria fixa — a ordem vem de blogCategories
     ---------------------------------------------------------------- */
  const groupedPosts = useMemo(
    () =>
      blogCategories
        .map((category) => ({
          category,
          posts: filteredPosts.filter((post) => post.category === category),
        }))
        .filter((group) => group.posts.length > 0),
    [filteredPosts]
  );

  const totalResults = filteredPosts.length;

  const handleShare = (post: BlogPost) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(`${window.location.origin}/blog/${post.slug}`);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  const handleSelectPost = (post: BlogPost) => {
    setSelectedPost(post);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    window.history.pushState({}, '', `/blog/${post.slug}`);
  };

  const handleBackToList = () => {
    setSelectedPost(null);
    window.history.pushState({}, '', '/blog');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleJumpToCategory = (category: BlogCategory) => {
    document
      .getElementById(`categoria-${CATEGORY_META[category].anchor}`)
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen bg-canvas text-ink pt-28 pb-20 px-[5vw] sm:px-[6vw]">
      {/* Breadcrumb Navigation */}
      <div className="max-w-6xl mx-auto mb-8 flex items-center justify-between">
        <nav
          aria-label="Navegação"
          className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-muted-soft"
        >
          <button
            onClick={onNavigateHome}
            className="hover:text-gold transition-colors cursor-pointer"
          >
            Início
          </button>
          <span>/</span>
          <button
            onClick={handleBackToList}
            className={`transition-colors cursor-pointer ${
              !selectedPost ? 'text-gold font-semibold' : 'hover:text-gold'
            }`}
          >
            Blog
          </button>
          {selectedPost && (
            <>
              <span>/</span>
              <span className="text-gold font-semibold truncate max-w-[200px] sm:max-w-xs">
                {selectedPost.title}
              </span>
            </>
          )}
        </nav>

        {selectedPost && (
          <button
            onClick={handleBackToList}
            className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-gold hover:text-ink transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Voltar aos Artigos</span>
          </button>
        )}
      </div>

      <AnimatePresence mode="wait">
        {selectedPost ? (
          /* ========================================================
             DETAIL VIEW: Blog Post Model
             ======================================================== */
          <motion.article
            key={`detail-${selectedPost.id}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="max-w-4xl mx-auto"
          >
            {/* Post Header */}
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 text-[11px] font-mono uppercase tracking-wider bg-gold/10 text-gold border border-gold/30">
                <Tag className="w-3 h-3" />
                <span>{selectedPost.category}</span>
              </div>

              <h1 className="font-syne font-bold text-2xl sm:text-4xl md:text-5xl leading-tight text-ink mb-6">
                {selectedPost.title}
              </h1>

              <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-border text-xs font-mono text-muted">
                <div className="flex flex-col">
                  <span className="font-semibold text-ink">
                    {selectedPost.author.name}
                  </span>
                  <span className="text-[10px] text-muted-soft">
                    {selectedPost.author.role}
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-gold" />
                    {selectedPost.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-gold" />
                    {selectedPost.readTime}
                  </span>

                  <button
                    onClick={() => handleShare(selectedPost)}
                    className="p-1.5 hover:text-gold transition-colors cursor-pointer border border-border bg-surface"
                    title="Compartilhar artigo"
                  >
                    {copiedLink ? (
                      <Check className="w-3.5 h-3.5 text-gold" />
                    ) : (
                      <Share2 className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Featured Image */}
            <div className="relative mb-10 overflow-hidden border border-border shadow-2xl">
              <img
                src={selectedPost.thumbnail}
                alt={selectedPost.title}
                className="w-full h-64 sm:h-96 object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-canvas via-transparent to-transparent opacity-60" />
            </div>

            {/* Post Body */}
            <div className="prose prose-invert max-w-none text-muted leading-relaxed font-sans text-sm sm:text-base">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  h2: ({ children }) => (
                    <h2 className="font-syne font-bold text-xl sm:text-2xl text-ink pt-4 text-balance">
                      {children}
                    </h2>
                  ),
                  h3: ({ children }) => (
                    <h3 className="font-syne font-semibold text-lg text-gold pt-2">
                      {children}
                    </h3>
                  ),
                  p: ({ children }) => (
                    <p className="text-muted text-justify sm:text-left mb-4">
                      {children}
                    </p>
                  ),
                  strong: ({ children }) => (
                    <strong className="text-ink font-semibold">{children}</strong>
                  ),
                  ul: ({ children }) => (
                    <ul className="list-disc list-inside space-y-2 pl-2 text-muted mb-4">
                      {children}
                    </ul>
                  ),
                  ol: ({ children }) => (
                    <ol className="list-decimal list-inside space-y-2 pl-2 text-muted mb-4">
                      {children}
                    </ol>
                  ),
                  hr: () => <hr className="border-border my-6" />,
                  table: ({ children }) => (
                    <div className="overflow-x-auto my-6">
                      <table className="w-full border-collapse border border-border text-sm">
                        {children}
                      </table>
                    </div>
                  ),
                  th: ({ children }) => (
                    <th className="border border-border bg-surface-2 px-3 py-2 text-left text-gold font-mono text-xs uppercase tracking-wider">
                      {children}
                    </th>
                  ),
                  td: ({ children }) => (
                    <td className="border border-border px-3 py-2 text-muted">
                      {children}
                    </td>
                  ),
                  a: ({ href, children }) => (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gold underline hover:text-ink transition-colors"
                    >
                      {children}
                    </a>
                  ),
                }}
              >
                {selectedPost.content}
              </ReactMarkdown>
            </div>

            {/* Tags */}
            <div className="mt-12 pt-6 border-t border-border flex flex-wrap items-center gap-2">
              <span className="font-mono text-xs uppercase text-muted-soft mr-2">Tags:</span>
              {selectedPost.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 text-xs font-mono bg-surface-2 border border-border text-muted"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Call to Action Inside Blog */}
            <div className="mt-12 p-6 sm:p-8 bg-surface border border-gold/40 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
              <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <div>
                  <span className="font-mono text-xs uppercase text-gold tracking-widest font-semibold block mb-1">
                    Aplique no seu negócio
                  </span>
                  <h4 className="font-syne font-bold text-lg sm:text-xl text-ink mb-2">
                    Quer automatizar a rotina da sua empresa sem complicação?
                  </h4>
                  <p className="text-xs text-muted max-w-md">
                    Converse com nosso Consultor IA ou envie um print de sua planilha para receber uma análise instantânea de economia.
                  </p>
                </div>
                <button
                  onClick={() => onOpenAiStudio('chat')}
                  className="px-5 py-3 bg-gold hover:bg-gold-hover text-canvas font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all cursor-pointer whitespace-nowrap"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Simular Economia</span>
                </button>
              </div>
            </div>
          </motion.article>
        ) : (
          /* ========================================================
             LIST VIEW: Posts agrupados por categoria fixa
             ======================================================== */
          <motion.div
            key="list"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="max-w-6xl mx-auto"
          >
            {/* Header Section */}
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 text-[11px] font-mono uppercase tracking-[0.2em] bg-gold/10 text-gold border border-gold/30">
                <BookOpen className="w-3.5 h-3.5" />
                <span>OPTIMAFY INSIGHTS // BLOG</span>
              </div>
              <h1 className="font-syne font-bold text-3xl sm:text-5xl md:text-6xl text-ink tracking-tight mb-4">
                Tecnologia & Lucro <br />
                <span className="text-gold">Descomplicados para PMEs</span>
              </h1>
              <p className="text-sm sm:text-base text-muted leading-relaxed">
                Artigos estratégicos organizados por área de atuação: automação, presença digital, inteligência artificial e análise de dados para o empresário brasileiro que deseja crescer sem sobrecarga.
              </p>
            </div>

            {/* Search Bar */}
            <div className="relative w-full max-w-md mx-auto mb-6">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-soft" />
              <input
                type="text"
                placeholder="Pesquisar temas, tags ou categorias..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-surface border border-border pl-9 pr-4 py-2.5 text-xs font-sans text-ink placeholder-muted-soft focus:outline-none focus:border-gold transition-colors"
              />
            </div>

            {/* Category Quick Nav */}
            <div className="flex flex-wrap items-center justify-center gap-2 mb-14">
              {blogCategories.map((cat) => {
                const Icon = CATEGORY_META[cat].icon;
                const hasPosts = groupedPosts.some((group) => group.category === cat);
                return (
                  <button
                    key={cat}
                    onClick={() => handleJumpToCategory(cat)}
                    disabled={!hasPosts}
                    className={`inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-mono uppercase tracking-wider border transition-colors ${
                      hasPosts
                        ? 'bg-surface text-muted border-border hover:text-ink hover:border-gold/50 cursor-pointer'
                        : 'bg-surface text-muted-soft border-surface-2 cursor-not-allowed'
                    }`}
                  >
                    <Icon
                      className={`w-3.5 h-3.5 ${hasPosts ? 'text-gold' : 'text-muted-soft'}`}
                    />
                    <span>{cat}</span>
                  </button>
                );
              })}
            </div>

            {/* Search Feedback */}
            {searchQuery.trim() && (
              <p className="mb-8 text-center font-mono text-[11px] uppercase tracking-wider text-muted-soft">
                {totalResults === 0
                  ? 'Nenhum artigo encontrado'
                  : `${totalResults} ${totalResults === 1 ? 'artigo encontrado' : 'artigos encontrados'}`}
              </p>
            )}

            {/* Grouped Sections */}
            {groupedPosts.length === 0 ? (
              <div className="py-20 text-center border border-border bg-surface">
                <p className="text-sm text-muted-soft font-mono uppercase tracking-wider">
                  Nenhum artigo encontrado para a pesquisa.
                </p>
                <button
                  onClick={() => setSearchQuery('')}
                  className="mt-4 px-4 py-2 text-xs font-mono text-gold underline cursor-pointer"
                >
                  Limpar busca
                </button>
              </div>
            ) : (
              <div className="space-y-16 sm:space-y-20">
                {groupedPosts.map(({ category, posts }, sectionIndex) => {
                  const meta = CATEGORY_META[category];
                  const Icon = meta.icon;

                  return (
                    <motion.section
                      key={category}
                      id={`categoria-${meta.anchor}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: sectionIndex * 0.1, duration: 0.4 }}
                      className="scroll-mt-32"
                    >
                      {/* Section Header */}
                      <div className="flex items-start gap-4 mb-7 pb-5 border-b border-border">
                        <div className="w-11 h-11 shrink-0 flex items-center justify-center bg-gold/10 border border-gold/40">
                          <Icon className="w-5 h-5 text-gold" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h2 className="font-syne font-bold text-xl sm:text-2xl text-ink leading-tight">
                            {category}
                          </h2>
                          <p className="text-xs sm:text-sm text-muted mt-1 leading-relaxed">
                            {meta.description}
                          </p>
                        </div>
                        <span className="hidden sm:block shrink-0 pt-1 font-mono text-[10px] uppercase tracking-wider text-muted-soft">
                          {posts.length} {posts.length === 1 ? 'artigo' : 'artigos'}
                        </span>
                      </div>

                      {/* Posts Grid */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {posts.map((post, index) => (
                          <motion.article
                            key={post.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.08, duration: 0.4 }}
                            onClick={() => handleSelectPost(post)}
                            className="group flex flex-col bg-surface border border-border hover:border-gold/60 transition-all duration-300 overflow-hidden cursor-pointer shadow-lg hover:shadow-[var(--token-glow)]"
                          >
                            {/* Thumbnail */}
                            <div className="relative h-52 sm:h-60 w-full overflow-hidden bg-surface-2">
                              <img
                                src={post.thumbnail}
                                alt={post.title}
                                loading="lazy"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                              />
                              <div className="absolute top-3 left-3 bg-canvas/85 backdrop-blur-sm border border-gold/40 px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider text-gold">
                                {post.category}
                              </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                              <div>
                                {/* Meta */}
                                <div className="flex items-center gap-4 text-[11px] font-mono text-muted-soft mb-3">
                                  <span className="flex items-center gap-1">
                                    <Calendar className="w-3 h-3 text-gold" />
                                    {post.date}
                                  </span>
                                  <span className="flex items-center gap-1">
                                    <Clock className="w-3 h-3 text-gold" />
                                    {post.readTime}
                                  </span>
                                </div>

                                {/* Title */}
                                <h3 className="font-syne font-bold text-lg sm:text-xl text-ink group-hover:text-gold transition-colors duration-300 mb-3 leading-snug">
                                  {post.title}
                                </h3>

                                {/* Excerpt */}
                                <p className="text-xs sm:text-sm text-muted leading-relaxed line-clamp-3 mb-5">
                                  {post.excerpt}
                                </p>

                                {/* Tags */}
                                <div className="flex flex-wrap items-center gap-1.5 mb-6">
                                  {post.tags.slice(0, 3).map((tag) => (
                                    <span
                                      key={tag}
                                      className="px-2 py-0.5 text-[10px] font-mono bg-surface-2 border border-border text-muted"
                                    >
                                      #{tag}
                                    </span>
                                  ))}
                                  {post.tags.length > 3 && (
                                    <span className="text-[10px] font-mono text-muted-soft">
                                      +{post.tags.length - 3}
                                    </span>
                                  )}
                                </div>
                              </div>

                              {/* Footer Action */}
                              <div className="pt-4 border-t border-border-soft flex items-center justify-between gap-4">
                                <span className="text-[11px] font-mono text-muted truncate">
                                  {post.author.name}
                                </span>
                                <span className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-gold font-semibold group-hover:translate-x-1 transition-transform shrink-0">
                                  <span>Ler Artigo</span>
                                  <ArrowRight className="w-3.5 h-3.5" />
                                </span>
                              </div>
                            </div>
                          </motion.article>
                        ))}
                      </div>
                    </motion.section>
                  );
                })}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}