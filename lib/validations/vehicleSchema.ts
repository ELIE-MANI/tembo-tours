import { z } from "zod";

export const vehicleSchema = z.object({
  pickupLocation: z.string().min(2, "Pickup location required"),

  pickupDate: z.string().min(1, "Pickup date required"),

  returnDate: z.string().min(1, "Return date required"),

  vehicleType: z.string().min(1, "Select vehicle"),

  withDriver: z.boolean().optional(),

  firstName: z.string().min(2, "First name required"),

  lastName: z.string().min(2, "Last name required"),

  email: z.string().email("Valid email required"),

  phone: z.string().min(8, "Phone number required"),

  requests: z.string().optional(),
});

export type VehicleFormData = z.infer<typeof vehicleSchema>;