import { resend } from "@/lib/email/resend";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    // Email to Tembo Travels
    await resend.emails.send({
      from: "Tembo Travels <onboarding@resend.dev>",
      to: "tembotours22@gmail.com",

      subject: `Contact Form: ${data.subject}`,

      html: `
        <h2>New Contact Form Message</h2>

        <p><strong>Name:</strong> ${data.fullName}</p>

        <p><strong>Email:</strong> ${data.email}</p>

        <p><strong>Subject:</strong> ${data.subject}</p>

        <p><strong>Message:</strong></p>

        <p>${data.message}</p>
      `,
    });

    // Confirmation email to customer
    await resend.emails.send({
      from: "Tembo Travels <onboarding@resend.dev>",
      to: data.email,

      subject: "We Received Your Message",

      html: `
        <h2>Thank You for Contacting Tembo Travels</h2>

        <p>Hello ${data.fullName},</p>

        <p>
          We have successfully received your message.
        </p>

        <p>
          Our team will review your inquiry and respond as soon as possible.
        </p>

        <p>
          Thank you for choosing Tembo Travels.
        </p>

        <br/>

        <strong>Tembo Travels Team</strong>
      `,
    });

    return Response.json({
      success: true,
    });
  } catch (error) {
    console.error(error);

    return Response.json(
      {
        success: false,
      },
      {
        status: 500,
      }
    );
  }
}