import { whatsapp } from "./runtime";
import { createHttpServer } from "./http/server";
import { sendToN8n } from "./services/n8n.service";
import { AllowedList } from "./whatsapp/AllowedList";

const app = createHttpServer();

whatsapp.onMessage(async (msg, raw) => {
  const isAllowed = AllowedList(msg);
  if (!isAllowed) {
    console.log("Message from unallowed source:", msg.chatId, msg.name);
    return;
  }

  console.log("Allowed message from:", msg.chatId, msg.name);

  let media = null;

  if (msg.hasMedia) {
    media = await whatsapp.downloadMedia(raw);
  }

  await sendToN8n({
    chat: {
      id: msg.chatId,
      name: msg.name,
      isGroup: msg.isGroup,
    },
    sender: {
      id: msg.sender,
      name: msg.name,
    },
    message: {
      id: msg.id,
      text: msg.text,
      hasMedia: msg.hasMedia,
      timestamp: msg.timestamp,
    },
    media,
  });
});

// NOTE: Feature for later use
// whatsapp.onSelfMessage(() => {
//   whatsapp.Chatlist();
// });

whatsapp.start();

app.listen(3000, () => {
  console.log("HTTP server running on port 3000");
});
