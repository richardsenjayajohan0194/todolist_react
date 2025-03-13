// import type { NextAuthOptions } from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";

// export const options: NextAuthOptions = {
//     providers: [
//         CredentialsProvider({
//             name: "Credentials",
//             credentials: {
//                 email: { label: "Email", type: "text" },
//                 password: { label: "Password", type: "password" },
//             },
//             async authorize(credentials, req) {
//                 const query = "SELECT * FROM users WHERE email = ?";
//                 const user = await db.query(query, [credentials?.email]);

//                 if (user.length > 0) {
//                     const isValidPassword = bcrypt.compareSync(credentials? .password, user[0].password);
//                     if (isValidPassword) {
//                         return { id: user[0].id, email: user[0].email }; // Return user object
//                     }
//                 }
//                 console.error("Invalid credentials");
//                 return null; // Return null if credentials are invalid
//             }
//         }),
//     ],
// };