import Link from "next/link";
import Container from "@/components/ui/Container";

const bookingCards = [
  {
    title: "Hotel Booking",
    description: "Reserve comfortable stays and luxury accommodations.",
    href: "/booking/hotel",
    emoji: "🏨",
  },

  {
    title: "Flight Ticket Booking",
    description: "Book domestic and international flights.",
    href: "/booking/ticket",
    emoji: "✈️",
  },

  {
    title: "Tour Packages",
    description: "Discover Rwanda with unforgettable experiences.",
    href: "/booking/tour",
    emoji: "🌍",
  },

  {
    title: "Vehicle Rental",
    description: "Comfortable and luxury transportation services.",
    href: "/booking/vehicle",
    emoji: "🚙",
  },
];

export default function BookingPage() {
  return (
    <section className="bg-[#F9F9F9] min-h-screen py-24 mt-20 body-font">
      <Container>

        <div className="text-center max-w-3xl mx-auto mb-16">

          <h1 className="heading-font text-5xl font-bold text-[#1A1A1A] mb-5">
            Booking Services
          </h1>

          <p className="text-gray-600">
            Choose the service you want and submit your request.
            Our travel team will contact you shortly.
          </p>

        </div>

        <div className="grid md:grid-cols-2 gap-8">

          {bookingCards.map((card) => (

            <Link
              key={card.title}
              href={card.href}
              className="bg-white rounded-3xl p-10 shadow hover:shadow-xl transition duration-300"
            >
              <div className="text-5xl mb-6">
                {card.emoji}
              </div>

              <h2 className="text-2xl font-bold mb-4 text-[#1A1A1A]">
                {card.title}
              </h2>

              <p className="text-gray-500 mb-6">
                {card.description}
              </p>

              <span className="text-[#C49A3A] font-semibold">
                Book Now →
              </span>

            </Link>

          ))}

        </div>

      </Container>
    </section>
  );
}