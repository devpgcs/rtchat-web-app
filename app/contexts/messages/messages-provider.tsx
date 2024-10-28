"use client";

import { io } from "socket.io-client";
import { useParams } from "next/navigation";
import { PropsWithChildren, useCallback, useEffect, useMemo, useState } from "react";

interface MessagesContextValue {
  messages: string[];
  sendMessage: (chatId: string, message: string) => void;
}

interface MessagesProviderProps extends PropsWithChildren {
  token: string;
}

export default function MessagesProvider({ children, token }: MessagesProviderProps) {
  // Since is the next implementation
  // eslint-disable-next-line
  const [messages, setMessages] = useState<MessagesContextValue["messages"]>([]);

  const urlParams = useParams();

  const socket = useMemo(
    () => io(process.env.NEXT_PUBLIC_WS_URL, { extraHeaders: { authorization: `Bearer ${token}` } }),
    [token]
  );

  // Since is the next implementation
  // eslint-disable-next-line
  const sendMessage: MessagesContextValue["sendMessage"] = useCallback(
    async (chatId, message) => {
      socket.emit("message", { chatId, message });
    },
    [socket]
  );

  useEffect(() => {
    if (!urlParams.chatId) {
      // TODO: Redirect to the chat list page so that the WS can be disconnected
    }

    socket.on("connect", function () {
      console.log("WS connected");

      socket.emit("message-gateway-subscription", { test: "test" }, (ackResponse: unknown) =>
        console.log("Ack response:", ackResponse)
      );
    });

    socket.on("exception", function (data) {
      console.log("event exception", data);
    });

    socket.on("disconnect", function () {
      console.log("Disconnected");
    });

    return () => {
      socket.disconnect();
    };
  }, [socket, urlParams.chatId]);

  return children;
}
