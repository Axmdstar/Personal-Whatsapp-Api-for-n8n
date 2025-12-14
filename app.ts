import { whatsapp } from "./runtime";
import { createHttpServer } from "./http/server";
import { sendToN8n } from "./services/n8n.service";

const app = createHttpServer();

whatsapp.onMessage(async (msg) => {
  console.log("Incoming:", msg);

  // sendToN8n(msg);
  // NOTE: Send to n8n
});

whatsapp.onSelfMessage();

whatsapp.start();

app.listen(3000, () => {
  console.log("HTTP server running on port 3000");
});
