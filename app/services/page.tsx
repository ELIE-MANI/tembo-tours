import ServicesGrid from "@/components/services/ServicesGrid";
import Container from "@/components/ui/Container";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Travel Services",
  description:
    "Tembo Tours & Travel offers hotel reservations, flight bookings, tour packages, vehicle rentals, airport transfers, and visa assistance.",
  keywords: [
    "Travel Services Rwanda",
    "Hotel Booking Rwanda",
    "Vehicle Rental Rwanda",
    "Airport Transfers Rwanda",
    "Flight Booking Rwanda",
  ],
};
export default function ServicesPage() {
  return (
    <main className="bg-white">
      
      {/* Hero */}
      <section className="relative h-[65vh] flex body-font items-center text-white overflow-hidden">
        
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/services-hero.jpg')",
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        <Container>
          <div className="relative z-10 text-center max-w-3xl mx-auto mt-20">
            <p className="uppercase tracking-[6px] text-[#D4A017] text-sm font-medium mb-6">
              Our Services
            </p>

         <h1 className="heading-font mb-6 text-5xl font-bold leading-tight md:text-6xl">
          Travel Services Designed Around You
        </h1>

            <p className="text-lg leading-relaxed mb-2 text-gray-200 md:text-xl">
            From professional tour guides and private drivers to hotel
            reservations, flight bookings, vehicle rentals, and airport
            transfers, Tembo Travels helps you travel across Rwanda with
            comfort and confidence.
          </p>
          </div>
        </Container>
      </section>

      {/* Services Grid */}
      <Container>
        <ServicesGrid />
      </Container>
    </main>
  );
}