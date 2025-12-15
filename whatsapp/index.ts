import qrcode from "qrcode-terminal";
import { createWhatsAppClient } from "./client";
import { registerListeners, MessageHandler, AdminListener } from "./listener";
import { sendTextMessage } from "./sender";
import { downloadMedia } from "./media";
import { fetchChatHistory } from "./history";
import { GetChats } from "./ChatIds";

export const WhatsAppAPI = () => {
  const client = createWhatsAppClient();
  console.info(" Starting WhatsApp client...");

  client.on("qr", (qr) => {
    qrcode.generate(qr, { small: true });
    console.log("Scan QR to connect WhatsApp");
  });

  client.on("ready", () => {
    console.info("WhatsApp connected");
  });

  client.on("auth_failure", (msg) => {
    console.error("Authentication failure: ", msg);
  });

  client.on("disconnected", (reason) => {
    console.info("Disconnected:", reason);
  });

  return {
    start: () => client.initialize(),
    onMessage: (handler: MessageHandler) => registerListeners(client, handler),
    sendText: (chatId: string, text: string): Promise<void> =>
      sendTextMessage(client, chatId, text),
    downloadMedia,
    fetchHistory: (chatId: string, limit?: number) =>
      fetchChatHistory(client, chatId, limit),
    Chatlist: async () => await GetChats(client),
    onSelfMessage: (handler: any) => AdminListener(client, handler),
  };
};
