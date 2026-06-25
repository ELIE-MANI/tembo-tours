import TestimonialCard from "../cards/TestimonialCard";
import { testimonials } from "@/lib/data/testimonials";

export default function Testimonials() {
  return (
    <section className="py-24 body-font bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="heading-font text-4xl md:text-5xl font-bold text-[#0B3D1F]">
            What Our Clients Say
          </h2>

          {/* Decorative line */}
          <div className="w-20 h-1 bg-[#D4A017] mx-auto rounded-full mt-4" />

          <p className="text-gray-600 mt-6 max-w-2xl mx-auto text-lg">
            Experiences shared by travelers from around the world who explored Rwanda with us.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial: any) => (
            <TestimonialCard
              key={testimonial.id}
              {...testimonial}
            />
          ))}
        </div>
      </div>
    </section>
  );
}