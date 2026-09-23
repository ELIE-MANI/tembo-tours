import { z } from "zod";

export const guideSchema = z.object({
  guideGender: z.enum(["male", "female", "no-preference"], {
    message: "Please select a guide preference",
  }),

  language: z.string().min(1, "Please select a language"),

  destination: z.string().min(2, "Destination is required"),

  travelDate: z.string().min(1, "Travel date is required"),

  travelers: z
    .string()
    .min(1, "Number of travelers is required"),

  firstName: z.string().min(2, "First name is required"),

  lastName: z.string().min(2, "Last name is required"),

  email: z.string().email("Please enter a valid email"),

  phone: z.string().min(8, "Please enter a valid phone number"),

  requests: z.string().optional(),
});

export type GuideFormData = z.infer<typeof guideSchema>;