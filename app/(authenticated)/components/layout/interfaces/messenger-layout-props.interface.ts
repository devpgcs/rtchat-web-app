import { PropsWithChildren } from "react";

export interface MessengerLayoutProps extends PropsWithChildren {
  /**
   * The current pathname of the page.
   */
  pathname: "/messenger" | "/messenger/contacts";
}
