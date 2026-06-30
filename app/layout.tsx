import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import FloatingWhatsappButton from "@/components/FloatingWhatsappButton";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "OPTIMAFY — Engenharia de Software & Automações Inteligentes",
  description:
    "Desenvolvimento de software sob medida, automações inteligentes e análise de dados para empresas que querem escalar com tecnologia de precisão. Reduza custos, acelere processos e transforme sua operação.",
  keywords: [
    "desenvolvimento de software",
    "automação de processos",
    "RPA",
    "análise de dados",
    "business intelligence",
    "integração de sistemas",
    "API",
    "consultoria de tecnologia",
    "transformação digital",
  ],
  authors: [{ name: "OPTIMAFY" }],
  openGraph: {
    title: "OPTIMAFY — Engenharia de Software & Automações Inteligentes",
    description:
      "Escale sua operação com engenharia de software de precisão. Desenvolvimento sob medida, automações e BI para empresas.",
    type: "website",
    locale: "pt_BR",
    siteName: "OPTIMAFY",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full bg-bg text-zinc-800">
        {children}
        <FloatingWhatsappButton />
      </body>
    </html>
  );
}
