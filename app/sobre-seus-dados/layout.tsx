import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre os Dados do Seu Negócio | OPTIMAFY",
  description:
    "Como e por que a OPTIMAFY usa dados públicos do Google Maps para contato comercial, a base legal na LGPD e como pedir a remoção.",
  alternates: {
    canonical: "https://optimafy.net/sobre-seus-dados",
  },
  openGraph: {
    title: "Sobre os Dados do Seu Negócio | OPTIMAFY",
    description:
      "De onde veio o contato do seu negócio, a base legal na LGPD e como pedir a remoção definitiva.",
    url: "https://optimafy.net/sobre-seus-dados",
    type: "website",
    locale: "pt_BR",
    siteName: "OPTIMAFY",
  },
  twitter: {
    card: "summary",
    title: "Sobre os Dados do Seu Negócio | OPTIMAFY",
    description:
      "De onde veio o contato do seu negócio, a base legal na LGPD e como pedir a remoção definitiva.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function SobreSeusDadosLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
