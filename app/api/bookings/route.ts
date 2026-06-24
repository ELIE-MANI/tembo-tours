import { sendBookingEmail } from "@/lib/email/sendBookingEmail";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    await sendBookingEmail(data);

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