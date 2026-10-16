import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import {
  ArrowUpRight,
  Mail,
  Sparkles,
  Check,
  Clock,
  Shield,
  FileText,
  Cookie,
  Database,
  BookOpen,
  MapPin,
  Phone,
} from 'lucide-react';
import { FaWhatsapp, FaLinkedin, FaInstagram } from "react-icons/fa";
import { span } from 'motion/react-client';

interface FooterProps {
  onOpenAiStudio: (tab?: 'chat' | 'analyze') => void;
  onNavigate?: (path: string, hash?: string) => void;
}

export function Footer({ onOpenAiStudio, onNavigate }: FooterProps) {
  const whatsappUrl = "https://wa.me/556282470405?text=Olá, gostaria de saber mais sobre as automações e integrações que vocês oferecem para otimizar meu negócio!";
  const [copied, setCopied] = useState(false);
  const [currentTime, setCurrentTime] = useState('');
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString('pt-BR', {
          timeZone: 'America/Sao_Paulo',
          hour: '2-digit',
          minute: '2-digit',
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 10000);
    return () => clearInterval(interval);
  }, []);

  const copyEmail = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText('contato@optimafy.net');
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const [newsletterLoading, setNewsletterLoading] = useState(false);

  const handleNewsletter = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail || newsletterLoading) return;

    setNewsletterLoading(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'newsletter', email: newsletterEmail }),
      });
      const data = await res.json();

      if (data.success) {
        setSubscribed(true);
        setTimeout(() => {
          setNewsletterEmail('');
          setSubscribed(false);
        }, 4000);
      } else {
        console.error('Newsletter error:', data.error);
      }
    } catch (err) {
      console.error('Newsletter fetch error:', err);
    } finally {
      setNewsletterLoading(false);
    }
  };

  const handleLink = (path: string, hash?: string) => {
    if (onNavigate) {
      onNavigate(path, hash);
    } else {
      if (path === '/' && hash) {
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.location.href = path;
      }
    }
  };

  return (
    <footer
      id="contact"
      className="relative bg-canvas text-ink border-t border-surface-3 px-[5vw] sm:px-[6vw] py-14 sm:py-20 z-20 overflow-hidden"
    >
      {/* Background radial glow */}
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-gold/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16">
        {/* Top Status Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-surface-2 pb-6">
          <div className="flex items-center gap-3">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-gold"></span>
            </span>
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-gold font-bold">
              Disponibilidade: Aceitando Novos Projetos de PMEs
            </span>
          </div>

          <div className="flex items-center gap-4 sm:gap-6 font-mono text-[11px] text-muted">
            <div className="flex items-center gap-1.5">
              <Clock className="w-3 h-3 text-gold" />
              <span>BRASIL {currentTime}</span>
            </div>
            <span>•</span>
            <span className="text-muted">RESPOSTA EM ATÉ 2 HORAS</span>
          </div>
        </div>

        {/* Main Brand & Sitemap Grid - Mobile First */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 sm:gap-12">
          {/* Column 1: Brand & Contact CTA (Spans 2 cols on lg) */}
          <div className="lg:col-span-2 space-y-2">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 flex items-center justify-center">
                <img
                  src="/LOGO.svg"
                  alt="OPTIMAFY"
                  className="w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(0,170,249,0.35)]"
                />
              </div>
              <span className="font-syne font-bold text-xl tracking-[0.22em] text-ink">
                OPTIMAFY
              </span>
            </div>

            <p className="text-xs sm:text-sm text-muted leading-relaxed max-w-sm">
              Transformamos a tecnologia no melhor funcionário de pequenas e médias empresas. Automação inteligente, portais de alta conversão e sistemas sob medida sem complexidade técnica.
            </p>

            <p className="text-gold text-sm font-semibold">
              OPTIMAFY LTDA<br />
              CNPJ: 66.948.875/0001-28
            </p>

            {/* Direct Location */}
            <div className="pt-1 w-fit flex items-center gap-2.5 px-4 py-2.5 border border-border hover:border-gold bg-surface transition-all text-xs font-mono text-muted hover:text-ink cursor-pointer">
                <MapPin className="w-3.5 h-3.5 text-gold group-hover:scale-110 transition-transform" />
                <span>Goiânia, GO — Brasil</span>
            </div>
            
            {/* Direct Phone Action */}
            <div className="pt-1 w-fit flex items-center gap-2.5 px-4 py-2.5 border border-border hover:border-gold bg-surface transition-all text-xs font-mono text-muted hover:text-ink cursor-pointer">
                <Phone className="w-3.5 h-3.5 text-gold group-hover:scale-110 transition-transform" />
                <span>+55 (62) 8247-0405</span>
            </div>

            {/* Direct Email Action */}
            <div className="pt-1">
              <button
                onClick={copyEmail}
                className="group inline-flex items-center gap-2.5 px-4 py-2.5 border border-border hover:border-gold bg-surface transition-all text-xs font-mono text-muted hover:text-ink cursor-pointer"
              >
                <Mail className="w-3.5 h-3.5 text-gold group-hover:scale-110 transition-transform" />
                <span>{copied ? 'E-mail Copiado!' : 'contato@optimafy.net'}</span>
                {copied ? (
                  <Check className="w-3.5 h-3.5 text-gold" />
                ) : (
                  <ArrowUpRight className="w-3.5 h-3.5 text-muted group-hover:text-gold" />
                )}
              </button>
            </div>

          {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/company/optimafy/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-xl border border-zinc-200 dark:border-white/10 bg-white dark:bg-white/[0.04] flex items-center justify-center text-zinc-500 dark:text-mist-soft hover:text-zinc-900 dark:hover:text-mist hover:border-zinc-400 dark:hover:border-white/30 hover:bg-zinc-100 dark:hover:bg-white/10 transition-all duration-300"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-10 h-10 rounded-xl border border-zinc-200 dark:border-white/10 bg-white dark:bg-white/[0.04] flex items-center justify-center text-zinc-500 dark:text-mist-soft hover:text-emerald-600 dark:hover:text-emerald-400 hover:border-emerald-400 dark:hover:border-emerald-400/50 hover:bg-emerald-50 dark:hover:bg-emerald-500/10 transition-all duration-300"
              >
                <FaWhatsapp className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/optimafy_/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-xl border border-zinc-200 dark:border-white/10 bg-white dark:bg-white/[0.04] flex items-center justify-center text-zinc-500 dark:text-mist-soft hover:text-pink-600 dark:hover:text-pink-400 hover:border-pink-400 dark:hover:border-pink-400/50 hover:bg-pink-50 dark:hover:bg-pink-500/10 transition-all duration-300"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Navegação & Soluções */}
          <div className="space-y-4">
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-gold font-bold">
              Soluções
            </h3>
            <ul className="space-y-2.5 text-xs font-mono text-muted">
              <li>
                <button
                  onClick={() => handleLink('/solucoes', 'solutions')}
                  className="hover:text-ink transition-colors cursor-pointer text-left"
                >
                  Automação WhatsApp & Vendas
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('/solucoes', 'solutions')}
                  className="hover:text-ink transition-colors cursor-pointer text-left"
                >
                  Sistemas de Gestão & ERP
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('/solucoes', 'solutions')}
                  className="hover:text-ink transition-colors cursor-pointer text-left"
                >
                  Vitrines & Portais Digitais
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('/', 'the-problem')}
                  className="hover:text-ink transition-colors cursor-pointer text-left"
                >
                  Diagnóstico de Gargalos
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Institucional & Conteúdo */}
          <div className="space-y-4">
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-gold font-bold">
              Institucional
            </h3>
            <ul className="space-y-2.5 text-xs font-mono text-muted">
              <li>
                <button
                  onClick={() => handleLink('/sobre')}
                  className="hover:text-ink transition-colors cursor-pointer text-left"
                >
                  Sobre Nós & Metodologia
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('/blog')}
                  className="hover:text-ink transition-colors cursor-pointer text-left flex items-center gap-1.5"
                >
                  <BookOpen className="w-3 h-3 text-gold" />
                  <span>Blog & Insights</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('/contato')}
                  className="hover:text-ink transition-colors cursor-pointer text-left flex items-center gap-1.5"
                >
                  <Mail className="w-3 h-3 text-gold" />
                  <span>Contato Direto</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenAiStudio('chat')}
                  className="hover:text-ink transition-colors cursor-pointer text-left flex items-center gap-1.5 text-gold"
                >
                  <Sparkles className="w-3 h-3" />
                  <span>Assistente de IA</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenAiStudio('analyze')}
                  className="hover:text-ink transition-colors cursor-pointer text-left"
                >
                  Auditoria de Planilhas
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Legal & LGPD (From Sitemap) */}
          <div className="space-y-4">
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-gold font-bold">
              Legal & LGPD
            </h3>
            <ul className="space-y-2.5 text-xs font-mono text-muted">
              <li>
                <button
                  onClick={() => handleLink('/politica-de-privacidade')}
                  className="hover:text-ink transition-colors cursor-pointer text-left flex items-center gap-1.5"
                >
                  <Shield className="w-3 h-3" />
                  <span>Política de Privacidade</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('/politica-de-cookies')}
                  className="hover:text-ink transition-colors cursor-pointer text-left flex items-center gap-1.5"
                >
                  <Cookie className="w-3 h-3" />
                  <span>Política de Cookies</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('/termos-de-uso')}
                  className="hover:text-ink transition-colors cursor-pointer text-left flex items-center gap-1.5"
                >
                  <FileText className="w-3 h-3" />
                  <span>Termos de Uso</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('/sobre-seus-dados')}
                  className="hover:text-ink transition-colors cursor-pointer text-left flex items-center gap-1.5"
                >
                  <Database className="w-3 h-3" />
                  <span>Sobre Seus Dados (LGPD)</span>
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter & Bottom Strip */}
        <div className="pt-8 border-t border-surface-2 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-[11px] font-mono text-muted-soft text-center md:text-left">
            <span>© 2026 OPTIMAFY SOLUÇÕES DIGITAIS. </span>
            <span className="block sm:inline sm:ml-2">TODOS OS DIREITOS RESERVADOS.</span>
          </div>

          {/* Newsletter Form */}
          <form
            onSubmit={handleNewsletter}
            className="flex items-center gap-2 w-full sm:w-auto max-w-sm"
          >
            <input
              type="email"
              required
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              placeholder="Dicas de lucro no seu e-mail..."
              className="bg-surface border border-border px-3.5 py-2 text-xs text-ink placeholder-muted-soft focus:outline-none focus:border-gold flex-1 font-sans"
            />
            <button
              type="submit"
              disabled={newsletterLoading}
              className="px-4 py-2 bg-gold hover:bg-gold-hover text-canvas text-xs font-mono font-bold uppercase transition-colors cursor-pointer whitespace-nowrap disabled:opacity-60 disabled:cursor-wait"
            >
              {subscribed ? 'Inscrito!' : newsletterLoading ? 'Enviando...' : 'Receber'}
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
}
