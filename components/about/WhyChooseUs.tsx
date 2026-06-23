import Container from "../ui/Container";

const reasons = [
  {
    title: "Trusted Experts",
    description:
      "Experienced professionals dedicated to exceptional service.",
  },

  {
    title: "Customized Tours",
    description:
      "Travel experiences tailored to your preferences.",
  },

  {
    title: "Affordable Prices",
    description:
      "Competitive pricing without compromising quality.",
  },

  {
    title: "24/7 Support",
    description:
      "Always available to assist throughout your journey.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-gray-50 py-24">
      <Container>

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Why Choose Us
          </h2>

          <p className="text-gray-600">
            We provide memorable travel experiences with professionalism and care.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="bg-white rounded-3xl p-8 shadow"
            >
              <h3 className="text-xl font-semibold mb-4">
                {reason.title}
              </h3>

              <p className="text-gray-600">
                {reason.description}
              </p>
            </div>
          ))}

        </div>

      </Container>
    </section>
  );
}