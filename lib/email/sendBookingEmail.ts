import { resend } from "./resend";
import { bookingDetailsTemplate } from "./bookingDetails";

export async function sendBookingEmail(data: any) {
  const subjects: Record<string, string> = {
    hotel: "🏨 New Hotel Booking",
    ticket: "✈️ New Flight Ticket Booking",
    tour: "🌍 New Tour Package Booking",
    vehicle: "🚙 New Vehicle Reservation",
  };

  return resend.emails.send({
    from: "Tembo Travels <bookings@tembotravels.rw>",
    to: "tembotours22@gmail.com",
    subject: subjects[data.bookingType] || "New Booking",
    html: `
<h2>New Booking Received</h2>

${bookingDetailsTemplate(data)}
`
  });
}