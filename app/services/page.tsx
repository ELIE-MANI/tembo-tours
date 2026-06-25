import ServicesGrid from "@/components/services/ServicesGrid";
import Container from "@/components/ui/Container";

export default function ServicesPage() {
  return (
    <main className="bg-white">
      
      {/* Hero */}
      <section className="relative h-[65vh] flex items-center text-white overflow-hidden">
        
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/services-hero.jpg')",
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        <Container>
          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <p className="uppercase tracking-[6px] text-[#D4A017] text-sm font-medium mb-6">
              Our Services
            </p>

            <h1 className="text-5xl md:text-5xl font-bold leading-tight mb-6">
              Complete Travel Solutions
            </h1>

            <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
              From hotel reservations and flight tickets to Rwanda safaris,
              transport, and vehicle rentals — we handle every detail of your journey.
            </p>
          </div>
        </Container>
      </section>

      {/* Services Grid */}
      <Container>
        <ServicesGrid />
      </Container>
    </main>
  );
}