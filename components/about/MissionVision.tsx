import Container from "../ui/Container";

export default function MissionVision() {
  return (
    <section className="bg-gray-50 py-24">
      <Container>
        <div className="grid md:grid-cols-2 gap-10">

          <div className="bg-white p-10 rounded-3xl shadow">
            <h2 className="text-3xl font-bold mb-6">
              Our Mission
            </h2>

            <p className="text-gray-600 leading-8">
              To provide exceptional travel experiences while promoting
              Rwanda's natural beauty and cultural heritage.
            </p>
          </div>

          <div className="bg-white p-10 rounded-3xl shadow">
            <h2 className="text-3xl font-bold mb-6">
              Our Vision
            </h2>

            <p className="text-gray-600 leading-8">
              To become East Africa's leading travel company known for
              professionalism, innovation and customer satisfaction.
            </p>
          </div>

        </div>
      </Container>
    </section>
  );
}