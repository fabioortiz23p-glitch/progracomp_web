import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Programa de Acompañamiento",
  description:
    "Sitio web del Programa de Acompañamiento de Ingeniería Industrial.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}