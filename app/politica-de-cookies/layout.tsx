import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Cookies — Como Usamos Cookies | OPTIMAFY",
  description:
    "Entenda como o site da OPTIMAFY utiliza cookies essenciais e de desempenho para melhorar sua experiência de navegação, e como gerenciá-los no navegador.",
  alternates: {
    canonical: "https://optimafy.net/politica-de-cookies",
  },
  openGraph: {
    title: "Política de Cookies — Como Usamos Cookies | OPTIMAFY",
    description:
      "Como o site da OPTIMAFY utiliza cookies essenciais e de desempenho, e como gerenciá-los no navegador.",
    url: "https://optimafy.net/politica-de-cookies",
    type: "website",
    locale: "pt_BR",
    siteName: "OPTIMAFY",
  },
  twitter: {
    card: "summary",
    title: "Política de Cookies — Como Usamos Cookies | OPTIMAFY",
    description:
      "Como o site da OPTIMAFY utiliza cookies essenciais e de desempenho, e como gerenciá-los no navegador.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PoliticaDeCookiesLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
