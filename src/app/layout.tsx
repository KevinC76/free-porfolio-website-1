import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { portfolioConfig } from "@/config/portfolio";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif-display",
});

export const metadata: Metadata = {
  title: `${portfolioConfig.name} | ${portfolioConfig.role}`,
  description: portfolioConfig.bio,
  openGraph: {
    title: `${portfolioConfig.name} | ${portfolioConfig.role}`,
    description: portfolioConfig.bio,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: portfolioConfig.name,
    description: portfolioConfig.bio,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>{children}</body>
    </html>
  );
}
