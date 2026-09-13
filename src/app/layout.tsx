import type { Metadata, Viewport } from "next";
import { Lora, Inter } from "next/font/google";
import "./globals.css";

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const viewport: Viewport = {
  themeColor: "#FAFAF9",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Solangge Naranjo | Supervisora de Producción y Calidad",
  description:
    "Currículum profesional de Solangge Naranjo. Licenciada en Ciencia y Cultura de la Alimentación con 20 años de trayectoria en supervisión de producción operativa, control de calidad, sistemas HACCP/ISO e innovación en agroindustria y retail.",
  keywords: [
    "Solangge Naranjo",
    "Supervisora de Producción",
    "Control de Calidad",
    "Agroindustria",
    "Retail",
    "HACCP",
    "ISO 22000",
    "ISO 9001",
    "Ciencia y Cultura de la Alimentación",
    "Barquisimeto",
    "Venezuela",
    "Laboratorio de Alimentos",
    "KPIs Producción",
  ],
  authors: [{ name: "Solangge Naranjo" }],
  creator: "Solangge Naranjo",
  publisher: "Solangge Naranjo",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Solangge Naranjo | Supervisora de Producción y Calidad",
    description:
      "Currículum profesional de Solangge Naranjo: 20 años de experiencia en producción, aseguramiento de la calidad y gestión de operaciones agroindustriales.",
    type: "profile",
    locale: "es_VE",
    siteName: "CV Solangge Naranjo",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${lora.variable} ${inter.variable}`}>
      <body className="font-sans antialiased text-[#27272A] bg-[#FAFAF9] selection:bg-[#3F6242] selection:text-white">
        {children}
      </body>
    </html>
  );
}
