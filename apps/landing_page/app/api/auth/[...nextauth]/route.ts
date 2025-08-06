// import "dotenv/config"
import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import {GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET} from "../../../utils/config"
import CredentialsProvider from "next-auth/providers/credentials";
import { SignInSchema } from "@repo/common-backend/src/validation";
import bcrypt from 'bcrypt'
// import prisma from "@repo/common-backend/src/db/db";
// import { PrismaAdapter } from "@auth/prisma-adapter"

// const PC = prisma

const handler = NextAuth({
    providers: [
      // CredentialsProvider({
      //   credentials: {
      //     username: { label: "Username", type: "text", placeholder: "jsmith" },
      //     password: { label: "Password", type: "password" }
      //   },
      //   async authorize(credentials) {
      //     const data = SignInSchema.safeParse(credentials)
      //     if(!data.success){
      //       console.log(data.error);
      //       return null;
      //     }
      //     // const checkUser = await PC.user.findFirst({
      //     //   where: {
      //     //     username: data.data.username
      //     //   }
      //     // })
      //     // if(!checkUser){
      //     //   console.log("Account with this username doesn't exists");
      //     //   return null;
      //     // }
      //     // const checkPass = await bcrypt.compare(data.data.password, checkUser.password)
      //     // if(!checkPass){
      //     //   console.log("Incorrect password");
      //     //   return null;
      //     // }
      //     // const user = {
      //     //   id: checkUser.id,
      //     //   name: checkUser.username,
      //     //   email: checkUser.email
      //     // }
    
      //     // if (user) {
      //     //   return user
      //     // } else {
      //     //   return null
      //     // }
      //   }
      // }),
      GoogleProvider({
        clientId: GOOGLE_CLIENT_ID!,
        clientSecret: GOOGLE_CLIENT_SECRET!
      })
    ],
    session: {
      strategy: "jwt"
    },
    pages: {
      signIn: '/signin'
    },
    // adapter: PrismaAdapter(prisma),
})

export { handler as GET, handler as POST }