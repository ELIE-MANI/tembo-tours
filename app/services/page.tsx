import Container from "@/components/ui/Container";
import ServicesGrid from "@/components/services/ServicesGrid";

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary py-28 text-white">

        <Container>

          <div className="max-w-3xl">

            <h1 className="text-5xl font-bold mb-6">
              Our Services
            </h1>

            <p className="text-lg text-gray-200">
              We provide comprehensive travel solutions
              designed to make your journeys memorable,
              comfortable and stress-free.
            </p>

          </div>

        </Container>

      </section>

      {/* Services */}
      <section className="py-24">

        <Container>

          <div className="text-center mb-16">

            <h2 className="text-4xl font-bold mb-5">
              What We Offer
            </h2>

            <p className="text-gray-600">
              Explore our professional travel services.
            </p>

          </div>

          <ServicesGrid />

        </Container>

      </section>
    </>
  );
}