import { z } from "zod";

export const ticketSchema = z.object({
  departureCity: z.string().min(2, "Departure city required"),

  destination: z.string().min(2, "Destination required"),

  returnTrip: z.boolean().optional(),

  travelDate: z.string().min(1, "Travel date required"),

  passengers: z.string().min(1, "Select passengers"),

  firstName: z.string().min(2, "First name required"),

  lastName: z.string().min(2, "Last name required"),

  email: z.string().email("Valid email required"),

  phone: z.string().min(8, "Phone required"),

  requests: z.string().optional(),
});

export type TicketFormData = z.infer<typeof ticketSchema>;