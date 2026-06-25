import ServiceCard from "./ServiceCard";
import { services } from "@/lib/data/services";

export default function ServicesGrid() {
  return (
    <section className="py-24">
      
      {/* Intro */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-[#0B3D1F]">
          What We Offer
        </h2>

        <div className="w-20 h-1 bg-[#D4A017] mx-auto rounded-full mt-4" />

        <p className="text-gray-600 mt-6 max-w-2xl mx-auto text-lg">
          Explore our wide range of travel services designed to make your
          journey smooth, memorable, and stress-free.
        </p>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            title={service.title}
            description={service.description}
            icon={service.icon}
          />
        ))}
      </div>
    </section>
  );
}