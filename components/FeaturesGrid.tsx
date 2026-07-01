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
import WhatsappButton from "./WhatsappButton";

const features = [
  {
    icon: Globe,
    accent: Code2,
    title: "Sistemas e plataformas sob medida",
    description:
      "Sistemas e plataformas online sob medida para organizar processos da empresa. Incluindo sistemas internos, plataformas, portais ou aplicações específicas para suas necessidades.",
    gradient: "from-violet-500 to-purple-600",
    span: "lg:col-span-2",
    whatsappMessage: "Olá! Quero entender melhor sobre os sistemas e plataformas sob medida que vocês oferecem para organizar os processos da minha empresa.",
  },
  {
    icon: Bot,
    accent: Workflow,
    title: "Automatize tarefas repetitivas",
    description:
      "Tarefas repetitivas feitas automaticamente para economizar tempo e reduzir retrabalho. Exemplos: integração de dados, envio de e-mails, atualização de planilhas.",
    gradient: "from-blue-500 to-cyan-500",
    span: "lg:col-span-1",
    whatsappMessage: "Olá! Quero saber mais sobre automatização de tarefas repetitivas, como integração de dados, envio de e-mails e atualização de planilhas.",
  },
  {
    icon: BarChart3,
    accent: PieChart,
    title: "Visualize seus resultados",
    description:
      "Dashboards para acompanhar vendas, operação, clientes e resultados. Tenha acesso a informações em tempo real para tomar decisões estratégicas.",
    gradient: "from-cyan-500 to-teal-500",
    span: "lg:col-span-1",
    whatsappMessage: "Olá! Quero conversar sobre dashboards para acompanhar vendas, operação, clientes e resultados em tempo real.",
  },
  {
    icon: Plug,
    accent: Network,
    title: "Conecte seus sistemas",
    description:
      "Faça sistemas diferentes conversarem entre si sem depender de trabalho manual. Integramos ERPs, CRMs e plataformas legadas em um ecossistema unificado.",
    gradient: "from-indigo-500 to-violet-600",
    span: "lg:col-span-2",
    whatsappMessage: "Olá! Quero entender melhor sobre integração de sistemas como ERPs, CRMs e plataformas legadas.",
  },
];

export default function FeaturesGrid() {
  return (
    <section id="solucoes" className="relative py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center mb-10"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-zinc-900 tracking-tight mb-3"
          >
            Soluções que fazem sua empresa
            <span className="text-[#1B365D]"> trabalhar melhor</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="max-w-2xl mx-auto text-sm sm:text-base text-zinc-600"
          >
            Cada solução é projetada para resolver problemas reais do seu negócio com tecnologia de ponta.
          </motion.p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid grid-cols-1 lg:grid-cols-3 gap-3 lg:gap-4"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={fadeInUp}
              whileHover={{ scale: 1.02, y: -4 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className={`group relative rounded-2xl border border-zinc-200 bg-white hover:shadow-lg p-5 overflow-hidden cursor-default transition-all duration-300 ${feature.span}`}
            >
              <div className="relative">
                {/* Icon */}
                <div className="mb-4 flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center shadow-lg`}
                  >
                    <feature.icon className="w-5 h-5 text-white" />
                  </div>
                  <feature.accent className="w-4 h-4 text-zinc-700 group-hover:text-zinc-500 transition-colors" />
                </div>

                {/* Text */}
                <h3 className="text-lg font-bold text-zinc-900 mb-3 group-hover:text-zinc-950 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-zinc-600 leading-relaxed text-sm mb-4">
                  {feature.description}
                </p>

                <div className="flex items-center gap-2">
                  <WhatsappButton 
                    className="!px-5 !py-2.5 !text-xs"
                    message={feature.whatsappMessage}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA after Soluções */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="mt-10 text-center"
        >
          <motion.div variants={fadeInUp}>
            <WhatsappButton />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}