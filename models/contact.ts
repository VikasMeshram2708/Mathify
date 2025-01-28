import * as z from "zod";

export const ContactSchema = z.object({
  firstName: z.string({ required_error: "First name is required" }).max(100, {
    message: "First name must be less than 100 characters",
  }),
  lastName: z.string({ required_error: "Last name is required" }).max(100, {
    message: "Last name must be less than 100 characters",
  }),
  email: z.string({ required_error: "Email is required" }).email({
    message: "Invalid email",
  }),
  message: z
    .string({ required_error: "Message is required" })
    .max(500, "Message must be less than 500 characters"),
});


export type ContactSchema = z.infer<typeof ContactSchema>