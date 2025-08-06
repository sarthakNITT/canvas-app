"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoomSchema = exports.SignInSchema = exports.SignUpSchema = void 0;
const zod_1 = require("zod");
exports.SignUpSchema = zod_1.z.object({
    username: zod_1.z.string().min(6).max(20),
    email: zod_1.z.string().email(),
    password: zod_1.z.string().min(6).regex(new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$'), {
        message: 'Password must be at least 8 characters and contain an uppercase letter, lowercase letter, and number'
    }),
    confirmPassword: zod_1.z.string().min(6).regex(new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$'), {
        message: 'Password must be at least 8 characters and contain an uppercase letter, lowercase letter, and number'
    })
});
exports.SignInSchema = zod_1.z.object({
    username: zod_1.z.string().min(6).max(20),
    password: zod_1.z.string().min(6).regex(new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$'), {
        message: 'Password must be at least 8 characters and contain an uppercase letter, lowercase letter, and number'
    }),
});
exports.RoomSchema = zod_1.z.object({
    roomId: zod_1.z.string().length(6)
});
