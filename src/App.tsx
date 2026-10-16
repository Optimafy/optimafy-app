/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TheProblem } from './components/TheProblem';
import { Solutions } from './components/Solutions';
import { Process } from './components/Process';
import { Footer } from './components/Footer';
import { AiAssistant } from './components/AiAssistant';
import { BlogPage } from './pages/BlogPage';
import { SobrePage } from './pages/SobrePage';
import { SolucoesPage } from './pages/SolucoesPage';
import { ContatoPage } from './pages/ContatoPage';
import { LegalPage, LegalDocType } from './pages/LegalPage';

export default function App() {
  // Client-Side Routing State
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return window.location.pathname || '/';
    }
    return '/';
  });

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (path: string, hash?: string) => {
    setCurrentPath(path);
    window.history.pushState({}, '', hash ? `${path}#${hash}` : path);

    if (path === '/' && hash) {
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 60);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Modal State for AI Studio
  const [isAiModalOpen, setIsAiModalOpen] = useState(false);
  const [aiModalTab, setAiModalTab] = useState<'chat' | 'analyze'>('chat');

  // Global Scroll Progress Bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const handleOpenAiStudio = (tab: 'chat' | 'analyze' = 'chat') => {
    setAiModalTab(tab);
    setIsAiModalOpen(true);
  };

  const handleCloseAiStudio = () => {
    setIsAiModalOpen(false);
  };

  // Route Dispatcher
  const renderCurrentView = () => {
    const path = currentPath.toLowerCase();

    // Blog Routing: /blog or /blog/:slug
    if (path.startsWith('/blog')) {
      const slug = path.replace('/blog', '').replace(/^\//, '');
      return (
        <BlogPage
          onOpenAiStudio={handleOpenAiStudio}
          onNavigateHome={() => navigate('/')}
          initialPostSlug={slug || null}
        />
      );
    }

    // Sobre: /sobre
    if (path === '/sobre') {
      return (
        <SobrePage
          onOpenAiStudio={handleOpenAiStudio}
          onNavigateHome={() => navigate('/')}
        />
      );
    }

    // Soluções: /solucoes
    if (path === '/solucoes') {
      return (
        <SolucoesPage
          onOpenAiStudio={handleOpenAiStudio}
          onNavigateHome={() => navigate('/')}
        />
      );
    }

    // Contato: /contato
    if (path === '/contato') {
      return (
        <ContatoPage
          onOpenAiStudio={handleOpenAiStudio}
          onNavigateHome={() => navigate('/')}
        />
      );
    }

    // Legal & Institutional Pages
    if (
      path === '/politica-de-privacidade' ||
      path === '/politica-de-cookies' ||
      path === '/termos-de-uso' ||
      path === '/sobre-seus-dados'
    ) {
      let doc: LegalDocType = 'privacidade';
      if (path === '/politica-de-cookies') doc = 'cookies';
      if (path === '/termos-de-uso') doc = 'termos';
      if (path === '/sobre-seus-dados') doc = 'sobre-seus-dados';

      return (
        <LegalPage
          initialDoc={doc}
          onNavigateHome={() => navigate('/')}
        />
      );
    }

    // Default: Home Page
    return (
      <div className="relative z-10 bg-canvas shadow-2xl">
        {/* Cena 1: Hero */}
        <Hero
          onOpenAiStudio={() => handleOpenAiStudio('chat')}
        />

        {/* Cena 2: TheProblem */}
        <TheProblem onOpenAudit={() => handleOpenAiStudio('analyze')} />

        {/* Cena 3: Solutions */}
        <Solutions
          onOpenAiStudio={handleOpenAiStudio}
        />

        {/* Cena 4: Process */}
        <Process />
      </div>
    );
  };

  return (
    <div className="relative min-h-screen bg-canvas text-ink selection:bg-gold selection:text-canvas">
      {/* Precision Scroll Progress Line at Top */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-gold origin-left z-50 shadow-[0_0_10px_var(--token-glow)]"
        style={{ scaleX }}
      />

      {/* Main Luxury Navigation Bar */}
      <Navbar
        onOpenAiStudio={handleOpenAiStudio}
        currentPath={currentPath}
        onNavigate={navigate}
      />

      {/* Main View Router */}
      <main className="min-h-screen">
        {renderCurrentView()}
      </main>

      {/* Global Luxury Footer */}
      <Footer
        onOpenAiStudio={handleOpenAiStudio}
        onNavigate={navigate}
      />

      {/* Global AI Studio Modal (Assistente de IA - Chat & Vision) */}
      <AiAssistant
        isOpen={isAiModalOpen}
        initialTab={aiModalTab}
        onClose={handleCloseAiStudio}
      />
    </div>
  );
}
