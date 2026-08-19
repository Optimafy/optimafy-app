"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { fadeInUp, staggerContainer, viewportConfig } from "@/lib/animations";
import { ArrowRight, Sparkles } from "lucide-react";
import WhatsappButton from "./WhatsappButton";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP);
}

// Deterministic pseudo-random helper (pure function, not Math.random()) so the
// dot layout is stable across server render and client hydration and safe to
// compute directly during render.
function seededRandom(seed: number) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

const DOTS = Array.from({ length: 30 }, (_, i) => ({
  left: seededRandom(i * 12.9898) * 100,
  top: seededRandom(i * 78.233) * 100,
  duration: 3 + seededRandom(i * 37.719) * 4,
  delay: seededRandom(i * 4.671) * 3,
}));

export default function Hero() {
  const bgRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(
        { reduceMotion: "(prefers-reduced-motion: reduce)" },
        (context) => {
          const { reduceMotion } = context.conditions as { reduceMotion: boolean };
          if (reduceMotion) return;

          // Slow, continuous drift on the radial gradients — GSAP owns ambient motion
          // so it doesn't compete with the framer-motion entrance/dot animations above.
          gsap.to(".hero-glow", {
            xPercent: gsap.utils.wrap([4, -4, 3]),
            yPercent: gsap.utils.wrap([-3, 4, -2]),
            duration: 12,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            stagger: { each: 1.2, from: "random" },
          });
        }
      );
      return () => mm.revert();
    },
    { scope: bgRef }
  );

  return (
    <section className="relative flex items-center justify-center overflow-hidden py-14 pt-24">
      {/* Animated Grid Background */}
      <div ref={bgRef} aria-hidden="true" className="absolute inset-0 z-0">
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.06]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
        {/* Radial gradient overlays — brighter in dark mode for the "immersive depth" glow */}
        <div className="hero-glow absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-radial from-violet-600/10 dark:from-violet-500/30 via-transparent to-transparent rounded-full blur-3xl will-change-transform" />
        <div className="hero-glow absolute bottom-0 right-0 w-[600px] h-[400px] bg-gradient-radial from-cyan-600/8 dark:from-cyan-400/25 via-transparent to-transparent rounded-full blur-3xl will-change-transform" />
        <div className="hero-glow absolute top-1/3 left-0 w-[400px] h-[400px] bg-gradient-radial from-blue-600/6 dark:from-blue-500/20 via-transparent to-transparent rounded-full blur-3xl will-change-transform" />
      </div>

      {/* Floating Dots Animation */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {DOTS.map((dot, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-violet-500/20"
            style={{
              left: `${dot.left}%`,
              top: `${dot.top}%`,
            }}
            animate={{
              opacity: [0.1, 0.5, 0.1],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: dot.duration,
              repeat: Infinity,
              delay: dot.delay,
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
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-zinc-200 dark:border-white/10 bg-zinc-50/60 dark:bg-white/[0.04] backdrop-blur-sm text-xs text-zinc-600 dark:text-mist-soft">
              <Sparkles className="w-3 h-3 text-violet-500 dark:text-violet-400" />
              <span>Automações que transformam operações</span>
              <div className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse" />
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeInUp}
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1] mb-4"
          >
            <span className="text-zinc-900 dark:text-mist">Sistemas, automações e integrações</span>
            <br />
            <span className="brand-gradient-text">
              para sua empresa trabalhar melhor
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={fadeInUp}
            className="max-w-2xl mx-auto text-base sm:text-lg text-zinc-600 dark:text-mist-soft leading-relaxed mb-7"
          >
            Soluções digitais sob medida que resolvem problemas reais do seu negócio — sem complicação, com resultado.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-3"
          >
            {/* Primary CTA */}
            <motion.div>
              <WhatsappButton className="!px-7 !py-3 !text-sm" />
            </motion.div>

            {/* Secondary CTA */}
            <a
              href="/solucoes"
              className="inline-flex items-center gap-2 px-7 py-3 text-sm font-semibold text-zinc-700 dark:text-mist-soft rounded-xl border border-zinc-200 dark:border-white/10 hover:border-zinc-400 dark:hover:border-white/30 hover:text-zinc-950 dark:hover:text-mist hover:bg-zinc-50 dark:hover:bg-white/5 transition-all duration-300"
            >
              Conhecer Soluções
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}