import ToursGrid from "@/components/tours/ToursGrid";
import Container from "@/components/ui/Container";

export default function ToursPage() {
  return (
    <main className="bg-white">
      
      {/* Hero */}
      <section className="relative h-[70vh] body-font flex items-center text-white overflow-hidden">
        
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/tours-hero.jpg')",
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        <Container>
          <div className="relative z-10 text-center max-w-3xl mx-auto mt-20">
            <p className="uppercase tracking-[6px] text-[#D4A017] text-sm font-medium mb-6">
              Tour Packages
            </p>

            <h1 className="heading-font text-5xl md:text-5xl font-bold leading-tight mb-6">
              Unforgettable Rwanda Adventures
            </h1>

            <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
              Discover gorilla trekking, wildlife safaris, cultural experiences,
              and breathtaking journeys designed for unforgettable memories.
            </p>
          </div>
        </Container>
      </section>

      <ToursGrid />
    </main>
  );
}