import Container from "../../components/ui/Container";
import MissionVision from "../../components/about/MissionVision";
import Stats from "../../components/about/Stats";
import WhyChooseUs from "../../components/about/WhyChooseUs";
import CTA from "../../components/about/CTA";

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[70vh] flex items-center text-white overflow-hidden">
        
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/about-hero.jpg')",
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        <Container>
          <div className="relative z-10 max-w-3xl mt-20">
            
            <p className="uppercase tracking-[6px] text-[#D4A017] text-sm font-medium mb-6">
              About Tembo Tours
            </p>

            <h1 className="text-5xl md:text-5xl font-bold leading-tight mb-6">
              Your Trusted Travel Partner in Rwanda
            </h1>

            <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
              Discover Rwanda with travel experts dedicated to creating
              unforgettable experiences, personalized adventures, and
              seamless journeys across East Africa.
            </p>
          </div>
        </Container>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Content */}
            <div>
              <p className="uppercase tracking-[4px] text-[#D4A017] text-sm font-medium mb-4">
                Our Story
              </p>

              <h2 className="text-4xl md:text-5xl font-bold text-[#0B3D1F] mb-6 leading-tight">
                Passionate About Showcasing Rwanda’s Beauty
              </h2>

              <div className="w-20 h-1 bg-[#D4A017] rounded-full mb-8" />

              <p className="text-gray-600 leading-8 mb-6 text-lg">
                We are a Rwandan travel company committed to showcasing
                the breathtaking beauty, culture, and wildlife of Rwanda
                and East Africa through unforgettable journeys.
              </p>

              <p className="text-gray-600 leading-8 text-lg">
                From luxury safaris and gorilla trekking to cultural
                explorations and premium accommodations, we create
                carefully curated experiences for individuals, families,
                and organizations seeking something extraordinary.
              </p>
            </div>

            {/* Image */}
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/images/about.jpg"
                alt="About us"
                className="w-full h-137.5 object-cover hover:scale-105 transition duration-500"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Additional Sections */}
      <MissionVision />
      <Stats />
      <WhyChooseUs />
      <CTA />
    </>
  );
}