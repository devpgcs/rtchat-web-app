import { PropsWithChildren } from "react";
import { redirect } from "next/navigation";

import { getToken } from "../utils/token-utils";
import { MessengerLayout } from "./components/layout";

export default function AuthenticatedLayout({ children }: PropsWithChildren) {
  const token = getToken();

  if (!token) {
    redirect("/auth/login");
  }

  return <MessengerLayout>{children}</MessengerLayout>;
}
