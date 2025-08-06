"use client";

import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import { memo, useCallback } from "react";
import UserMenu from "./UserMenu";

const UserInfo = memo(function UserInfo() {
  const { data: session } = useSession();

  // useCallback to memoize handleSignOut so it doesn't change on every render
  const handleSignOut = useCallback(async () => {
    try {
      await signOut({ callbackUrl: '/' });
    } catch (error) {
      console.error("Error signing out:", error); 
    }
  }, []);

  console.log("Session", typeof session);

  return (
    <>
      <UserMenu session={session} handleSignOut={handleSignOut} />
    </>
  );
});

export default UserInfo;