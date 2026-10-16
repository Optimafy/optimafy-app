import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Coffee, Compass, Laptop, CheckCircle2, ShieldCheck } from 'lucide-react';

interface ProcessProps {}

export function Process({}: ProcessProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll tracker across 400vh
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Lateral Gold line height tracking exact scrollYProgress
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['5%', '100%']);

  const steps = [
    {
      num: '01',
      title: 'A Conversa',
      headline: 'Sentamos com você para entender onde seu negócio perde tempo ou dinheiro.',
      desc: 'Nada de reuniões técnicas chatas. Em uma conversa de 30 minutos (presencial ou por chamada de vídeo), identificamos os gargalos da sua rotina: o que está tomando seu tempo, onde os clientes estão escapando e quais planilhas estão gerando dor de cabeça.',
      deliverables: ['Mapeamento das Horas Perdidas', 'Identificação de Oportunidades de Venda', 'Diagnóstico Sem Custo'],
      icon: Coffee,
      speechText:
        'Etapa 1: A Conversa. Sentamos com você ou fazemos uma chamada para entender onde seu negócio está perdendo tempo ou dinheiro, de forma simples e direta.',
    },
    {
      num: '02',
      title: 'O Plano',
      headline: 'Desenhamos uma solução sob medida, explicada em português claro.',
      desc: 'Criamos um projeto personalizado para a sua empresa, seja um site de alto padrão para atrair clientes ou automações para organizar a casa. Explicamos exatamente como vai funcionar, quanto tempo vai levar e quanto você vai economizar, sem nenhuma sopa de letrinhas.',
      deliverables: ['Proposta Comercial Transparente', 'Cronograma com Datas Fixas', 'Garantia de Retorno'],
      icon: Compass,
      speechText:
        'Etapa 2: O Plano. Desenhamos uma solução sob medida, seja um site para atrair clientes ou um sistema para organizar a casa. Explicamos tudo em português claro, sem termos difíceis.',
    },
    {
      num: '03',
      title: 'A Execução',
      headline: 'Nós construímos tudo enquanto você continua focado nas suas vendas.',
      desc: 'Você não precisa parar a sua empresa para implantar tecnologia. Nossa equipe desenvolve o site, cria as automações e conecta seus sistemas nos bastidores. Você continua atendendo seus clientes e cuidando do seu negócio com total tranquilidade.',
      deliverables: ['Construção 100% por Nossa Conta', 'Atualizações Semanais Sem Complicação', 'Zero Interrupção na Sua Rotina'],
      icon: Laptop,
      speechText:
        'Etapa 3: A Execução. Nós construímos a solução completa enquanto você continua focado no seu negócio e atendendo seus clientes.',
    },
    {
      num: '04',
      title: 'O Resultado & Treinamento',
      headline: 'Entregamos a ferramenta pronta, treinamos sua equipe e garantimos o sucesso.',
      desc: 'Não te deixamos sozinho com um sistema que ninguém sabe usar. Entregamos tudo pronto para uso, gravamos vídeos curtos ensinando o passo a passo e treinamos você e seus funcionários até que todos estejam confortáveis e a economia de tempo comece no primeiro dia.',
      deliverables: ['Ferramentas Funcionando no 1º Dia', 'Treinamento Prático para Sua Equipe', 'Suporte Humanizado por WhatsApp'],
      icon: CheckCircle2,
      speechText:
        'Etapa 4: O Resultado e Treinamento. Entregamos a ferramenta pronta para uso, treinamos você e sua equipe, e garantimos que tudo funcione perfeitamente sem dor de cabeça.',
    },
    {
      num: '05',
      title: 'Acompanhamento Perpétuo',
      headline: 'Sua empresa com tecnologia sempre atualizada e suporte imediato.',
      desc: 'Qualquer dúvida ou ajuste que você precisar, basta nos mandar uma mensagem. Cuidamos para que seu site nunca fique fora do ar e suas automações continuem rodando perfeitamente enquanto seu negócio fatura mais.',
      deliverables: ['Suporte Rápido e Dedicado', 'Manutenção Contínua', 'Paz de Espírito para Crescer'],
      icon: ShieldCheck,
      speechText:
        'Etapa 5: Acompanhamento Perpétuo. Garantia contínua e suporte rápido para que seu negócio continue crescendo com estabilidade e tranquilidade.',
    },
  ];

  return (
    <section
      ref={containerRef}
      id="process"
      className="relative h-[400vh] w-full bg-canvas text-ink"
      style={{ zIndex: 14 }}
    >
      {/* Sticky 100vh viewport */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-between px-[5vw] sm:px-[8vw] py-8 sm:py-12 overflow-hidden bg-canvas">
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-noise pointer-events-none opacity-20" />

        {/* Section Header */}
        <div className="relative z-10 flex items-center justify-between border-b border-border-soft pb-3">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 bg-gold" />
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-gold font-bold">
              03 // COMO TRABALHAMOS
            </span>
          </div>

          <div className="font-mono text-xs text-muted-soft tracking-widest hidden sm:block">
            PROCESSO CLARO, TRANSPARENTE E SEM JARGÕES
          </div>
        </div>

        {/* Center Dynamic Stage with Gold Line and Step Content */}
        <div className="relative z-10 my-auto w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Lateral Gold Progress Line Column */}
          <div className="hidden lg:flex lg:col-span-3 items-center gap-6">
            <div className="relative w-[3px] h-[340px] bg-surface-2 rounded-full overflow-hidden">
              {/* Gold Progress Fill */}
              <motion.div
                style={{ height: lineHeight }}
                className="absolute top-0 left-0 right-0 bg-gold shadow-[var(--token-glow)]"
              />
            </div>

            {/* Step Numbers List */}
            <div className="flex flex-col justify-between h-[340px] py-1 font-mono text-xs">
              {steps.map((step, idx) => {
                const start = idx / steps.length;
                const end = (idx + 1) / steps.length;
                return (
                  <StepNavIndicator
                    key={step.num}
                    num={step.num}
                    title={step.title}
                    scrollYProgress={scrollYProgress}
                    start={start}
                    end={end}
                  />
                );
              })}
            </div>
          </div>

          {/* Dynamic Content Display (Active Step) */}
          <div className="lg:col-span-9 relative min-h-[380px] flex items-center">
            {steps.map((step, idx) => {
              const start = idx / steps.length;
              const peak = (idx + 0.5) / steps.length;
              const end = (idx + 1) / steps.length;

              return (
                <StepSlide
                  key={step.num}
                  step={step}
                  scrollYProgress={scrollYProgress}
                  start={start}
                  peak={peak}
                  end={end}
                />
              );
            })}
          </div>
        </div>

        {/* Bottom Status / Navigation info */}
        <div className="relative z-10 flex items-center justify-between border-t border-border-soft pt-4 text-[10px] font-mono uppercase tracking-widest text-muted-soft">
          <span>SEM TERMOS DIFÍCEIS</span>
          <span className="text-gold font-bold">ROLE PARA VER CADA ETAPA</span>
          <span>RESULTADO GARANTIDO</span>
        </div>
      </div>
    </section>
  );
}

// Sub-component for individual step transitions in sticky viewport
function StepSlide({
  step,
  scrollYProgress,
  start,
  peak,
  end,
}: {
  step: any;
  scrollYProgress: any;
  start: number;
  peak: number;
  end: number;
}) {
  const Icon = step.icon;

  const opacity = useTransform(
    scrollYProgress,
    [start, start + 0.04, peak, end - 0.04, end],
    [0, 1, 1, 1, 0]
  );

  const y = useTransform(
    scrollYProgress,
    [start, peak, end],
    ['40px', '0px', '-40px']
  );

  const pointerEvents = useTransform(scrollYProgress, (val: number) =>
    val >= start && val < end ? 'auto' : 'none'
  );

  return (
    <motion.div
      style={{ opacity, y, pointerEvents }}
      className="absolute inset-0 flex flex-col justify-center"
    >
      <div className="bg-surface/95 border border-border p-5 sm:p-8 md:p-10 shadow-2xl relative overflow-hidden backdrop-blur-md">
        <div className="flex items-center justify-between border-b border-border pb-4 mb-5">
          <div className="flex items-center gap-3">
            <span className="font-syne text-3xl font-extrabold text-gold">
              {step.num}
            </span>
            <div className="h-4 w-[1px] bg-[#333333]" />
            <span className="font-mono text-xs uppercase tracking-widest text-muted font-semibold">
              {step.title}
            </span>
          </div>

          <div className="p-2 border border-gold/30 bg-gold/10 text-gold">
            <Icon className="w-5 h-5" />
          </div>
        </div>

        <h3 className="font-syne text-2xl sm:text-3xl font-bold text-ink mb-3 leading-tight">
          {step.headline}
        </h3>

        <p className="text-muted text-sm sm:text-base leading-relaxed mb-6 font-light">
          {step.desc}
        </p>

        <div className="pt-4 border-t border-border-soft">
          <span className="text-[11px] font-mono uppercase tracking-wider text-muted-soft block mb-2 font-semibold">
            O que você recebe:
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            {step.deliverables.map((item: string, i: number) => (
              <div
                key={i}
                className="flex items-center gap-2 p-2 bg-surface-2 border border-surface-3 text-[11px] font-mono text-muted"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-gold shrink-0" />
                <span className="truncate">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Navigation indicator on the left side of the process
function StepNavIndicator({
  num,
  title,
  scrollYProgress,
  start,
  end,
}: {
  num: string;
  title: string;
  scrollYProgress: any;
  start: number;
  end: number;
}) {
  const color = useTransform(scrollYProgress, (val: number) =>
    val >= start && val < end ? '#c4a97d' : '#555555'
  );
  const opacity = useTransform(scrollYProgress, (val: number) =>
    val >= start && val < end ? 1 : 0.4
  );

  return (
    <motion.div style={{ color, opacity }} className="flex items-center gap-3">
      <span className="font-mono text-xs font-bold">{num}</span>
      <span className="text-[11px] font-mono tracking-wider uppercase truncate max-w-[170px]">
        {title}
      </span>
    </motion.div>
  );
}
