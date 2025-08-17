"use client";

import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import { createContext,  useCallback, useMemo } from "react";


interface Props {
    children: React.ReactNode;
}

interface UserSessionContextType {
  session: ReturnType<typeof useSession>['data'];
  handleSignOut: () => Promise<void>;
}

export const UserSessionContext = createContext<UserSessionContextType | null>(null);

const UserInfo = ({children}:Props) => {
  const { data: session } = useSession();

  useMemo(() => {
    console.log("Session in UserInfo: ", session?.user); 
  }, [session]);

  const handleSignOut = useCallback(async () => {
    try {
      await signOut({ callbackUrl: '/' });
    } catch (error) {
      console.error("Error signing out:", error); 
    }
  }, []);

  // console.log("Session : ", session?.user);


  return (
    <>
      <UserSessionContext.Provider value={{ session, handleSignOut }}>
        {children}
      </UserSessionContext.Provider>
    </>
  );
}


export default UserInfo;