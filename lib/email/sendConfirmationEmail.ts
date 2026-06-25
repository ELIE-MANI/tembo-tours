import { resend } from "./resend";

export async function sendConfirmationEmail(data:any) {

  return resend.emails.send({
    from: "Tembo Travels <bookings@tembotravels.rw>",

    to: data.email,

    subject: "Booking Request Received",

    html: `
      <h2>Thank you for choosing Tembo Travels</h2>

      <p>Dear ${data.firstName},</p>

      <p>
      We have successfully received your booking request.
      </p>

      <p>
      Our travel consultants are reviewing your request and
      will contact you shortly.
      </p>

      <p>
      Thank you for trusting Tembo Travels.
      </p>

      <br/>

      <strong>
      Tembo Travels Team
      </strong>
    `
  });
}