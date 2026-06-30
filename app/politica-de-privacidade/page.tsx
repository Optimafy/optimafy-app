import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PoliticaDePrivacidadePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="relative overflow-hidden pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-zinc-900 mb-8">Política de Privacidade</h1>

          <div className="space-y-8 text-zinc-700 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-zinc-900 mb-4">1. Introdução</h2>
              <p>
                A OPTIMAFY se preocupa com a privacidade e a segurança dos dados pessoais dos seus usuários. Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e protegemos as informações que você nos fornece.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-zinc-900 mb-4">2. Informações Coletadas</h2>
              <p className="mb-4">
                Coletamos informações que você nos fornece diretamente, como:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Nome</li>
                <li>Contato (e-mail ou telefone)</li>
                <li>Mensagens enviadas através do nosso formulário</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-zinc-900 mb-4">3. Uso das Informações</h2>
              <p>
                Utilizamos as informações coletadas exclusivamente para entrar em contato com você, responder suas perguntas e fornecer informações sobre nossos serviços. Não compartilhamos suas informações pessoais com terceiros, exceto quando exigido por lei.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-zinc-900 mb-4">4. Armazenamento e Segurança</h2>
              <p>
                Adotamos medidas de segurança técnicas e organizacionais para proteger suas informações pessoais contra acesso não autorizado, alteração, divulgação ou destruição.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-zinc-900 mb-4">5. Seus Direitos (LGPD)</h2>
              <p className="mb-4">
                De acordo com a Lei Geral de Proteção de Dados (LGPD), você tem direito a:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Acessar suas informações pessoais</li>
                <li>Retificar ou atualizar suas informações</li>
                <li>Solicitar a exclusão de suas informações</li>
                <li>Revogar o consentimento para o tratamento de seus dados</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-zinc-900 mb-4">6. Cookies</h2>
              <p>
                Nosso site pode utilizar cookies para melhorar sua experiência de navegação. Para mais informações, consulte nossa Política de Cookies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-zinc-900 mb-4">7. Contato</h2>
              <p>
                Se você tiver dúvidas sobre esta Política de Privacidade ou quiser exercer seus direitos, entre em contato conosco através do e-mail: optimafy@gmail.com
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}