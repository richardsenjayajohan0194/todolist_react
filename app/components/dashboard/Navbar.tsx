'use client'
import { UseUserSession } from "../global/UseUserSession";
import NavbarLinks from "./NavbarLinks";
import UserMenu from "./UserMenu";
import { memo } from "react";

const Navbar = () => {

  // const userContext = useContext(UserSessionContext);
  // console.log("Navbar Rendered", userContext?.session?.user);
  const { session } = UseUserSession();
  console.log("Navbar Rendered", session?.user);

  // Removed useEffect referencing undefined userContext

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
              <UserMenu/>
          </div>
        </div>
      </nav>
    </>
  );
};

export default memo(Navbar);
