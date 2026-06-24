import BookingCard from "@/components/bookings/BookingCard";

export default function BookingPage() {
  return (
    <main className="bg-gray-50 min-h-screen">

      <section className="max-w-7xl mx-auto px-6 py-24">

        <div className="text-center mb-16">

          <h1 className="text-5xl font-bold mb-6">
            Booking Center
          </h1>

          <p className="text-gray-600">
            Select the service you would like to book.
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-8">

          <BookingCard
            title="Hotel Booking"
            description="Reserve hotels worldwide."
            href="/booking/hotel"
          />

          <BookingCard
            title="Flight Tickets"
            description="Book international and domestic flights."
            href="/booking/ticket"
          />

          <BookingCard
            title="Tour Packages"
            description="Discover Rwanda with premium tours."
            href="/booking/tour"
          />

        </div>

      </section>

    </main>
  );
}