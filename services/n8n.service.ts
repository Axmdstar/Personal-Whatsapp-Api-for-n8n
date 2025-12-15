import axios from "axios";
import { IncomingWhatsAppMessage } from "../whatsapp/types";
import config from "../configs/config";

export const sendToN8n = async (message: any) => {
  console.info("Webhooking to n8n: ", config.N8nWebhookTest);
  try {
    // const data = await axios.post(config.N8nWebhookTest, {
    //   source: "whatsapp",
    //   ...message,
    // });

    const data = await axios.post(config.N8nWebhookTest, message, {
      maxBodyLength: Infinity,
    });

    console.info("n8n response data: ", data.data);
  } catch (error) {
    console.error("Error sending to n8n: ", error);
  }
};

// export const sendToN8n = async (payload: any) => {
//   await axios.post(N8N_WEBHOOK_URL, payload, {
//     maxBodyLength: Infinity,
//   });
// };
