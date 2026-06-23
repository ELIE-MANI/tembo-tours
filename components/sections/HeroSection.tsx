import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="bg-[#0B3D1F] text-white">
      <div className="max-w-7xl mx-auto px-6 py-32">

        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          Explore Rwanda With Confidence
        </h1>

        <p className="mt-6 text-xl text-gray-200 max-w-2xl">
          Discover unforgettable adventures, wildlife safaris, and premium travel experiences with Tembo Tours & Travel.
        </p>

        <div className="mt-10 flex gap-4">
          <Link
            href="/tours"
            className="bg-[#D4C097] text-[#0B3D1F] px-8 py-4 rounded-xl font-semibold"
          >
            Explore Tours
          </Link>

          <Link
            href="/contact"
            className="border border-white px-8 py-4 rounded-xl"
          >
            Contact Us
          </Link>
        </div>

      </div>
    </section>
  );
}