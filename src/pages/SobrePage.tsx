import { motion } from 'motion/react';
import {
  CheckCircle2,
  Zap,
  ShieldCheck,
  Target,
  ArrowRight,
  Sparkles,
  Users,
  Clock,
  TrendingUp,
} from 'lucide-react';

interface SobrePageProps {
  onOpenAiStudio: (tab?: 'chat' | 'analyze') => void;
  onNavigateHome: () => void;
}

export function SobrePage({ onOpenAiStudio, onNavigateHome }: SobrePageProps) {
  const steps = [
    {
      number: '01',
      title: 'Conversamos',
      description:
        'Primeiro, conversamos em português simples para entender a rotina real da sua empresa, sem jargões técnicos.',
    },
    {
      number: '02',
      title: 'Identificamos Gargalos',
      description:
        'Analisamos onde você e sua equipe perdem horas preciosas com digitação, planilhas lentas ou clientes esperando.',
    },
    {
      number: '03',
      title: 'Planejamos a Solução',
      description:
        'Desenhamos um plano de ação enxuto e visual focado em retorno financeiro rápido e aumento de margem.',
    },
    {
      number: '04',
      title: 'Desenvolvemos Sob Medida',
      description:
        'Construímos sistemas, automações e portais modernos que funcionam no piloto automático.',
    },
    {
      number: '05',
      title: 'Implementamos sem Parar a Empresa',
      description:
        'Colocamos a engrenagem para rodar de forma suave, treinando sua equipe de forma intuitiva e prática.',
    },
    {
      number: '06',
      title: 'Acompanhamos e Suportamos',
      description:
        'Permanecemos ao seu lado com suporte contínuo para garantir que a tecnologia continue gerando lucro.',
    },
  ];

  const differentiators = [
    {
      icon: Target,
      title: 'Foco no Negócio e no Lucro',
      description:
        'Não vendemos código ou tecnologias da moda: entregamos soluções que cortam custos, economizam horas e colocam mais dinheiro no seu caixa.',
    },
    {
      icon: Zap,
      title: 'Resultados em Ciclos Curtos',
      description:
        'Você não espera meses para ver as melhorias. Entregamos módulos que começam a gerar alívio operacional nos primeiros dias.',
    },
    {
      icon: ShieldCheck,
      title: 'Confiança e Suporte Real',
      description:
        'Você fala diretamente com quem resolve. Nada de chamados frios ou robôs genéricos: nossa equipe zela pela tranquilidade da sua operação.',
    },
  ];

  return (
    <div className="min-h-screen bg-canvas text-ink pt-28 pb-20 px-[5vw] sm:px-[6vw]">
      {/* Breadcrumb Navigation */}
      <div className="max-w-6xl mx-auto mb-8">
        <nav aria-label="Navegação" className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#777777]">
          <button
            onClick={onNavigateHome}
            className="hover:text-[#c4a97d] transition-colors cursor-pointer"
          >
            Início
          </button>
          <span>/</span>
          <span className="text-[#c4a97d] font-semibold">Sobre a OPTIMAFY</span>
        </nav>
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 text-[11px] font-mono uppercase tracking-[0.2em] bg-[#c4a97d]/10 text-[#c4a97d] border border-[#c4a97d]/30">
            <Users className="w-3.5 h-3.5" />
            <span>QUEM SOMOS // MANIFESTO</span>
          </div>
          <h1 className="font-syne font-bold text-3xl sm:text-5xl md:text-6xl text-ink tracking-tight mb-6">
            Tecnologia que Trabalha <br />
            <span className="text-[#c4a97d]">Pelo Seu Negócio.</span>
          </h1>
          <p className="text-sm sm:text-lg text-muted leading-relaxed">
            A OPTIMAFY nasceu de uma constatação simples: pequenos e médios empresários no Brasil trabalham duro demais com processos manuais enquanto as grandes corporações usam tecnologia para dominar mercados. Nós nivelamos esse jogo.
          </p>
        </div>

        {/* Featured Image */}
        <div className="relative mb-20 overflow-hidden border border-border shadow-2xl">
          <img
            src="/images/sobre.webp"
            alt="Equipe OPTIMAFY trabalhando em soluções de tecnologia para PMEs"
            className="w-full h-64 sm:h-96 md:h-[460px] object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-canvas via-transparent to-transparent opacity-70" />
          <div className="absolute bottom-6 left-6 right-6 sm:bottom-10 sm:left-10 flex flex-wrap items-center justify-between gap-4">
            <div className="bg-canvas/90 backdrop-blur-md border border-[#c4a97d]/40 p-4 max-w-md">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#c4a97d] font-bold block mb-1">
                NOSSA MISSÃO
              </span>
              <p className="text-xs sm:text-sm text-ink">
                Transformar a tecnologia no funcionário mais confiável, veloz e rentável da sua empresa.
              </p>
            </div>
          </div>
        </div>

        {/* The 6-Step Roadmap */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#c4a97d] font-semibold block mb-2">
              COMO TRABALHAMOS
            </span>
            <h2 className="font-syne font-bold text-2xl sm:text-4xl text-ink">
              Do Diagnóstico ao Piloto Automático
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((step) => (
              <div
                key={step.number}
                className="group p-6 sm:p-8 bg-surface border border-border hover:border-[#c4a97d] transition-all duration-300 relative flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-2xl sm:text-3xl font-bold text-[#c4a97d] block mb-3 opacity-70 group-hover:opacity-100 transition-opacity">
                    {step.number}
                  </span>
                  <h3 className="font-syne font-bold text-lg text-ink mb-2 group-hover:text-[#c4a97d] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3 Pillars / Differentiators */}
        <div className="mb-24 py-12 px-6 sm:px-12 bg-surface border border-border relative overflow-hidden">
          <div className="max-w-2xl mb-10">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#c4a97d] font-semibold block mb-2">
              DIFERENCIAIS
            </span>
            <h2 className="font-syne font-bold text-2xl sm:text-3xl text-ink">
              Por Que Pequenas e Médias Empresas Escolhem a OPTIMAFY
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {differentiators.map((diff, idx) => {
              const Icon = diff.icon;
              return (
                <div key={idx} className="flex flex-col">
                  <div className="w-12 h-12 bg-[#c4a97d]/10 border border-[#c4a97d]/40 flex items-center justify-center text-[#c4a97d] mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-syne font-bold text-base sm:text-lg text-ink mb-2">
                    {diff.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted leading-relaxed">
                    {diff.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="p-8 sm:p-12 border border-[#c4a97d]/40 bg-gradient-to-r from-surface-2 to-surface-2 text-center flex flex-col items-center">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#c4a97d] font-semibold mb-3">
            DÊ O PRIMEIRO PASSO HOJE
          </span>
          <h2 className="font-syne font-bold text-2xl sm:text-4xl text-ink mb-4 max-w-xl">
            Pronto para transformar sua rotina em uma operação de alta performance?
          </h2>
          <p className="text-xs sm:text-sm text-muted max-w-md mb-8">
            Faça uma simulação sem custos com nosso Consultor IA ou converse com nossa equipe para um diagnóstico customizado.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onOpenAiStudio('chat')}
              className="px-6 py-3.5 bg-[#c4a97d] hover:bg-gold-hover text-canvas font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all cursor-pointer shadow-lg shadow-[var(--token-glow)]"
            >
              <Sparkles className="w-4 h-4" />
              <span>Assistente de IA</span>
            </button>
            <button
              onClick={onNavigateHome}
              className="px-6 py-3.5 bg-surface-2 hover:bg-surface-3 text-ink border border-border font-mono text-xs uppercase tracking-wider flex items-center gap-2 transition-all cursor-pointer"
            >
              <span>Ver Soluções na Página Inicial</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
