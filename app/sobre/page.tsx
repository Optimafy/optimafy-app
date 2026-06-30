"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, viewportConfig } from "@/lib/animations";
import { Rocket, Target, Lightbulb, Users, Code2, Zap, ShieldCheck, CheckCircle2, ArrowRight } from "lucide-react";
import { FaWhatsapp, FaReact, FaNodeJs, FaPython, FaAws } from "react-icons/fa";
import { SiNextdotjs, SiPostgresql, SiTypescript } from "react-icons/si";

const steps = [
  { number: "01", title: "Descoberta", description: "Analisamos profundamente os desafios do seu negócio e definimos objetivos claros." },
  { number: "02", title: "Planejamento", description: "Criamos um roadmap detalhado com prazos e entregas bem definidas." },
  { number: "03", title: "Desenvolvimento", description: "Construímos soluções com foco em qualidade, escalabilidade e experiência do usuário." },
  { number: "04", title: "Testes & Validação", description: "Garantimos que tudo funcione perfeitamente antes do lançamento." },
  { number: "05", title: "Lançamento", description: "Implementamos a solução com suporte completo durante todo o processo." },
  { number: "06", title: "Otimização Contínua", description: "Acompanhamos e evoluímos a solução conforme as necessidades do seu negócio." },
];

const differentiators = [
  { icon: CheckCircle2, title: "Foco no Negócio", description: "Não só criamos código — resolvemos problemas reais do seu negócio." },
  { icon: Zap, title: "Agilidade", description: "Entregamos valor em ciclos curtos, com feedback constante." },
  { icon: ShieldCheck, title: "Segurança", description: "Priorizamos segurança e qualidade em tudo o que fazemos." },
];

const techStack = [
  { name: "React", icon: FaReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Node.js", icon: FaNodeJs },
  { name: "Python", icon: FaPython },
  { name: "AWS", icon: FaAws },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "TypeScript", icon: SiTypescript },
];

export default function SobrePage() {
  const whatsappUrl = "https://wa.me/556282470405?text=Olá, gostaria de saber mais sobre as automações e integrações que vocês oferecem para otimizar meu negócio!";

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="relative overflow-hidden pt-24 pb-16">
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
                Engenharia de Software de Precisão
              </motion.h1>
              <motion.p
                variants={fadeInUp}
                className="text-lg sm:text-xl text-zinc-600 max-w-3xl mx-auto"
              >
                Somos uma equipe apaixonada por tecnologia e por resolver problemas reais. Criamos soluções digitais que transformam operações e impulsionam o crescimento dos nossos clientes.
              </motion.p>
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

        {/* Tech Stack */}
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
                className="text-sm font-semibold text-violet-600 uppercase tracking-widest mb-4"
              >
                Tecnologias
              </motion.p>
              <motion.h2
                variants={fadeInUp}
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-zinc-900"
              >
                Nossa Stack de Tecnologias
              </motion.h2>
            </motion.div>

            <div className="flex flex-wrap justify-center items-center gap-8">
              {techStack.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  variants={fadeInUp}
                  whileHover={{ y: -4, scale: 1.1 }}
                  transition={{ delay: index * 0.08 }}
                  className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-zinc-50 border border-zinc-200 hover:border-violet-200 hover:bg-violet-50 transition-all duration-300"
                >
                  <tech.icon className="w-12 h-12 text-zinc-700" />
                  <span className="text-sm font-semibold text-zinc-700">{tech.name}</span>
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
              <motion.a
                variants={fadeInUp}
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-10 py-5 text-base font-semibold text-white rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-500 hover:to-blue-500 transition-all duration-300 shadow-xl shadow-violet-600/30 hover:shadow-violet-500/40"
              >
                <FaWhatsapp className="w-5 h-5" />
                <span>Falar no WhatsApp</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}