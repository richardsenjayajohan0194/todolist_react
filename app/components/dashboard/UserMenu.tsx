"use client";

import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';
import { UseUserSession } from "./UserInfo";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { ChevronDownIcon, LogOutIcon, SettingsIcon, UserIcon } from "lucide-react";

interface Props{
  isMenuOpen?: boolean;
}

const UserMenu = ({isMenuOpen}:Props) => {
  const { session, status, handleSignOut } = UseUserSession();

  return (
    // <div className="ms-auto p-2 bd-highlight">
    //   <li className="nav-item dropdown d-flex flex-fill">
    //     <a
    //       className="nav-link dropdown-toggle d-flex flex-fill justify-content-end align-items-center"
    //       href="#"
    //       role="button"
    //       data-bs-toggle="dropdown"
    //       aria-expanded="false"
    //     >
    //      {status === "loading" ? (
    //         <Skeleton width={150} height={20} />
    //       ) : (
    //         session ? session.user?.name : "unknown"
    //       )}
    //     </a>
    //     <ul className="dropdown-menu dropdown-menu-end">
    //       <li><a className="dropdown-item" href="#">Action</a></li>
    //       <li><a className="dropdown-item" href="#">Preview</a></li>
    //       <li><hr className="dropdown-divider" /></li>
    //       <li>
    //         <a
    //           className="dropdown-item align-items-center justify-content-center d-flex flex-fill"
    //           onClick={handleSignOut}
    //         >
    //           SIGN OUT
    //         </a>
    //       </li>
    //     </ul>
    //   </li>
    // </div>
      
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className={`${isMenuOpen ? 'tw-flex tw-items-center tw-justify-center' : 'tw-hidden'} tw-gap-1 sm:tw-flex tw-text-white`}>
            {status === "loading" ? (
            <Skeleton   width="150px" height="20px" />
          ) : (
            session ? session.user?.name : "unknown")}
            <ChevronDownIcon/>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>
            <UserIcon />
            Profile
          </DropdownMenuItem>
          <DropdownMenuItem>
            <SettingsIcon />
            Settings
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="tw-text-red-600" onClick={handleSignOut}>
            <LogOutIcon />
            Sign Out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
  );
};

export default UserMenu;