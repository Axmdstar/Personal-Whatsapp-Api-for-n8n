import { Client } from "whatsapp-web.js";

export const sendTextMessage = async (
  client: Client,
  chatId: string,
  text: string,
) => {
  await client.sendMessage(chatId, text);
};
