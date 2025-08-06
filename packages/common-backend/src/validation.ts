import {z} from "zod"

export const SignUpSchema = z.object({
    username: z.string().min(6).max(20),
    email: z.string().email(),
    password: z.string().min(6).regex(new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$'), {
        message: 'Password must be at least 8 characters and contain an uppercase letter, lowercase letter, and number'
    }),
    confirmPassword: z.string().min(6).regex(new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$'), {
        message: 'Password must be at least 8 characters and contain an uppercase letter, lowercase letter, and number'
    })
})

export const SignInSchema = z.object({
    username: z.string().min(6).max(20),
    password: z.string().min(6).regex(new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$'), {
        message: 'Password must be at least 8 characters and contain an uppercase letter, lowercase letter, and number'
    }),
})

export const RoomSchema = z.object({
    roomId: z.string().length(6)
})