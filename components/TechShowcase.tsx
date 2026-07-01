"use client";

import { motion } from "framer-motion";
import {
  fadeInUp,
  staggerContainer,
  viewportConfig,
} from "@/lib/animations";
import { FaReact, FaNodeJs, FaPython, FaAws } from "react-icons/fa";
import { SiNextdotjs, SiPostgresql, SiTypescript } from "react-icons/si";
import WhatsappButton from "./WhatsappButton";

const technologies = [
  {
    name: "React",
    icon: FaReact,
    benefit: "Interfaces rápidas e modernas.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    benefit: "Melhor desempenho e carregamento rápido.",
    color: "from-indigo-500 to-violet-600",
  },
  {
    name: "Node.js",
    icon: FaNodeJs,
    benefit: "Aplicações robustas e escaláveis.",
    color: "from-green-500 to-emerald-600",
  },
  {
    name: "Python",
    icon: FaPython,
    benefit: "Automações inteligentes para reduzir trabalho manual.",
    color: "from-blue-500 to-yellow-500",
  },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
    benefit: "Dados organizados e seguros.",
    color: "from-blue-600 to-blue-800",
  },
  {
    name: "AWS",
    icon: FaAws,
    benefit: "Infraestrutura escalável e confiável.",
    color: "from-orange-500 to-yellow-600",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    benefit: "Maior estabilidade e qualidade do software.",
    color: "from-blue-500 to-blue-700",
  },
];

export default function TechShowcase() {
  return (
    <section id="tecnologias" className="relative py-12">
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
            Tecnologias que utilizamos
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="max-w-2xl mx-auto text-sm sm:text-base text-zinc-600"
          >
            Ferramentas de ponta para entregar resultados de qualidade para sua empresa.
          </motion.p>
        </motion.div>

        {/* Tech Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              variants={fadeInUp}
              transition={{ delay: index * 0.08 }}
              whileHover={{ scale: 1.02, y: -4 }}
              className="group p-5 rounded-2xl border border-zinc-200 bg-zinc-50 hover:bg-white hover:shadow-lg transition-all duration-300"
            >
              <div className="mb-3">
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${tech.color} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow`}
                >
                  <tech.icon className="w-6 h-6 text-white" />
                </div>
              </div>
              <h3 className="text-base font-bold text-zinc-900 mb-1">{tech.name}</h3>
              <p className="text-zinc-600 text-sm">{tech.benefit}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA after Tecnologias */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="mt-10 text-center"
        >
          <motion.div variants={fadeInUp}>
            <WhatsappButton className="!px-7 !py-3 !text-sm" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}