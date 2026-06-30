"use client";

import { FaWhatsapp } from "react-icons/fa";
import { ArrowRight } from "lucide-react";

interface WhatsappButtonProps {
  phone?: string;
  message?: string;
  className?: string;
}

export default function WhatsappButton({
  phone = "556282470405",
  message = "Olá, gostaria de saber mais sobre as automações e integrações que vocês oferecem para otimizar meu negócio!",
  className = "group relative inline-flex items-center gap-2 px-10 py-4 text-base font-semibold text-white rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-500 hover:to-blue-500 transition-all duration-300 shadow-xl shadow-violet-600/20 hover:shadow-violet-500/30"
}: WhatsappButtonProps) {
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phone}?text=${encodedMessage}`;
  
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      <FaWhatsapp className="w-5 h-5" />
      <span>Falar no WhatsApp</span>
      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 blur-xl opacity-30 group-hover:opacity-50 transition-opacity -z-10" />
    </a>
  );
}
