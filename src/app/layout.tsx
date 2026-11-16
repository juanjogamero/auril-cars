import type { Metadata } from "next";
import "./globals.css";
import ClientBody from "./ClientBody";

export const metadata: Metadata = {
  title: "Auril Cars | Automotive Web Concept",
  description: "Proyecto web conceptual para automoción desarrollado con Next.js, React, TypeScript y Tailwind CSS. Presentación de servicios y experiencia interactiva.",
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) {
  return <html lang="es"><ClientBody>{children}</ClientBody></html>;
}
