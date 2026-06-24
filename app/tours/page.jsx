import ToursGrid from "@/components/tours/ToursGrid";

export default function ToursPage() {
  return (
    <main className="bg-gray-50">

      <section className="bg-[#009879] text-white py-24">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-5xl font-bold mb-6">
            Our Tour Packages
          </h1>

          <p className="max-w-3xl mx-auto text-lg">
            Discover Rwanda through unforgettable adventures and premium experiences.
          </p>

        </div>

      </section>

      <ToursGrid />

    </main>
  );
}