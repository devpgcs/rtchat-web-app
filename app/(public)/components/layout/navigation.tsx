"use client";

import Link from "next/link";

import { useState } from "react";
import { usePathname } from "next/navigation";

import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { DrawerNav } from "@devpgcs/app/components/drawer-nav";

export function Navigation() {
  const [canShowDrawerNav, setCanShowDrawerNav] = useState<boolean>(false);

  const pathname = usePathname();

  const closeDrawerNav = () => setCanShowDrawerNav(false);

  const navList = (
    <nav>
      <ul className="flex max-md:flex-col gap-4 text-slate-100 max-md:text-slate-700">
        {pathname !== "/" && (
          <li>
            <Link href="/" onClick={closeDrawerNav}>
              Home
            </Link>
          </li>
        )}

        {pathname !== "/auth/login" && (
          <li>
            <Link href="/auth/login" onClick={closeDrawerNav}>
              Login
            </Link>
          </li>
        )}

        {pathname !== "/auth/register" && (
          <li>
            <Link href="/auth/register" onClick={closeDrawerNav}>
              Register
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );

  const mobileNavButton = (
    <div role="button" className="block min-[768px]:hidden" onClick={() => setCanShowDrawerNav(true)}>
      <FontAwesomeIcon icon={faBars} size="2x" className="text-slate-100" />
    </div>
  );

  return (
    <>
      <nav className="max-md:hidden">{navList}</nav>

      {mobileNavButton}

      <DrawerNav isOpen={canShowDrawerNav} onClose={closeDrawerNav}>
        {navList}
      </DrawerNav>
    </>
  );
}
