"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturesGrid from "@/components/FeaturesGrid";
import HowItWorks from "@/components/HowItWorks";
import FAQ from "@/components/FAQ";
import HomeCTA from "@/components/HomeCTA";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, viewportConfig } from "@/lib/animations";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const isDev = process.env.NODE_ENV === "development";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Quanto custa um projeto?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "O custo varia de projeto para projeto, dependendo da complexidade da solução. Entre em contato para receber um orçamento personalizado e sem compromisso.",
      },
    },
    {
      "@type": "Question",
      name: "Quanto tempo leva?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "O prazo também depende da complexidade, mas costuma variar de algumas semanas a alguns meses. Sempre definimos prazos claros antes de iniciar o projeto.",
      },
    },
    {
      "@type": "Question",
      name: "Vocês atendem empresas de qualquer porte?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim! Atendemos desde pequenos negócios até grandes empresas, sempre adaptando a solução às necessidades específicas de cada cliente.",
      },
    },
    {
      "@type": "Question",
      name: "Vocês oferecem suporte após a entrega?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim! Oferecemos suporte contínuo para garantir que sua solução continue funcionando perfeitamente.",
      },
    },
    {
      "@type": "Question",
      name: "Preciso entender de tecnologia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Não! Nós cuidamos de toda a parte técnica para você. Você foca no seu negócio.",
      },
    },
    {
      "@type": "Question",
      name: "Como funciona o orçamento?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Primeiro conversamos, entendemos suas necessidades e apresentamos uma proposta com orçamento detalhado sem compromisso.",
      },
    },
  ],
};

const blogPreviewPosts = [
  {
    title: "5 Automações que Vão Transformar Seu Negócio",
    excerpt: "Descubra as automações mais impactantes para otimizar processos e aumentar a produtividade.",
    gradient: "from-violet-500 to-purple-600",
  },
  {
    title: "Como a Análise de Dados Aumenta a Competitividade",
    excerpt: "Entenda como utilizar dados para tomar decisões estratégicas e ficar à frente da concorrência.",
    gradient: "from-blue-500 to-cyan-500",
  },
];

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Navbar />
      <Hero />
      <FeaturesGrid />
      <HowItWorks />
      <FAQ />

      {/* Blog Preview (dev only) */}
      {isDev && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
            >
              <motion.div variants={fadeInUp} className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-zinc-900 mb-4">
                  Últimos do Blog
                </h2>
                <p className="text-lg text-zinc-600">
                  Confira nossos artigos sobre tecnologia e automação (apenas dev mode).
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                {blogPreviewPosts.map((post, index) => (
                  <motion.div
                    key={post.title}
                    variants={fadeInUp}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -4 }}
                    className="group relative rounded-2xl border border-zinc-200 bg-zinc-50 hover:bg-white hover:shadow-lg p-8 overflow-hidden cursor-pointer transition-all duration-300"
                  >
                    <div
                      className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${post.gradient}`}
                    />
                    <h3 className="text-xl font-bold text-zinc-900 mb-4 group-hover:text-zinc-950 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-zinc-600 mb-6">{post.excerpt}</p>
                    <Link
                      href="/blog"
                      className="inline-flex items-center gap-2 text-violet-600 font-semibold group-hover:text-violet-800 transition-colors"
                    >
                      Ler mais <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </motion.div>
                ))}
              </div>

              <motion.div variants={fadeInUp} className="text-center">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-violet-600 rounded-xl border border-violet-200 hover:border-violet-400 hover:bg-violet-50 transition-all duration-300"
                >
                  Ver todos os posts <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>
      )}

      <HomeCTA />
      <Footer />
    </main>
  );
}