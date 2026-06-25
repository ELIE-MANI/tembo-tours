import Container from "../ui/Container";

const stats = [
  {
    number: "500+",
    label: "Happy Travelers",
  },
  {
    number: "20+",
    label: "Tour Packages",
  },
  {
    number: "10+",
    label: "Years Experience",
  },
  {
    number: "24/7",
    label: "Customer Support",
  },
];

export default function Stats() {
  return (
    <section className="py-24 bg-gray-50">
      <Container>
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0B3D1F]">
            Our Impact in Numbers
          </h2>

          {/* Decorative line */}
          <div className="w-20 h-1 bg-[#D4A017] mx-auto rounded-full mt-4" />

          <p className="text-gray-600 mt-6 max-w-2xl mx-auto text-lg">
            Years of trusted service, unforgettable journeys, and thousands of happy travelers.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 text-center hover:shadow-xl hover:-translate-y-2 transition duration-300"
            >
              <h2 className="text-5xl font-bold text-[#D4A017]">
                {stat.number}
              </h2>

              <p className="mt-4 text-gray-600 text-lg">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}