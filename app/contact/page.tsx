import Container from "@/components/ui/Container";
import ContactInfo from "@/components/contact/ContactInfo";


export default function ContactPage() {
  return (
    <>
      <section className="bg-primary py-28 text-white">
        <Container>
          <h1 className="text-5xl font-bold mb-6">
            Contact Us
          </h1>

          <p className="text-lg text-gray-200 max-w-2xl">
            We are here to help you plan unforgettable experiences
            throughout Rwanda and East Africa.
          </p>
        </Container>
      </section>
      <ContactInfo/>

    </>
  );
}