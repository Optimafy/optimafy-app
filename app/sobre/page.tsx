"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsappButton from "@/components/WhatsappButton";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, viewportConfig } from "@/lib/animations";
import { Rocket, Target, Lightbulb, Users, ShieldCheck, CheckCircle2, Zap } from "lucide-react";

const steps = [
  { number: "01", title: "Conversamos", description: "Primeiro, conversamos para entender melhor sua empresa e suas necessidades." },
  { number: "02", title: "Entendemos os gargalos", description: "Analisamos seus processos e identificamos os pontos que podem ser otimizados." },
  { number: "03", title: "Planejamos", description: "Criamos um plano de ação personalizado para resolver seus problemas específicos." },
  { number: "04", title: "Desenvolvemos", description: "Construímos a solução digital sob medida para a sua empresa." },
  { number: "05", title: "Implementamos", description: "Colocamos a solução em funcionamento e garantimos que tudo funcione perfeitamente." },
  { number: "06", title: "Acompanhamos e damos suporte", description: "Continuamos acompanhando e oferecendo suporte contínuo para garantir o sucesso." },
];

const differentiators = [
  { icon: CheckCircle2, title: "Foco no Negócio", description: "Não só criamos tecnologia — resolvemos problemas reais do seu negócio." },
  { icon: Zap, title: "Resultados Rápidos", description: "Entregamos valor em ciclos curtos, com feedback constante e ajustes rápidos." },
  { icon: ShieldCheck, title: "Confiança e Acompanhamento", description: "Oferecemos suporte contínuo e acompanhamos o resultado da solução." },
];

export default function SobrePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-abyss">
      <Navbar />
      <main className="relative overflow-hidden pt-24">
        {/* Hero Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              viewport={viewportConfig}
              className="text-center"
            >
              <motion.p
                variants={fadeInUp}
                className="text-sm font-semibold text-violet-600 dark:text-violet-400 uppercase tracking-widest mb-4"
              >
                Sobre Nós
              </motion.p>
              <motion.h1
                variants={fadeInUp}
                className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-900 dark:text-mist mb-6"
              >
                Soluções que Fazem a Diferença
              </motion.h1>
              <motion.p
                variants={fadeInUp}
                className="text-lg sm:text-xl text-zinc-600 dark:text-mist-soft max-w-3xl mx-auto mb-8"
              >
                Somos uma equipe apaixonada por ajudar empresas a trabalhar melhor com tecnologia. Focamos em resultados tangíveis, confiança e atendimento personalizado.
              </motion.p>
              <motion.div variants={fadeInUp}>
                <WhatsappButton />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Imagem de destaque */}
        <section className="py-6">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="relative rounded-3xl overflow-hidden border border-zinc-200 dark:border-white/10 shadow-sm"
            >
              <img
                src="/images/sobre.webp"
                alt="Equipe OPTIMAFY trabalhando em soluções de tecnologia"
                width={1280}
                height={718}
                loading="lazy"
                className="w-full h-64 sm:h-80 object-cover"
              />
            </motion.div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-zinc-50 dark:bg-abyss-2">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12"
            >
              <motion.div variants={fadeInUp} className="surface-card p-8">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-display text-2xl font-bold text-zinc-900 dark:text-mist mb-4">Missão</h3>
                <p className="text-zinc-600 dark:text-mist-soft text-lg">
                  Criar soluções digitais que resolvam problemas reais do negócio, otimizem processos e gerem valor tangível para os nossos clientes.
                </p>
              </motion.div>
              <motion.div variants={fadeInUp} className="surface-card p-8">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-6">
                  <Rocket className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-display text-2xl font-bold text-zinc-900 dark:text-mist mb-4">Visão</h3>
                <p className="text-zinc-600 dark:text-mist-soft text-lg">
                  Ser referência no mercado de tecnologia, reconhecida pela qualidade das nossas soluções e pela parceria de confiança com os nossos clientes.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="text-center mb-16"
            >
              <motion.p
                variants={fadeInUp}
                className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-4"
              >
                Como Trabalhamos
              </motion.p>
              <motion.h2
                variants={fadeInUp}
                className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-zinc-900 dark:text-mist"
              >
                Nosso Processo em 6 Passos
              </motion.h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  variants={fadeInUp}
                  whileHover={{ y: -4 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative p-8 rounded-2xl border border-zinc-200 dark:border-white/10 bg-zinc-50 dark:bg-white/[0.03] hover:bg-white dark:hover:bg-white/[0.06] hover:shadow-lg transition-all duration-300"
                >
                  <div className="font-display text-5xl font-black text-violet-100 dark:text-violet-500/20 mb-4">{step.number}</div>
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-mist mb-3">{step.title}</h3>
                  <p className="text-zinc-600 dark:text-mist-soft">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Differentiators */}
        <section className="py-20 bg-gradient-to-br from-violet-50 to-blue-50 dark:from-abyss-2 dark:to-abyss-2">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="text-center mb-16"
            >
              <motion.p
                variants={fadeInUp}
                className="text-sm font-semibold text-violet-600 dark:text-violet-400 uppercase tracking-widest mb-4"
              >
                Diferenciais
              </motion.p>
              <motion.h2
                variants={fadeInUp}
                className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-zinc-900 dark:text-mist"
              >
                Por que Escolher a OPTIMAFY?
              </motion.h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {differentiators.map((item, index) => (
                <motion.div
                  key={item.title}
                  variants={fadeInUp}
                  whileHover={{ y: -4 }}
                  transition={{ delay: index * 0.1 }}
                  className="surface-card p-8"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-violet-500 to-blue-600 flex items-center justify-center mb-6">
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-mist mb-4">{item.title}</h3>
                  <p className="text-zinc-600 dark:text-mist-soft">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-zinc-900 dark:bg-abyss-2">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
            >
              <motion.h2
                variants={fadeInUp}
                className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6"
              >
                Vamos Trabalhar Juntos?
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="text-lg text-zinc-300 mb-10"
              >
                Entre em contato conosco e descubra como podemos ajudar a transformar sua operação com tecnologia de ponta.
              </motion.p>
              <motion.div variants={fadeInUp}>
                <WhatsappButton />
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
