import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TermosDeUsoPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="relative overflow-hidden pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-zinc-900 mb-8">Termos de Uso</h1>

          <div className="space-y-8 text-zinc-700 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-zinc-900 mb-4">1. Aceitação dos Termos</h2>
              <p>
                Ao acessar e utilizar o site da OPTIMAFY, você aceita e concorda em ficar vinculado aos termos e condições deste acordo. Se você não concordar com estes termos, por favor, não utilize nosso site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-zinc-900 mb-4">2. Uso do Site</h2>
              <p>
                O conteúdo deste site é fornecido apenas para fins informativos e de apresentação dos serviços da OPTIMAFY. Você pode utilizar o site para visualizar nossos serviços e entrar em contato conosco.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-zinc-900 mb-4">3. Propriedade Intelectual</h2>
              <p>
                Todo o conteúdo do site, incluindo textos, imagens, logotipos, ícones e código, é propriedade exclusiva da OPTIMAFY ou de seus fornecedores e está protegido por leis de direitos autorais e propriedade intelectual.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-zinc-900 mb-4">4. Limitação de Responsabilidade</h2>
              <p>
                A OPTIMAFY não se responsabiliza por quaisquer danos diretos ou indiretos resultantes do uso ou da impossibilidade de uso deste site. O site é fornecido "como está", sem garantias de qualquer tipo.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-zinc-900 mb-4">5. Modificações</h2>
              <p>
                Reservamo-nos o direito de alterar estes termos a qualquer momento, sem aviso prévio. Recomendamos que você verifique esta página periodicamente para se manter atualizado.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-zinc-900 mb-4">6. Contato</h2>
              <p>
                Se você tiver dúvidas sobre estes Termos de Uso, entre em contato conosco através do e-mail: optimafy@gmail.com
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}