"use client";

import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import { createContext, useCallback } from "react";
import 'react-loading-skeleton/dist/skeleton.css';  // Don't forget this!
import Navbar from "./Navbar";

interface Props {
  children: React.ReactNode;
}

interface UserSessionContextType {
  session: ReturnType<typeof useSession>['data'];
  status: ReturnType<typeof useSession>['status'];
  handleSignOut: () => Promise<void>;
}

export const UserSessionContext = createContext<UserSessionContextType | null>(null);

const UserInfo = ({ children }: Props) => {
  const { data: session, status } = useSession();
  console.log("Status:", status, "Session Data Load:", session?.user);

  const handleSignOut = useCallback(async () => {
    try {
      await signOut({ callbackUrl: '/' });
    } catch (error) {
      console.error("Error signing out:", error);
    }
  }, []);

  // Handle unauthenticated state (uncommented and adapted for better UX)
  if (!session && status === "loading") {
    return (
      <UserSessionContext.Provider value={{ session, status, handleSignOut }}>
        <Navbar />
        {/* <div>Please log in to view your profile.</div> */}
        {/* {children} */}
      </UserSessionContext.Provider>
    );
  }

  // if(status === "loading") {
  //   return <LoadingState />;
  // }

  // if(!session){
  //   return  <div>Please log in to view your profile.</div>
  // }

  // if (!session && status !== "loading") {
  //   return <div>Please log in to view your profile.</div>;  // Only show this if not loading and unauthenticated
  // }

  return (
    <UserSessionContext.Provider value={{ session, status, handleSignOut }}>
      {/* <Navbar /> */}
      {/* {status === "loading" ? (
        // Optional: Show a full-page skeleton or spinner here if needed
        <div>Loading...</div>
      ) : ( */}
        {children}
      {/* )} */}
    </UserSessionContext.Provider>
  );
};

export default UserInfo;
