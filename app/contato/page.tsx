"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, viewportConfig } from "@/lib/animations";
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { useState } from "react";

export default function ContatoPage() {
  const whatsappUrl = "https://wa.me/556282470405?text=Olá, gostaria de saber mais sobre as automações e integrações que vocês oferecem para otimizar meu negócio!";
  const [formData, setFormData] = useState({ name: "", contact: "", message: "", lgpd: false, marketing: false });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormData({ name: "", contact: "", message: "", lgpd: false, marketing: false });
  };

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
                Contato
              </motion.p>
              <motion.h1
                variants={fadeInUp}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-900 mb-6"
              >
                Entre em Contato
              </motion.h1>
              <motion.p
                variants={fadeInUp}
                className="text-lg sm:text-xl text-zinc-600 max-w-2xl mx-auto"
              >
                Fale conosco para saber mais sobre nossas soluções e como podemos ajudar a transformar sua operação.
              </motion.p>
            </motion.div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={viewportConfig}
              >
                <motion.div variants={fadeInUp} className="mb-10">
                  <h2 className="text-3xl font-bold text-zinc-900 mb-6">Informações de Contato</h2>
                  <p className="text-zinc-600 text-lg mb-8">
                    Estamos prontos para ouvir sobre seus desafios e ajudar a encontrar a melhor solução digital para o seu negócio.
                  </p>
                </motion.div>

                <div className="space-y-6">
                  <motion.div variants={fadeInUp} className="flex items-start gap-4 p-6 rounded-2xl bg-zinc-50 border border-zinc-200">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center flex-shrink-0">
                      <FaWhatsapp className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-zinc-900 mb-1">WhatsApp</h3>
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-600 hover:text-violet-600 font-medium transition-colors"
                      >
                        +55 (62) 8247-0405
                      </a>
                    </div>
                  </motion.div>

                  <motion.div variants={fadeInUp} className="flex items-start gap-4 p-6 rounded-2xl bg-zinc-50 border border-zinc-200">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center flex-shrink-0">
                      <MdEmail className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-zinc-900 mb-1">E-mail</h3>
                      <a
                        href="mailto:optimafy@gmail.com"
                        className="text-zinc-600 hover:text-violet-600 font-medium transition-colors"
                      >
                        optimafy@gmail.com
                      </a>
                    </div>
                  </motion.div>

                  <motion.div variants={fadeInUp} className="flex items-start gap-4 p-6 rounded-2xl bg-zinc-50 border border-zinc-200">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                      <MdLocationOn className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-zinc-900 mb-1">Localização</h3>
                      <p className="text-zinc-600">Goiânia, GO — Brasil</p>
                    </div>
                  </motion.div>
                </div>

                <motion.div variants={fadeInUp} className="mt-10">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 px-10 py-5 text-base font-semibold text-white rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-500 hover:to-blue-500 transition-all duration-300 shadow-xl shadow-violet-600/20 hover:shadow-violet-500/30"
                  >
                    <FaWhatsapp className="w-5 h-5" />
                    <span>Falar no WhatsApp</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </motion.div>
              </motion.div>

              {/* Form */}
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={viewportConfig}
              >
                <motion.div variants={fadeInUp} className="bg-zinc-50 p-8 rounded-2xl border border-zinc-200">
                  {submitted ? (
                    <div className="text-center py-12">
                      <CheckCircle2 className="w-20 h-20 text-emerald-500 mx-auto mb-6" />
                      <h3 className="text-2xl font-bold text-zinc-900 mb-2">Mensagem enviada!</h3>
                      <p className="text-zinc-600">Obrigado por entrar em contato. Retornaremos em breve.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label className="block text-sm font-semibold text-zinc-700 mb-2">Nome</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-white focus:outline-none focus:border-violet-500 transition-colors"
                          placeholder="Seu nome completo"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-zinc-700 mb-2">Contato</label>
                        <input
                          type="text"
                          required
                          value={formData.contact}
                          onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-white focus:outline-none focus:border-violet-500 transition-colors"
                          placeholder="E-mail ou telefone"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-zinc-700 mb-2">Mensagem</label>
                        <textarea
                          required
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          rows={5}
                          className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-white focus:outline-none focus:border-violet-500 transition-colors"
                          placeholder="Como podemos ajudar?"
                        />
                      </div>

                      <div className="space-y-4">
                        <label className="flex items-start gap-3 cursor-pointer">
                          <input
                            type="checkbox"
                            required
                            checked={formData.lgpd}
                            onChange={(e) => setFormData({ ...formData, lgpd: e.target.checked })}
                            className="mt-1 w-5 h-5 rounded border-zinc-300 text-violet-600 focus:ring-violet-500"
                          />
                          <span className="text-sm text-zinc-600">
                            Ao enviar este formulário, você concorda com nossa <a href="/politica-de-privacidade" className="text-violet-600 hover:text-violet-800 font-medium">Política de Privacidade</a> e autoriza a OPTIMAFY a armazenar e processar seus dados para fins de contato e relacionamento comercial, conforme a LGPD.
                          </span>
                        </label>

                        <label className="flex items-start gap-3 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={formData.marketing}
                            onChange={(e) => setFormData({ ...formData, marketing: e.target.checked })}
                            className="mt-1 w-5 h-5 rounded border-zinc-300 text-violet-600 focus:ring-violet-500"
                          />
                          <span className="text-sm text-zinc-600">
                            Gostaria de receber e-mails com novidades e conteúdos relevantes (opcional).
                          </span>
                        </label>
                      </div>

                      <button
                        type="submit"
                        className="group w-full inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-500 hover:to-blue-500 transition-all duration-300 shadow-xl shadow-violet-600/20 hover:shadow-violet-500/30"
                      >
                        Enviar Mensagem
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </form>
                  )}
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}