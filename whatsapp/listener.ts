import { Client, Message } from "whatsapp-web.js";
import { IncomingWhatsAppMessage, WhatsAppMessage } from "./types";

export type MessageHandler = (
  message: IncomingWhatsAppMessage,
  raw: WhatsAppMessage,
) => Promise<void>;

export const registerListeners = (
  client: Client,
  onMessage: MessageHandler,
) => {
  client.on("message", async (message: WhatsAppMessage) => {
    console.info("Received message: ", message);
    // NOTE: map whatsapp-web.js Message to IncomingWhatsAppMessage
    const data: IncomingWhatsAppMessage = {
      id: message.id._serialized,
      chatId: message.from,
      from: message.from,
      name: message._data.notifyName || "Unknown",
      isGroup: message.from.endsWith("@g.us"),
      sender: message.author,
      text: message.body,
      hasMedia: message.hasMedia,
      timestamp: message.timestamp,
    };

    await onMessage(data, message);
  });
};

export const AdminListener = (client: Client) => {
  client.on("message_create", async (msg) => {
    const isOutgoing = msg.fromMe;
    const isGroup = msg.from.endsWith("@g.us");
    const isSelfChat = msg.fromMe && msg.from === msg.to;

    console.log({
      body: msg.body,
      fromMe: isOutgoing,
      isGroup,
      isSelfChat,
    });

    // Ignore bot loops
    if (isOutgoing && !isSelfChat) return;

    // Self chat = admin channel
    if (isSelfChat) {
      console.log("Admin command:", msg.body);
      return;
    }

    // Normal incoming message
    console.log("User message:", msg.body);
  });
};
