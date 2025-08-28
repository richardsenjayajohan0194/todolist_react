import { z } from "zod";

export const toDoSchema = z.object({
  title: z
    .string()
    .nonempty("Title is required")
    .min(5, "Title should be at least 5 characters").optional(),
  content: z
    .string()
    .nonempty("Content is required")
    .min(5, "Content should be at least 5 characters").optional(),
});

export type FormSchema = z.infer<typeof toDoSchema>;