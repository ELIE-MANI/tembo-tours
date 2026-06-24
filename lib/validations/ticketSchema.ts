import { z } from "zod";

export const ticketSchema = z.object({
  departureCity: z.string().min(2),

  destination: z.string().min(2),

  travelDate: z.string().min(1),

  returnTrip: z.boolean().optional(),

  passengers: z.string().min(1),

  firstName: z.string().min(2),

  lastName: z.string().min(2),

  email: z.string().email(),

  phone: z.string().min(8),

  requests: z.string().optional(),
});