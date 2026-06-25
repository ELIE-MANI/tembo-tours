import Link from "next/link";
import {
  Hotel,
  Plane,
  Map,
  Car,
  Bus,
  ContactRound,
  ArrowRight,
} from "lucide-react";

import { services } from "@/lib/data/services";

const iconMap = {
  hotel: Hotel,
  plane: Plane,
  map: Map,
  car: Car,
  bus: Bus,
  passport: ContactRound,
};

export default function Services() {
  return (
    <section className="py-24 body-font bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="heading-font text-4xl md:text-5xl font-bold text-[#0B3D1F]">
            Our Services
          </h2>

          {/* Small decorative line */}
          <div className="w-20 h-1 bg-[#D4A017] mx-auto rounded-full mt-4" />

          <p className="text-gray-600 mt-6 max-w-2xl mx-auto text-lg">
            Complete travel solutions tailored for unforgettable journeys.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service: any) => {
            const Icon =
              iconMap[service.icon as keyof typeof iconMap];

            return (
              <div
                key={service.id}
                className="group bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-2 transition duration-300"
              >
                {/* Icon */}
                <div className="w-16 h-16 rounded-full bg-[#D4A017]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition">
                  <Icon
                    size={30}
                    className="text-[#0B3D1F]"
                  />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-[#0B3D1F] mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="mt-14 flex justify-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 bg-[#0B3D1F] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#14532d] transition"
          >
            View All Services
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}