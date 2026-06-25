import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-28 bg-[#0B3D1F] relative overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute inset-0 bg-linear-to-r from-[#0B3D1F] via-[#14532d] to-[#0B3D1F]" />

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        
        {/* Heading */}
        <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
          Start Your Adventure Today
        </h2>

        {/* Decorative line */}
        <div className="w-24 h-1 bg-[#D4A017] mx-auto rounded-full mt-6" />

        {/* Description */}
        <p className="text-white/80 text-lg md:text-xl mt-8 max-w-2xl mx-auto leading-relaxed">
          Discover Rwanda’s beauty through unforgettable safaris, cultural journeys,
          and premium travel experiences crafted just for you.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          
          <Link
            href="/booking"
            className="inline-flex items-center gap-2 bg-[#D4A017] text-black px-8 py-4 rounded-xl font-semibold hover:scale-105 transition"
          >
            Book Your Tour
            <ArrowRight size={18} />
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 border border-white/30 text-white px-8 py-4 rounded-xl hover:bg-white/10 transition"
          >
            <Phone size={18} />
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}