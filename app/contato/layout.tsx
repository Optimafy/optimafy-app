import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contato — Fale com a OPTIMAFY e Peça seu Orçamento",
  description:
    "Entre em contato com a OPTIMAFY pelo WhatsApp, e-mail ou formulário. Resposta rápida, atendimento personalizado e orçamento sem compromisso.",
  alternates: {
    canonical: "https://optimafy.net/contato",
  },
  openGraph: {
    title: "Contato — Fale com a OPTIMAFY e Peça seu Orçamento",
    description:
      "Fale conosco pelo WhatsApp, e-mail ou formulário. Resposta rápida, atendimento personalizado e orçamento sem compromisso.",
    url: "https://optimafy.net/contato",
    type: "website",
    locale: "pt_BR",
    siteName: "OPTIMAFY",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contato — Fale com a OPTIMAFY e Peça seu Orçamento",
    description:
      "Fale conosco pelo WhatsApp, e-mail ou formulário. Resposta rápida, atendimento personalizado e orçamento sem compromisso.",
  },
};

export default function ContatoLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
