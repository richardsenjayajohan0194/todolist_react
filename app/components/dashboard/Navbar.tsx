'use client'
import React, { memo } from "react"; // Import memo from React
import NavbarLinks from "./NavbarLinks";
import UserInfo from "./UserInfo";


const Navbar = memo(function Navbar() {
  console.log("Session Nav: ", "No session in Navbar");

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Todo List</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <NavbarLinks />
            <UserInfo />
          </div>
        </div>
      </nav>
    </>
  );
});

// Export the memoized Navbar component
export default Navbar;
