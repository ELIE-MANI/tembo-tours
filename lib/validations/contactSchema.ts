import { z } from "zod";

export const contactSchema = z.object({
  firstName: z
    .string()
    .min(2, "First name required"),

  lastName: z
    .string()
    .min(2, "Last name required"),

  email: z
    .string()
    .email("Valid email required"),

  phone: z
    .string()
    .min(8, "Phone number required"),

  subject: z
    .string()
    .min(3, "Subject required"),

  message: z
    .string()
    .min(10, "Message required")
});