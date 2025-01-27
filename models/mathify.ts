import * as z from "zod";

// Schema for validating a Mathify question
export const mathifyQuestionSchema = z.object({
  question: z
    .string()
    .nonempty("Question is required")
    .max(500, "Question must be less than 500 characters"),
});

// Type inference for the Mathify question schema
export type mathifyQuestionSchema = z.infer<typeof mathifyQuestionSchema>;
