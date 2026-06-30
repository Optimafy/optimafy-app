"use client";

import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

export default function FloatingWhatsappButton() {
  const whatsappUrl = "https://wa.me/556282470405?text=Olá, gostaria de saber mais sobre as automações e integrações que vocês oferecem para otimizar meu negócio!";

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50"
    >
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 300, damping: 20 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="relative"
      >
        <div className="relative">
          {/* Pulse Effect */}
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.4, 0, 0.4]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute inset-0 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 opacity-40 blur-xl"
          />
          
          {/* Button */}
          <div className="relative w-16 h-16 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 shadow-xl shadow-green-500/40 flex items-center justify-center">
            <FaWhatsapp className="w-8 h-8 text-white" />
          </div>
        </div>
      </motion.div>
    </a>
  );
}
