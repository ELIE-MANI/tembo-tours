import Link from "next/link";
import { ArrowRight } from "lucide-react";
import TourCard from "../cards/TourCard";
import { tours } from "@/lib/data/tours";

export default function Tours() {
  return (
    <section className="py-24 body-font bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="heading-font text-4xl md:text-5xl font-bold text-[#0B3D1F]">
            Popular Tours
          </h2>

          {/* Decorative line */}
          <div className="w-20 h-1 bg-[#D4A017] mx-auto rounded-full mt-4" />

          <p className="text-gray-600 mt-6 max-w-2xl mx-auto text-lg">
            Explore our most loved safari experiences, cultural journeys, and adventure packages crafted for unforgettable memories.
          </p>
        </div>

        {/* Tours Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours.map((tour) => (
            <TourCard
              key={tour.id}
              {...tour}
            />
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-14 flex justify-center">
          <Link
            href="/tours"
            className="inline-flex items-center gap-2 bg-[#0B3D1F] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#14532d] transition"
          >
            View All Tours
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}