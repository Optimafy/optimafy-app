"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, viewportConfig } from "@/lib/animations";
import { ArrowRight, Sparkles } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import WhatsappButton from "./WhatsappButton";

export default function Hero() {
  return (
    <section className="relative flex items-center justify-center overflow-hidden py-14 pt-24">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 z-0">
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
        {/* Radial gradient overlays */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-radial from-violet-600/10 via-transparent to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-gradient-radial from-cyan-600/8 via-transparent to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-gradient-radial from-blue-600/6 via-transparent to-transparent rounded-full blur-3xl" />
      </div>

      {/* Floating Dots Animation */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-violet-500/20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.1, 0.5, 0.1],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          viewport={viewportConfig}
        >
          {/* Badge */}
          <motion.div variants={fadeInUp} className="flex justify-center mb-5">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-zinc-200 bg-zinc-50/60 backdrop-blur-sm text-xs text-zinc-600">
              <Sparkles className="w-3 h-3 text-violet-500" />
              <span>Automações que transformam operações</span>
              <div className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse" />
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeInUp}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1] mb-4"
          >
            <span className="text-zinc-900">Sistemas, automações e integrações</span>
            <br />
            <span className="text-[#1B365D]">
              para sua empresa trabalhar melhor
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={fadeInUp}
            className="max-w-2xl mx-auto text-base sm:text-lg text-zinc-600 leading-relaxed mb-7"
          >
            Soluções digitais sob medida que resolvem problemas reais do seu negócio — sem complicação, com resultado.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-3"
          >
            {/* Primary CTA */}
            <WhatsappButton className="!px-7 !py-3 !text-sm" />

            {/* Secondary CTA */}
            <a
              href="#solucoes"
              className="inline-flex items-center gap-2 px-7 py-3 text-sm font-semibold text-zinc-700 rounded-xl border border-zinc-200 hover:border-zinc-400 hover:text-zinc-950 hover:bg-zinc-50 transition-all duration-300"
            >
              Conhecer Soluções
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-10" />
    </section>
  );
}