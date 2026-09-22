import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function SobreSeusDadosPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-abyss">
      <Navbar />
      <main className="relative overflow-hidden pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-4xl font-bold text-zinc-900 dark:text-mist mb-8">
            Por que você recebeu um e-mail nosso
          </h1>

          <p className="text-zinc-700 dark:text-mist-soft leading-relaxed mb-6">
            Se você recebeu um contato da OPTIMAFY oferecendo um produto pronto para o seu negócio, esta página explica de onde veio seu contato e qual é a base legal para isso.
          </p>

          <div className="surface-card rounded-2xl px-5 py-4 mb-10 text-sm text-zinc-700 dark:text-mist-soft leading-relaxed border border-violet-200 dark:border-violet-500/30 bg-violet-50/60 dark:bg-transparent">
            <strong className="text-zinc-900 dark:text-mist">Resumo rápido: </strong> encontramos o contato do seu negócio publicamente no Google Maps. Usamos isso para uma única mensagem comercial. Você pode pedir para nunca mais receber contato respondendo o contato com &quot;remover&quot; — o pedido é processado automaticamente e é definitivo.
          </div>

          <div className="space-y-8 text-zinc-700 dark:text-mist-soft leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-mist mb-4">De onde veio o seu contato</h2>
              <p>
                Buscamos negócios locais sem site cadastrado no Google Maps, usando a API oficial do Google Places. As informações usadas (nome do negócio, telefone e/ou e-mail comercial, categoria) são as mesmas que já estão publicamente visíveis para qualquer pessoa que pesquise seu negócio no Google Maps.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-mist mb-4">Base legal (LGPD)</h2>
              <p className="mb-4">
                O tratamento desses dados se baseia no <strong>legítimo interesse</strong> (Lei 13.709/2018, Art. 7º, IX e Art. 10), para fins de contato comercial B2B pontual — não utilizamos dados sensíveis, não tratamos dados de pessoa física em contexto pessoal, e a finalidade (oferecer um produto/software ao seu negócio) é específica e informada já no primeiro contato.
              </p>
              <p>
                Fizemos e documentamos internamente uma Avaliação de Interesse Legítimo (LIA) antes de operar este processo, avaliando finalidade, necessidade e o equilíbrio entre nosso interesse comercial e o impacto sobre o seu negócio.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-mist mb-4">Por quanto tempo guardamos o dado</h2>
              <p>
                Assim que a mensagem é enviada, apagamos as informações extraídas do Google Maps do nosso banco de dados — nome, telefone, e-mail, endereço e demais campos. Mantemos apenas um identificador técnico interno (para não entrarmos em contato duas vezes com o mesmo negócio), sem valor fora do nosso sistema.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-mist mb-4">Seus direitos</h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  Pedir a remoção definitiva: responda qualquer contato nosso com a palavra <strong>&quot;remover&quot;</strong>.
                </li>
                <li>
                  Pedir confirmação, correção ou exclusão de dados: escreva para{" "}
                  <a href="mailto:contato@optimafy.net" className="text-violet-600 dark:text-violet-400 hover:underline">
                    contato@optimafy.net
                  </a>
                  .
                </li>
                <li>Nenhuma decisão automatizada é tomada sobre o seu negócio a partir desses dados além do envio da própria mensagem de contato.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-mist mb-4">Quem somos</h2>
              <p>
                OPTIMAFY LTDA — CNPJ 66.948.875/0001-28
                <br />
                Av. Portugal, 1148, Quadra L29, Lote E1, Sala C2501, Setor Marista
                <br />
                Goiânia-GO, CEP 74150-030, Brasil
              </p>
            </section>
          </div>

          <div className="mt-12 pt-6 border-t border-zinc-200 dark:border-white/10 text-sm text-zinc-500 dark:text-mist-soft/70">
            Dúvidas sobre este processo:{" "}
            <a href="mailto:contato@optimafy.net" className="text-violet-600 dark:text-violet-400 hover:underline">
              contato@optimafy.net
            </a>
            . Última atualização: setembro de 2026.
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
