"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  fadeInUp,
  staggerContainer,
  viewportConfig,
} from "@/lib/animations";
import { ChevronDown } from "lucide-react";
import WhatsappButton from "./WhatsappButton";

const faqs = [
  {
    question: "Quanto custa um projeto?",
    answer: "O custo varia de projeto para projeto, dependendo da complexidade da solução. Entre em contato para receber um orçamento personalizado e sem compromisso.",
  },
  {
    question: "Quanto tempo leva?",
    answer: "O prazo também depende da complexidade, mas costuma variar de algumas semanas a alguns meses. Sempre definimos prazos claros antes de iniciar o projeto.",
  },
  {
    question: "Vocês atendem empresas de qualquer porte?",
    answer: "Sim! Atendemos desde pequenos negócios até grandes empresas, sempre adaptando a solução às necessidades específicas de cada cliente.",
  },
  {
    question: "Vocês oferecem suporte após a entrega?",
    answer: "Sim! Oferecemos suporte contínuo para garantir que sua solução continue funcionando perfeitamente.",
  },
  {
    question: "Preciso entender de tecnologia?",
    answer: "Não! Nós cuidamos de toda a parte técnica para você. Você foca no seu negócio.",
  },
  {
    question: "Como funciona o orçamento?",
    answer: "Primeiro conversamos, entendemos suas necessidades e apresentamos uma proposta com orçamento detalhado sem compromisso.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="relative py-12 bg-zinc-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
            Perguntas frequentes
          </motion.h2>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, index) => (
          <motion.div
            key={index}
            variants={fadeInUp}
            transition={{ delay: index * 0.08 }}
            className="border border-zinc-200 bg-white rounded-2xl overflow-hidden"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full px-5 py-4 flex items-center justify-between text-left"
            >
              <span className="text-base font-semibold text-zinc-900">{faq.question}</span>
              <motion.div
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown className="w-5 h-5 text-zinc-600" />
              </motion.div>
            </button>
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-5 pb-4 text-zinc-600 text-sm"
                >
                  {faq.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
        </div>

        {/* CTA after FAQ */}
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