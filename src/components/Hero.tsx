import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowDown, Sparkles, TrendingUp, Clock, ShieldCheck, CheckCircle } from 'lucide-react';

interface HeroProps {
  onOpenAiStudio: () => void;
}

export function Hero({ onOpenAiStudio }: HeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll tracking for Hero: sticky top:0, scales from 1 to 0.95 and fades from 1 to 0.3
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);

  // Value Proposition headline:
  // "Nós transformamos a tecnologia no seu melhor funcionário."
  const headlineWords = [
    'Nós',
    'transformamos',
    'a',
    'tecnologia',
    'no',
    'seu',
    'melhor',
    'funcionário.',
  ];

  const subline =
    'Criamos soluções digitais de alto nível que organizam sua rotina, colocam sua marca em destaque e fazem seu negócio lucrar mais, sem que você precise entender de programação.';

  return (
    // Outer scroll wrapper allowing Scene 2 to overlap
    <div
      ref={containerRef}
      id="hero"
      className="relative min-h-[100dvh] lg:h-[130vh] w-full bg-canvas"
      style={{ zIndex: 1 }}
    >
      {/* Mobile-First Sticky/Relative Hero Container */}
      <motion.div
        style={{ scale, opacity }}
        className="relative lg:sticky lg:top-0 min-h-[100dvh] lg:h-screen w-full flex flex-col justify-between px-[5vw] sm:px-[8vw] pt-24 sm:pt-28 pb-8 bg-canvas overflow-hidden"
      >
        {/* Subtle Ambient Glows and Texture */}
        <div className="absolute inset-0 bg-noise pointer-events-none opacity-30" />
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gold/6 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-gold/4 rounded-full blur-[120px] pointer-events-none" />

        {/* Top Tag & Status */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 pt-3 border-b border-border-soft pb-3">
          <div className="flex items-center gap-3">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-gold"></span>
            </span>
            <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-gold font-semibold">
              TECNOLOGIA PARA PEQUENAS E MÉDIAS EMPRESAS // 2026
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-6 text-[11px] font-mono text-muted-soft uppercase tracking-wider">
            <span>+ LUCRO</span>
            <span>•</span>
            <span>+ TEMPO LIVRE</span>
            <span>•</span>
            <span>IMAGEM DE PRESTÍGIO</span>
          </div>
        </div>

        {/* Center Main Stage */}
        <div className="relative z-10 max-w-5xl my-auto py-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
            className="mb-4 inline-flex items-center gap-2 px-3 py-1 border border-gold/40 bg-gold/10 text-gold text-[11px] font-mono uppercase tracking-[0.18em]"
          >
            <TrendingUp className="w-3.5 h-3.5" />
            <span>Mais Faturamento • Menos Dor de Cabeça</span>
          </motion.div>

          {/* Word-by-word Reveal via clip-path */}
          <h1 className="font-syne font-extrabold text-[8.5vw] sm:text-[6vw] md:text-[5.1vw] leading-[1.05] tracking-[-0.03em] text-ink mb-6">
            {headlineWords.map((word, index) => (
              <span
                key={index}
                className="inline-block overflow-hidden mr-[0.24em] align-top"
              >
                <motion.span
                  initial={{
                    clipPath: 'inset(100% 0% 0% 0%)',
                    y: '100%',
                    opacity: 0,
                  }}
                  animate={{
                    clipPath: 'inset(0% 0% 0% 0%)',
                    y: '0%',
                    opacity: 1,
                  }}
                  transition={{
                    duration: 0.9,
                    delay: 0.15 + index * 0.08,
                    ease: [0.16, 1, 0.3, 1] as const,
                  }}
                  className={`inline-block ${
                    word === 'melhor' || word === 'funcionário.'
                      ? 'text-gold'
                      : 'text-ink'
                  }`}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.85,
              ease: [0.16, 1, 0.3, 1] as const,
            }}
            className="max-w-3xl text-base sm:text-lg md:text-xl text-muted font-light leading-relaxed mb-8"
          >
            {subline}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 1.05,
              ease: [0.16, 1, 0.3, 1] as const,
            }}
            className="flex flex-wrap items-center gap-4 sm:gap-6"
          >
            <button
              onClick={() => {
                const element = document.getElementById('the-problem');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-7 py-3.5 bg-gold text-canvas font-medium text-xs sm:text-sm tracking-[0.14em] uppercase hover:bg-gold-hover transition-all duration-300 cursor-pointer shadow-lg shadow-[var(--token-glow)] flex items-center gap-2 group font-mono font-bold"
            >
              <span>Conhecer os 4 Obstáculos</span>
              <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform duration-300" />
            </button>

            <button
              onClick={onOpenAiStudio}
              className="px-6 py-3.5 border border-gold/50 bg-gold/10 hover:bg-gold text-gold hover:text-canvas text-xs font-mono font-bold tracking-wider uppercase transition-all duration-300 flex items-center gap-2 cursor-pointer shadow-lg shadow-[var(--token-glow)]"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Simular com Assistente de IA</span>
            </button>
          </motion.div>
        </div>

        {/* Bottom Metrics Bar - Business Outcomes */}
        <div className="relative z-10 pt-5 border-t border-border-soft grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          <div className="flex flex-col">
            <span className="font-syne text-xl sm:text-2xl font-bold text-ink flex items-center gap-2">
              <Clock className="w-4 h-4 text-gold" />
              +18 Horas
            </span>
            <span className="text-[11px] font-mono text-muted-soft uppercase tracking-wider">
              Livres por semana para o dono
            </span>
          </div>

          <div className="flex flex-col">
            <span className="font-syne text-xl sm:text-2xl font-bold text-ink flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-gold" />
              3.4x Mais
            </span>
            <span className="text-[11px] font-mono text-muted-soft uppercase tracking-wider">
              Contratos fechados pelo site
            </span>
          </div>

          <div className="flex flex-col">
            <span className="font-syne text-xl sm:text-2xl font-bold text-ink flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-gold" />
              100% Automático
            </span>
            <span className="text-[11px] font-mono text-muted-soft uppercase tracking-wider">
              Sem copiar e colar dados
            </span>
          </div>

          <div className="flex flex-col">
            <span className="font-syne text-xl sm:text-2xl font-bold text-gold flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-gold" />
              Prestígio
            </span>
            <span className="text-[11px] font-mono text-muted-soft uppercase tracking-wider">
              Imagem de empresa grande
            </span>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-60 hover:opacity-100 transition-opacity">
          <span className="text-[9px] font-mono uppercase tracking-[0.25em] text-muted-soft">
            Scroll
          </span>
          <div className="w-[1px] h-5 bg-gradient-to-b from-gold to-transparent animate-pulse" />
        </div>
      </motion.div>
    </div>
  );
}
