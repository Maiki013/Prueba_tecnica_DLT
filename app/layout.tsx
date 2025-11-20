// app/layout.tsx
import type { Metadata } from "next";
import { Sedan, Sedan_SC } from "next/font/google";
import "./globals.scss";

const sedan = Sedan({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-text",
});

const sedanSC = Sedan_SC({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-title",
});

export const metadata: Metadata = {
  title: "El Santuario",
  description: "Bestiario místico",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${sedan.variable} ${sedanSC.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
