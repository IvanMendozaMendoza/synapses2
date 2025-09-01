import type { Metadata } from "next";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "Secretaría de Desarrollo Económico de Morelos",
  description: "Portal oficial de indicadores económicos del Estado de Morelos. Información confiable del INEGI y fuentes gubernamentales para la toma de decisiones económicas y empresariales.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
