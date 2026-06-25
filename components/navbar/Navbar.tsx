"use client";

import Link from "next/link";
import { Menu, Phone } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";
import MobileMenu from "./MobileMenu";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Destinations", href: "/destinations" },
  { name: "Tours", href: "/tours" },
  { name: "Bookings", href: "/booking" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="absolute top-0 left-0 w-full z-50 body-font">
      <div className="backdrop-blur-md bg-black/20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div>
              <h1 className="heading-font text-3xl font-bold text-white tracking-wide">
                TEMBO
              </h1>
              <p className="text-xs text-white/80 uppercase tracking-[3px]">
                Tours & Travel
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || pathname.startsWith(link.href + "/");

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative text-sm font-medium transition pb-2 ${
                    isActive
                      ? "text-[#D4A017]"
                      : "text-white hover:text-[#D4A017]"
                  }`}
                >
                  {link.name}

                  {/* Active underline */}
                  {isActive && (
                    <span className="absolute left-0 bottom-0 h-0.5 w-full bg-[#D4A017] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Side */}
          <div className="hidden lg:flex items-center gap-6">
            {/* Phone */}
            <div className="flex items-center gap-3 text-white">
              <div className="w-11 h-11 rounded-full border border-white/40 flex items-center justify-center">
                <Phone size={18} />
              </div>

              <div className="leading-tight">
                <p className="font-semibold text-sm">+250 794 107 972</p>
                <p className="text-xs text-white/70">
                  24/7 Customer Support
                </p>
              </div>
            </div>

            {/* CTA */}
            <Link
              href="/booking"
              className="bg-[#D4A017] text-black px-6 py-3 rounded-xl font-semibold hover:scale-105 transition"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white"
            onClick={() => setOpen(true)}
          >
            <Menu size={30} />
          </button>
        </div>
      </div>

      <MobileMenu open={open} setOpen={setOpen} />
    </header>
  );
}