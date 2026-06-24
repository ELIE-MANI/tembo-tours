import { destinations } from "@/lib/data/destinations";
import DestinationCard from "../cards/DestinationCard";

export default function DestinationsGrid() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">

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