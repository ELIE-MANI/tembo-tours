import ServiceCard from "./ServiceCard";
import { services } from "@/lib/data/services";

export default function ServicesGrid() {
  return (
    <section className="py-24">

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {services.map((service : any) => (
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