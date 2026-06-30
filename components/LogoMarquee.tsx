"use client";

import { motion } from "framer-motion";
import { fadeInUp, viewportConfig } from "@/lib/animations";

//Nomes das empresas clientes/logos
const logos = [
  "Empresa 1",
  "Empresa 2",
  "Empresa 3",
  "Empresa 4",
  "Empresa 5",
];

export default function LogoMarquee() {
  return (
    <section className="relative py-20 overflow-hidden">
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        className="text-center mb-12"
      >
        <p className="text-sm font-medium text-zinc-500 uppercase tracking-widest">
          Empresas que confiam na OPTIMAFY
        </p>
      </motion.div>

      {/* Marquee Container */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-zinc-950 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-zinc-950 to-transparent z-10" />

        {/* Scrolling track */}
        <div className="flex animate-marquee">
          {[...logos, ...logos].map((logo, i) => (
            <div
              key={`${logo}-${i}`}
              className="flex-shrink-0 mx-8 flex items-center justify-center"
            >
              <div className="flex items-center gap-2 px-6 py-3">
                {/* Abstract logo icon */}
                <div className="w-8 h-8 rounded-lg bg-zinc-800/50 border border-zinc-700/50 flex items-center justify-center">
                  <span className="text-xs font-bold text-zinc-500">
                    {logo.charAt(0)}
                  </span>
                </div>
                <span className="text-lg font-semibold text-zinc-600 whitespace-nowrap tracking-tight">
                  {logo}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Divider line */}
      <div className="mt-20 max-w-7xl mx-auto px-4">
        <div className="h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
      </div>
    </section>
  );
}
