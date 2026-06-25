import {
  Phone,
  Mail,
  MapPin,
  Clock
} from "lucide-react";
import Container from "../ui/Container";

export default function ContactInfo() {
  return (
    <>
    <Container>
    <div className="space-y-8 body-font">

      <div className="bg-white p-8 rounded-3xl shadow-lg">
        <h2 className="heading-font text-2xl font-bold mb-6">
          Contact Information
        </h2>

        <div className="space-y-6">

          <div className="flex gap-4">
            <Phone className="text-[#009879]" />
            <div>
              <h3 className="font-semibold">Phone</h3>
              <p className="text-gray-600">
                +250 788 000 000
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <Mail className="text-[#009879]" />
            <div>
              <h3 className="font-semibold">Email</h3>
              <p className="text-gray-600">
                tembotours22@gmail.com
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <MapPin className="text-[#009879]" />
            <div>
              <h3 className="font-semibold">Address</h3>
              <p className="text-gray-600">
                Kigali, Rwanda
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <Clock className="text-[#009879]" />
            <div>
              <h3 className="font-semibold">
                Working Hours
              </h3>

              <p className="text-gray-600">
                Mon - Sat: 8AM - 6PM
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* WhatsApp Card */}

      <div className="bg-[#0B3D1F] rounded-3xl p-8 text-white">

        <h2 className="text-2xl font-bold mb-4">
          Need Quick Assistance?
        </h2>

        <p className="mb-6 text-gray-100">
          Chat with our travel consultants directly on WhatsApp.
        </p>

        <a
          href="https://wa.me/250792588842"
          target="_blank"
          className="bg-white text-[#0B3D1F] px-6 py-3 rounded-xl font-semibold inline-block"
        >
          Chat on WhatsApp
        </a>

      </div>

    </div>
    </Container>
    </>
  );
}