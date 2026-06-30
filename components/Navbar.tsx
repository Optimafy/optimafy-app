"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  Menu,
  X,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const navLinks = [
  { label: "Início", href: "/" },
  { label: "Soluções", href: "/solucoes" },
  { label: "Sobre Nós", href: "/sobre" },
  { label: "Contato", href: "/contato" },
];

const isDev = process.env.NODE_ENV === "development";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleLinkClick = useCallback(() => {
    setTimeout(() => {
      setMobileOpen(false);
    }, 150);
  }, []);

  const handleToggleMenu = useCallback(() => {
    setMobileOpen((prev) => !prev);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/70 backdrop-blur-2xl border-b border-zinc-200/60 shadow-sm shadow-zinc-100/10"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative w-8 h-8 flex items-center justify-center">
              <img src="/LOGO.svg" className="w-8 h-8 object-contain" alt="OPTIMAFY Logo" />
            </div>
            <span className="text-xl font-bold tracking-tight text-zinc-900">
              OPTIMA<span className="text-[#1B365D]">FY</span>
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-zinc-600 hover:text-zinc-900 rounded-lg hover:bg-zinc-100/50 transition-all duration-300"
              >
                {link.label}
              </Link>
            ))}
            {isDev && (
              <Link
                href="/blog"
                className="px-4 py-2 text-sm font-medium text-violet-600 hover:text-violet-800 rounded-lg hover:bg-violet-50 transition-all duration-300"
              >
                Blog
              </Link>
            )}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/solucoes"
              className="px-4 py-2 text-sm font-medium text-zinc-700 border border-zinc-200 rounded-lg hover:border-zinc-400 hover:text-zinc-950 hover:bg-zinc-50/50 transition-all duration-300"
            >
              Ver Soluções
            </Link>
            <a
              href="https://wa.me/556282470405?text=Olá, gostaria de saber mais sobre as automações e integrações que vocês oferecem para otimizar meu negócio!"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-5 py-2.5 text-sm font-semibold text-white rounded-lg bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-500 hover:to-blue-500 transition-all duration-300 flex items-center gap-2"
            >
              <FaWhatsapp className="w-4 h-4" />
              <span className="relative z-10">Falar no WhatsApp</span>
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-violet-600 to-blue-600 blur-xl opacity-40 group-hover:opacity-60 transition-opacity" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={handleToggleMenu}
            className="lg:hidden p-2 text-zinc-600 hover:text-zinc-900 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden bg-white/95 backdrop-blur-2xl border-b border-zinc-200/60 will-change-transform"
          >
            <div className="px-4 py-6 space-y-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={handleLinkClick}
                    className="block px-4 py-3 text-base font-medium text-zinc-700 hover:text-zinc-950 hover:bg-zinc-100/50 rounded-lg transition-all"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              {isDev && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navLinks.length * 0.05 }}
                >
                  <Link
                    href="/blog"
                    onClick={handleLinkClick}
                    className="block px-4 py-3 text-base font-medium text-violet-600 hover:text-violet-800 hover:bg-violet-50 rounded-lg transition-all"
                  >
                    Blog
                  </Link>
                </motion.div>
              )}
              <div className="pt-4 space-y-3">
                <Link
                  href="/solucoes"
                  onClick={handleLinkClick}
                  className="block w-full text-center px-4 py-3 text-sm font-medium text-zinc-700 border border-zinc-200 rounded-lg hover:border-zinc-400 hover:bg-zinc-50 transition-all"
                >
                  Ver Soluções
                </Link>
                <a
                  href="https://wa.me/556282470405?text=Olá, gostaria de saber mais sobre as automações e integrações que vocês oferecem para otimizar meu negócio!"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleLinkClick}
                  className="block w-full text-center px-5 py-3 text-sm font-semibold text-white rounded-lg bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-500 hover:to-blue-500 transition-all flex items-center justify-center gap-2"
                >
                  <FaWhatsapp className="w-4 h-4" />
                  Falar no WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
