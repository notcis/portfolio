"use client";

import { useEffect } from "react";
import { createChat } from "@n8n/chat";

export default function Chat() {
  useEffect(() => {
    createChat({
      webhookUrl: process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL,
      initialMessages: [
        "สวัสดี! 👋",
        "ฉันชื่อ แตงกวา เป็นผู้ช่วยตอบคำถามของ Watcharit",
      ],
      i18n: {
        en: {
          title: "สวัสดี! 👋",
          subtitle: "AI Chatbot. ตอบคำถาม 24/7.",
          footer: "",
          getStarted: "New Conversation",
          inputPlaceholder: "Type your question..",
          closeButtonTooltip: "",
        },
      },
    });
  }, []);
  return null;
}
