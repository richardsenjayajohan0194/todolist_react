"use client"
import React, { memo } from "react";
import Link from "next/link";
import { userNavbarLinks } from "@/app/components/navigation/constant-navigation";
import { usePathname } from "next/navigation";

const NavLinks = () => {
  const pathname = usePathname();

  return (
    <ul className="navbar-nav d-flex flex-fill align-items-center justify-content-center">
        {userNavbarLinks.map((links) => (
          <li className="nav-item" key={links.href}>
            <Link key={links.href} className={`nav-link ${pathname === links.href ? 'active' : ''}`} aria-current="page" href={links.href} prefetch={false}>{links.label}</Link>
          </li>
        ))}
    </ul>
  );
};

export default memo(NavLinks);