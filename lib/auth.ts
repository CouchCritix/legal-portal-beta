import type { NextAuthOptions } from "next-auth";
import GitHub from "next-auth/providers/github";
import { JWT } from "next-auth/jwt";

export const authOptions: NextAuthOptions = {
  providers: [
    GitHub({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
  ],
  session: { strategy: "jwt" },
  callbacks: {
    async jwt({ token }: { token: JWT }) {
      return token;
    },
    async session({ session }) {
      return session;
    },
  },
};
