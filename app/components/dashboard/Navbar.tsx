"use client"

import { useState } from "react";
import NavbarLinks from "./NavbarLinks";
import UserMenu from "./UserMenu";
import { AlignJustifyIcon, XIcon } from "lucide-react";
import { memo } from "react";

const Navbar = () => {
  console.log("Navbar Rendered");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const logo = <span className="tw-h-8 tw-w-auto tw-text-white tw-font-bold tw-text-xl">Todo List</span>;

  return (
    <nav className="tw-relative tw-bg-gray-800 tw-border-b tw-border-white/10">
      {/* Main container */}
      <div className="tw-mx-auto tw-max-w-7xl tw-px-2 sm:tw-px-6 lg:tw-px-8">
        <div className="tw-relative tw-flex tw-h-16 tw-items-center tw-justify-between">
          
          {/* Mobile menu button - only visible on small screens */}
          <div className="tw-absolute tw-inset-y-0 tw-left-0 tw-flex tw-items-center sm:tw-hidden">
            <button 
              type="button" 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="tw-relative tw-inline-flex tw-items-center tw-justify-center tw-rounded-md tw-p-2 tw-text-gray-400 hover:tw-bg-white/5 hover:tw-text-white focus:tw-outline-none"
            >
              <span className="tw-absolute tw--inset-0.5"></span>
              <span className="tw-sr-only">Open main menu</span>
              {!isMobileMenuOpen ? (
                <AlignJustifyIcon className="tw-size-6" />
              ) : (
                <XIcon className="tw-size-6" />
              )}
            </button>
          </div>

          {/* Logo - centered on mobile, left on desktop */}

          
            <div className="tw-flex tw-flex-1 tw-items-center tw-justify-center md:tw-hidden">
              {logo}
            </div>
            <div className="tw-hidden md:tw-flex md:tw-items-center tw-justify-center">
              {logo}
            </div>

            {/* Desktop Navigation Links - hidden on mobile, visible on sm+ */}
            <div className="tw-hidden sm:tw-ml-6 sm:tw-block">
              <div className="tw-flex tw-space-x-4">
                <NavbarLinks />
              </div>
            </div>

          {/* Right side - User Menu (Desktop) */}
          <div className="tw-absolute tw-inset-y-0 tw-right-0 tw-flex tw-items-center tw-pr-2 sm:tw-static sm:tw-inset-auto sm:tw-ml-6 sm:tw-pr-0">
            <UserMenu />
          </div>
        </div>
      </div>

      {/* Mobile Menu - hidden by default, shown when toggled */}
      <div className={`sm:tw-hidden ${isMobileMenuOpen ? 'tw-block' : 'tw-hidden'}`}>
        <div className="tw-space-y-1 tw-px-2 tw-pt-2 tw-pb-3">
          <NavbarLinks isMobile={true} />
        </div>
      </div>
    </nav>
  );
};

export default memo(Navbar);
