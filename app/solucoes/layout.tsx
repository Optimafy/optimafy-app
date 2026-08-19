import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Soluções — Sistemas, Automação e Integração | OPTIMAFY",
  description:
    "Conheça as soluções da OPTIMAFY: sistemas sob medida, automação de tarefas repetitivas, dashboards de resultados e integração entre sistemas e ERPs.",
  alternates: {
    canonical: "https://optimafy.net/solucoes",
  },
  openGraph: {
    title: "Soluções — Sistemas, Automação e Integração | OPTIMAFY",
    description:
      "Sistemas sob medida, automação de tarefas repetitivas, dashboards de resultados e integração entre sistemas e ERPs.",
    url: "https://optimafy.net/solucoes",
    type: "website",
    locale: "pt_BR",
    siteName: "OPTIMAFY",
  },
  twitter: {
    card: "summary_large_image",
    title: "Soluções — Sistemas, Automação e Integração | OPTIMAFY",
    description:
      "Sistemas sob medida, automação de tarefas repetitivas, dashboards de resultados e integração entre sistemas e ERPs.",
  },
};

export default function SolucoesLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
