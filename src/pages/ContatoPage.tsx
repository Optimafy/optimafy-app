import { useState } from 'react';
import { motion } from 'motion/react';
import {
  Mail,
  MapPin,
  MessageCircle,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  Send,
  Phone,
  AlertCircle,
  Clock,
} from 'lucide-react';

interface ContatoPageProps {
  onOpenAiStudio: (tab?: 'chat' | 'analyze') => void;
  onNavigateHome: () => void;
}

export function ContatoPage({ onOpenAiStudio, onNavigateHome }: ContatoPageProps) {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    message: '',
    lgpd: false,
    marketing: false,
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting) return;

    if (!formData.lgpd) {
      setErrorMessage('Por favor, confirme a concordância com os termos da LGPD.');
      return;
    }

    setSubmitting(true);
    setErrorMessage(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || 'Erro ao enviar a mensagem. Tente novamente.');
      }

      setSubmitted(true);
      setFormData({
        name: '',
        contact: '',
        message: '',
        lgpd: false,
        marketing: false,
      });

      window.scrollTo({ top: 200, behavior: 'smooth' });
    } catch (err: any) {
      console.error(err);
      setErrorMessage(err.message || 'Erro ao enviar a mensagem. Tente novamente.');
    } finally {
      setSubmitting(false);
    }
  };

  const whatsappUrl =
    'https://wa.me/556282470405?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20as%20solu%C3%A7%C3%B5es%20da%20OPTIMAFY.';

  return (
    <div className="min-h-screen bg-canvas text-ink pt-28 pb-20 px-[5vw] sm:px-[6vw]">
      {/* Breadcrumb Navigation */}
      <div className="max-w-6xl mx-auto mb-8 flex items-center justify-between">
        <nav aria-label="Navegação" className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-muted-soft">
          <button
            onClick={onNavigateHome}
            className="hover:text-gold transition-colors cursor-pointer"
          >
            Início
          </button>
          <span>/</span>
          <span className="text-gold font-semibold">Contato Direto</span>
        </nav>

        <button
          onClick={onNavigateHome}
          className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-gold hover:text-ink transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Voltar ao Início</span>
        </button>
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 text-[11px] font-mono uppercase tracking-[0.2em] bg-gold/10 text-gold border border-gold/30">
            <Mail className="w-3.5 h-3.5" />
            <span>FALE COM A OPTIMAFY</span>
          </div>
          <h1 className="font-syne font-bold text-3xl sm:text-5xl md:text-6xl text-ink tracking-tight mb-4">
            Entre em Contato <br />
            <span className="text-gold">Sem Compromisso</span>
          </h1>
          <p className="text-sm sm:text-base text-muted leading-relaxed max-w-2xl mx-auto">
            Resposta rápida em até 2 horas úteis, atendimento humanizado e diagnóstico transparente para elevar o patamar do seu negócio.
          </p>
        </div>

        {/* Content Grid - Mobile First */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Contact Information */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-surface border border-border p-6 sm:p-8 space-y-6">
              <h2 className="font-syne font-bold text-xl text-ink">
                Canais de Atendimento
              </h2>
              <p className="text-xs sm:text-sm text-muted leading-relaxed">
                Estamos prontos para ouvir sobre sua operação e indicar as automações mais rentáveis para a sua empresa.
              </p>

              <div className="space-y-4 pt-2">
                {/* WhatsApp */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-3.5 p-4 bg-surface-2 border border-border hover:border-gold transition-all cursor-pointer"
                >
                  <div className="p-2.5 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 shrink-0">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-muted-soft block">
                      WhatsApp Oficial
                    </span>
                    <span className="text-sm font-mono font-bold text-ink group-hover:text-gold transition-colors block">
                      +55 (62) 8247-0405
                    </span>
                    <span className="text-[11px] text-muted">
                      Clique para iniciar conversa
                    </span>
                  </div>
                </a>

                {/* Email Oficial */}
                <div className="flex items-start gap-3.5 p-4 bg-surface-2 border border-border">
                  <div className="p-2.5 bg-gold/10 border border-gold/30 text-gold shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-muted-soft block">
                      E-mail Direto
                    </span>
                    <a
                      href="mailto:contato@optimafy.net"
                      className="text-sm font-mono font-bold text-ink hover:text-gold transition-colors truncate block"
                    >
                      contato@optimafy.net
                    </a>
                    <span className="text-[11px] text-muted">
                      Resposta garantida em 2 horas
                    </span>
                  </div>
                </div>

                {/* Localização */}
                <div className="flex items-start gap-3.5 p-4 bg-surface-2 border border-border">
                  <div className="p-2.5 bg-surface-3 border border-border text-muted shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-muted-soft block">
                      Sede
                    </span>
                    <span className="text-sm font-mono text-ink block font-semibold">
                      Goiânia, GO — Brasil
                    </span>
                    <span className="text-[11px] text-muted">
                      Atendemos empresas em todo o país
                    </span>
                  </div>
                </div>
              </div>

              {/* Quick AI Trigger */}
              <div className="pt-4 border-t border-surface-3">
                <button
                  type="button"
                  onClick={() => onOpenAiStudio('chat')}
                  className="w-full py-3 px-4 bg-surface-2 hover:bg-surface-3 border border-gold/40 text-gold font-mono text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Falar com o Assistente de IA</span>
                </button>
              </div>
            </div>

            {/* Imagem Institucional */}
            <div className="border border-border overflow-hidden relative shadow-xl">
              <img
                src="/images/contato.webp"
                alt="Equipe de atendimento OPTIMAFY"
                className="w-full h-48 sm:h-56 object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-canvas via-transparent to-transparent opacity-70" />
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-surface border border-border p-6 sm:p-10 shadow-2xl relative">
              {submitted ? (
                <div className="text-center py-16 space-y-4">
                  <div className="w-16 h-16 bg-gold/10 border border-gold flex items-center justify-center mx-auto text-gold">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>
                  <h3 className="font-syne font-bold text-2xl text-ink">
                    Mensagem Recebida com Sucesso!
                  </h3>
                  <p className="text-xs sm:text-sm text-muted max-w-md mx-auto leading-relaxed">
                    Nossa equipe recebeu sua solicitação em <strong className="text-ink">contato@optimafy.net</strong> e responderá no seu e-mail ou WhatsApp em breve.
                  </p>
                  <div className="pt-4 flex flex-wrap justify-center gap-3">
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-5 py-2.5 bg-surface-2 border border-border hover:border-gold text-xs font-mono uppercase tracking-wider text-muted cursor-pointer"
                    >
                      Enviar Outra Mensagem
                    </button>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 bg-gold hover:bg-gold-hover text-canvas text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-1.5 cursor-pointer"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Falar no WhatsApp Agora</span>
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h2 className="font-syne font-bold text-xl sm:text-2xl text-ink mb-1">
                      Envie uma Mensagem
                    </h2>
                    <p className="text-xs font-mono text-muted-soft">
                      Preencha os campos abaixo e receba nossa análise inicial
                    </p>
                  </div>

                  {errorMessage && (
                    <div className="p-3 bg-red-950/40 border border-red-800 text-red-300 text-xs font-mono flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-muted mb-2 font-semibold">
                        Seu Nome Completo *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Ex: Carlos Eduardo"
                        className="w-full px-4 py-3 bg-surface-2 border border-border text-sm text-ink placeholder-muted-soft focus:outline-none focus:border-gold transition-colors font-sans"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-muted mb-2 font-semibold">
                        E-mail ou WhatsApp de Contato *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.contact}
                        onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                        placeholder="Ex: carlos@empresa.com.br ou (11) 98765-4321"
                        className="w-full px-4 py-3 bg-surface-2 border border-border text-sm text-ink placeholder-muted-soft focus:outline-none focus:border-gold transition-colors font-sans"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-muted mb-2 font-semibold">
                        Como Podemos Ajudar Seu Negócio? *
                      </label>
                      <textarea
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Conte-nos brevemente sobre sua empresa, os gargalos de tempo ou o tipo de solução que você gostaria de implementar..."
                        className="w-full px-4 py-3 bg-surface-2 border border-border text-sm text-ink placeholder-muted-soft focus:outline-none focus:border-gold transition-colors leading-relaxed font-sans"
                      />
                    </div>
                  </div>

                  <div className="space-y-3 pt-2">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        required
                        checked={formData.lgpd}
                        onChange={(e) => setFormData({ ...formData, lgpd: e.target.checked })}
                        className="mt-1 w-4 h-4 rounded border-border bg-surface-2 text-gold focus:ring-0 focus:ring-offset-0 cursor-pointer"
                      />
                      <span className="text-[11px] text-muted leading-relaxed">
                        Concordo com a{' '}
                        <a
                          href="/politica-de-privacidade"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gold underline hover:text-ink"
                        >
                          Política de Privacidade
                        </a>{' '}
                        e autorizo a OPTIMAFY a processar meus dados exclusivamente para fins de retorno e contato comercial (LGPD).
                      </span>
                    </label>

                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.marketing}
                        onChange={(e) => setFormData({ ...formData, marketing: e.target.checked })}
                        className="mt-1 w-4 h-4 rounded border-border bg-surface-2 text-gold focus:ring-0 focus:ring-offset-0 cursor-pointer"
                      />
                      <span className="text-[11px] text-muted-soft leading-relaxed">
                        Gostaria de receber insights e novidades sobre automação para PMEs por e-mail (opcional).
                      </span>
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-4 bg-gold hover:bg-gold-hover disabled:opacity-50 text-canvas font-mono font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer shadow-lg shadow-[var(--token-glow)]"
                  >
                    {submitting ? (
                      <span>Enviando Mensagem...</span>
                    ) : (
                      <>
                        <span>Enviar Mensagem para contato@optimafy.net</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
