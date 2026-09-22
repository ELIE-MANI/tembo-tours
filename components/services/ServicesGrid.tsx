import ServiceCard from "./ServiceCard";
import { services } from "@/lib/data/services";

export default function ServicesGrid() {
  return (
    <section className="py-24">
      <div className="mb-16 text-center">
        <h2 className="text-4xl font-bold text-[#0B3D1F] md:text-5xl">
          What We Offer
        </h2>

        <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-[#D4A017]" />

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-gray-600">
          Whether you need a knowledgeable local guide, a professional
          driver, comfortable accommodation, or help organizing your
          entire trip, our services are designed around your travel needs.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            title={service.title}
            description={service.description}
            icon={service.icon}
            href={service.href}
          />
        ))}
      </div>
    </section>
  );
}