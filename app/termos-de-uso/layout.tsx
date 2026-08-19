import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Termos de Uso do Site — Regras e Condições | OPTIMAFY",
  description:
    "Leia os Termos de Uso do site da OPTIMAFY: regras de utilização, propriedade intelectual, limitação de responsabilidade e política de atualização.",
  alternates: {
    canonical: "https://optimafy.net/termos-de-uso",
  },
  openGraph: {
    title: "Termos de Uso do Site — Regras e Condições | OPTIMAFY",
    description:
      "Regras de utilização, propriedade intelectual, limitação de responsabilidade e política de atualização do site da OPTIMAFY.",
    url: "https://optimafy.net/termos-de-uso",
    type: "website",
    locale: "pt_BR",
    siteName: "OPTIMAFY",
  },
  twitter: {
    card: "summary",
    title: "Termos de Uso do Site — Regras e Condições | OPTIMAFY",
    description:
      "Regras de utilização, propriedade intelectual, limitação de responsabilidade e política de atualização do site da OPTIMAFY.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermosDeUsoLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
