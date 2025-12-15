import { Message } from "whatsapp-web.js";
import { WhatsAppMedia, WhatsAppMessage } from "./types";

export const downloadMedia = async (
  message: Message | WhatsAppMessage,
): Promise<WhatsAppMedia | null> => {
  if (!message.hasMedia) return null;

  const msg = message as Message;
  const media = await msg.downloadMedia();
  if (!media) return null;

  return {
    mimetype: media.mimetype,
    data: media.data,
    filename: media.filename,
  };
};
