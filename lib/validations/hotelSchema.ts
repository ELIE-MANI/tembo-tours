import { z } from "zod";

export const hotelSchema = z.object({
  checkIn: z.string().min(1, "Check-in date required"),

  checkOut: z.string().min(1, "Check-out date required"),

  guests: z.string().min(1, "Select guests"),

  roomType: z.string().min(1, "Select room"),

  firstName: z.string().min(2, "First name required"),

  lastName: z.string().min(2, "Last name required"),

  email: z.string().email(),

  phone: z.string().min(8),

  requests: z.string().optional(),
});