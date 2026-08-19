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
import SectionBackground from "./SectionBackground";

const features = [
  {
    icon: Globe,
    accent: Code2,
    title: "Sistemas e plataformas sob medida",
    description:
      "Sistemas e plataformas online sob medida para organizar processos da empresa. Incluindo sistemas internos, plataformas, portais ou aplicações específicas para suas necessidades.",
    gradient: "from-violet-500 to-purple-600",
    span: "lg:col-span-2",
    image: "/images/solucoes1.webp",
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
    image: "/images/solucoes2.webp",
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
    image: "/images/solucoes3.webp",
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
    image: "/images/sobre.webp",
    whatsappMessage: "Olá! Quero entender melhor sobre integração de sistemas como ERPs, CRMs e plataformas legadas.",
  },
];

// Bento spans for the light-mode ("bento editorial") layout: one large image
// tile (2x2), one dark accent tile, and two smaller tiles — mirrors the
// asymmetric preview-3 grid. Dark mode instead renders an even glass grid
// (preview-4 style), so this map is only consulted for the light variant.
const bentoSpans = [
  "lg:col-span-2 lg:row-span-2",
  "lg:col-span-2",
  "",
  "",
];

export default function FeaturesGrid() {
  return (
    <section id="solucoes" className="relative py-12 overflow-hidden">
      <SectionBackground variant="violet" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-zinc-900 dark:text-mist tracking-tight mb-3"
          >
            Soluções que fazem sua empresa
            <span className="brand-gradient-text"> trabalhar melhor</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="max-w-2xl mx-auto text-sm sm:text-base text-zinc-600 dark:text-mist-soft"
          >
            Cada solução é projetada para resolver problemas reais do seu negócio com tecnologia de ponta.
          </motion.p>
        </motion.div>

        {/* Light mode: asymmetric bento grid with image tiles (preview 3) */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="dark:hidden grid grid-cols-1 lg:grid-cols-4 gap-3 lg:gap-4 lg:auto-rows-[190px]"
        >
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              variants={fadeInUp}
              whileHover={{ scale: 1.01, y: -4 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className={`group relative rounded-2xl overflow-hidden cursor-default transition-all duration-300 ${bentoSpans[i]} ${
                i === 1
                  ? "bg-ink text-white p-6 flex flex-col justify-between"
                  : "border border-zinc-200 bg-white"
              }`}
            >
              {i === 1 ? (
                <>
                  <div>
                    <feature.icon className="w-6 h-6 mb-3 text-violet-300" />
                    <h3 className="font-display text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-sm text-white/70 max-w-sm">{feature.description}</p>
                  </div>
                  <div className="mt-5">
                    <WhatsappButton className="!px-5 !py-2.5 !text-xs" message={feature.whatsappMessage} />
                  </div>
                </>
              ) : (
                <>
                  <img
                    src={feature.image}
                    alt={feature.title}
                    width={640}
                    height={360}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
                  <div className="absolute bottom-0 p-5 text-white">
                    <h3 className="font-display text-lg font-bold mb-1">{feature.title}</h3>
                    <p className="text-xs text-white/80 max-w-sm mb-3 line-clamp-2">{feature.description}</p>
                    <WhatsappButton className="!px-4 !py-2 !text-xs" message={feature.whatsappMessage} />
                  </div>
                </>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Dark mode: even glass grid (preview 4) */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="hidden dark:grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={fadeInUp}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="surface-card p-7"
            >
              <div
                className={`w-11 h-11 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center shadow-lg mb-5`}
              >
                <feature.icon className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-display text-lg font-bold text-mist mb-2">{feature.title}</h3>
              <p className="text-mist-soft leading-relaxed text-sm mb-5">{feature.description}</p>
              <WhatsappButton className="!px-5 !py-2.5 !text-xs" message={feature.whatsappMessage} />
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