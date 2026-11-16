import type { Metadata } from "next";
import "./globals.css";
import ClientBody from "./ClientBody";

export const metadata: Metadata = {
  title: "Auril Cars | Concepto web de automoción",
  description: "Diseño conceptual de una web de automoción con Next.js, React y Tailwind CSS. Proyecto frontend con servicios, galería y contenido ilustrativo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <ClientBody>{children}</ClientBody>
    </html>
  );
}
