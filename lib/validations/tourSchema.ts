import { z } from "zod";

export const tourSchema = z.object({
  destination: z.string().min(2, "Destination is required"),

  packageType: z.string().min(1, "Select a package"),

  travelDate: z.string().min(1, "Travel date is required"),

  travelers: z.string().min(1, "Select number of travelers"),

  firstName: z.string().min(2, "First name required"),

  lastName: z.string().min(2, "Last name required"),

  email: z.string().email("Valid email required"),

  phone: z.string().min(8, "Phone number required"),

  requests: z.string().optional(),
});