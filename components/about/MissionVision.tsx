import Container from "../ui/Container";

export default function MissionVision() {
  return (
    <section className="bg-white py-24">
      <Container>
        <div className="grid md:grid-cols-2 gap-10">
          
          {/* Mission */}
          <div className="bg-gray-50 p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition duration-300">
            <p className="uppercase tracking-[4px] text-[#D4A017] text-sm font-medium mb-4">
              Our Mission
            </p>

            <h2 className="text-3xl font-bold text-[#0B3D1F] mb-6">
              Creating Exceptional Travel Experiences
            </h2>

            <div className="w-16 h-1 bg-[#D4A017] rounded-full mb-6" />

            <p className="text-gray-600 leading-8 text-lg">
              To provide exceptional travel experiences while promoting
              Rwanda’s natural beauty, wildlife, and cultural heritage
              through sustainable and personalized tourism.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-gray-50 p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition duration-300">
            <p className="uppercase tracking-[4px] text-[#D4A017] text-sm font-medium mb-4">
              Our Vision
            </p>

            <h2 className="text-3xl font-bold text-[#0B3D1F] mb-6">
              Leading East Africa’s Travel Industry
            </h2>

            <div className="w-16 h-1 bg-[#D4A017] rounded-full mb-6" />

            <p className="text-gray-600 leading-8 text-lg">
              To become East Africa’s leading travel company known for
              professionalism, innovation, customer satisfaction, and
              unforgettable travel experiences.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}