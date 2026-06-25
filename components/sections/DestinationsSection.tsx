import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { destinations } from "@/lib/data/destinations";
import DestinationCard from "../cards/DestinationCard";

export default function Destinations() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0B3D1F]">
            Explore Rwanda
          </h2>

          {/* Decorative line */}
          <div className="w-20 h-1 bg-[#D4A017] mx-auto rounded-full mt-4" />

          <p className="text-gray-600 mt-6 max-w-2xl mx-auto text-lg">
            Discover breathtaking destinations, wildlife adventures, and unforgettable travel experiences across Rwanda.
          </p>
        </div>

        {/* Destination Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination: any) => (
            <DestinationCard
              key={destination.id}
              {...destination}
            />
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-14 flex justify-center">
          <Link
            href="/destinations"
            className="inline-flex items-center gap-2 bg-[#0B3D1F] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#14532d] transition"
          >
            View All Destinations
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}