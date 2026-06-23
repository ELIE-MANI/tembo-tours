import Link from "next/link";
import { navLinks } from "@/lib/data/navLinks";

export default function NavLinks() {
  return (
    <>
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="hover:text-[#D4C097] transition"
        >
          {link.name}
        </Link>
      ))}
    </>
  );
}