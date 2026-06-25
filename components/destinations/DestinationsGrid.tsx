import { destinations } from "@/lib/data/destinations";
import DestinationCard from "../cards/DestinationCard";

export default function DestinationsGrid() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      
      {/* Intro */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-[#0B3D1F]">
          Top Destinations
        </h2>

        <div className="w-20 h-1 bg-[#D4A017] mx-auto rounded-full mt-4" />

        <p className="text-gray-600 mt-6 max-w-2xl mx-auto text-lg">
          Explore Rwanda’s most iconic destinations, each offering unique
          landscapes, wildlife, and cultural experiences.
        </p>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {destinations.map((destination) => (
          <DestinationCard
            key={destination.id}
            {...destination}
          />
        ))}
      </div>
    </section>
  );
}