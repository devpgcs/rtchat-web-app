"use client";

import { PropsWithChildren, useCallback, useEffect, useRef } from "react";

import { useDelay } from "@devpgcs/app/hooks/use-delay";

interface DrawerProps extends PropsWithChildren {
  /**
   * Whether the drawer is open or not.
   */
  isOpen: boolean;
  /**
   * Callback to close the drawer.
   * @returns {void}
   */
  onClose: () => void;
}

export function DrawerNav({ children, isOpen, onClose }: DrawerProps) {
  const navRef = useRef<HTMLDivElement>(null);
  const backLayerDivRef = useRef<HTMLDivElement>(null);

  const openDelay = useDelay();
  const closeDelay = useDelay();

  const openAnimation = useCallback(() => {
    navRef.current!.classList.remove("-translate-x-full");
    backLayerDivRef.current!.classList.remove("opacity-0");
  }, []);

  const closeAnimation = useCallback(() => {
    navRef.current!.classList.add("-translate-x-full");
    backLayerDivRef.current!.classList.add("opacity-0");

    closeDelay(onClose, 300);
  }, [closeDelay, onClose]);

  useEffect(() => {
    if (navRef.current && backLayerDivRef.current && isOpen) {
      openDelay(openAnimation, 100);
    }
  }, [isOpen, openDelay, openAnimation]);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      ref={backLayerDivRef}
      className="bg-black/50 fixed left-0 top-0 min-w-full min-h-screen opacity-0 transition-all duration-300 hidden max-md:block"
      onClick={closeAnimation}
    >
      <nav
        ref={navRef}
        onClick={(e) => e.stopPropagation()}
        className="bg-white w-3/4 min-h-screen p-8 max-md:text-slate-500 flex flex-col justify-between -translate-x-full transition-all duration-300"
      >
        {children}
      </nav>
    </div>
  );
}
