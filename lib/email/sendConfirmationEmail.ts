import { resend } from "./resend";
import { emailLayout } from "./emailLayout";
import { bookingDetailsTemplate } from "./bookingDetails";

export async function sendConfirmationEmail(data: any) {
  const subjects: Record<string, string> = {
    hotel: "Hotel Booking Request Received",
    ticket: "Flight Booking Request Received",
    tour: "Tour Booking Request Received",
    vehicle: "Vehicle Reservation Request Received",
    guide: "Tour Guide Request Received",
  };

  const subject =
    subjects[data.bookingType] || "Booking Request Received";

  return resend.emails.send({
    from: "Tembo Travels <bookings@tembotravels.rw>",
    to: data.email,
    subject,
    html: emailLayout(
      subject,
      `
        <h2 style="color:#0B3D1F;">
          Thank You For Choosing Tembo Travels
        </h2>

        <p>
          Dear ${data.firstName},
        </p>

        <p>
          We have successfully received your request.
          Our travel consultants are reviewing the details
          and will contact you shortly.
        </p>

        ${bookingDetailsTemplate(data)}

        <p>
          Thank you for trusting Tembo Travels.
        </p>
      `
    ),
  });
}