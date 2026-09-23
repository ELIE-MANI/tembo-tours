import { z } from "zod";

export const driverSchema = z.object({
  driverGender: z.enum(["male", "female", "no-preference"], {
    message: "Please select a driver preference",
  }),

  language: z.string().min(1, "Please select a language"),

  serviceType: z.string().min(1, "Please select a service type"),

  pickupLocation: z
    .string()
    .min(2, "Pickup location is required"),

  destination: z
    .string()
    .min(2, "Destination is required"),

  travelDate: z.string().min(1, "Travel date is required"),

  passengers: z
    .string()
    .min(1, "Number of passengers is required"),

  firstName: z.string().min(2, "First name is required"),

  lastName: z.string().min(2, "Last name is required"),

  email: z.string().email("Please enter a valid email"),

  phone: z.string().min(8, "Please enter a valid phone number"),

  requests: z.string().optional(),
});

export type DriverFormData = z.infer<typeof driverSchema>;