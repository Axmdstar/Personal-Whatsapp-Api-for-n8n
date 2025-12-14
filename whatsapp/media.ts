import { Message } from "whatsapp-web.js";
import { WhatsAppMedia } from "./types";

export const downloadMedia = async (
  message: Message,
): Promise<WhatsAppMedia | null> => {
  if (!message.hasMedia) return null;

  const media = await message.downloadMedia();
  if (!media) return null;

  return {
    mimetype: media.mimetype,
    data: media.data,
    filename: media.filename,
  };
};
