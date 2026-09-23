import { sendBookingEmail } from "@/lib/email/sendBookingEmail";
import { sendConfirmationEmail } from "@/lib/email/sendConfirmationEmail";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    if (!data.bookingType) {
      return Response.json(
        {
          success: false,
          message: "Booking type is required",
        },
        {
          status: 400,
        }
      );
    }

    if (!data.email) {
      return Response.json(
        {
          success: false,
          message: "Customer email is required",
        },
        {
          status: 400,
        }
      );
    }

    await Promise.all([
      sendBookingEmail(data),
      sendConfirmationEmail(data),
    ]);

    return Response.json({
      success: true,
      message: "Booking request submitted successfully",
    });
  } catch (error) {
    console.error("BOOKING API ERROR:", error);

    return Response.json(
      {
        success: false,
        message: "Unable to process booking request",
      },
      {
        status: 500,
      }
    );
  }
}