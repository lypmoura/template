import NextAuth from "next-auth"
import { d } from "./drizzle"
import { DrizzleAdapter } from "@auth/drizzle-adapter"

export const { handlers, signIn, signOut, auth } = NextAuth({
    adapter: DrizzleAdapter(d),
    providers: [],
})