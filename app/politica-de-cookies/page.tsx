import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PoliticaDeCookiesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="relative overflow-hidden pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-zinc-900 mb-8">Política de Cookies</h1>

          <div className="space-y-8 text-zinc-700 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-zinc-900 mb-4">1. O que são Cookies?</h2>
              <p>
                Cookies são pequenos arquivos de texto que são armazenados no seu navegador quando você visita um site. Eles ajudam a lembrar suas preferências e melhorar sua experiência de navegação.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-zinc-900 mb-4">2. Como Usamos os Cookies?</h2>
              <p>
                Nosso site pode utilizar cookies essenciais para o funcionamento básico do site e cookies de desempenho para entender como os visitantes interagem com o nosso site. Não utilizamos cookies de rastreamento para publicidade direcionada.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-zinc-900 mb-4">3. Tipos de Cookies Utilizados</h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Cookies Essenciais:</strong> Necessários para o funcionamento do site.</li>
                <li><strong>Cookies de Desempenho:</strong> Coletam informações sobre como você usa o site.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-zinc-900 mb-4">4. Gerenciamento de Cookies</h2>
              <p>
                Você pode gerenciar ou desativar os cookies diretamente nas configurações do seu navegador. Porém, desativar cookies pode afetar a funcionalidade do site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-zinc-900 mb-4">5. Contato</h2>
              <p>
                Se você tiver dúvidas sobre esta Política de Cookies, entre em contato conosco através do e-mail: optimafy@gmail.com
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}