import { motion } from 'motion/react';
import {
  MessageSquare,
  BarChart3,
  Globe,
  Database,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  DollarSign,
  Clock,
  Shield,
  Layers,
} from 'lucide-react';

interface SolucoesPageProps {
  onOpenAiStudio: (tab?: 'chat' | 'analyze') => void;
  onNavigateHome: () => void;
}

export function SolucoesPage({ onOpenAiStudio, onNavigateHome }: SolucoesPageProps) {
  const solutions = [
    {
      id: 'whatsapp-vendas',
      tag: 'VENDAS NO PILOTO AUTOMÁTICO',
      title: 'Atendimento & Vendas no WhatsApp 24/7',
      subtitle: 'Nunca mais perca um cliente porque sua equipe demorou a responder.',
      description:
        'Transformamos o WhatsApp da sua empresa em uma esteira de vendas que responde dúvidas, envia cardápios ou catálogos, qualifica o cliente e agenda horários instantaneamente. Seus vendedores recebem o cliente pronto para fechar a compra.',
      benefits: [
        'Resposta em menos de 10 segundos, dia ou noite',
        'Redução drástica de abandono de pedidos',
        'Integração direta com estoque e financeiro',
        'Notificação instantânea para os donos e gerentes',
      ],
      icon: MessageSquare,
      image: '/images/solucoes1.webp',
      stat: 'Economia média de 32h/mês por atendente',
    },
    {
      id: 'erp-sob-medida',
      tag: 'ORGANIZAÇÃO & CONTROLE',
      title: 'Sistemas Sob Medida & Fim das Planilhas Bagunçadas',
      subtitle: 'Toda a sua operação em uma tela simples e visual que qualquer funcionário entende.',
      description:
        'Substitua dezenas de planilhas de Excel que travam por um painel exclusivo do seu negócio. Controle compras, estoque, expedição e ordens de serviço sem complicações e sem mensalidades abusivas por usuário.',
      benefits: [
        'Interface limpa feita para a realidade da sua equipe',
        'Acesso seguro pelo celular ou computador',
        'Alertas automáticos de estoque baixo',
        'Zero perda de arquivos ou fórmulas corrompidas',
      ],
      icon: Database,
      image: '/images/solucoes2.webp',
      stat: 'Eliminação dos erros manuais de digitação',
    },
    {
      id: 'vitrine-alta-conversao',
      tag: 'IMAGEM DE EMPRESA GRANDE',
      title: 'Portais Digitais & Vitrines de Alto Padrão',
      subtitle: 'Passe a segurança e credibilidade que justificam cobrar mais caro.',
      description:
        'Um site lento ou genérico afasta os melhores clientes. Desenvolvemos portais de luxo, ultra-rápidos e otimizados para o Google Maps, que transformam visitantes casuais em contratos fechados.',
      benefits: [
        'Design luxuoso e moderno com identidade exclusiva',
        'Velocidade de carregamento instantânea no celular',
        'Posicionamento no topo das buscas orgânicas da sua região',
        'Botões de contato direto e agendamento sem fricção',
      ],
      icon: Globe,
      image: '/images/solucoes3.webp',
      stat: 'Aumento na percepção de valor da marca',
    },
    {
      id: 'dashboards-financeiros',
      tag: 'LUCRO REAL NA PALMA DA MÃO',
      title: 'Central Financeira & Cobrança Automática',
      subtitle: 'Saiba o lucro líquido da sua empresa todos os dias sem esperar o contador.',
      description:
        'Painéis executivos que conectam suas contas a pagar e receber com seu fluxo de caixa diário. Régua de cobrança automática por Pix e boleto que reduz a inadimplência com elegância e pontualidade.',
      benefits: [
        'Lucro líquido calculado em tempo real',
        'Régua de lembretes automáticos de vencimento',
        'Previsão de caixa para os próximos 30 e 60 dias',
        'Fim da surpresa com despesas operacionais ocultas',
      ],
      icon: BarChart3,
      image: '/images/contato.webp',
      stat: 'Redução na taxa de inadimplência',
    },
  ];

  return (
    <div className="min-h-screen bg-canvas text-ink pt-28 pb-20 px-[5vw] sm:px-[6vw]">
      {/* Breadcrumb Navigation */}
      <div className="max-w-6xl mx-auto mb-8">
        <nav aria-label="Navegação" className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-muted-soft">
          <button
            onClick={onNavigateHome}
            className="hover:text-gold transition-colors cursor-pointer"
          >
            Início
          </button>
          <span>/</span>
          <span className="text-gold font-semibold">Soluções Digitais</span>
        </nav>
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 text-[11px] font-mono uppercase tracking-[0.2em] bg-gold/10 text-gold border border-gold/30">
            <Layers className="w-3.5 h-3.5" />
            <span>SOLUÇÕES DE TECNOLOGIA PARA PMES</span>
          </div>
          <h1 className="font-syne font-bold text-3xl sm:text-5xl md:text-6xl text-ink tracking-tight mb-6">
            Engenharia Digital <br />
            <span className="text-gold">Focada em Retorno Financeiro</span>
          </h1>
          <p className="text-sm sm:text-lg text-muted leading-relaxed">
            Eliminamos o retrabalho manual e construímos a infraestrutura que faz sua empresa vender mais, operar no piloto automático e transmitir solidez inquestionável.
          </p>
        </div>

        {/* Solutions Grid / Detailed Cards */}
        <div className="space-y-16 sm:space-y-24 mb-24">
          {solutions.map((sol, index) => {
            const Icon = sol.icon;
            const isEven = index % 2 === 0;

            return (
              <div
                key={sol.id}
                className={`flex flex-col ${
                  isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } gap-8 sm:gap-12 items-center bg-surface border border-border p-6 sm:p-10 relative overflow-hidden`}
              >
                {/* Media Column */}
                <div className="w-full lg:w-1/2 overflow-hidden border border-border relative">
                  <img
                    src={sol.image}
                    alt={sol.title}
                    className="w-full h-64 sm:h-80 md:h-96 object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                  <div className="absolute bottom-4 left-4 right-4 bg-surface/90 backdrop-blur-md border border-gold/40 p-3">
                    <span className="font-mono text-xs text-gold font-bold block">
                      IMPACTO COMPROVADO:
                    </span>
                    <span className="text-xs text-ink font-sans">{sol.stat}</span>
                  </div>
                </div>

                {/* Text Content Column */}
                <div className="w-full lg:w-1/2 space-y-5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gold/10 border border-gold/30 flex items-center justify-center text-gold">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-xs uppercase tracking-[0.2em] text-gold font-bold">
                      {sol.tag}
                    </span>
                  </div>

                  <h2 className="font-syne font-bold text-2xl sm:text-3xl text-ink leading-tight">
                    {sol.title}
                  </h2>

                  <p className="font-mono text-xs text-muted leading-snug">
                    {sol.subtitle}
                  </p>

                  <p className="text-xs sm:text-sm text-ink-soft leading-relaxed">
                    {sol.description}
                  </p>

                  {/* Bullet points */}
                  <div className="space-y-2 pt-2">
                    {sol.benefits.map((b, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs font-mono text-muted">
                        <CheckCircle2 className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action */}
                  <div className="pt-4">
                    <button
                      onClick={() => onOpenAiStudio('chat')}
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-gold hover:bg-gold-hover text-canvas font-mono text-xs font-bold uppercase tracking-wider transition-all cursor-pointer"
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Simular Essa Solução com IA</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="p-8 sm:p-12 border border-gold/40 bg-surface text-center flex flex-col items-center">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-gold font-semibold mb-3">
            ATENDIMENTO PERSONALIZADO
          </span>
          <h3 className="font-syne font-bold text-2xl sm:text-4xl text-ink mb-4 max-w-xl">
            Sua empresa tem um fluxo de trabalho específico?
          </h3>
          <p className="text-xs sm:text-sm text-muted max-w-md mb-8">
            Nós não empurramos soluções prontas de prateleira: desenhamos a ferramenta exata que resolve seu gargalo sem mudar o que já funciona bem.
          </p>
          <button
            onClick={() => onOpenAiStudio('chat')}
            className="px-6 py-3.5 bg-gold hover:bg-gold-hover text-canvas font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all cursor-pointer shadow-lg shadow-[var(--token-glow)]"
          >
            <Sparkles className="w-4 h-4" />
            <span>Falar com o Assistente de IA Agora</span>
          </button>
        </div>
      </div>
    </div>
  );
}
