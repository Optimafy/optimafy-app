"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  fadeInUp,
  staggerContainer,
  viewportConfig,
} from "@/lib/animations";
import {
  AlertTriangle,
  CheckCircle2,
  Terminal,
  LayoutDashboard,
  TrendingUp,
  Clock,
  ShieldCheck,
  Activity,
} from "lucide-react";

const tabs = [
  {
    id: "problem",
    label: "O Problema",
    icon: AlertTriangle,
  },
  {
    id: "solution",
    label: "Nossa Solução",
    icon: CheckCircle2,
  },
];

const terminalLines = [
  { type: "error", text: "ERROR: Timeout ao conectar com sistema legado..." },
  { type: "warn", text: "WARN: 3.247 registros duplicados encontrados" },
  { type: "error", text: "ERROR: Relatório mensal falhou — dados inconsistentes" },
  { type: "info", text: "INFO: Processo manual iniciado por operador #12..." },
  { type: "warn", text: "WARN: Tempo médio de resposta: 12.4s (acima do limite)" },
  { type: "error", text: "ERROR: Integração com CRM desconectada há 6 horas" },
  { type: "info", text: "INFO: 47 planilhas pendentes de consolidação manual" },
  { type: "error", text: "FATAL: Perda de dados no batch noturno — rollback necessário" },
];

const dashboardMetrics = [
  { label: "Uptime", value: "Elevado", icon: Activity, trend: "Melhoria contínua", positive: true },
  { label: "Tempo de Resposta", value: "Rápido", icon: Clock, trend: "Otimização constante", positive: true },
  { label: "Erros/Dia", value: "Baixos", icon: ShieldCheck, trend: "Redução significativa", positive: true },
  { label: "Vazão", value: "Eficiente", icon: TrendingUp, trend: "Escalabilidade", positive: true },
];

const solutionsLines = [
  { type: "info", text: "INFO: Processos automatizados em funcionamento." },
  { type: "success", text: "SUCCESS: Integração de sistemas feita com sucesso." },
  { type: "info", text: "INFO: Análise e visualização de dados em tempo real." },
  { type: "success", text: "SUCCESS: Otimização de processos concluída." },
  { type: "success", text: "SUCCESS: Eficiência operacional alcançada." },
];

export default function TechShowcase() {
  const [activeTab, setActiveTab] = useState("problem");

  return (
    <section id="como-funciona" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
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
            Como Funciona
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-zinc-900 tracking-tight mb-6"
          >
            Do caos operacional à{" "}
            <span className="text-[#1B365D]">
              eficiência automatizada
            </span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="max-w-2xl mx-auto text-lg text-zinc-600"
          >
            Veja a diferença entre operar com processos manuais e ter a OPTIMAFY
            como parceira tecnológica.
          </motion.p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center p-1 rounded-xl bg-zinc-100 border border-zinc-200">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? "text-zinc-950"
                      : "text-zinc-500 hover:text-zinc-700"
                  }`}
                >
                  {activeTab === tab.id && (
                    <motion.div
                      layoutId="activeTab"
                      className={`absolute inset-0 rounded-lg ${
                        tab.id === "problem"
                          ? "bg-red-500/10 border border-red-500/20"
                          : "bg-emerald-500/10 border border-emerald-500/20"
                      }`}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                    />
                  )}
                  <tab.icon
                    className={`w-4 h-4 relative z-10 ${
                      activeTab === tab.id
                        ? tab.id === "problem"
                          ? "text-red-400"
                          : "text-emerald-400"
                        : ""
                    }`}
                  />
                  <span className="relative z-10">{tab.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              {activeTab === "problem" ? (
                <motion.div
                  key="problem"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="rounded-2xl border border-zinc-200 bg-zinc-50 overflow-hidden shadow-sm"
                >
                  {/* Terminal Header */}
                  <div className="flex items-center gap-2 px-4 py-3 border-b border-zinc-200 bg-zinc-100">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500/80" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                      <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    </div>
                    <div className="flex items-center gap-2 ml-3 text-zinc-500 text-xs">
                      <Terminal className="w-3.5 h-3.5" />
                      <span>sistema-legado — logs em tempo real</span>
                    </div>
                  </div>

                  {/* Terminal Body */}
                  <div className="p-6 font-mono text-sm space-y-2 min-h-[320px]">
                    {terminalLines.map((line, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.12, duration: 0.3 }}
                        className={`flex items-start gap-2 ${
                          line.type === "error"
                            ? "text-red-600"
                            : line.type === "warn"
                            ? "text-yellow-600"
                            : line.type === "info"
                              ? "text-blue-600"
                            : "text-zinc-600"                            
                        }`}
                      >
                        <span className="text-zinc-700 select-none">$</span>
                        <span>{line.text}</span>
                      </motion.div>
                    ))}
                    <div className="flex items-center gap-2 text-zinc-600 mt-4">
                      <span className="text-zinc-700">$</span>
                      <span className="animate-pulse">▊</span>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="solution"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="rounded-2xl border border-zinc-200 bg-zinc-50 overflow-hidden shadow-sm"
                >
                  {/* Dashboard Header */}
                  <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-200 bg-zinc-100">
                    <div className="flex items-center gap-2 text-zinc-700 text-sm font-medium">
                      <LayoutDashboard className="w-4 h-4 text-emerald-400" />
                      <span>OPTIMAFY Dashboard — Produção</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-xs text-emerald-400 font-medium">
                        All Systems Operational
                      </span>
                    </div>
                  </div>

                  {/* Dashboard Body */}
                  <div className="p-6 min-h-[320px]">
                    {/* Metrics Grid */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                      {dashboardMetrics.map((metric, i) => (
                        <motion.div
                          key={metric.label}
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.1, duration: 0.4 }}
                          className="p-4 rounded-xl border border-zinc-200 bg-white"
                        >
                          <div className="flex items-center gap-2 mb-2">
                            <metric.icon className="w-4 h-4 text-zinc-500" />
                            <span className="text-xs text-zinc-600 font-medium">
                              {metric.label}
                            </span>
                          </div>
                          <div className="text-2xl font-bold text-zinc-900 mb-1">
                            {metric.value}
                          </div>
                          <div className="text-xs font-medium text-emerald-600">
                            {metric.trend}
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Terminal Body */}
                    <div className="p-6 font-mono text-sm space-y-2 min-h-[200px]">
                      {solutionsLines.map((line, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.12, duration: 0.3 }}
                          className={`flex items-start gap-2 ${
                            line.type === "success"
                              ? "text-green-600"
                              : line.type === "info"
                              ? "text-blue-600"
                              : "text-zinc-600"  
                          }`}
                        >
                          <span className="text-zinc-700 select-none">$</span>
                          <span>{line.text}</span>
                        </motion.div>
                      ))}
                      <div className="flex items-center gap-2 text-zinc-600 mt-4">
                        <span className="text-zinc-700">$</span>
                        <span className="animate-pulse">▊</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
