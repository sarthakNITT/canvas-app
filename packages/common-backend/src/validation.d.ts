import { z } from "zod";
export declare const SignUpSchema: z.ZodObject<{
    username: z.ZodString;
    email: z.ZodString;
    password: z.ZodString;
    confirmPassword: z.ZodString;
}, "strip", z.ZodTypeAny, {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
}, {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
}>;
export declare const SignInSchema: z.ZodObject<{
    username: z.ZodString;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    username: string;
    password: string;
}, {
    username: string;
    password: string;
}>;
export declare const RoomSchema: z.ZodObject<{
    roomId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    roomId: string;
}, {
    roomId: string;
}>;
//# sourceMappingURL=validation.d.ts.map