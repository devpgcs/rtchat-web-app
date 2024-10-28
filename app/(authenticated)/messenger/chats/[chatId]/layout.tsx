import { PropsWithChildren } from "react";

import MessagesProvider from "@devpgcs/app/contexts/messages/messages-provider";

import { getToken } from "@devpgcs/app/utils/token-utils";

export default async function SingleChatLayout({ children }: PropsWithChildren) {
  const token = await getToken();

  return <MessagesProvider token={token}>{children}</MessagesProvider>;
}
