import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLinks = React.memo(function NavLinks() {
  const pathname = usePathname();
  return (
    <ul className="navbar-nav d-flex flex-fill align-items-center justify-content-center">
        <li className="nav-item">
        <Link className={`nav-link ${pathname === '/dashboard' ? 'active' : ''}`} aria-current="page" href="/dashboard">Dashboard</Link>
        </li>
        <li className="nav-item">
        <Link className={`nav-link ${pathname === '/action' ? 'active' : ''}`} href="/action">Action</Link>
        </li>
        <li className="nav-item">
        <Link className={`nav-link ${pathname === '/preview' ? 'active' : ''}`} href="/preview">Preview</Link>
        </li>
    </ul>
  );
});

export default NavLinks;