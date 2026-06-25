import type { Metadata } from "next";

import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import DestinationsSection from "@/components/sections/DestinationsSection";
import ToursSection from "@/components/sections/ToursSection";
import WhyChooseUsSection from "@/components/sections/WhyChooseUsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Explore Rwanda with Confidence",
  description:
    "Discover Rwanda with Tembo Tours & Travel. Gorilla trekking, wildlife safaris, hotel reservations, vehicle rentals, airport transfers, and unforgettable travel experiences.",
  keywords: [
    "Rwanda Tours",
    "Rwanda Travel",
    "Gorilla Trekking",
    "Akagera Safari",
    "Volcanoes National Park",
    "Tembo Tours",
  ],
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <DestinationsSection />
      <ToursSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}