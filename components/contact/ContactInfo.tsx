import { Phone, Mail, MapPin } from "lucide-react";
import Container from "../ui/Container";

export default function ContactInfo() {
  return (
    <section className="py-20">
      <Container>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white p-8 rounded-3xl shadow">
            <Phone className="text-primary mb-4" size={40}/>
            <h3 className="font-bold text-xl mb-3">
              Phone
            </h3>
            <p>+250 XXX XXX XXX</p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow">
            <Mail className="text-primary mb-4" size={40}/>
            <h3 className="font-bold text-xl mb-3">
              Email
            </h3>
            <p>info@company.com</p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow">
            <MapPin className="text-primary mb-4" size={40}/>
            <h3 className="font-bold text-xl mb-3">
              Address
            </h3>
            <p>Kigali, Rwanda</p>
          </div>

        </div>

      </Container>
    </section>
  );
}