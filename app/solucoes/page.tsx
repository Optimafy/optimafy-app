"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, viewportConfig } from "@/lib/animations";
import { Globe, Bot, BarChart3, Plug, Code2, Workflow, PieChart, Network, ArrowRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const features = [
  {
    icon: Globe,
    accent: Code2,
    title: "Desenvolvimento Web Full-Stack",
    description:
      "Aplicações web robustas e escaláveis com React, Next.js e Node.js. Do MVP ao produto enterprise, com foco em performance e experiência do usuário.",
    gradient: "from-violet-500 to-purple-600",
    glowColor: "violet",
  },
  {
    icon: Bot,
    accent: Workflow,
    title: "Automações Inteligentes",
    description:
      "RPA, workflows automatizados e integrações que eliminam tarefas repetitivas e reduzem erros operacionais.",
    gradient: "from-blue-500 to-cyan-500",
    glowColor: "blue",
  },
  {
    icon: BarChart3,
    accent: PieChart,
    title: "Análise de Dados & BI",
    description:
      "Dashboards inteligentes e pipelines de dados que transformam informações brutas em decisões estratégicas mensuráveis.",
    gradient: "from-cyan-500 to-teal-500",
    glowColor: "cyan",
  },
  {
    icon: Plug,
    accent: Network,
    title: "Integrações de Sistemas & APIs",
    description:
      "Conectamos ERPs, CRMs e plataformas legadas em um ecossistema unificado. APIs RESTful e webhooks que fazem seus sistemas conversarem em tempo real.",
    gradient: "from-indigo-500 to-violet-600",
    glowColor: "indigo",
  },
];

export default function SolucoesPage() {
  const whatsappUrl = "https://wa.me/556282470405?text=Olá, gostaria de saber mais sobre as automações e integrações que vocês oferecem para otimizar meu negócio!";

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
                Nossas Soluções
              </motion.p>
              <motion.h1
                variants={fadeInUp}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-900 mb-6"
              >
                Soluções digitais sob medida que resolvem problemas reais do seu negócio
              </motion.h1>
              <motion.p
                variants={fadeInUp}
                className="text-lg sm:text-xl text-zinc-600 max-w-2xl mx-auto mb-10"
              >
                Cada solução é projetada para transformar sua operação com tecnologia de ponta.
              </motion.p>
              <motion.a
                variants={fadeInUp}
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-500 hover:to-blue-500 transition-all duration-300 shadow-xl shadow-violet-600/20 hover:shadow-violet-500/30"
              >
                <FaWhatsapp className="w-5 h-5" />
                <span>Falar no WhatsApp</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </motion.div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.02, y: -4 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative rounded-2xl border border-zinc-200 bg-zinc-50/50 hover:bg-white hover:shadow-lg p-8 overflow-hidden cursor-default transition-all duration-300"
                >
                  {/* Hover glow border */}
                  <div
                    className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                    style={{
                      background: `linear-gradient(135deg, ${
                        feature.glowColor === "violet"
                          ? "rgba(139,92,246,0.1)"
                          : feature.glowColor === "blue"
                          ? "rgba(59,130,246,0.1)"
                          : feature.glowColor === "cyan"
                          ? "rgba(6,182,212,0.1)"
                          : "rgba(99,102,241,0.1)"
                      }, transparent)`,
                    }}
                  />

                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="mb-6 flex items-center gap-3">
                      <div
                        className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center shadow-lg`}
                      >
                        <feature.icon className="w-8 h-8 text-white" />
                      </div>
                      <feature.accent className="w-6 h-6 text-zinc-700 group-hover:text-zinc-500 transition-colors" />
                    </div>

                    {/* Text */}
                    <h3 className="text-2xl font-semibold text-zinc-900 mb-3 group-hover:text-zinc-900 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-zinc-600 leading-relaxed text-lg mb-6">
                      {feature.description}
                    </p>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-violet-600 font-semibold group-hover:text-violet-800 transition-colors"
                    >
                      Saber mais <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-violet-50 to-blue-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
            >
              <motion.h2
                variants={fadeInUp}
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-zinc-900 mb-6"
              >
                Pronto para transformar sua operação?
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="text-lg text-zinc-600 mb-10"
              >
                Converse com nossos especialistas e descubra como podemos ajudar sua empresa com tecnologia sob medida.
              </motion.p>
              <motion.a
                variants={fadeInUp}
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-10 py-5 text-base font-semibold text-white rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-500 hover:to-blue-500 transition-all duration-300 shadow-xl shadow-violet-600/20 hover:shadow-violet-500/30"
              >
                <FaWhatsapp className="w-5 h-5" />
                <span>Falar no WhatsApp</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}