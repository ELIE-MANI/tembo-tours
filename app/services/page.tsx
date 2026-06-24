import ServicesGrid from "@/components/services/ServicesGrid";
import Container from "@/components/ui/Container";

export default function ServicesPage() {
  return (
    <>
   
    <main className="bg-gray-50">

      {/* Hero */}
      <section className="bg-[#009879] text-white py-24">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-5xl font-bold mb-6">
            Our Services
          </h1>

          <p className="max-w-3xl mx-auto text-lg">
            From hotel reservations and flight tickets to Rwanda safaris and vehicle rentals, we provide complete travel solutions.
          </p>

        </div>

      </section>
 <Container>
      <ServicesGrid />
</Container>
    </main>
    </>
  );
}