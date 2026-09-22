export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  href?: string;
}

export const services: Service[] = [
  {
    id: "tour-guide",
    title: "Tour Guide Services",
    description:
      "Explore Rwanda with experienced local tour guides who can accompany you throughout your journey and help you discover the country's culture, nature, and attractions.",
    icon: "map",
    href: "/booking/guide",
  },

  {
    id: "driver",
    title: "Driver Services",
    description:
      "Travel comfortably with professional drivers available for airport transfers, tours, safaris, private trips, and transportation throughout Rwanda.",
    icon: "car",
    href: "/booking/driver",
  },

  {
    id: "hotel-booking",
    title: "Hotel Reservations",
    description:
      "Find and reserve comfortable accommodation based on your destination, preferences, and travel needs.",
    icon: "hotel",
  },

  {
    id: "flight-booking",
    title: "Flight Ticket Booking",
    description:
      "Get assistance with flight reservations and travel arrangements for domestic and international journeys.",
    icon: "plane",
  },

  {
    id: "tour-packages",
    title: "Tour Packages",
    description:
      "Discover carefully planned Rwanda tours and unforgettable experiences designed around your travel interests.",
    icon: "map",
    href: "/tours",
  },

  {
    id: "vehicle-rental",
    title: "Vehicle Rental",
    description:
      "Choose a suitable vehicle for your trip and enjoy convenient transportation throughout your stay.",
    icon: "car",
  },

  {
    id: "airport-transfer",
    title: "Airport Transfers",
    description:
      "Enjoy reliable transportation between Kigali International Airport and your hotel or destination.",
    icon: "bus",
  },

  {
    id: "visa-assistance",
    title: "Visa Assistance",
    description:
      "Receive guidance and support with your travel documentation and visa-related requirements.",
    icon: "passport",
  },
];