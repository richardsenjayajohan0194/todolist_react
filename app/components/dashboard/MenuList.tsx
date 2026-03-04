"use client"

import { AlignJustifyIcon, XIcon } from "lucide-react"
import { useState } from "react";
import NavbarLinks from "./NavbarLinks";


const MenuList = () => {
  console.log("MenuList Rendered");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
        <div className="sm:tw-hidden tw-block">
            {!isMenuOpen ? (
                <AlignJustifyIcon className="tw-text-lg tw-cursor-pointer" onClick={() => setIsMenuOpen(true)}/>
            ) : (
                <XIcon className="tw-text-lg tw-cursor-pointer" onClick={() => setIsMenuOpen(false)}/>
            )}
        </div>
        
        {/* Mobile Menu - Using flex layout instead of absolute */}
        <div className={`tw-absolute tw-w-full tw-bg-white tw-shadow-lg tw-pt-2 tw-flex tw-flex-col tw-items-center tw-gap-4 tw-font-semibold ${isMenuOpen ? 'tw-block' : 'tw-hidden'}`} style={{ top: '100%' }}>
            {/* <li className="tw-list-none tw-w-full tw-text-center tw-p-2 hover:tw-bg-sky-400 hover:tw-text-white tw-transition-all tw-cursor-pointer">Home</li>
            <li className="tw-list-none tw-w-full tw-text-center tw-p-2 hover:tw-bg-sky-400 hover:tw-text-white tw-transition-all tw-cursor-pointer">About</li>
            <li className="tw-list-none tw-w-full tw-text-center tw-p-2 hover:tw-bg-sky-400 hover:tw-text-white tw-transition-all tw-cursor-pointer">Contact</li> */}
            <NavbarLinks />
        </div>
    </>
  )
}

export default MenuList
