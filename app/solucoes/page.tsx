"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsappButton from "@/components/WhatsappButton";
import { useState } from 'react';
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, viewportConfig } from "@/lib/animations";
import { ChevronDown, Globe, Bot, BarChart3, Plug } from "lucide-react";
import { FaReact, FaNodeJs, FaPython, FaAws } from "react-icons/fa";
import { SiNextdotjs, SiPostgresql, SiTypescript } from "react-icons/si";

const solutions = [
  {
    icon: Globe,
    title: "Sistemas e plataformas sob medida",
    problem: "Sua empresa precisa de um sistema que se adapte aos seus processos, não o contrário?",
    solution: "Criamos soluções digitais sob medida para organizar seus processos. Podem ser sistemas internos, plataformas, portais ou aplicações específicas.",
    benefits: [
      "Processos organizados de forma personalizada",
      "Escalabilidade para o crescimento da sua empresa",
      "Experiência do usuário adaptada às suas necessidades"
    ],
    tech: [
      { name: "React", icon: FaReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Node.js", icon: FaNodeJs },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "TypeScript", icon: SiTypescript },
      { name: "AWS", icon: FaAws },
    ],
    gradient: "from-violet-500 to-purple-600",
    whatsappMessage: "Olá! Quero saber mais sobre os sistemas e plataformas sob medida que vocês criam para organizar processos empresariais.",
  },
  {
    icon: Bot,
    title: "Automatize tarefas repetitivas",
    problem: "Sua equipe gasta tempo com tarefas que poderiam ser automatizadas?",
    solution: "Automatizamos tarefas repetitivas para economizar tempo e reduzir retrabalho. Integração de dados, envio de e-mails, atualização de planilhas e muito mais.",
    benefits: [
      "Menos trabalho manual",
      "Menos erros operacionais",
      "Mais tempo para atividades estratégicas"
    ],
    tech: [
      { name: "Python", icon: FaPython },
      { name: "Node.js", icon: FaNodeJs },
    ],
    gradient: "from-blue-500 to-cyan-500",
    whatsappMessage: "Olá! Quero conversar sobre automatização de tarefas repetitivas, como integração de dados, envio de e-mails e atualização de planilhas.",
  },
  {
    icon: BarChart3,
    title: "Visualize seus resultados",
    problem: "Não tem visibilidade clara sobre os resultados da sua empresa?",
    solution: "Dashboards para acompanhar vendas, operação, clientes e resultados em tempo real.",
    benefits: [
      "Decisões baseadas em dados",
      "Informações organizadas em um só lugar",
      "Visibilidade em tempo real sobre o negócio"
    ],
    tech: [
      { name: "React", icon: FaReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "PostgreSQL", icon: SiPostgresql },
    ],
    gradient: "from-cyan-500 to-teal-500",
    whatsappMessage: "Olá! Quero entender melhor sobre os dashboards para acompanhar vendas, operação, clientes e resultados em tempo real.",
  },
  {
    icon: Plug,
    title: "Conecte seus sistemas",
    problem: "Seus sistemas não se comunicam, gerando trabalho manual?",
    solution: "Fazemos sistemas diferentes conversarem entre si sem depender de trabalho manual. Integramos ERPs, CRMs e plataformas legadas em um ecossistema unificado.",
    benefits: [
      "Sistemas integrados em tempo real",
      "Menos retrabalho com dados duplicados",
      "Fluxos de trabalho mais eficientes"
    ],
    tech: [
      { name: "Node.js", icon: FaNodeJs },
      { name: "AWS", icon: FaAws },
      { name: "Python", icon: FaPython },
    ],
    gradient: "from-indigo-500 to-violet-600",
    whatsappMessage: "Olá! Quero conversar sobre integração de sistemas como ERPs, CRMs e plataformas legadas em um ecossistema unificado.",
  },
];

export default function SolucoesPage() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="relative overflow-hidden pt-24">
        {/* Hero Section */}
        <section className="py-12">
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
                Nossas Soluções
              </motion.p>
              <motion.h1
                variants={fadeInUp}
                className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-zinc-900 mb-4"
              >
                Soluções que resolvem seus problemas
              </motion.h1>
              <motion.p
                variants={fadeInUp}
                className="text-base sm:text-lg text-zinc-600 max-w-2xl mx-auto mb-7"
              >
                Cada solução começa por entender o seu problema, então mostramos como resolvemos.
              </motion.p>
              <motion.div variants={fadeInUp}>
                <WhatsappButton className="!px-7 !py-3 !text-sm" />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Solutions Sections */}
        <div className="space-y-10">
          {solutions.map((solution, index) => (
            <section key={solution.title} className="py-6">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportConfig}
                  className={`flex flex-col lg:flex-row gap-8 items-start`}
                >
                  <motion.div
                    variants={fadeInUp}
                    className="w-full"
                  >
                    <div className="p-5 rounded-2xl border border-zinc-200 bg-zinc-50">
                      <div className="mb-4">
                        <div
                          className={`w-10 h-10 rounded-xl bg-gradient-to-br ${solution.gradient} flex items-center justify-center shadow-lg`}
                        >
                          <solution.icon className="w-5 h-5 text-white" />
                        </div>
                      </div>
                      <h2 className="text-xl font-bold text-zinc-900 mb-6">{solution.title}</h2>

                      <div className="mb-6">
                        <h3 className="text-base font-semibold text-red-600 mb-2">O Problema</h3>
                        <p className="text-zinc-700 text-sm">{solution.problem}</p>
                      </div>

                      <div className="mb-6">
                        <h3 className="text-base font-semibold text-green-600 mb-2">A Solução</h3>
                        <p className="text-zinc-700 text-sm">{solution.solution}</p>
                      </div>

                      <div className="mb-6">
                        <h3 className="text-base font-semibold text-violet-600 mb-3">Benefícios</h3>
                        <ul className="flex flex-wrap items-center gap-x-4 gap-y-2">
                          {solution.benefits.map((benefit, i) => (
                            <li key={i} className="flex items-center gap-3 text-zinc-700 text-sm">
                              <div className="w-2 h-2 rounded-full bg-violet-500 shrink-0" />
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mb-6 border border-zinc-200 rounded-xl p-4 bg-zinc-50/50">
                        {/* Botão do Dropdown */}
                        <button
                          onClick={() => setIsOpen(!isOpen)}
                          className="flex items-center justify-between w-full text-left"
                        >
                          <h3 className="text-base font-semibold text-zinc-700">
                              Tecnologias (Informação Complementar)
                          </h3>
                          <ChevronDown 
                            className={`w-5 h-5 text-zinc-500 transition-transform duration-200 ${
                              isOpen ? 'rotate-180' : ''
                            }`} 
                          />
                        </button>

                        {/* Conteúdo Condicional */}
                        {isOpen && (
                          <div className="mt-4">
                            <div className="flex flex-wrap gap-3">
                              {solution.tech.map((tech, i) => (
                                <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-zinc-200 shadow-sm">
                                  <tech.icon className="w-3.5 h-3.5 text-zinc-700" />
                                  <span className="text-xs text-zinc-700 font-medium">{tech.name}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>

                      <div className="pt-2">
                        <WhatsappButton
                          className="!px-7 !py-3 !text-sm"
                          message={solution.whatsappMessage}
                        />
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </section>
          ))}
        </div>

        {/* CTA Section */}
        <section className="py-12 bg-gradient-to-br from-violet-50 to-blue-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
            >
              <motion.h2
                variants={fadeInUp}
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-zinc-900 mb-4"
              >
                Pronto para transformar sua operação?
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="text-base text-zinc-600 mb-7"
              >
                Converse com nossos especialistas e descubra como podemos ajudar sua empresa com tecnologia sob medida.
              </motion.p>
              <motion.div variants={fadeInUp}>
                <WhatsappButton className="!px-7 !py-3 !text-sm" />
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}