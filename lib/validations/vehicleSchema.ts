import { z } from "zod";

export const vehicleSchema = z.object({
  pickupLocation: z.string().min(2),

  pickupDate: z.string(),

  returnDate: z.string(),

  vehicleType: z.string(),

  withDriver: z.boolean().optional(),

  firstName: z.string().min(2),

  lastName: z.string().min(2),

  email: z.string().email(),

  phone: z.string().min(8),

  requests: z.string().optional(),
});