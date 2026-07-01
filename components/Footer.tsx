"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";
import { FaWhatsapp, FaLinkedin, FaInstagram } from "react-icons/fa";
import Link from "next/link";

const isDev = process.env.NODE_ENV === "development";

export default function Footer() {
  const whatsappUrl = "https://wa.me/556282470405?text=Olá, gostaria de saber mais sobre as automações e integrações que vocês oferecem para otimizar meu negócio!";

  return (
    <footer className="relative bg-zinc-50 border-t border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-5">
              <div className="w-8 h-8 flex items-center justify-center">
                <img src="/LOGO.svg" className="w-8 h-8 object-contain" alt="OPTIMAFY Logo" />
              </div>
              <span className="text-xl font-bold text-zinc-900 tracking-tight">
                OPTIMA<span className="text-[#1B365D]">FY</span>
              </span>
            </Link>
            <p className="text-zinc-600 text-sm leading-relaxed mb-3 max-w-xs">
              Engenharia de software de precisão para empresas que querem escalar com tecnologia e automação inteligente.
            </p>
            <p className="text-zinc-700 text-sm font-semibold mb-6">
              OPTIMAFY LTDA<br />
              CNPJ: 66.948.875/0001-28
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-2 text-sm text-zinc-600">
                <MapPin className="w-4 h-4 text-zinc-500" />
                <span>Goiânia, GO — Brasil</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-zinc-600">
                <Phone className="w-4 h-4 text-zinc-500" />
                <span>+55 (62) 8247-0405</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-zinc-600">
                <Mail className="w-4 h-4 text-zinc-500" />
                <span>optimafy@gmail.com</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/company/optimafy/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-xl border border-zinc-200 bg-white flex items-center justify-center text-zinc-500 hover:text-zinc-900 hover:border-zinc-400 hover:bg-zinc-100 transition-all duration-300"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-10 h-10 rounded-xl border border-zinc-200 bg-white flex items-center justify-center text-zinc-500 hover:text-emerald-600 hover:border-emerald-400 hover:bg-emerald-50 transition-all duration-300"
              >
                <FaWhatsapp className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/optimafy_/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-xl border border-zinc-200 bg-white flex items-center justify-center text-zinc-500 hover:text-pink-600 hover:border-pink-400 hover:bg-pink-50 transition-all duration-300"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Empresa Column */}
          <div>
            <h4 className="text-sm font-semibold text-zinc-900 uppercase tracking-wider mb-4">
              Empresa
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/sobre"
                  className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors duration-200"
                >
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link
                  href="/solucoes"
                  className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors duration-200"
                >
                  Soluções
                </Link>
              </li>
              <li>
                <Link
                  href="/contato"
                  className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors duration-200"
                >
                  Contato
                </Link>
              </li>
              {isDev && (
                <li>
                  <Link
                    href="/blog"
                    className="text-sm text-violet-600 hover:text-violet-800 transition-colors duration-200"
                  >
                    Blog (dev only)
                  </Link>
                </li>
              )}
            </ul>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="text-sm font-semibold text-zinc-900 uppercase tracking-wider mb-4">
              Links Rápidos
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/politica-de-privacidade"
                  className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors duration-200"
                >
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link
                  href="/politica-de-cookies"
                  className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors duration-200"
                >
                  Política de Cookies
                </Link>
              </li>
              <li>
                <Link
                  href="/termos-de-uso"
                  className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors duration-200"
                >
                  Termos de Uso
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato Column */}
          <div>
            <h4 className="text-sm font-semibold text-zinc-900 uppercase tracking-wider mb-4">
              Contato
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors duration-200"
                >
                  Falar no WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="mailto:optimafy@gmail.com"
                  className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors duration-200"
                >
                  Enviar E-mail
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-zinc-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-zinc-500">
              © {new Date().getFullYear()} OPTIMAFY. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
