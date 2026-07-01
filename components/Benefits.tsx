"use client";

import { motion } from "framer-motion";
import {
  fadeInUp,
  slideInLeft,
  slideInRight,
  staggerContainer,
  viewportConfig,
} from "@/lib/animations";
import {
  TrendingDown,
  Rocket,
  ShieldCheck,
} from "lucide-react";

const benefits = [
  {
    icon: TrendingDown,
    title: "Maior eficiência",
    description:
      "Reduza tarefas repetitivas e automatize processos para sua equipe trabalhar no que realmente importa.",
    details: [
      "Menos trabalho manual",
      "Mais tempo para atividades estratégicas",
      "Processos mais organizados",
    ],
    gradient: "from-violet-500 to-purple-600",
    direction: "left",
  },
  {
    icon: Rocket,
    title: "Tomada de decisão mais rápida",
    description:
      "Tenha acesso a informações em tempo real e dashboards intuitivos para tomar decisões mais assertivas.",
    details: [
      "Dados organizados",
      "Relatórios instantâneos",
      "Visão clara do negócio",
    ],
    gradient: "from-blue-500 to-cyan-500",
    direction: "right",
  },
  {
    icon: ShieldCheck,
    title: "Segurança e confiabilidade",
    description:
      "Soluções robustas e seguras, com backup automatizado e suporte contínuo para garantir o funcionamento.",
    details: [
      "Segurança de dados",
      "Backup automatizado",
      "Suporte contínuo",
    ],
    gradient: "from-cyan-500 to-teal-500",
    direction: "left",
  },
];

export default function Benefits() {
  return (
    <section id="beneficios" className="relative py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center mb-16"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-zinc-900 tracking-tight mb-6"
          >
            Resultados que fazem a diferença
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="max-w-2xl mx-auto text-lg text-zinc-600"
          >
            Veja como nossas soluções podem transformar sua operação.
          </motion.p>
        </motion.div>

        {/* Zig-Zag Benefits */}
        <div className="space-y-20">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${
                index % 2 !== 0 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Icon Visual */}
              <motion.div
                variants={
                  benefit.direction === "left" ? slideInLeft : slideInRight
                }
                className="flex-1 w-full"
              >
                <div className="relative group">
                  <div className="rounded-2xl border border-zinc-200 bg-zinc-50/50 p-10 text-center overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                    {/* Glow background */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-700`}
                    />

                    <div className="relative z-10">
                      <div
                        className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${benefit.gradient} mb-6 shadow-lg`}
                      >
                        <benefit.icon className="w-10 h-10 text-white" />
                      </div>

                      <h3 className="text-2xl font-bold text-zinc-900">
                        {benefit.title}
                      </h3>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Text Content */}
              <motion.div
                variants={
                  benefit.direction === "left" ? slideInRight : slideInLeft
                }
                className="flex-1"
              >
                <h3 className="text-2xl sm:text-3xl font-bold text-zinc-900 mb-4">
                  {benefit.title}
                </h3>
                <p className="text-zinc-600 text-lg leading-relaxed mb-6">
                  {benefit.description}
                </p>
                <ul className="space-y-3">
                  {benefit.details.map((detail) => (
                    <li
                      key={detail}
                      className="flex items-center gap-3 text-zinc-700"
                    >
                      <div
                        className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${benefit.gradient}`}
                      />
                      <span className="text-[15px]">{detail}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}