'use client'
import NavbarLinks from "./NavbarLinks";
import UserMenu from "./UserMenu";
import { useContext, useMemo } from "react";
import { UserSessionContext } from "./UserInfo"; // Import the context


const Navbar = () => {
  console.log("Session Nav: ", "No session in Navbar");

  const userContext = useContext(UserSessionContext);

  useMemo(() => {
    console.log("UserContext in Navbar: ", userContext?.session?.user);
    
  }, [userContext]);
  // console.log("UserContext in Navbar: ", userContext?.session?.user);

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
            <UserMenu
              session={userContext?.session}
              handleSignOut={userContext?.handleSignOut ?? (async () => {})}
            />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
