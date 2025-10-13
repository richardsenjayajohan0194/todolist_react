"use client";

 // Adjust path to your custom hook
import HeaderForm from "@/app/components/global/HeaderForm";
import  { UseUserSession }  from "@/app/components/global/UseUserSession";
import { useEffect } from "react";

const Dashboard = () => {
  const { isLoading, userName, isAuthenticated } = UseUserSession();

  useEffect(() => {
    console.log("isLoading, userName, isAuthenticate", isLoading, userName, isAuthenticated);
  }, [isLoading, userName, isAuthenticated]);

  console.log("Dashboard rerender");

  // Option 1: Show nothing or a full-page loader until loaded
  if (isLoading) {
    return (
      <div className="add-content bg-success vh-100 d-flex justify-content-center align-items-center p-2">
        <div>Loading...</div> {/* Or a spinner/skeleton component */}
      </div>
    );
  }

  // Option 2: If unauthenticated, redirect or show error (optional, since this is dashboard)
  if (!isAuthenticated) {
    return (
      <div className="add-content bg-success vh-100 d-flex justify-content-center align-items-center p-2">
        <div>Please log in to access the dashboard.</div>
      </div>
    );
  }

  // Now render with real data—no double render!
  return (
    <div className="add-content bg-success vh-100 d-flex justify-content-center align-items-center p-2">
      <HeaderForm tag_header="h1" header={`Welcome, ${userName}`} />
    </div>
  );
};

export default Dashboard;
