import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  /* ======================================================
     SEO BÁSICO
  ====================================================== */
  title: {
    default: "Ruben Web Studio | Landing Pages en Cancún",
    template: "%s | Ruben Web Studio",
  },

  description:
    "Diseño de landing pages modernas para negocios locales en Cancún. Clínicas, detailing, turismo, rentas, talleres y servicios profesionales.",

  keywords: [
    "landing pages cancún",
    "diseño web cancún",
    "páginas web cancún",
    "landing page negocios locales",
    "nextjs landing page",
    "diseño web profesional",
    "seo local cancún",
  ],

  authors: [
    {
      name: "Ruben Web Studio",
    },
  ],

  creator: "Ruben Web Studio",

  metadataBase: new URL("https://tudominio.com"),

  /* ======================================================
     OPEN GRAPH (FACEBOOK / WHATSAPP)
  ====================================================== */
  openGraph: {
    title: "Landing Pages para Negocios Locales en Cancún",

    description:
      "Landing pages modernas y optimizadas para negocios locales que quieren más clientes y más mensajes por WhatsApp.",

    url: "https://tudominio.com",

    siteName: "Ruben Web Studio",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Landing Pages en Cancún",
      },
    ],

    locale: "es_MX",

    type: "website",
  },

  /* ======================================================
     TWITTER CARD
  ====================================================== */
  twitter: {
    card: "summary_large_image",

    title: "Landing Pages para Negocios Locales en Cancún",

    description:
      "Diseño web moderno para clínicas, detailing, turismo y negocios locales.",

    images: ["/og-image.jpg"],
  },

  /* ======================================================
     ROBOTS
  ====================================================== */
  robots: {
    index: true,
    follow: true,
  },

  /* ======================================================
     ICONOS / FAVICON
  ====================================================== */
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es-MX"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
