import { tours } from "@/lib/data/tours";
import TourCard from "../cards/TourCard";

export default function ToursGrid() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {tours.map((tour : any) => (

          <TourCard
            key={tour.id}
            {...tour}
          />

        ))}

      </div>

    </section>
  );
}