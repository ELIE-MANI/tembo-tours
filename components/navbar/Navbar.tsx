import Link from "next/link";
import NavLinks from "./NavLinks";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-[#0B3D1F] text-white shadow">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

        {/* Logo */}

        <Link href="/">
          <h1 className="text-2xl font-bold text-[#D4C097]">
            Tembo Tours
          </h1>
        </Link>

        {/* Desktop Navigation */}

        <nav className="hidden md:flex items-center gap-8">
          <NavLinks />
        </nav>

        {/* Book Now Button */}

        <Link
          href="/booking"
          className="hidden md:block bg-[#D4C097] text-[#0B3D1F] px-5 py-3 rounded-xl font-semibold"
        >
          Book Now
        </Link>
      </div>
    </header>
  );
}