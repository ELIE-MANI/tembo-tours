import { resend } from "./resend";
import { bookingDetailsTemplate } from "./bookingDetails";


export async function sendConfirmationEmail(data: any) {
  return resend.emails.send({
    from: "Tembo Travels <bookings@tembotravels.rw>",
    to: data.email,
    subject: "Booking Request Received",
   html: `
<div style="font-family:Arial,sans-serif;max-width:600px;margin:auto;padding:20px;">

  <h1 style="color:#0B3D1F;">
    Thank You for Choosing Tembo Travels
  </h1>

  <p>Dear ${data.firstName},</p>

  <p>
    We have successfully received your booking request.
  </p>

  ${bookingDetailsTemplate(data)}

  <p>
    Our travel consultants are reviewing your request and will contact you within 24 hours.
  </p>

</div>
`
  });
}