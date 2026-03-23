import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Rangel Embalagens - Soluções em Embalagens Flexíveis",
  description: "A Rangel Embalagens desenvolve soluções flexíveis de alta performance para proteger o aroma, valorizar sua marca e entregar mais qualidade ao consumidor final.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} scroll-smooth`}>
      <body className={`${inter.className} antialiased selection:bg-blue-600 selection:text-white`}>{children}</body>
    </html>
  );
}
