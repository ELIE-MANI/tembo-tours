import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";

export default function ContactPage() {
  return (
    <main className="bg-gray-50 py-20">

      <section className="max-w-7xl mx-auto px-6 mt-20 body-font">

        <div className="text-center mb-16">

          <h1 className="heading-font text-5xl font-bold text-gray-900 mb-6">
            Contact Us
          </h1>

          <p className="text-gray-600 max-w-2xl mx-auto">
            We are ready to help you plan unforgettable journeys across Rwanda and beyond.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-12">

          <ContactForm />

          <ContactInfo />

        </div>

      </section>

    </main>
  );
}