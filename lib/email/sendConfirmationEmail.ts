import { resend } from "./resend";
import { bookingDetailsTemplate } from "./bookingDetails";
import { emailLayout } from "./emailLayout";

export async function sendConfirmationEmail(data: any) {
  return resend.emails.send({
    from: "Tembo Travels <bookings@tembotravels.rw>",
    to: data.email,
    subject: "Booking Request Received",
 
    html: emailLayout(
  "Booking Confirmation",

  `
    <h2 style="color:#0B3D1F;">
      Thank You For Choosing Tembo Travels
    </h2>

    <p>
      Dear ${data.firstName},
    </p>

    <p>
      We have successfully received your booking request.
    </p>

    ${bookingDetailsTemplate(data)}

    <p>
      Our travel consultants are reviewing your request and will contact you within 24 hours.
    </p>

    <p>
      Thank you for trusting Tembo Travels.
    </p>
  `
)
  });
}