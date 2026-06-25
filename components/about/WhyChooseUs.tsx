import Container from "../ui/Container";
import {
  ShieldCheck,
  MapPinned,
  Wallet,
  Headphones,
} from "lucide-react";

const reasons = [
  {
    title: "Trusted Experts",
    description:
      "Experienced professionals dedicated to exceptional service.",
    icon: ShieldCheck,
  },
  {
    title: "Customized Tours",
    description:
      "Travel experiences tailored to your preferences.",
    icon: MapPinned,
  },
  {
    title: "Affordable Prices",
    description:
      "Competitive pricing without compromising quality.",
    icon: Wallet,
  },
  {
    title: "24/7 Support",
    description:
      "Always available to assist throughout your journey.",
    icon: Headphones,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-gray-50 py-24">
      <Container>
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0B3D1F]">
            Why Choose Us
          </h2>

          <div className="w-20 h-1 bg-[#D4A017] mx-auto rounded-full mt-4" />

          <p className="text-gray-600 mt-6 max-w-2xl mx-auto text-lg">
            We create memorable travel experiences with professionalism,
            trust, and personalized care.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason) => {
            const Icon = reason.icon;

            return (
              <div
                key={reason.title}
                className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition duration-300"
              >
                <div className="w-14 h-14 rounded-full bg-[#D4A017]/10 flex items-center justify-center mb-6">
                  <Icon
                    size={26}
                    className="text-[#0B3D1F]"
                  />
                </div>

                <h3 className="text-xl font-semibold text-[#0B3D1F] mb-4">
                  {reason.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}