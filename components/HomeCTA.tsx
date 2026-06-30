"use client";

import { motion } from "framer-motion";
import { fadeInUp, scaleIn, staggerContainer, viewportConfig } from "@/lib/animations";
import WhatsappButton from "./WhatsappButton";
import Link from "next/link";

export default function HomeCTA() {
  return (
    <section className="relative pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <motion.div
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-violet-50 via-white to-blue-50"
        >
          <div className="absolute inset-0 border border-zinc-200 rounded-3xl" />
          <div className="relative px-8 py-16 sm:px-16 sm:py-20 text-center">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
            >
              <motion.h2
                variants={fadeInUp}
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-zinc-900 tracking-tight mb-6"
              >
                Pronto para transformar sua operação?
              </motion.h2>

              <motion.p
                variants={fadeInUp}
                className="max-w-xl mx-auto text-lg text-zinc-600 mb-10"
              >
                Converse com nossos especialistas e descubra como podemos acelerar seus resultados com tecnologia sob medida.
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
              >
                <WhatsappButton />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
