import { sendBookingEmail } from "@/lib/email/sendBookingEmail";
import { sendConfirmationEmail } from "@/lib/email/sendConfirmationEmail";
export async function POST(req: Request) {
  try {
    const data = await req.json();

    await Promise.all([
  sendBookingEmail(data),
  sendConfirmationEmail(data),
]);


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