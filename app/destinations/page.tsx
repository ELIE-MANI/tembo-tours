import DestinationsGrid from "@/components/destinations/DestinationsGrid";
import Container from "@/components/ui/Container";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Destinations",
  description:
    "Discover Rwanda's top destinations including Kigali, Akagera National Park, Volcanoes National Park, Nyungwe Forest, Lake Kivu, and Gishwati-Mukura.",
  keywords: [
    "Rwanda Destinations",
    "Kigali Tourism",
    "Akagera National Park",
    "Volcanoes National Park",
    "Nyungwe Forest",
    "Lake Kivu",
  ],
};

export default function DestinationsPage() {
  return (
    <main className="bg-white">
      
      {/* Hero Section */}
      <section className="relative h-[70vh] body-font flex items-center text-white overflow-hidden">
        
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/destinations-hero.jpg')",
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        <Container>
          <div className="relative z-10 max-w-3xl mx-auto text-center mt-20">
            <p className="uppercase tracking-[6px] text-[#D4A017] text-sm font-medium mb-6">
              Explore Rwanda
            </p>

            <h1 className="heading-font text-5xl md:text-5xl font-bold leading-tight mb-6">
              Discover Rwanda’s Hidden Wonders
            </h1>

            <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
              From mountain gorillas and breathtaking volcanoes to lakes,
              forests, and cultural treasures — Rwanda offers unforgettable adventures.
            </p>
          </div>
        </Container>
      </section>

      {/* Destinations Grid */}
      <DestinationsGrid />
    </main>
  );
}