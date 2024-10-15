"use client";

import { useEffect } from "react";
import { Navigation } from "./navigation";

export function PublicLayoutHeader() {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const header = document.querySelector("header");

      if (header) {
        const isUnderHeader = window.scrollY > header.clientHeight;

        header.classList.toggle("bg-slate-800", !isUnderHeader);
        header.classList.toggle("bg-slate-950", isUnderHeader);
      }
    });
  }, []);

  return (
    <header className="px-8 min-h-[100px] bg-slate-800 drop-shadow-sm flex items-center justify-between sticky top-0 z-10 transition-all duration-500">
      <h2 className="font-semibold text-lime-400">Real-time chat</h2>

      <Navigation />
    </header>
  );
}
