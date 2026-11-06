import { z } from "zod";

export const providerOptions = [
  "1 provider",
  "2–5 providers",
  "6–10 providers",
  "11–25 providers",
  "26–50 providers",
  "More than 50 providers",
] as const;

export const serviceOptions = [
  "Medical Billing",
  "Medical Coding",
  "Revenue Cycle Management",
  "Credentialing",
  "Accounts Receivable Management",
  "Denial Management",
  "Eligibility & Prior Authorization",
  "Payment Posting & Reporting",
  "Medical Billing Audits",
] as const;

export const contactSchema = z.object({
  fullName: z.string().trim().min(2, "Please enter your full name.").max(100, "Please keep your name under 100 characters."),
  email: z.string().trim().min(1, "Please enter your business email.").max(254, "Please keep your email under 254 characters.").email("Please enter a valid email address."),
  phone: z.string().trim().max(25, "Please keep the phone number under 25 characters.").regex(/^[0-9+()\-.\s]*$/, "Please use digits, spaces, and standard phone symbols only.").optional(),
  practiceName: z.string().trim().min(2, "Please enter your practice name.").max(150, "Please keep the practice name under 150 characters."),
  specialty: z.string().trim().min(1, "Please enter your practice specialty.").max(100, "Please keep the specialty under 100 characters."),
  providers: z.string().optional(),
  services: z.array(z.enum(serviceOptions)).max(serviceOptions.length).optional(),
  message: z.string().trim().min(10, "Please share a little about what you need help with.").max(2000, "Please keep your message under 2,000 characters."),
  consent: z.boolean().refine((value) => value === true, { message: "Please confirm that you have read the privacy policy." }),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
