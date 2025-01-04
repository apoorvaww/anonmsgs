import {z} from 'zod'

export const signInSchema = z.object({
    // identifier is used for email
    identifier: z.string(),
    password: z.string()
})