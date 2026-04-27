import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Programa de Acompañamiento",
  description: "Programa de Acompañamiento - Ingeniería Industrial Uniandes",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}