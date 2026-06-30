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
    title: "Redução de Custos Operacionais",
    description:
      "Automações inteligentes substituem processos manuais repetitivos, eliminando retrabalho e otimizando a necessidade de recursos dedicados a tarefas que não geram valor direto.",
    details: [
      "Eliminação de tarefas manuais repetitivas",
      "Redução de erros humanos e retrabalho",
      "Otimização de recursos e equipes",
    ],
    gradient: "from-violet-500 to-purple-600",
    direction: "left",
  },
  {
    icon: Rocket,
    title: "Velocidade de Processamento",
    description:
      "Sistemas otimizados e automatizados entregam resultados em minutos, não dias. Pipelines de dados em tempo real que aceleram a tomada de decisão estratégica.",
    details: [
      "Processamento em tempo real",
      "Relatórios instantâneos sob demanda",
      "Deploy contínuo e iteração rápida",
    ],
    gradient: "from-blue-500 to-cyan-500",
    direction: "right",
  },
  {
    icon: ShieldCheck,
    title: "Segurança & Disponibilidade",
    description:
      "Infraestrutura cloud-native com criptografia de ponta a ponta, backups automatizados e monitoramento contínuo. Seus dados protegidos com padrões enterprise.",
    details: [
      "Criptografia em repouso e trânsito",
      "Backups automatizados com redundância",
      "Monitoramento e alertas em tempo real",
    ],
    gradient: "from-cyan-500 to-teal-500",
    direction: "left",
  },
];

export default function Benefits() {
  return (
    <section id="beneficios" className="relative py-24 sm:py-32">
      {/* Background accent */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-violet-600/5 via-transparent to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center mb-20"
        >
          <motion.p
            variants={fadeInUp}
            className="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-4"
          >
            Soluções que Geram Eficiência Real
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-zinc-900 tracking-tight mb-6"
          >
            Benefícios que impactam{" "}
            <span className="text-[#1B365D]">
              diretamente sua operação
            </span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="max-w-2xl mx-auto text-lg text-zinc-600"
          >
            Conheça os benefícios de cada solução para transformar sua empresa.
          </motion.p>
        </motion.div>

        {/* Zig-Zag Benefits */}
        <div className="space-y-24">
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
                        className={`inline-flex items-center justify-center w-24 h-24 rounded-2xl bg-gradient-to-br ${benefit.gradient} mb-6 shadow-lg`}
                      >
                        <benefit.icon className="w-12 h-12 text-white" />
                      </div>

                      <h3 className="text-xl font-semibold text-zinc-900">
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