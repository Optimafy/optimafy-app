import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidade e Proteção de Dados | OPTIMAFY",
  description:
    "Saiba como a OPTIMAFY coleta, usa e protege seus dados pessoais, e conheça seus direitos garantidos pela Lei Geral de Proteção de Dados (LGPD).",
  alternates: {
    canonical: "https://optimafy.net/politica-de-privacidade",
  },
  openGraph: {
    title: "Política de Privacidade e Proteção de Dados | OPTIMAFY",
    description:
      "Como a OPTIMAFY coleta, usa e protege seus dados pessoais, e seus direitos garantidos pela LGPD.",
    url: "https://optimafy.net/politica-de-privacidade",
    type: "website",
    locale: "pt_BR",
    siteName: "OPTIMAFY",
  },
  twitter: {
    card: "summary",
    title: "Política de Privacidade e Proteção de Dados | OPTIMAFY",
    description:
      "Como a OPTIMAFY coleta, usa e protege seus dados pessoais, e seus direitos garantidos pela LGPD.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PoliticaDePrivacidadeLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
