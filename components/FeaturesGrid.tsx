"use client";

import { motion } from "framer-motion";
import {
  fadeInUp,
  staggerContainer,
  viewportConfig,
} from "@/lib/animations";
import {
  Globe,
  Bot,
  BarChart3,
  Plug,
  Code2,
  Workflow,
  PieChart,
  Network,
} from "lucide-react";

const features = [
  {
    icon: Globe,
    accent: Code2,
    title: "Desenvolvimento Web Full-Stack",
    description:
      "Aplicações web robustas e escaláveis com React, Next.js e Node.js. Do MVP ao produto enterprise, com foco em performance e experiência do usuário.",
    gradient: "from-violet-500 to-purple-600",
    glowColor: "violet",
    span: "lg:col-span-2",
    large: true,
  },
  {
    icon: Bot,
    accent: Workflow,
    title: "Automações Inteligentes",
    description:
      "RPA, workflows automatizados e integrações que eliminam tarefas repetitivas e reduzem erros operacionais.",
    gradient: "from-blue-500 to-cyan-500",
    glowColor: "blue",
    span: "lg:col-span-1",
    large: false,
  },
  {
    icon: BarChart3,
    accent: PieChart,
    title: "Análise de Dados & BI",
    description:
      "Dashboards inteligentes e pipelines de dados que transformam informações brutas em decisões estratégicas mensuráveis.",
    gradient: "from-cyan-500 to-teal-500",
    glowColor: "cyan",
    span: "lg:col-span-1",
    large: false,
  },
  {
    icon: Plug,
    accent: Network,
    title: "Integrações de Sistemas & APIs",
    description:
      "Conectamos ERPs, CRMs e plataformas legadas em um ecossistema unificado. APIs RESTful e webhooks que fazem seus sistemas conversarem em tempo real.",
    gradient: "from-indigo-500 to-violet-500",
    glowColor: "indigo",
    span: "lg:col-span-2",
    large: true,
  },
];

export default function FeaturesGrid() {
  return (
    <section id="solucoes" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center mb-16"
        >
          <motion.p
            variants={fadeInUp}
            className="text-sm font-semibold text-violet-600 uppercase tracking-widest mb-4"
          >
            Nossas Soluções
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-zinc-900 tracking-tight mb-6"
          >
            Pilares que sustentam sua{" "}
            <span className="text-[#1B365D]">
              transformação digital
            </span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="max-w-2xl mx-auto text-lg text-zinc-600"
          >
            Cada solução é projetada para resolver problemas reais do seu negócio
            com tecnologia de ponta.
          </motion.p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-5"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={fadeInUp}
              whileHover={{ scale: 1.02, y: -4 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className={`group relative rounded-2xl border border-zinc-200 bg-zinc-50/50 hover:bg-white hover:shadow-lg p-8 overflow-hidden cursor-default transition-all duration-300 ${feature.span}`}
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
              <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-violet-500/20 transition-colors duration-500" />

              {/* Corner glow */}
              <div
                className={`absolute -top-20 -right-20 w-40 h-40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-3xl`}
                style={{
                  background:
                    feature.glowColor === "violet"
                      ? "rgba(139,92,246,0.15)"
                      : feature.glowColor === "blue"
                      ? "rgba(59,130,246,0.15)"
                      : feature.glowColor === "cyan"
                      ? "rgba(6,182,212,0.15)"
                      : "rgba(99,102,241,0.15)",
                }}
              />

              <div className="relative z-10">
                {/* Icon */}
                <div className="mb-6 flex items-center gap-3">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center shadow-lg`}
                  >
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <feature.accent className="w-5 h-5 text-zinc-700 group-hover:text-zinc-500 transition-colors" />
                </div>

                {/* Text */}
                <h3 className="text-xl font-semibold text-zinc-900 mb-3 group-hover:text-zinc-900 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-zinc-600 leading-relaxed text-[15px]">
                  {feature.description}
                </p>

                {/* Large card: extra visual element */}
                {/*feature.large && (
                  <div className="mt-6 flex items-center gap-2 text-sm text-zinc-500 group-hover:text-zinc-400 transition-colors">
                    <div className="flex -space-x-1">
                      {[...Array(3)].map((_, j) => (
                        <div
                          key={j}
                          className={`w-6 h-6 rounded-full border-2 border-zinc-900 bg-gradient-to-br ${feature.gradient} opacity-60`}
                        />
                      ))}
                    </div>
                    <span>+50 projetos entregues</span>
                  </div>
                )}*/}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
