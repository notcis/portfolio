"use client";

import { useEffect } from "react";
import { createChat } from "@n8n/chat";

export default function Chat() {
  useEffect(() => {
    createChat({
      webhookUrl:
        "https://watcharit.app.n8n.cloud/webhook/c2b4b52e-43f3-4f9e-8608-ad2a34defc93/chat",
      initialMessages: ["How can I help you today?"],
      i18n: {
        en: {
          title: "Need Help?",
          subtitle: "Ask me anything about this portfolio",
          footer: "",
          getStarted: "Get Started",
          inputPlaceholder: "Type your message...",
        },
      },
    });
  }, []);
  return <div></div>;
}
