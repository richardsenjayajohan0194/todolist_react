"use client"

import { AlignJustifyIcon } from "lucide-react";
import { useState } from "react";
import { memo } from "react";
import UserMenu from "./UserMenu";
import NavbarLinks from "./NavbarLinks";

const Navbar = () => {
  console.log("Navbar Rendered");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const logo = <span className="tw-h-8 tw-w-auto tw-text-white tw-font-bold tw-text-xl">Todo List</span>;

  return (
    <nav className="tw-relative tw-bg-gray-800 tw-border-b">
      {/* Main container */}
      {/* <div className="tw-mx-auto tw-max-w-7xl tw-px-2 sm:tw-px-6 lg:tw-px-8"> */}
        <div className="tw-px-5 tw-py-4 tw-flex tw-h-16 tw-items-center tw-justify-between">
            <div className="tw-flex tw-items-center">
              {logo}
            </div>

          {/* Mobile menu button - right corner small screens */}
          <button 
            type="button" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="sm:tw-hidden tw-text-gray-400 hover:tw-text-white focus:tw-outline-none"
          >
            <AlignJustifyIcon className="tw-size-6" />
            <div className={`tw-absolute tw-top-full tw-right-0 tw-w-full tw-bg-gray-800 tw-shadow-lg bg-white tw-py-1 tw-z-50 ${isMenuOpen ? 'tw-block' : 'tw-hidden'}`}>
              <NavbarLinks isMenuOpen={isMenuOpen}/>
              <UserMenu isMenuOpen={isMenuOpen}/>
            </div>
           
          </button>

          <NavbarLinks/>
          <UserMenu />
         
        </div>
    </nav>
  );
};

export default memo(Navbar);
