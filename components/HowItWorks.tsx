"use client";

import { motion } from "framer-motion";
import {
  fadeInUp,
  staggerContainer,
  viewportConfig,
} from "@/lib/animations";
import { MessageCircle, Search, ClipboardList, Code, Monitor, Headset } from "lucide-react";
import WhatsappButton from "./WhatsappButton";

const steps = [
  {
    number: "01",
    title: "Conversamos",
    description: "Primeiro, conversamos para entender melhor sua empresa e suas necessidades.",
    icon: MessageCircle,
    gradient: "from-violet-500 to-purple-600",
  },
  {
    number: "02",
    title: "Entendemos os gargalos",
    description: "Analisamos seus processos e identificamos os pontos que podem ser otimizados.",
    icon: Search,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    number: "03",
    title: "Planejamos",
    description: "Criamos um plano de ação personalizado para resolver seus problemas específicos.",
    icon: ClipboardList,
    gradient: "from-cyan-500 to-teal-500",
  },
  {
    number: "04",
    title: "Desenvolvemos",
    description: "Desenvolvemos a solução digital sob medida para a sua empresa.",
    icon: Code,
    gradient: "from-indigo-500 to-violet-600",
  },
  {
    number: "05",
    title: "Implantamos",
    description: "Colocamos a solução em funcionamento e garantimos que tudo funcione perfeitamente.",
    icon: Monitor,
    gradient: "from-violet-500 to-purple-600",
  },
  {
    number: "06",
    title: "Acompanhamos e damos suporte",
    description: "Continuamos acompanhando e oferecendo suporte contínuo para garantir o sucesso.",
    icon: Headset,
    gradient: "from-blue-500 to-cyan-500",
  },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="relative py-12 bg-zinc-50">
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
            Como funciona contratar a Optimafy?
          </motion.h2>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              variants={fadeInUp}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="p-5 rounded-2xl border border-zinc-200 bg-white hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`w-10 h-10 rounded-xl bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-lg`}
                >
                  <step.icon className="w-5 h-5 text-white" />
                </div>
                <div className="text-xl font-bold text-zinc-900">{step.number}</div>
              </div>
              <h3 className="text-lg font-bold text-zinc-900 mb-2">{step.title}</h3>
              <p className="text-zinc-600 text-sm">{step.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA after How It Works */}
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