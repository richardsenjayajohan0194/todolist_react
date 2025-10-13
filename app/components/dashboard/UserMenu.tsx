import Skeleton from "react-loading-skeleton";
import  { UseUserSession } from "../global/UseUserSession";


const UserMenu = () => {
  const { session, status, handleSignOut } = UseUserSession();
  console.log("User Menu Rendered", status);
  // console.log("User Menu Session: ", session?.user);

  //  const renderUserDropdown = () => {
  //   if (status === "loading") {
  //     return <Skeleton width={100} height={20} />;  // Visible during loading
  //   }
  //   if (session) {
  //     return session.user?.name || "unknown";  // Render actual user info (fix the object rendering bug)
  //   }
  //   return "Login";  // Or a login link/button
  // };
  // if (!session && status !== "loading") {
  //   return <div>Please log in to view your profile.</div>;  // Only show this if not loading and unauthenticated
  // }

  return (
    <div className="ms-auto p-2 bd-highlight">
      <li className="nav-item dropdown d-flex flex-fill">
        <a
          className="nav-link dropdown-toggle d-flex flex-fill justify-content-end align-items-center"
          href="#"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {/* Fixed ternary: Safe access with optional chaining; fallback to "unknown" if no session */}
          {status === "loading" ? (
            <Skeleton width={100} height={20} />
          ) : (
            session ? session.user?.name : "unknown"
          )}
          {/* {renderUserDropdown()} */}
        </a>
        <ul className="dropdown-menu dropdown-menu-end">
          <li><a className="dropdown-item" href="#">Action</a></li>
          <li><a className="dropdown-item" href="#">Preview</a></li>
          <li><hr className="dropdown-divider" /></li>
          <li>
            <a
              className="dropdown-item align-items-center justify-content-center d-flex flex-fill"
              onClick={handleSignOut}
            >
              SIGN OUT
            </a>
          </li>
        </ul>
      </li>
    </div>
  );
};

export default UserMenu;
