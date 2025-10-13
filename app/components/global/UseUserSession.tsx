"use client";
import { useContext, useMemo, useCallback } from "react";
import { UserSessionContext } from "@/app/components/dashboard/UserInfo";

export const UseUserSession = () => {
  console.log("Custom User Session Render");
  const context = useContext(UserSessionContext);
  if (!context) {
    throw new Error("useUser Session must be used within a UserSessionContext.Provider");
  }
  const { session, status, handleSignOut } = context;

  const isLoading = status === "loading";
  const isAuthenticated = status === "authenticated";
  const userName = session?.user?.name || "Unknown";
  const userId = session?.user?.id || "";

  console.log("UseUserSession - isLoading:", isLoading, "isAuthenticated:", isAuthenticated, "userName:", userName);

  const signOutUser = useCallback(async () => {
    await handleSignOut();
  }, [handleSignOut]);

  return useMemo(() => ({
    session,
    status,
    isLoading,
    isAuthenticated,
    userName,
    userId,
    handleSignOut: signOutUser,
  }), [session, status, isLoading, isAuthenticated, userName, userId, signOutUser]);
};


