import NavbarLinks from "./NavbarLinks";
import 'react-loading-skeleton/dist/skeleton.css'; 
import UserMenu from "./UserMenu";
import { memo } from "react";
// import dynamic from "next/dynamic";


const Navbar = () => {

//   const LazyUserMenu = dynamic(() => import("./UserMenu"), {
//   ssr: true,
//   loading: () => <p>Loading...</p>, // Optional fallback
// });

  console.log("Navbar Rendered");

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
