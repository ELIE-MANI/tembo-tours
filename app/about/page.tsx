import Container from "../../components/ui/Container";
import MissionVision from "../../components/about/MissionVision";
import Stats from "../../components/about/Stats";
import WhyChooseUs from "../../components/about/WhyChooseUs";
import CTA from "../../components/about/CTA";

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-green-950 text-white py-28">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">
              About Us
            </h1>

            <p className="text-lg text-gray-200">
              Discover Rwanda with trusted travel experts dedicated to
              creating unforgettable experiences and personalized journeys.
            </p>
          </div>
        </Container>
      </section>

<section className="py-24">
  <Container>

    <div className="grid lg:grid-cols-2 gap-16 items-center">

      <div>

        <h2 className="text-4xl font-bold mb-6">
          Our Story
        </h2>

        <p className="text-gray-600 leading-8 mb-6">
          We are a Rwandan travel company passionate about
          showcasing the beauty of Rwanda and East Africa.
        </p>

        <p className="text-gray-600 leading-8">
          From wildlife safaris to luxury accommodations,
          we provide carefully curated experiences for
          individuals, families, and organizations.
        </p>

      </div>

      <div className="rounded-3xl overflow-hidden shadow-xl">

        <img
          src="/images/about.jpg"
          alt="About us"
          className="w-full h-125 object-cover"
        />

      </div>

    </div>

  </Container>
</section>

 <MissionVision />

  <Stats />

  <WhyChooseUs />

  <CTA />
    </>
  );
}