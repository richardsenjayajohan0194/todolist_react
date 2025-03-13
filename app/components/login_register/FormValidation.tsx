import { z } from "zod";

export const userSchema = z.object({
  name: z
    .string()
    .nonempty("Name is required")
    .min(3, "Name should be at least 3 characters"),
  username: z
    .string()
    .nonempty("Username is required")
    .min(3, "Username should be at least 3 characters"),
  email: z
    .string()
    .nonempty("Email is required")
    .email("Invalid email address")
    .min(8, "Email should be at least 8 characters"),
  password: z
    .string()
    .nonempty("Password is required")
    .min(6, "Password must be at least 6 characters long"),
});

export type FormSchema = z.infer<typeof userSchema>;
