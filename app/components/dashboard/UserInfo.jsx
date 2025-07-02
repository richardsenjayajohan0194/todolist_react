"use client";

import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import Navbar from "./Navbar";

export default function UserInfo() {
  const { data: session } = useSession();

  const handleSignOut = async () => {
    try {
      await signOut({ callbackUrl: '/' });
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  console.log("Session", typeof session);

  return (
    <>
   
    <Navbar session={session} handleSignOut={handleSignOut}/>
    </>
  );
}