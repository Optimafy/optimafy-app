import type { Metadata } from "next";
import { Spectral, Work_Sans, Outfit, Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import FloatingWhatsappButton from "@/components/FloatingWhatsappButton";

// Light mode ("bento editorial", preview 3) typography
const spectral = Spectral({
  variable: "--font-spectral",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});
const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

// Dark mode ("immersive depth", preview 4) typography
const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});
const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

// Runs before hydration to set the theme class synchronously and avoid a
// flash of the wrong theme. Reads the user's explicit choice from
// localStorage first, falling back to the OS/browser color-scheme.
const themeInitScript = `
(function () {
  try {
    var stored = localStorage.getItem("optimafy-theme");
    var theme = stored === "light" || stored === "dark"
      ? stored
      : (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    }
  } catch (e) {}
})();
`;

export const metadata: Metadata = {
  metadataBase: new URL("https://optimafy.net"),
  title: "OPTIMAFY — Engenharia de Software e Automação Inteligente",
  description:
    "Desenvolvimento de software sob medida, automações inteligentes e análise de dados para empresas que querem escalar com tecnologia de precisão e reduzir custos.",
  other: {
    'facebook-domain-verification': ['3e368t7e2jdt00h4xankc9bwsp9d6t']
  },
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
  alternates: {
    canonical: "https://optimafy.net",
  },
  openGraph: {
    title: "OPTIMAFY — Engenharia de Software e Automação Inteligente",
    description:
      "Escale sua operação com engenharia de software de precisão. Desenvolvimento sob medida, automações e BI para empresas.",
    url: "https://optimafy.net",
    type: "website",
    locale: "pt_BR",
    siteName: "OPTIMAFY",
  },
  twitter: {
    card: "summary_large_image",
    title: "OPTIMAFY — Engenharia de Software e Automação Inteligente",
    description:
      "Escale sua operação com engenharia de software de precisão. Desenvolvimento sob medida, automações e BI para empresas.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://optimafy.net/#organization",
  name: "OPTIMAFY LTDA",
  legalName: "OPTIMAFY LTDA",
  alternateName: "OPTIMAFY",
  url: "https://optimafy.net",
  logo: "https://optimafy.net/LOGO.svg",
  image: "https://optimafy.net/LOGO.svg",
  description:
    "Engenharia de software de precisão, automações inteligentes e análise de dados para empresas que querem escalar com tecnologia.",
  taxID: "66.948.875/0001-28",
  vatID: "66.948.875/0001-28",
  telephone: "+55-62-8247-0405",
  email: "optimafy@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Goiânia",
    addressRegion: "GO",
    addressCountry: "BR",
  },
  sameAs: [
    "https://www.linkedin.com/company/optimafy/",
    "https://www.instagram.com/optimafy_/",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${spectral.variable} ${workSans.variable} ${outfit.variable} ${plusJakarta.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="min-h-full bg-white text-zinc-800 dark:bg-abyss dark:text-mist" suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        {children}
        <FloatingWhatsappButton />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-YVSESZYCXQ"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-YVSESZYCXQ');
          `}
        </Script>
      </body>
    </html>
  );
}
