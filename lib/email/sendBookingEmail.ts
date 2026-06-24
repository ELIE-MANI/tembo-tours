import { resend } from "./resend";
import { bookingTemplate } from "./template";

export async function sendBookingEmail(data: any) {

  const subjects: Record<string, string> = {
    hotel: "🏨 New Hotel Booking",
    ticket: "✈️ New Flight Ticket Booking",
    tour: "🌍 New Tour Package Booking",
    vehicle: "🚙 New Vehicle Reservation",
  };

  return resend.emails.send({
    from: "Tembo Tours <onboarding@resend.dev>",

    to: "tembotours22@gmail.com",

    subject: subjects[data.bookingType] || "New Booking",

    html: bookingTemplate(data),
  });
}