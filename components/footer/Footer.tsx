import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] text-white ">
      <div className="container mx-auto px-6 py-14">

        <div className="grid md:grid-cols-4 gap-10">

          {/* Company */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Rwanda Explore
            </h3>

            <p className="text-gray-300">
              Discover Rwanda through unforgettable experiences,
              luxury tours, safaris and authentic adventures.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">
              Quick Links
            </h4>

            <div className="space-y-2">
              <Link href="/">Home</Link><br />
              <Link href="/destinations">Destinations</Link><br />
              <Link href="/tours">Tours</Link><br />
              <Link href="/about">About</Link><br />
              <Link href="/contact">Contact</Link>
            </div>
          </div>

          {/* Destinations */}
          <div>
            <h4 className="font-semibold text-lg mb-4">
              Top Destinations
            </h4>

            <div className="space-y-2 text-gray-300">
              <p>Kigali Hub</p>
              <p>Akagera National Park</p>
              <p>Volcano National Park</p>
              <p>Nyungwe National Park</p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">
              Contact
            </h4>

            <div className="space-y-2 text-gray-300">
              <p>info@rwandaexplore.com</p>
              <p>+250 7XX XXX XXX</p>
              <p>Kigali, Rwanda</p>
            </div>
          </div>

        </div>

        <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-400">
          © {new Date().getFullYear()} Rwanda Explore. All rights reserved.
        </div>

      </div>
    </footer>
  );
}