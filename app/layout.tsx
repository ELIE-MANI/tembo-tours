import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: {
    default: "Tembo Tours & Travel",
    template: "%s | Tembo Tours & Travel",
  },
  description:
    "Discover Rwanda with Tembo Tours & Travel. Safaris, hotel reservations, vehicle rentals, and unforgettable experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
  lang="en"
  className={`${playfair.variable} ${inter.variable} h-full antialiased`}
>
      <body className="min-h-screen flex flex-col bg-[#FAFAF8] text-[#1A1A1A]">
        <Navbar />

        <main className="flex-1">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}