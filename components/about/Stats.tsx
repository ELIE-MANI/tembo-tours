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
    label: "Support",
  },
];

export default function Stats() {
  return (
    <section className="py-24">
      <Container>

        <div className="grid md:grid-cols-4 gap-8 text-center">

          {stats.map((stat) => (
            <div key={stat.label}>
              <h2 className="text-5xl font-bold text-primary">
                {stat.number}
              </h2>

              <p className="mt-4 text-gray-600">
                {stat.label}
              </p>
            </div>
          ))}

        </div>

      </Container>
    </section>
  );
}