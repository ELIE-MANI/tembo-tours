import Link from "next/link";
import { Play, Compass, Users, Headphones, Leaf } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen body-font text-white overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/rwanda-hero.jpg')",
        }}
        
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 min-h-screen flex items-center">
        <div className="max-w-3xl">
          {/* Small Label */}
          <p className="uppercase tracking-[6px] text-[#D4A017] text-sm font-medium mb-6">
            Welcome to Rwanda
          </p>

          {/* Heading */}
          <h1 className="heading-font text-5xl md:text-7xl font-bold leading-tight">
            Explore Rwanda <br />
            With Confidence
          </h1>

          {/* Description */}
          <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-2xl leading-relaxed">
            Discover unforgettable adventures, wildlife safaris, and premium
            travel experiences with{" "}
            <span className="text-[#D4A017] font-medium">
              Tembo Tours & Travel
            </span>
            .
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/tours"
              className="flex items-center gap-2 bg-[#D4A017] text-black px-8 py-4 rounded-xl font-semibold hover:scale-105 transition"
            >
              <Compass size={18} />
              Explore Tours
            </Link>

            <Link
              href="/contact"
              className="flex items-center gap-2 border border-white/40 backdrop-blur-md px-8 py-4 rounded-xl hover:bg-white/10 transition"
            >
              <Play size={18} />
              Watch Video
            </Link>
          </div>

          {/* Stats Cards */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl">
            <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-6 flex items-center gap-4">
              <Leaf className="text-[#D4A017]" />
              <div>
                <h3 className="text-2xl font-bold">10+ Years</h3>
                <p className="text-gray-300 text-sm">Experience</p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-6 flex items-center gap-4">
              <Users className="text-[#D4A017]" />
              <div>
                <h3 className="text-2xl font-bold">5000+</h3>
                <p className="text-gray-300 text-sm">Happy Travelers</p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-6 flex items-center gap-4">
              <Headphones className="text-[#D4A017]" />
              <div>
                <h3 className="text-2xl font-bold">24/7</h3>
                <p className="text-gray-300 text-sm">Customer Support</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-8 z-20 flex items-center gap-3 text-sm text-white/80">
        <div className="w-8 h-8 border border-white/30 rounded-full flex items-center justify-center animate-bounce">
          ↓
        </div>
        <span>Scroll Down</span>
      </div>
    </section>
  );
}