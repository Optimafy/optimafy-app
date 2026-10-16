import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Globe, Cog, BarChart3, MessageSquare, ArrowUpRight, CheckCircle2, Sparkles, TrendingUp } from 'lucide-react';

interface SolutionsProps {
  onOpenAiStudio: (tab?: 'chat' | 'analyze') => void;
}

export function Solutions({ onOpenAiStudio }: SolutionsProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Parallax scroll tracking
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 1024);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  // Left column 0.85x speed, Right column 1.2x speed (active on desktop)
  const leftColY = useTransform(scrollYProgress, [0, 1], ['40px', '-40px']);
  const rightColY = useTransform(scrollYProgress, [0, 1], ['-50px', '70px']);

  const solutions = [
    {
      id: '01',
      title: 'Presença Digital Premium',
      subtitle: 'Sua Vitrine 24 Horas',
      desc: 'A primeira impressão do seu cliente acontece na internet. Criamos sites com design de nível internacional que transmitem confiança imediata, destacam seus serviços e transformam visitantes curiosos em clientes pagantes. Seu negócio com imagem de empresa grande.',
      analogia: 'Uma fachada de luxo na avenida principal da sua cidade, aberta dia e noite.',
      icon: Globe,
      speechText:
        'Presença Digital Premium: A primeira impressão do seu cliente acontece na internet. Criamos sites com design de nível internacional que transmitem confiança imediata, destacam seus serviços e transformam visitantes curiosos em clientes pagantes. Seu negócio com imagem de empresa grande.',
      benefit: 'Mais credibilidade e maior valor percebido no seu preço',
      comparison: {
        antes: 'Site amador, lento e que não gera vendas',
        depois: 'Vitrine de alto padrão que fecha contratos todo dia',
      },
      tags: ['Sites Institucionais', 'Portfólios de Prestígio', 'Páginas de Alta Conversão', 'Design Internacional'],
    },
    {
      id: '02',
      title: 'Automação de Processos',
      subtitle: 'O Fim do Trabalho Braçal',
      desc: 'Sabe aquelas horas perdidas copiando e colando dados em planilhas, ou enviando as mesmas mensagens todos os dias? Nós criamos sistemas invisíveis que fazem esse trabalho chato por você, de forma automática e sem erros. Sua equipe ganha tempo para focar no que realmente importa: atender bem e vender mais.',
      analogia: 'É como ter um assistente administrativo que não dorme, não tira férias e nunca erra.',
      icon: Cog,
      speechText:
        'Automação de Processos: O fim do trabalho braçal. Criamos sistemas invisíveis que fazem o trabalho repetitivo por você, sem erros e no piloto automático. É como ter um assistente administrativo que não dorme, não tira férias e nunca erra.',
      benefit: 'Economia média de 18 horas de trabalho por semana',
      comparison: {
        antes: 'Horas digitando as mesmas coisas em várias planilhas',
        depois: 'Tudo integrado: clicou, o sistema faz sozinho',
      },
      tags: ['Fim das Planilhas Manuais', 'Envio Automático de Recibos', 'Rotinas Sem Erros', 'Mais Tempo Livre'],
    },
    {
      id: '03',
      title: 'Dashboards e Controle de Dados',
      subtitle: 'Decisões Seguras Baseadas em Fatos',
      desc: 'Chega de adivinhar se o mês deu lucro ou prejuízo. Montamos painéis visuais simples e diretos onde você vê, na tela do celular ou computador, exatamente de onde vem o dinheiro, para onde ele vai e quais produtos ou serviços são os verdadeiros campeões de venda da sua empresa.',
      analogia: 'O painel de controle do seu carro: você vê a velocidade e o combustível num relance.',
      icon: BarChart3,
      speechText:
        'Dashboards e Controle de Dados: Chega de adivinhar se o mês deu lucro ou prejuízo. Montamos painéis visuais simples e diretos onde você vê exatamente de onde vem o dinheiro e para onde ele vai, direto na tela do celular.',
      benefit: 'Visão clara do lucro real na palma da mão',
      comparison: {
        antes: 'Dúvida se a empresa está lucrando ou acumulando dívidas',
        depois: 'Números claros e decisões seguras a qualquer hora',
      },
      tags: ['Lucro Real em Tempo Real', 'Painel Visual no Celular', 'Relatórios Fáceis', 'Controle Financeiro'],
    },
    {
      id: '04',
      title: 'Atendimento & Vendas Automáticas',
      subtitle: 'Seu Sistema de Vendas Conectado ao Financeiro',
      desc: 'Fazemos o seu sistema de vendas conversar sozinho com o seu financeiro. Quando um cliente pede orçamento no WhatsApp ou no site, ele é atendido em segundos, a proposta é enviada e a cobrança é emitida sem depender de você parar tudo para responder.',
      analogia: 'Um vendedor dedicado 24 horas por dia que nunca deixa o cliente sem resposta.',
      icon: MessageSquare,
      speechText:
        'Atendimento e Vendas Automáticas: Fazemos o seu sistema de vendas conversar sozinho com o financeiro. O cliente é atendido na hora pelo WhatsApp ou site, aumentando as chances de fechar negócio antes da concorrência.',
      benefit: 'Atendimento em menos de 1 minuto e aumento de vendas',
      comparison: {
        antes: 'Cliente espera 4 horas por uma resposta e fecha com outro',
        depois: 'Resposta imediata, orçamento automático e venda fechada',
      },
      tags: ['WhatsApp Automatizado', 'Cobranças Integradas', 'Atendimento 24/7', 'Vendas Mais Rápidas'],
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="solutions"
      className="relative min-h-[160vh] w-full bg-surface text-ink py-28 px-[6vw] sm:px-[8vw] overflow-hidden"
      style={{ zIndex: 12 }}
    >
      {/* Decorative luxury lines and subtle ambient glows */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      <div className="absolute top-1/3 -left-32 w-80 h-80 bg-gold/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-gold/4 rounded-full blur-[140px] pointer-events-none" />

      {/* Section Header */}
      <div className="max-w-7xl mx-auto mb-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-border pb-8">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-gold block mb-3 font-semibold">
              02 // COMO REVOLUCIONAMOS SEU NEGÓCIO
            </span>
            <h2 className="font-syne text-3xl sm:text-5xl lg:text-6xl font-extrabold text-ink tracking-tight leading-[1.05]">
              Tecnologia descomplicada.
              <span className="block text-gold font-normal italic font-serif">
                Resultados diretos no seu bolso.
              </span>
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-muted text-sm sm:text-base font-light leading-relaxed mb-4">
              Você não precisa aprender termos difíceis nem mudar sua rotina. Nós entregamos tudo pronto, funcionando e gerando lucro para sua empresa.
            </p>
            <button
              onClick={() => onOpenAiStudio('chat')}
              className="inline-flex items-center gap-2 text-xs font-mono text-gold hover:underline cursor-pointer"
            >
              <span>Descubra qual solução seu negócio precisa primeiro</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Asymmetric 2-Column Parallax Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
        {/* Left Column (0.85x speed on desktop, static flow on mobile) */}
        <motion.div style={{ y: isDesktop ? leftColY : 0 }} className="space-y-10 lg:space-y-16">
          {[solutions[0], solutions[2]].map((item) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] as const }}
                className="group relative bg-canvas border border-border hover:border-gold/60 transition-colors duration-500 p-8 sm:p-10 flex flex-col justify-between overflow-hidden"
              >
                {/* Visual Before/After Mask Reveal Card */}
                <motion.div
                  initial={{ clipPath: 'inset(100% 0% 0% 0%)' }}
                  whileInView={{ clipPath: 'inset(0% 0% 0% 0%)' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] as const }}
                  className="mb-8 p-5 bg-surface-2 border border-surface-3 font-mono text-xs rounded-none relative"
                >
                  <div className="flex items-center justify-between text-[11px] text-muted-soft border-b border-border pb-2 mb-3">
                    <span className="flex items-center gap-1.5 text-gold font-bold">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>TRANSFORMAÇÃO NA PRÁTICA</span>
                    </span>
                    <span className="text-muted font-mono">{item.benefit}</span>
                  </div>

                  <div className="space-y-2.5">
                    <div className="flex items-start gap-2 text-muted text-[11px]">
                      <span className="text-[#b91c1c] font-bold shrink-0">ANTES:</span>
                      <span>{item.comparison.antes}</span>
                    </div>
                    <div className="flex items-start gap-2 text-ink text-[11px]">
                      <span className="text-gold font-bold shrink-0">COM A OPTIMAFY:</span>
                      <span className="text-gold">{item.comparison.depois}</span>
                    </div>
                  </div>
                </motion.div>

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 border border-gold/40 bg-gold/10 text-gold">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="font-mono text-xs text-gold tracking-widest uppercase font-bold">
                        SOLUÇÃO {item.id}
                      </span>
                    </div>
                  </div>

                  <h3 className="font-syne text-2xl sm:text-3xl font-bold text-ink mb-2 group-hover:text-gold transition-colors duration-300">
                    {item.title}
                  </h3>
                  <h4 className="font-mono text-xs uppercase tracking-wider text-gold mb-4 font-semibold">
                    {item.subtitle}
                  </h4>
                  <p className="text-muted text-sm leading-relaxed mb-5 font-light">
                    {item.desc}
                  </p>

                  <div className="p-3 bg-surface-2 border-l-2 border-gold text-xs text-muted italic mb-6">
                    "{item.analogia}"
                  </div>
                </div>

                <div className="pt-5 border-t border-border-soft flex flex-wrap gap-2">
                  {item.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 bg-surface-2 text-[10px] font-mono uppercase tracking-wider text-muted border border-border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        {/* Right Column (1.2x speed on desktop, static flow on mobile) */}
        <motion.div style={{ y: isDesktop ? rightColY : 0 }} className="space-y-10 lg:space-y-16 lg:pt-16">
          {[solutions[1], solutions[3]].map((item) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] as const }}
                className="group relative bg-canvas border border-border hover:border-gold/60 transition-colors duration-500 p-8 sm:p-10 flex flex-col justify-between overflow-hidden"
              >
                {/* Visual Before/After Mask Reveal Card */}
                <motion.div
                  initial={{ clipPath: 'inset(100% 0% 0% 0%)' }}
                  whileInView={{ clipPath: 'inset(0% 0% 0% 0%)' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] as const }}
                  className="mb-8 p-5 bg-surface-2 border border-surface-3 font-mono text-xs rounded-none relative"
                >
                  <div className="flex items-center justify-between text-[11px] text-muted-soft border-b border-border pb-2 mb-3">
                    <span className="flex items-center gap-1.5 text-gold font-bold">
                      <TrendingUp className="w-3.5 h-3.5" />
                      <span>TRANSFORMAÇÃO NA PRÁTICA</span>
                    </span>
                    <span className="text-muted font-mono">{item.benefit}</span>
                  </div>

                  <div className="space-y-2.5">
                    <div className="flex items-start gap-2 text-muted text-[11px]">
                      <span className="text-[#b91c1c] font-bold shrink-0">ANTES:</span>
                      <span>{item.comparison.antes}</span>
                    </div>
                    <div className="flex items-start gap-2 text-ink text-[11px]">
                      <span className="text-gold font-bold shrink-0">COM A OPTIMAFY:</span>
                      <span className="text-gold">{item.comparison.depois}</span>
                    </div>
                  </div>
                </motion.div>

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 border border-gold/40 bg-gold/10 text-gold">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="font-mono text-xs text-gold tracking-widest uppercase font-bold">
                        SOLUÇÃO {item.id}
                      </span>
                    </div>
                  </div>

                  <h3 className="font-syne text-2xl sm:text-3xl font-bold text-ink mb-2 group-hover:text-gold transition-colors duration-300">
                    {item.title}
                  </h3>
                  <h4 className="font-mono text-xs uppercase tracking-wider text-gold mb-4 font-semibold">
                    {item.subtitle}
                  </h4>
                  <p className="text-muted text-sm leading-relaxed mb-5 font-light">
                    {item.desc}
                  </p>

                  <div className="p-3 bg-surface-2 border-l-2 border-gold text-xs text-muted italic mb-6">
                    "{item.analogia}"
                  </div>
                </div>

                <div className="pt-5 border-t border-border-soft flex flex-wrap gap-2">
                  {item.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 bg-surface-2 text-[10px] font-mono uppercase tracking-wider text-muted border border-border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
