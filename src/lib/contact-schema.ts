import { z } from "zod";

export const contactSchema = z.object({
  fullName: z.string().trim().min(2, "Please enter your full name.").max(100, "Please keep your name under 100 characters."),
  email: z.string().trim().min(1, "Please enter your business email.").max(254, "Please keep your email under 254 characters.").email("Please enter a valid email address."),
  practiceName: z.string().trim().min(2, "Please enter your practice or organization name.").max(150, "Please keep the name under 150 characters."),
  message: z.string().trim().min(10, "Please share a little about what you need help with.").max(1500, "Please keep your message under 1,500 characters."),
  consent: z.boolean().refine((value) => value === true, { message: "Please confirm that you have read the privacy policy." }),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
