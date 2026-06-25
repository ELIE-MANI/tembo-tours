import { tours } from "@/lib/data/tours";
import TourCard from "../cards/TourCard";

export default function ToursGrid() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      
      {/* Intro */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-[#0B3D1F]">
          Featured Tour Packages
        </h2>

        <div className="w-20 h-1 bg-[#D4A017] mx-auto rounded-full mt-4" />

        <p className="text-gray-600 mt-6 max-w-2xl mx-auto text-lg">
          Choose from our carefully curated safari and travel experiences,
          designed to give you the best of Rwanda.
        </p>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {tours.map((tour: any) => (
          <TourCard
            key={tour.id}
            {...tour}
          />
        ))}
      </div>
    </section>
  );
}