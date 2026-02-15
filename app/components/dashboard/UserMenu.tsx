"use client";

import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';
import { UseUserSession } from "./UserInfo";

const UserMenu = () => {
  const { session, status, handleSignOut } = UseUserSession();

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
         {status === "loading" ? (
            <Skeleton width={150} height={20} />
          ) : (
            session ? session.user?.name : "unknown"
          )}
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