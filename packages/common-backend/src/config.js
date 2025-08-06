"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GOOGLE_CLIENT_SECRET = exports.GOOGLE_CLIENT_ID = exports.JWT_SECRET = exports.WS_PORT = exports.HTTP_PORT = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.HTTP_PORT = process.env.HTTP_PORT || "3000";
exports.WS_PORT = process.env.WS_PORT || "8080";
exports.JWT_SECRET = process.env.JWT_SECRET || "cfxrtse4eu65ri7t8oy9uhugytcjxhtrdu5i76to8ylgYUFTI^T7Y8H";
exports.GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
exports.GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
