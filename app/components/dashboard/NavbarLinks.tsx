"use client"
import React, { memo } from "react";
import Link from "next/link";
import { userNavbarLinks } from "@/app/components/navigation/constant-navigation";
import { usePathname } from "next/navigation";

interface NavLinksProps {
  isMobile?: boolean;
}

const NavLinks = ({ isMobile = false }: NavLinksProps) => {
  const pathname = usePathname();

  // Base link styles
  const baseClasses = "tw-block tw-rounded-md tw-px-3 tw-py-2 tw-text-base tw-font-medium tw-no-underline tw-transition-colors";
  
  // Get active/inactive classes based on current page and mobile/desktop
  const getLinkClasses = (href: string) => {
    const isActive = pathname === href;
    
    if (isMobile) {
      // Mobile styles
      if (isActive) {
        return "tw-bg-gray-950/50 tw-text-white";
      }
      return "tw-text-gray-300 hover:tw-bg-white/5 hover:tw-text-white";
    } else {
      // Desktop styles
      if (isActive) {
        return "tw-text-white";
      }
      return "tw-text-gray-300 hover:tw-bg-white/5 hover:tw-text-white";
    }
  };

  return (
    <ul className={isMobile ? "tw-space-y-1 tw-px-2" : "tw-hidden sm:tw-flex tw-items-center tw-justify-center tw-gap-4 tw-font-semibold tw-text-base tw-mb-0"}>
      {userNavbarLinks.map((link) => (
        <li key={link.href} className={isMobile ? "" : "navbar"}>
          <Link 
            href={link.href} 
            className={`${baseClasses} ${getLinkClasses(link.href)}`}
            aria-current={pathname === link.href ? "page" : undefined}
            prefetch={false}
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default memo(NavLinks);
