import { resend } from "./resend";
import { bookingDetailsTemplate } from "./bookingDetails";
import { emailLayout } from "./emailLayout";

export async function sendBookingEmail(data: any) {
  const subjects: Record<string, string> = {
    hotel: "🏨 New Hotel Booking",
    ticket: "✈️ New Flight Ticket Booking",
    tour: "🌍 New Tour Package Booking",
    vehicle: "🚙 New Vehicle Reservation",
    guide: "🗺️ New Tour Guide Request",
  };

  return resend.emails.send({
    from: "Tembo Travels <bookings@tembotravels.rw>",
    to: "tembotours22@gmail.com",
    subject: subjects[data.bookingType] || "New Booking",
html: emailLayout(
  "New Booking Received",

  `
    <h2 style="color:#0B3D1F;">
      New Booking Received
    </h2>

    ${bookingDetailsTemplate(data)}
  `
)
  });
}