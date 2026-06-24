import DestinationsGrid from "@/components/destinations/DestinationsGrid";

export default function DestinationsPage() {
  return (
    <main className="bg-gray-50">

      {/* Hero Section */}
      <section className="bg-[#009879] text-white py-24">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-5xl font-bold mb-6">
            Explore Rwanda
          </h1>

          <p className="max-w-3xl mx-auto text-lg">
            Discover breathtaking landscapes, wildlife, culture, and unforgettable experiences throughout Rwanda.
          </p>

        </div>

      </section>

      {/* Destinations Grid */}
      <DestinationsGrid />

    </main>
  );
}