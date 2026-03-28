"use client"
import React, { memo } from "react";
import Link from "next/link";
import { userNavbarLinks } from "@/app/components/navigation/constant-navigation";
import { usePathname } from "next/navigation";

interface Props{
  isMenuOpen?: boolean;
}

const NavLinks = ({isMenuOpen}:Props) => {
  const pathname = usePathname();

  return (
    <ul className={`tw-items-center  tw-justify-center tw-gap-4 tw-text-white sm:tw-flex  ${isMenuOpen ? 'tw-flex-col' : 'tw-flex-row tw-hidden'} `}>
        {userNavbarLinks.map((links) => (
          <li className="item tw-p-3" key={links.href}>
            <Link key={links.href} className={`link ${pathname === links.href ? 'active' : ''}`} aria-current="page" href={links.href} prefetch={false}>{links.label}</Link>
          </li>
        ))}
    </ul>
  );
};

export default memo(NavLinks);