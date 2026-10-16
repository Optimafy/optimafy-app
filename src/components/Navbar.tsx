import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Menu, X, ArrowUpRight, CheckCircle2, Sun, Moon } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

interface NavbarProps {
  onOpenAiStudio: (initialTab?: 'chat' | 'analyze') => void;
  currentPath?: string;
  onNavigate?: (path: string, hash?: string) => void;
}

export function Navbar({
  onOpenAiStudio,
  currentPath = '/',
  onNavigate,
}: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (path: string, hash?: string) => {
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(path, hash);
    } else {
      if (path === '/' && hash) {
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.location.href = path;
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-canvas/95 backdrop-blur-md border-b border-border/80 py-3.5 shadow-xl'
          : 'bg-canvas/60 backdrop-blur-sm py-5 sm:py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-[5vw] sm:px-[6vw] flex items-center justify-between">
        {/* Brand Logo with LOGO.svg */}
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('/');
          }}
          className="group flex items-center gap-3 focus:outline-none"
        >
          <div className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center relative transition-transform duration-300 group-hover:scale-105">
            <img
              src="/LOGO.svg"
              alt="OPTIMAFY Logo"
              className="w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(0,170,249,0.35)]"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-syne font-bold text-lg sm:text-xl tracking-[0.22em] text-ink group-hover:text-gold transition-colors">
              OPTIMAFY
            </span>
            <span className="text-[9px] tracking-[0.25em] uppercase text-gold font-mono -mt-1 font-semibold">
              Tecnologia para PMEs
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-7 text-[12px] tracking-[0.14em] uppercase text-muted font-mono">
          <button
            onClick={() => handleNavClick('/', 'the-problem')}
            className="hover:text-gold transition-colors duration-300 cursor-pointer"
          >
            01. O Desafio
          </button>
          <button
            onClick={() => handleNavClick('/solucoes', 'solutions')}
            className={`transition-colors duration-300 cursor-pointer ${
              currentPath === '/solucoes' ? 'text-gold font-bold' : 'hover:text-gold'
            }`}
          >
            02. Soluções
          </button>
          <button
            onClick={() => handleNavClick('/sobre')}
            className={`transition-colors duration-300 cursor-pointer ${
              currentPath === '/sobre' ? 'text-gold font-bold' : 'hover:text-gold'
            }`}
          >
            03. Sobre Nós
          </button>
          <button
            onClick={() => handleNavClick('/blog')}
            className={`transition-colors duration-300 cursor-pointer ${
              currentPath?.startsWith('/blog') ? 'text-gold font-bold' : 'hover:text-gold'
            }`}
          >
            04. Blog
          </button>
          <button
            onClick={() => handleNavClick('/contato')}
            className={`transition-colors duration-300 cursor-pointer ${
              currentPath === '/contato' ? 'text-gold font-bold' : 'hover:text-gold'
            }`}
          >
            05. Contato
          </button>
        </nav>

        {/* Right Action Hub */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Ativar modo claro' : 'Ativar modo escuro'}
            title={theme === 'dark' ? 'Mudar para Modo Claro (Fundo Branco)' : 'Mudar para Modo Escuro (Fundo Preto)'}
            className="p-2 border border-border hover:border-gold/60 bg-surface hover:bg-surface-2 text-ink hover:text-gold transition-all duration-300 cursor-pointer shadow-sm hover:shadow-[0_0_15px_var(--token-glow)] flex items-center justify-center"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-gold transition-transform duration-300 hover:rotate-45" />
            ) : (
              <Moon className="w-4 h-4 text-gold transition-transform duration-300 hover:-rotate-12" />
            )}
          </button>

          {/* Assistente de IA Button */}
          <button
            onClick={() => onOpenAiStudio('chat')}
            className="group relative inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 text-xs tracking-wider uppercase font-medium border border-gold/50 bg-gold/10 hover:bg-gold text-gold hover:text-canvas transition-all duration-300 cursor-pointer overflow-hidden font-mono"
          >
            <Sparkles className="w-3.5 h-3.5 group-hover:rotate-12 transition-transform duration-300" />
            <span>Assistente de IA</span>
            <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-ink hover:text-gold focus:outline-none cursor-pointer"
            aria-label="Menu principal"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile-First Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] as const }}
            className="lg:hidden bg-canvas border-b border-border px-[6vw] py-6 flex flex-col gap-3.5 text-xs tracking-wider uppercase font-mono shadow-2xl"
          >
            <button
              onClick={() => handleNavClick('/', 'the-problem')}
              className="text-left text-ink hover:text-gold py-2 border-b border-border-soft"
            >
              01. O Desafio
            </button>
            <button
              onClick={() => handleNavClick('/solucoes', 'solutions')}
              className="text-left text-ink hover:text-gold py-2 border-b border-border-soft"
            >
              02. Soluções
            </button>
            <button
              onClick={() => handleNavClick('/sobre')}
              className="text-left text-ink hover:text-gold py-2 border-b border-border-soft"
            >
              03. Sobre Nós
            </button>
            <button
              onClick={() => handleNavClick('/blog')}
              className="text-left text-ink hover:text-gold py-2 border-b border-border-soft"
            >
              04. Blog & Artigos
            </button>
            <button
              onClick={() => handleNavClick('/contato')}
              className="text-left text-ink hover:text-gold py-2 border-b border-border-soft"
            >
              05. Contato Direto
            </button>

            {/* Quick Actions in Mobile Menu */}
            <div className="pt-3 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  toggleTheme();
                }}
                className="flex items-center gap-2 text-gold py-2 text-xs border border-gold/30 px-3 bg-gold/5 cursor-pointer"
              >
                {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                <span>{theme === 'dark' ? 'Ativar Modo Claro' : 'Ativar Modo Escuro'}</span>
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAiStudio('analyze');
                }}
                className="flex items-center gap-2 text-gold py-2 text-xs border border-gold/30 px-3 bg-gold/5 cursor-pointer"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>Auditar Foto / Planilha com Assistente de IA</span>
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAiStudio('chat');
                }}
                className="flex items-center gap-2 text-canvas py-2 text-xs px-3 bg-gold font-bold cursor-pointer"
              >
                <Sparkles className="w-4 h-4" />
                <span>Conversar com Assistente de IA</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
