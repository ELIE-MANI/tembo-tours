import Container from "../ui/Container";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-24">
      <Container>

        <div className="bg-primary rounded-3xl p-16 text-center text-black">

          <h2 className="text-5xl font-bold mb-6">
            Ready To Explore Rwanda?
          </h2>

          <p className="text-lg mb-10">
            Let us help you create unforgettable memories.
          </p>

          <div className="flex justify-center gap-5">

            <Link
              href="/booking"
              className="bg-white text-primary px-8 py-4 rounded-xl font-semibold"
            >
              Book Now
            </Link>

            <Link
              href="/contact"
              className="border border-white px-8 py-4 rounded-xl font-semibold"
            >
              Contact Us
            </Link>

          </div>

        </div>

      </Container>
    </section>
  );
}