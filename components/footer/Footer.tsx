import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0B3D1F] text-white mt-20">

      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-12">

        {/* Company */}

        <div>
          <h2 className="text-2xl font-bold text-[#D4C097]">
            Tembo Tours & Travel
          </h2>

          <p className="mt-4 text-gray-300">
            Discover Rwanda with unforgettable experiences and premium travel services.
          </p>
        </div>

        {/* Quick Links */}

        <div>
          <h3 className="font-semibold text-[#D4C097] mb-4">
            Quick Links
          </h3>

          <div className="space-y-3">

            <Link href="/">Home</Link>

            <br />

            <Link href="/about">About</Link>

            <br />

            <Link href="/destinations">Destinations</Link>

            <br />

            <Link href="/tours">Tours</Link>

            <br />

            <Link href="/contact">Contact</Link>

          </div>
        </div>

        {/* Contact */}

        <div>
          <h3 className="font-semibold text-[#D4C097] mb-4">
            Contact
          </h3>

          <p>Email: info@tembotours.com</p>

          <p>Phone: +250 XXX XXX XXX</p>

          <p>Kigali, Rwanda</p>
        </div>

      </div>

      <div className="border-t border-gray-700 text-center py-6">
        © 2026 Tembo Tours & Travel. All rights reserved.
      </div>
    </footer>
  );
}