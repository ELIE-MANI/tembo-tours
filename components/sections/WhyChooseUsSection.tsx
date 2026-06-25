export default function WhyChooseUs() {
  const stats = [
    {
      number: "10+",
      label: "Years Experience",
    },
    {
      number: "5000+",
      label: "Happy Travelers",
    },
    {
      number: "24/7",
      label: "Customer Support",
    },
    {
      number: "100%",
      label: "Safe Journeys",
    },
  ];

  return (
    <section className="py-24 bg-[#0B3D1F] body-font text-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="heading-font text-4xl md:text-5xl font-bold">
            Why Choose Us
          </h2>

          {/* Decorative line */}
          <div className="w-20 h-1 bg-[#D4A017] mx-auto rounded-full mt-4" />

          <p className="text-white/80 mt-6 max-w-2xl mx-auto text-lg">
            We provide trusted travel experiences with safety, comfort, and unforgettable adventures across Rwanda.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-8 text-center hover:bg-white/15 transition duration-300"
            >
              <h3 className="text-4xl font-bold text-[#D4A017] mb-3">
                {item.number}
              </h3>

              <p className="text-white/80 text-lg">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}