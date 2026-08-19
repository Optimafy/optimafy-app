import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre a OPTIMAFY — Missão, Processo e Diferenciais",
  description:
    "Conheça a OPTIMAFY: nossa missão, visão, o processo de 6 passos que usamos em cada projeto e os diferenciais que entregam resultado real para sua empresa.",
  alternates: {
    canonical: "https://optimafy.net/sobre",
  },
  openGraph: {
    title: "Sobre a OPTIMAFY — Missão, Processo e Diferenciais",
    description:
      "Nossa missão, visão, o processo de 6 passos que usamos em cada projeto e os diferenciais que entregam resultado real.",
    url: "https://optimafy.net/sobre",
    type: "website",
    locale: "pt_BR",
    siteName: "OPTIMAFY",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sobre a OPTIMAFY — Missão, Processo e Diferenciais",
    description:
      "Nossa missão, visão, o processo de 6 passos que usamos em cada projeto e os diferenciais que entregam resultado real.",
  },
};

export default function SobreLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
