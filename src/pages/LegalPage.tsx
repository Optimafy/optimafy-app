import { useState, useEffect } from 'react';
import { ShieldCheck, Cookie, FileText, HelpCircle, ArrowLeft, Mail } from 'lucide-react';

export type LegalDocType = 'privacidade' | 'cookies' | 'termos' | 'sobre-seus-dados';

export interface LegalPageProps {
  initialDoc?: LegalDocType;
  initialTab?: LegalDocType;
  onNavigateHome: () => void;
}

export function LegalPage({ initialDoc, initialTab, onNavigateHome }: LegalPageProps) {
  const currentInitial = initialDoc || initialTab || 'privacidade';
  const [activeDoc, setActiveDoc] = useState<LegalDocType>(currentInitial);

  useEffect(() => {
    setActiveDoc(currentInitial);
  }, [currentInitial]);

  const tabs = [
    { id: 'privacidade' as const, label: '01. Privacidade & LGPD', icon: ShieldCheck },
    { id: 'cookies' as const, label: '02. Cookies', icon: Cookie },
    { id: 'termos' as const, label: '03. Termos de Uso', icon: FileText },
    { id: 'sobre-seus-dados' as const, label: '04. Por que Contatamos Você', icon: HelpCircle },
  ];

  const handleTabChange = (doc: typeof activeDoc) => {
    setActiveDoc(doc);
    let path = '/privacidade';
    if (doc === 'cookies') path = '/cookies';
    if (doc === 'termos') path = '/termos-de-uso';
    if (doc === 'sobre-seus-dados') path = '/sobre-seus-dados';
    window.history.pushState({}, '', path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-canvas text-ink pt-28 pb-20 px-[5vw] sm:px-[6vw]">
      {/* Breadcrumbs */}
      <div className="max-w-4xl mx-auto mb-8 flex items-center justify-between">
        <nav aria-label="Navegação" className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-muted-soft">
          <button
            onClick={onNavigateHome}
            className="hover:text-gold transition-colors cursor-pointer"
          >
            Início
          </button>
          <span>/</span>
          <span className="text-gold font-semibold">Institucional & Legal</span>
        </nav>

        <button
          onClick={onNavigateHome}
          className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-gold hover:text-ink transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Voltar ao Início</span>
        </button>
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Navigation Tabs - Mobile First */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 border-b border-border scrollbar-none">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeDoc === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 text-xs font-mono uppercase tracking-wider whitespace-nowrap border transition-all cursor-pointer ${
                  isActive
                    ? 'bg-gold text-canvas border-gold font-bold shadow-md shadow-[var(--token-glow)]'
                    : 'bg-surface text-muted border-border hover:text-ink hover:border-gold/40'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Content Section */}
        <article className="bg-surface border border-border p-6 sm:p-10 text-ink leading-relaxed font-sans text-sm sm:text-base space-y-8">
          {activeDoc === 'privacidade' && (
            <div>
              <h1 className="font-syne font-bold text-2xl sm:text-4xl text-ink mb-6">
                Política de Privacidade
              </h1>
              <p className="mb-6 text-muted">
                Última atualização: Outubro de 2026. A OPTIMAFY SOLUÇÕES DIGITAIS valoriza e protege a privacidade de dados pessoais dos seus clientes e visitantes.
              </p>

              <section className="space-y-3 mb-6">
                <h2 className="font-syne font-semibold text-lg text-gold">1. Introdução</h2>
                <p>
                  Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e protegemos as informações fornecidas por você através de nossos canais digitais, site e ferramentas de simulação.
                </p>
              </section>

              <section className="space-y-3 mb-6">
                <h2 className="font-syne font-semibold text-lg text-gold">2. Informações Coletadas</h2>
                <p>Coletamos apenas informações estritamente necessárias fornecidas diretamente por você, tais como:</p>
                <ul className="list-disc list-inside space-y-1.5 pl-2 text-muted">
                  <li>Nome do responsável e razão social ou nome fantasia da empresa;</li>
                  <li>Contato comercial (e-mail e WhatsApp/telefone corporativo);</li>
                  <li>Informações operacionais voluntariamente enviadas para diagnóstico (prints de planilhas ou sistemas).</li>
                </ul>
              </section>

              <section className="space-y-3 mb-6">
                <h2 className="font-syne font-semibold text-lg text-gold">3. Finalidade do Tratamento</h2>
                <p>
                  Utilizamos as informações coletadas exclusivamente para:
                </p>
                <ul className="list-disc list-inside space-y-1.5 pl-2 text-muted">
                  <li>Realizar a consultoria e diagnóstico solicitado pelo empresário;</li>
                  <li>Apresentar propostas comerciais customizadas;</li>
                  <li>Prestar suporte técnico aos serviços contratados.</li>
                </ul>
                <p>NUNCA comercializamos, alugamos ou compartilhamos dados com terceiros para fins de publicidade não solicitada.</p>
              </section>

              <section className="space-y-3 mb-6">
                <h2 className="font-syne font-semibold text-lg text-gold">4. Segurança e Armazenamento</h2>
                <p>
                  Adotamos padrões rígidos de criptografia (HTTPS/TLS) e servidores seguros com redundância na nuvem. Acesso a dados é restrito apenas à equipe técnica autorizada.
                </p>
              </section>

              <section className="space-y-3 mb-6">
                <h2 className="font-syne font-semibold text-lg text-gold">5. Seus Direitos (LGPD)</h2>
                <p>
                  Em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018), você pode a qualquer momento solicitar confirmação, correção, exclusão ou revogação de dados enviando um e-mail para <strong className="text-ink">contato@optimafy.net</strong>.
                </p>
              </section>

              <section>
                <p className="text-muted text-xs font-mono">
                  OPTIMAFY LTDA — CNPJ 66.948.875/0001-28
                  <br />
                  Av. Portugal, 1148, Quadra L29, Lote E1, Sala C2501, Setor Marista
                  <br />
                  Goiânia-GO, CEP 74150-030, Brasil
                </p>
              </section>
            </div>
          )}

          {activeDoc === 'cookies' && (
            <div>
              <h1 className="font-syne font-bold text-2xl sm:text-4xl text-ink mb-6">
                Política de Cookies
              </h1>
              <p className="mb-6 text-muted">
                Entenda como utilizamos cookies e tecnologias semelhantes para garantir o funcionamento seguro do nosso site.
              </p>

              <section className="space-y-3 mb-6">
                <h2 className="font-syne font-semibold text-lg text-gold">1. O que são Cookies?</h2>
                <p>
                  Cookies são pequenos arquivos gravados no seu navegador que memorizam preferências básicas de navegação, como tema escuro, estado de player de áudio ou histórico de conversas da sessão atual.
                </p>
              </section>

              <section className="space-y-3 mb-6">
                <h2 className="font-syne font-semibold text-lg text-gold">2. Cookies Utilizados no Site</h2>
                <ul className="list-disc list-inside space-y-2 pl-2 text-muted">
                  <li><strong className="text-ink">Cookies Essenciais:</strong> Necessários para a renderização, navegação de rotas e segurança do site.</li>
                  <li><strong className="text-ink">Cookies de Sessão:</strong> Mantêm o contexto das mensagens enviadas ao Consultor IA durante sua visita.</li>
                </ul>
              </section>

              <section className="space-y-3 mb-6">
                <h2 className="font-syne font-semibold text-lg text-gold">3. Como Desativar</h2>
                <p>
                  Você pode gerenciar ou desativar os cookies diretamente nas opções de privacidade do seu navegador (Chrome, Firefox, Safari ou Edge). O site permanecerá navegável, embora algumas funções de áudio ou IA possam reiniciar ao recarregar a página.
                </p>
              </section>

              <section>
                <p className="text-muted text-xs font-mono">
                  OPTIMAFY LTDA — CNPJ 66.948.875/0001-28
                  <br />
                  Av. Portugal, 1148, Quadra L29, Lote E1, Sala C2501, Setor Marista
                  <br />
                  Goiânia-GO, CEP 74150-030, Brasil
                </p>
              </section>
            </div>
          )}

          {activeDoc === 'termos' && (
            <div>
              <h1 className="font-syne font-bold text-2xl sm:text-4xl text-ink mb-6">
                Termos de Uso
              </h1>
              <p className="mb-6 text-muted">
                Condições gerais de navegação e utilização do portal OPTIMAFY.
              </p>

              <section className="space-y-3 mb-6">
                <h2 className="font-syne font-semibold text-lg text-gold">1. Aceitação</h2>
                <p>
                  Ao navegar pelo site da OPTIMAFY ou utilizar nossos simuladores interativos, você concorda em cumprir estes termos e as diretrizes de boa convivência digital.
                </p>
              </section>

              <section className="space-y-3 mb-6">
                <h2 className="font-syne font-semibold text-lg text-gold">2. Propriedade Intelectual</h2>
                <p>
                  Todos os designs, marcas, logotipos, ilustrações, códigos-fonte e textos presentes neste portal são propriedade exclusiva da OPTIMAFY ou licenciados para seu uso. É proibida a reprodução sem autorização prévia por escrito.
                </p>
              </section>

              <section className="space-y-3 mb-6">
                <h2 className="font-syne font-semibold text-lg text-gold">3. Consultoria e Simulações de IA</h2>
                <p>
                  As respostas e estimativas geradas pelo Consultor IA da OPTIMAFY têm caráter informativo e analítico preliminar. Valores oficiais de projetos e cronogramas contratuais são formalizados em proposta técnica definitiva com a nossa equipe.
                </p>
              </section>

              <section className="space-y-3 mb-6">
                <h2 className="font-syne font-semibold text-lg text-gold">4. Foro e Legislação</h2>
                <p>
                  Estes termos são regidos pelas leis da República Federativa do Brasil, com foro competente na Comarca de São Paulo/SP para dirimir eventuais dúvidas.
                </p>
              </section>

              <section>
                <p className="text-muted text-xs font-mono">
                  OPTIMAFY LTDA — CNPJ 66.948.875/0001-28
                  <br />
                  Av. Portugal, 1148, Quadra L29, Lote E1, Sala C2501, Setor Marista
                  <br />
                  Goiânia-GO, CEP 74150-030, Brasil
                </p>
              </section>
            </div>
          )}

          {activeDoc === 'sobre-seus-dados' && (
            <div>
              <h1 className="font-syne font-bold text-2xl sm:text-4xl text-ink mb-6">
                Por Que Você Recebeu um Contato Nosso
              </h1>
              <p className="mb-6 text-muted">
                Transparência total: explicação completa sobre nossa prospecção B2B, base legal e compromisso com a LGPD.
              </p>

              <div className="p-4 sm:p-5 mb-8 border border-gold/40 bg-surface-2 text-xs sm:text-sm text-ink">
                <strong className="text-gold block font-mono uppercase mb-1">
                  Resumo Rápido e Transparente:
                </strong>
                Localizamos os dados de contato do seu negócio publicamente cadastrados no Google Maps ou diretórios empresariais abertos. Utilizamos essa informação exclusivamente para um contato comercial pontual e respeitoso. Você pode solicitar a remoção definitiva a qualquer momento respondendo "remover".
              </div>

              <section className="space-y-3 mb-6">
                <h2 className="font-syne font-semibold text-lg text-gold">1. Origem dos Dados</h2>
                <p>
                  Identificamos empresas com potencial de crescimento usando a API oficial do Google Places e registros públicos de CNPJ. Coletamos apenas dados corporativos que a própria empresa já disponibiliza publicamente aos seus clientes.
                </p>
              </section>

              <section className="space-y-3 mb-6">
                <h2 className="font-syne font-semibold text-lg text-gold">2. Base Legal na LGPD</h2>
                <p>
                  Nossa comunicação B2B está fundamentada no princípio do <strong className="text-ink">Legítimo Interesse</strong> (Artigo 7º, inciso IX e Artigo 10 da Lei nº 13.709/2018). Não tratamos dados pessoais sensíveis e oferecemos soluções reais para auxiliar no desenvolvimento econômico de negócios brasileiros.
                </p>
              </section>

              <section className="space-y-3 mb-6">
                <h2 className="font-syne font-semibold text-lg text-gold">3. Como Pedir Remoção Definitiva (Opt-Out)</h2>
                <p>
                  Respeitamos sua decisão integralmente. Se não desejar receber mais nenhuma mensagem sobre modernização tecnológica:
                </p>
                <ul className="list-disc list-inside space-y-1.5 pl-2 text-muted">
                  <li>Basta responder ao e-mail ou mensagem com a palavra <strong className="text-ink">"remover"</strong>;</li>
                  <li>Ou envie um e-mail para <strong className="text-ink">contato@optimafy.net</strong>;</li>
                  <li>Seu registro será bloqueado de forma definitiva e automática em nossos servidores.</li>
                </ul>
              </section>

              <section>
                <p className="text-muted text-xs font-mono">
                  OPTIMAFY LTDA — CNPJ 66.948.875/0001-28
                  <br />
                  Av. Portugal, 1148, Quadra L29, Lote E1, Sala C2501, Setor Marista
                  <br />
                  Goiânia-GO, CEP 74150-030, Brasil
                </p>
              </section>
            </div>
          )}
        </article>

        {/* Contact Strip */}
        <div className="mt-8 p-6 bg-surface border border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
          <div className="flex items-center gap-2 text-muted">
            <Mail className="w-4 h-4 text-gold" />
            <span>Dúvidas jurídicas ou solicitações LGPD:</span>
            <span className="text-ink font-semibold">contato@optimafy.net</span>
          </div>
          <button
            onClick={onNavigateHome}
            className="text-gold hover:text-ink underline cursor-pointer"
          >
            Retornar à página principal
          </button>
        </div>
      </div>
    </div>
  );
}
