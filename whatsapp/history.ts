import { Client } from "whatsapp-web.js";
import { WhatsAppHistoryMessage } from "./types";

export const fetchChatHistory = async (
  client: Client,
  chatId: string,
  limit = 20,
): Promise<WhatsAppHistoryMessage[]> => {
  const chat = await client.getChatById(chatId);
  const messages = await chat.fetchMessages({ limit });

  return messages.map((msg) => ({
    id: msg.id._serialized,
    text: msg.body,
    sender: msg.author,
    timestamp: msg.timestamp,
    fromMe: msg.fromMe,
  }));
};
