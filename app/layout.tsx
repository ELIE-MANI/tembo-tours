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
  metadataBase: new URL("https://tembotravels.rw"),

  title: {
    default: "Tembo Tours & Travel | Explore Rwanda with Confidence",
    template: "%s | Tembo Tours & Travel",
  },

  description:
    "Discover Rwanda's breathtaking destinations with Tembo Tours & Travel. Gorilla trekking, wildlife safaris, hotel reservations, vehicle rentals, airport transfers, and customized travel experiences.",

  keywords: [
    "Rwanda Tours",
    "Rwanda Travel",
    "Gorilla Trekking Rwanda",
    "Akagera National Park",
    "Nyungwe National Park",
    "Volcanoes National Park",
    "Kigali Tours",
    "Rwanda Safaris",
    "Hotel Booking Rwanda",
    "Vehicle Rental Rwanda",
    "Airport Transfers Rwanda",
    "Tembo Tours",
    "Travel Agency Rwanda",
  ],

  authors: [
    {
      name: "Tembo Tours & Travel",
    },
  ],

  creator: "Tembo Tours & Travel",

  publisher: "Tembo Tours & Travel",

  openGraph: {
    title: "Tembo Tours & Travel | Explore Rwanda with Confidence",

    description:
      "Experience Rwanda through unforgettable safaris, cultural tours, hotel reservations, and premium travel services.",

    url: "https://tembotravels.rw",

    siteName: "Tembo Tours & Travel",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Tembo Tours & Travel Rwanda",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Tembo Tours & Travel",

    description:
      "Explore Rwanda's wildlife, culture, and natural beauty with Tembo Tours & Travel.",

    images: ["/images/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },

  category: "Travel",
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