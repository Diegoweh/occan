import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "OCCAN Properties — Camino al Mar | Mazatlán Vacation Rentals",
  description:
    "Fully-furnished luxury condominiums with panoramic Pacific views, curated by OCCAN Properties — your trusted partner for premium vacation experiences on Mexico's Gold Coast.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
