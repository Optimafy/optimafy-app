"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, viewportConfig } from "@/lib/animations";
import { ArrowRight, Calendar, Clock } from "lucide-react";

const blogPosts = [
  {
    title: "5 Automações que Vão Transformar Seu Negócio",
    excerpt: "Descubra as automações mais impactantes para otimizar processos e aumentar a produtividade da sua empresa.",
    date: "2024-01-15",
    readTime: "8 min de leitura",
    gradient: "from-violet-500 to-purple-600",
  },
  {
    title: "Como a Análise de Dados Aumenta a Competitividade",
    excerpt: "Entenda como utilizar dados para tomar decisões estratégicas e ficar à frente da concorrência.",
    date: "2024-01-10",
    readTime: "6 min de leitura",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "Integração de Sistemas: Por Onde Começar?",
    excerpt: "Guia completo para integrar seus sistemas legados e criar um ecossistema digital unificado.",
    date: "2024-01-05",
    readTime: "10 min de leitura",
    gradient: "from-cyan-500 to-teal-500",
  },
];

const isDev = process.env.NODE_ENV === "development";

export default function BlogPage() {
  if (!isDev) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center p-8">
          <h1 className="text-3xl font-bold text-zinc-900 mb-4">Página não encontrada</h1>
          <p className="text-zinc-600">Esta página está disponível apenas durante o desenvolvimento.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="relative overflow-hidden pt-24 pb-16">
        {/* Hero Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              viewport={viewportConfig}
              className="text-center"
            >
              <motion.p
                variants={fadeInUp}
                className="text-sm font-semibold text-violet-600 uppercase tracking-widest mb-4"
              >
                Blog
              </motion.p>
              <motion.h1
                variants={fadeInUp}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-900 mb-6"
              >
                Conteúdos sobre Tecnologia e Automação
              </motion.h1>
              <motion.p
                variants={fadeInUp}
                className="text-lg sm:text-xl text-zinc-600 max-w-2xl mx-auto"
              >
                Artigos, guias e insights para ajudar sua empresa a crescer com tecnologia de ponta.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {blogPosts.map((post, index) => (
                <motion.div
                  key={post.title}
                  variants={fadeInUp}
                  whileHover={{ y: -4 }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative rounded-2xl border border-zinc-200 bg-zinc-50 hover:bg-white hover:shadow-lg p-8 overflow-hidden cursor-pointer transition-all duration-300"
                >
                  <div
                    className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${post.gradient}`}
                  />
                  <div className="flex items-center gap-4 text-sm text-zinc-500 mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-zinc-900 mb-4 group-hover:text-zinc-950 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-zinc-600 mb-6">
                    {post.excerpt}
                  </p>
                  <button className="inline-flex items-center gap-2 text-violet-600 font-semibold group-hover:text-violet-800 transition-colors">
                    Ler mais <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}