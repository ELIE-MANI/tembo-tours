import {
  MapPinned,
  Headphones,
  Mountain,
} from "lucide-react";

export default function TestimonialsSection() {
  const promises = [
    {
      icon: MapPinned,
      title: "Personalized Itineraries",
      description:
        "Every journey is carefully tailored to your interests, travel style, and schedule for a truly unique experience.",
    },
    {
      icon: Headphones,
      title: "Professional Support",
      description:
        "Our team is available before, during, and after your trip to ensure a smooth and enjoyable travel experience.",
    },
    {
      icon: Mountain,
      title: "Authentic Experiences",
      description:
        "Discover Rwanda through carefully curated adventures, cultural encounters, and unforgettable natural attractions.",
    },
  ];

  return (
    <section className="py-24 body-font bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="heading-font text-4xl md:text-5xl font-bold text-[#0B3D1F]">
            What We Promise
          </h2>

          <div className="w-20 h-1 bg-[#D4A017] mx-auto rounded-full mt-4" />

          <p className="text-gray-600 mt-6 max-w-2xl mx-auto text-lg">
            Our commitment is to provide exceptional travel experiences
            that are safe, authentic, and tailored to every traveler.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {promises.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="bg-gray-50 rounded-3xl p-8 shadow-sm hover:shadow-xl transition duration-300"
              >
                <div className="w-16 h-16 bg-[#0B3D1F]/10 rounded-full flex items-center justify-center mb-6">
                  <Icon
                    size={30}
                    className="text-[#0B3D1F]"
                  />
                </div>

                <h3 className="heading-font text-2xl font-semibold mb-4 text-[#0B3D1F]">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}