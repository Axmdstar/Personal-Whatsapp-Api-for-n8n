import axios from "axios";
import config from "../configs/config";

export const sendToN8n = async (message: any) => {
  try {
    const data = await axios.post(config.N8nWebhookProduction, message, {
      maxBodyLength: Infinity,
    });

    console.info("n8n response data: ", data.data);
  } catch (error) {
    console.error("Error sending to n8n: ", error);
  }
};
