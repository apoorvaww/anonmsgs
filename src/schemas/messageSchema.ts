import { z } from "zod";

export const messageSchema = z.object({
  content: z
    .string()
    .min(10, { message: "Message must be of atleast 10 characters." })
    .max(300, {message: "Message must not exceed 300 characters."})
});
