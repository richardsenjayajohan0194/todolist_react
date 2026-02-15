"use client";

import { signOut, useSession } from 'next-auth/react';
import { createContext, memo, useCallback, useContext, useMemo } from 'react';

interface Props {
  children: React.ReactNode;
}

interface UserSessionContextType {
  session: ReturnType<typeof useSession>['data'];
  status: ReturnType<typeof useSession>['status'];
  handleSignOut: () => Promise<void>;
  isLoading: boolean;
  isAuthenticated: boolean;
  userName: string;
  userId: number;
}

export const UserSessionContext = createContext<UserSessionContextType | null>(null);

export default function UserInfo({ children }: Props) {
  console.log("This page load");
  const { data: session, status } = useSession({ required: true });

  // Derive values
  const isLoading = status === "loading";
  const isAuthenticated = status === "authenticated";
  const userName = session?.user?.name || "Unknown";
  const userId = session?.user?.id || 0;  // Parse to number with fallback

  const handleSignOut = useCallback(async () => {
    try {
      await signOut({ callbackUrl: '/' });
    } catch (error) {
      console.error("Error signing out:", error);
    }
  }, []);

   const value = useMemo(() => {
      return { session, status, handleSignOut, isLoading, isAuthenticated, userName, userId };
    }, [isLoading, isAuthenticated, userName, userId, session, status, handleSignOut]);  // Dependencies are now valid

  console.log(session, status);

  if (status === "loading" && !session){
    return (
      <UserSessionContext.Provider value={value}>
        {children}
      </UserSessionContext.Provider>
    );
  }

  // if (status === "authenticated") {
    return (
      <UserSessionContext.Provider value={value}>
        {children}
      </UserSessionContext.Provider>
    );
  // }
}

export const UseUserSession = () => {
  console.log("Custom UseUserSession invoked");
  const context = useContext(UserSessionContext);

  if (!context) {
    throw new Error("UseUserSession must be used within a UserSessionContext.Provider");
  }

  // Just return the context directly
  return context;
};