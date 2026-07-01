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
    <div className="min-h-screen bg-white">
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
                className="text-sm font-semibold text-violet-600 uppercase tracking-widest mb-4"
              >
                Sobre Nós
              </motion.p>
              <motion.h1
                variants={fadeInUp}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-900 mb-6"
              >
                Soluções que Fazem a Diferença
              </motion.h1>
              <motion.p
                variants={fadeInUp}
                className="text-lg sm:text-xl text-zinc-600 max-w-3xl mx-auto mb-8"
              >
                Somos uma equipe apaixonada por ajudar empresas a trabalhar melhor com tecnologia. Focamos em resultados tangíveis, confiança e atendimento personalizado.
              </motion.p>
              <motion.div variants={fadeInUp}>
                <WhatsappButton />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-zinc-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12"
            >
              <motion.div variants={fadeInUp} className="bg-white p-8 rounded-2xl border border-zinc-200 shadow-sm">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-zinc-900 mb-4">Missão</h3>
                <p className="text-zinc-600 text-lg">
                  Criar soluções digitais que resolvam problemas reais do negócio, otimizem processos e gerem valor tangível para os nossos clientes.
                </p>
              </motion.div>
              <motion.div variants={fadeInUp} className="bg-white p-8 rounded-2xl border border-zinc-200 shadow-sm">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-6">
                  <Rocket className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-zinc-900 mb-4">Visão</h3>
                <p className="text-zinc-600 text-lg">
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
                className="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-4"
              >
                Como Trabalhamos
              </motion.p>
              <motion.h2
                variants={fadeInUp}
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-zinc-900"
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
                  className="relative p-8 rounded-2xl border border-zinc-200 bg-zinc-50 hover:bg-white hover:shadow-lg transition-all duration-300"
                >
                  <div className="text-5xl font-black text-violet-100 mb-4">{step.number}</div>
                  <h3 className="text-xl font-bold text-zinc-900 mb-3">{step.title}</h3>
                  <p className="text-zinc-600">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Differentiators */}
        <section className="py-20 bg-gradient-to-br from-violet-50 to-blue-50">
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
                className="text-sm font-semibold text-violet-600 uppercase tracking-widest mb-4"
              >
                Diferenciais
              </motion.p>
              <motion.h2
                variants={fadeInUp}
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-zinc-900"
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
                  className="p-8 rounded-2xl bg-white border border-zinc-200 shadow-sm"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-violet-500 to-blue-600 flex items-center justify-center mb-6">
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-zinc-900 mb-4">{item.title}</h3>
                  <p className="text-zinc-600">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-zinc-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
            >
              <motion.h2
                variants={fadeInUp}
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6"
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
