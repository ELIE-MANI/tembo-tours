import Container from "../ui/Container";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-24 bg-white">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-[#0B3D1F] px-8 md:px-16 py-20 text-center text-white">
          
          {/* Background gradient */}
          <div className="absolute inset-0 bg-linear-to-r from-[#0B3D1F] via-[#14532d] to-[#0B3D1F]" />

          <div className="relative z-10 max-w-3xl mx-auto">
            
            {/* Heading */}
            <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Ready To Explore Rwanda?
            </h2>

            {/* Decorative line */}
            <div className="w-20 h-1 bg-[#D4A017] mx-auto rounded-full mb-8" />

            {/* Description */}
            <p className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed">
              Let us help you create unforgettable memories through curated
              safaris, cultural adventures, and premium travel experiences.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-5">
              
              <Link
                href="/booking"
                className="inline-flex items-center justify-center gap-2 bg-[#D4A017] text-black px-8 py-4 rounded-xl font-semibold hover:scale-105 transition"
              >
                Book Now
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 border border-white/30 px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition"
              >
                <Phone size={18} />
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}