"use client";

import { PropsWithChildren } from "react";
import { usePathname } from "next/navigation";

import { MessengerLayoutAside } from "./aside";
import { MessengerLayoutMain } from "./main";
import { MessengerLayoutProps } from "./interfaces/messenger-layout-props.interface";

export function MessengerLayout({ children }: PropsWithChildren) {
  const pathname = usePathname() as MessengerLayoutProps["pathname"];

  return (
    <div className="flex">
      <MessengerLayoutAside pathname={pathname} />
      <MessengerLayoutMain pathname={pathname}>{children}</MessengerLayoutMain>
    </div>
  );
}
