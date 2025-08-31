import "next-auth";

declare module "next-auth" {
  interface User {
    id: string
    name: string;
    username: string;
    email: string;
  }

  interface Session extends DefaultSession {
    user: User;
    expires: string;
    error: string;
  }
}