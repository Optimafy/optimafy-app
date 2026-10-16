import { useRef, useState } from 'react';
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from 'motion/react';
import {
  AlertCircle,
  Clock,
  EyeOff,
  HelpCircle,
  Layers,
  ArrowRight,
  XCircle,
  ChevronUp,
  ChevronDown,
} from 'lucide-react';

interface TheProblemProps {
  onOpenAudit: () => void;
}

const PHASE_LABELS = [
  '01. O DIAGNÓSTICO',
  '02. IDENTIFICAÇÃO DO GARGALO',
  '03. A SOLUÇÃO DEFINITIVA',
];

const PHASE_HEADERS = [
  { label: '01 // O DIA A DIA DO EMPRESÁRIO', sub: 'ONDE SUA EMPRESA ESTÁ PERDENDO TEMPO E DINHEIRO' },
  { label: '02 // IDENTIFICAÇÃO DO GARGALO', sub: 'OS 4 GARGALOS QUE TRAVAM SEU CRESCIMENTO' },
  { label: '03 // A SOLUÇÃO DEFINITIVA', sub: 'O CAMINHO PARA UMA OPERAÇÃO INTELIGENTE' },
];

const EASE_OUT = [0.22, 1, 0.36, 1] as const;
const PHASE_TRANSITION = { duration: 0.42, ease: EASE_OUT };

const phaseVariants = {
  enter: (dir: number) => ({
    opacity: 0,
    y: dir > 0 ? 60 : -60,
    pointerEvents: 'none' as const,
  }),
  center: { opacity: 1, y: 0, pointerEvents: 'auto' as const },
  exit: (dir: number) => ({
    opacity: 0,
    y: dir > 0 ? -60 : 60,
    pointerEvents: 'none' as const,
  }),
};

/* ============================================================
 * SHARED PHASE BODIES — usados por mobile e desktop
 * ============================================================ */

function Phase1Body({ onOpenAudit }: { onOpenAudit: () => void }) {
  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
      <div className="lg:col-span-6 flex flex-col justify-center">
        <div className="inline-flex items-center gap-2 text-[#991b1b] font-mono text-xs uppercase tracking-[0.18em] mb-4 font-bold">
          <AlertCircle className="w-4 h-4 text-[#991b1b]" />
          <span>O Custo de Continuar no Manual</span>
        </div>

        <h2 className="font-syne text-3xl sm:text-4xl lg:text-5xl font-extrabold text-canvas leading-[1.1] tracking-tight mb-5">
          Você abriu a empresa para ter liberdade.
          <span className="block text-muted-soft font-semibold">
            Não para virar escravo da própria rotina.
          </span>
        </h2>

        <p className="text-[#333333] text-base sm:text-lg leading-relaxed font-light mb-6">
          Trabalhar 14 horas por dia apagando incêndios, copiando dados em planilhas e perdendo vendas por demora no atendimento não é crescimento: é esgotamento.
        </p>

        <button
          onClick={onOpenAudit}
          className="self-start inline-flex items-center gap-2 text-xs font-mono font-bold tracking-wider uppercase text-canvas border-b-2 border-canvas pb-1 hover:text-gold hover:border-gold transition-colors cursor-pointer"
        >
          <span>Descobrir Onde Você Está Perdendo Dinheiro</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      <div className="lg:col-span-6">
        <div className="bg-canvas text-ink p-6 sm:p-8 rounded-none border border-border shadow-2xl relative overflow-hidden">
          <div className="flex items-center justify-between border-b border-border pb-4 mb-5">
            <div className="flex items-center gap-2">
              <XCircle className="w-4 h-4 text-gold" />
              <span className="font-mono text-xs uppercase tracking-widest text-gold font-bold">
                ROTINA SEM A OPTIMAFY
              </span>
            </div>
            <span className="font-mono text-[10px] text-muted">DIAGNÓSTICO REAL</span>
          </div>

          <div className="space-y-3.5 font-mono text-xs">
            <div className="bg-surface-2 p-3 border-l-2 border-[#b91c1c]">
              <div className="flex justify-between text-muted mb-1">
                <span>Horas perdidas copiando dados em planilhas</span>
                <span className="text-[#f87171] font-bold">3h 40min / dia</span>
              </div>
              <div className="w-full bg-border h-1.5 overflow-hidden">
                <div className="bg-[#b91c1c] h-full w-[80%]" />
              </div>
            </div>

            <div className="bg-surface-2 p-3 border-l-2 border-[#d97706]">
              <div className="flex justify-between text-muted mb-1">
                <span>Vendas perdidas por demora de resposta</span>
                <span className="text-[#fbbf24] font-bold">R$ 14.200 / mês</span>
              </div>
              <div className="w-full bg-border h-1.5 overflow-hidden">
                <div className="bg-[#d97706] h-full w-[65%]" />
              </div>
            </div>

            <div className="bg-surface-2 p-3 border-l-2 border-[#4b5563]">
              <div className="flex justify-between text-muted mb-1">
                <span>Visibilidade do lucro real no fim do mês</span>
                <span className="text-[#e5e7eb] font-bold">Quase Nenhuma</span>
              </div>
              <div className="w-full bg-border h-1.5 overflow-hidden">
                <div className="bg-[#9ca3af] h-full w-[25%]" />
              </div>
            </div>
          </div>

          <div className="mt-5 pt-3 border-t border-border flex justify-between items-center text-[10px] font-mono text-muted-soft">
            <span>SITUAÇÃO: SOBRECARGA OPERACIONAL</span>
            <span className="text-gold">AUTOMATIZAÇÃO URGENTE</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function Phase2Body() {
  return (
    <>
      <div className="text-center mb-6 sm:mb-8">
        <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#991b1b] font-bold block mb-2">
          Onde o dinheiro está vazando
        </span>
        <h3 className="font-syne text-2xl sm:text-3xl lg:text-4xl font-extrabold text-canvas tracking-tight">
          Os 4 gargalos que travam seu crescimento
        </h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white/90 backdrop-blur-sm p-4 border border-canvas/10 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-[#991b1b] mb-2 font-mono text-xs font-bold uppercase">
              <Layers className="w-4 h-4 shrink-0" />
              <span>Caos Organizacional</span>
            </div>
            <p className="text-xs text-[#444444] leading-relaxed">
              Informações perdidas em cadernos, dezenas de grupos de WhatsApp e planilhas confusas que ninguém entende.
            </p>
          </div>
          <div className="mt-3 pt-2 border-t border-canvas/10 text-[10px] font-mono text-muted-soft">
            SOLUÇÃO: DADOS CENTRALIZADOS
          </div>
        </div>

        <div className="bg-white/90 backdrop-blur-sm p-4 border border-canvas/10 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-[#b45309] mb-2 font-mono text-xs font-bold uppercase">
              <Clock className="w-4 h-4 shrink-0" />
              <span>Teto de Crescimento</span>
            </div>
            <p className="text-xs text-[#444444] leading-relaxed">
              A empresa cresce, você trabalha 14 horas por dia e sente que se entrar mais um cliente, a operação quebra.
            </p>
          </div>
          <div className="mt-3 pt-2 border-t border-canvas/10 text-[10px] font-mono text-muted-soft">
            SOLUÇÃO: AUTOMAÇÃO DE PROCESSOS
          </div>
        </div>

        <div className="bg-white/90 backdrop-blur-sm p-4 border border-canvas/10 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-canvas mb-2 font-mono text-xs font-bold uppercase">
              <EyeOff className="w-4 h-4 shrink-0" />
              <span>Invisibilidade</span>
            </div>
            <p className="text-xs text-[#444444] leading-relaxed">
              Concorrentes com produtos piores fecham mais negócios porque parecem muito mais profissionais na internet.
            </p>
          </div>
          <div className="mt-3 pt-2 border-t border-canvas/10 text-[10px] font-mono text-muted-soft">
            SOLUÇÃO: SITE E VITRINE PREMIUM
          </div>
        </div>

        <div className="bg-white/90 backdrop-blur-sm p-4 border border-canvas/10 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-[#15803d] mb-2 font-mono text-xs font-bold uppercase">
              <HelpCircle className="w-4 h-4 shrink-0" />
              <span>Cegueira Financeira</span>
            </div>
            <p className="text-xs text-[#444444] leading-relaxed">
              Vende muito, o dinheiro entra na conta, mas no fim do mês você não sabe exatamente para onde ele foi.
            </p>
          </div>
          <div className="mt-3 pt-2 border-t border-canvas/10 text-[10px] font-mono text-muted-soft">
            SOLUÇÃO: DASHBOARDS EM TEMPO REAL
          </div>
        </div>
      </div>
    </>
  );
}

function Phase3Body() {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="relative h-[3px] bg-canvas/10 overflow-hidden mb-8">
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, delay: 0.15, ease: EASE_OUT }}
          style={{ transformOrigin: 'left center' }}
          className="absolute inset-0 bg-gold shadow-[var(--token-glow)]"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.55, delay: 0.35, ease: EASE_OUT }}
        className="text-center"
      >
        <span className="font-mono text-xs uppercase tracking-[0.25em] text-canvas font-bold block mb-3">
          A VIRADA DE CHAVE DO SEU NEGÓCIO
        </span>
        <p className="font-syne text-2xl sm:text-3xl lg:text-4xl font-bold text-canvas leading-tight">
          A OPTIMAFY transforma a tecnologia no seu funcionário mais eficiente.
        </p>
      </motion.div>
    </div>
  );
}

/* ============================================================
 * MOBILE LAYOUT — cada fase é um bloco próprio, fluxo natural
 * ============================================================ */

function MobilePhase({
  phase,
  onOpenAudit,
}: {
  phase: 0 | 1 | 2;
  onOpenAudit: () => void;
}) {
  const header = PHASE_HEADERS[phase];

  const body =
    phase === 0 ? (
      <Phase1Body onOpenAudit={onOpenAudit} />
    ) : phase === 1 ? (
      <Phase2Body />
    ) : (
      <Phase3Body />
    );

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, ease: EASE_OUT }}
      className="min-h-screen flex flex-col px-[5vw] py-8"
    >
      {/* Header da fase */}
      <header className="border-b border-canvas/15 pb-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="w-2.5 h-2.5 bg-canvas" />
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-canvas font-bold">
            {header.label}
          </span>
        </div>
      </header>

      {/* Conteúdo — my-auto centraliza quando sobra espaço,
          cresce naturalmente quando falta */}
      <div className="my-auto py-8">{body}</div>

      {/* Footer da fase: barras de progresso + chevron de scroll */}
      <footer className="pt-4 border-t border-canvas/10 flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className={`h-1 transition-all duration-300 ${
                i === phase ? 'w-6 bg-canvas' : 'w-1.5 bg-canvas/25'
              }`}
            />
          ))}
        </div>
        <div className="flex items-center gap-1 text-[10px] font-mono uppercase tracking-widest text-muted">
          <span>{phase < 2 ? 'SCROLL' : 'FIM'}</span>
          {phase < 2 ? (
            <ChevronDown className="w-3.5 h-3.5" />
          ) : (
            <ChevronUp className="w-3.5 h-3.5" />
          )}
        </div>
      </footer>
    </motion.section>
  );
}

function MobileFlow({ onOpenAudit }: TheProblemProps) {
  return (
    <div className="lg:hidden">
      <MobilePhase phase={0} onOpenAudit={onOpenAudit} />
      <MobilePhase phase={1} onOpenAudit={onOpenAudit} />
      <MobilePhase phase={2} onOpenAudit={onOpenAudit} />
    </div>
  );
}

/* ============================================================
 * DESKTOP LAYOUT — sticky 300vh + AnimatePresence (inalterado)
 * ============================================================ */

function DesktopStage({ onOpenAudit }: TheProblemProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [phase, setPhase] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [scrollDir, setScrollDir] = useState<1 | -1>(1);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const prevV = useRef(0);
  const prevPhase = useRef(0);

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    if (Math.abs(v - prevV.current) > 0.001) {
      setScrollDir(v > prevV.current ? 1 : -1);
    }
    prevV.current = v;

    const next = v < 0.33 ? 0 : v < 0.66 ? 1 : 2;
    if (next !== prevPhase.current) {
      setDirection(next > prevPhase.current ? 1 : -1);
      prevPhase.current = next;
      setPhase(next);
    }
  });

  const header = PHASE_HEADERS[phase];

  return (
    <div ref={containerRef} className="relative h-[300vh] w-full">
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-ink">
        <div className="absolute inset-0 pointer-events-none opacity-10 bg-[linear-gradient(to_right,#0a0a0a_1px,transparent_1px),linear-gradient(to_bottom,#0a0a0a_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        <header className="absolute top-0 left-0 right-0 z-30 px-[8vw] pt-8 pointer-events-none">
          <div className="flex items-center justify-between border-b border-canvas/15 pb-3">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 bg-canvas" />
              <motion.span
                key={`header-${phase}`}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={PHASE_TRANSITION}
                className="font-mono text-xs uppercase tracking-[0.25em] text-canvas font-bold"
              >
                {header.label}
              </motion.span>
            </div>
            <motion.div
              key={`sub-${phase}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ ...PHASE_TRANSITION, delay: 0.08 }}
              className="font-mono text-xs text-muted-soft tracking-widest"
            >
              {header.sub}
            </motion.div>
          </div>
        </header>

        <div className="absolute inset-0 z-20 px-[8vw] pt-28 pb-24">
          <div className="relative w-full max-w-6xl mx-auto h-full">
            <AnimatePresence mode="wait" custom={direction} initial={false}>
              {phase === 0 && (
                <motion.div
                  key="phase-0"
                  custom={direction}
                  variants={phaseVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={PHASE_TRANSITION}
                  className="absolute inset-0 overflow-hidden flex items-center py-4"
                >
                  <Phase1Body onOpenAudit={onOpenAudit} />
                </motion.div>
              )}

              {phase === 1 && (
                <motion.div
                  key="phase-1"
                  custom={direction}
                  variants={phaseVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={PHASE_TRANSITION}
                  className="absolute inset-0 overflow-hidden flex flex-col justify-center py-4"
                >
                  <Phase2Body />
                </motion.div>
              )}

              {phase === 2 && (
                <motion.div
                  key="phase-2"
                  custom={direction}
                  variants={phaseVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={PHASE_TRANSITION}
                  className="absolute inset-0 overflow-hidden flex flex-col items-center justify-center py-4"
                >
                  <Phase3Body />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <footer className="absolute bottom-0 left-0 right-0 z-30 px-[8vw] pb-8 pointer-events-none">
          <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-widest pt-2 border-t border-canvas/10">
            <div className="flex items-center gap-1 text-canvas">
              <ChevronUp
                className={`w-3.5 h-3.5 transition-all duration-200 ${
                  scrollDir === -1 ? 'opacity-100' : 'opacity-20'
                }`}
              />
              <ChevronDown
                className={`w-3.5 h-3.5 transition-all duration-200 ${
                  scrollDir === 1 ? 'opacity-100' : 'opacity-20'
                }`}
              />
            </div>
            <div className="flex items-center gap-8">
              {PHASE_LABELS.map((label, i) => (
                <span
                  key={label}
                  className={`transition-all duration-300 ${
                    i === phase ? 'text-canvas font-bold' : 'text-muted'
                  }`}
                >
                  {label}
                </span>
              ))}
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

/* ============================================================
 * EXPORT
 * ============================================================ */

export function TheProblem({ onOpenAudit }: TheProblemProps) {
  return (
    <section
      id="the-problem"
      className="relative isolate bg-ink text-canvas overflow-clip"
    >
      {/* MOBILE: 3 blocos no fluxo natural da página */}
      <MobileFlow onOpenAudit={onOpenAudit} />

      {/* DESKTOP: sticky 300vh com AnimatePresence */}
      <div className="hidden lg:block">
        <DesktopStage onOpenAudit={onOpenAudit} />
      </div>
    </section>
  );
}