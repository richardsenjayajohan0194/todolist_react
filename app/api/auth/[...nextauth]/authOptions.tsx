import { PrismaAdapter } from "@next-auth/prisma-adapter";
import  prisma  from  "../../../../db/index"; // Adjust the path as needed
import authConfig from "./auth.config";
import type { NextAuthOptions } from "next-auth";

const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: "jwt",
  },
  pages: {
    signOut: '/login',
    signIn: '/login'
  },
  ...authConfig,
  callbacks: {
    async jwt({ token, user, session }) {
      console.log("jwt callback", { token, user, session });

      // Pass in user id and name to token
      if (user) {
        return {
          ...token,
          id: user.id,
          username: user.name, // Assuming user.name is username
        };
      }
      return token;
    },
    async session({ session, token, user }) {
      console.log("session callback", { session, token, user });
      // Pass in user id and username to session
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
          username: token.username
        }
      };
    }
  },
  secret: process.env.NEXT_AUTH_SECRET,
  debug: process.env.NODE_ENV === "development",
};

export default authOptions;