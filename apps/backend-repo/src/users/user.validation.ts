import { z } from "zod";

export const userUpdateValidation = z.object({
  name: z.string().min(5).trim(),
  email: z.string().email().trim(),
  address: z.string().trim().min(10).optional().or(z.literal('')),
  phoneNumber: z.string().trim().min(7).max(20).optional().or(z.literal('')),
});

export type UserUpdateData = z.infer<typeof userUpdateValidation>;