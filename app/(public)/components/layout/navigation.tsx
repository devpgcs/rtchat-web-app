"use client";

import Link from "next/link";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Navigation() {
  const [canShowSidebar, setCanShowSidebar] = useState<boolean>(false);

  const pathname = usePathname();

  const navigationBackDiv = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (navigationBackDiv.current) {
      navigationBackDiv.current.classList.toggle("-translate-x-full", !canShowSidebar);
    }
  }, [canShowSidebar, navigationBackDiv.current]);

  const navList = (
    <nav>
      <ul className="flex max-md:flex-col gap-4 text-slate-100 max-md:text-slate-700">
        {pathname !== "/" && (
          <li>
            <Link href="/">Home</Link>
          </li>
        )}

        {pathname !== "/auth/login" && (
          <li>
            <Link href="/auth/login">Login</Link>
          </li>
        )}

        {pathname !== "/auth/register" && (
          <li>
            <Link href="/auth/register">Register</Link>
          </li>
        )}
      </ul>
    </nav>
  );

  const mobileNavButton = (
    <div role="button" className="block min-[768px]:hidden" onClick={() => setCanShowSidebar(true)}>
      <FontAwesomeIcon icon={faBars} size="2x" className="text-slate-100" />
    </div>
  );

  return (
    <>
      <nav className="max-md:hidden">{navList}</nav>

      {mobileNavButton}

      <div
        ref={navigationBackDiv}
        className="bg-black/50 fixed left-0 top-0 min-w-full min-h-screen transition-all -translate-x-full"
        onClick={() => setCanShowSidebar(false)}
      >
        <nav className="bg-white w-3/4 min-h-screen p-8 max-md:text-slate-500 flex flex-col justify-between">
          {navList}
        </nav>
      </div>
    </>
  );
}
