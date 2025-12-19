import { Express, Request, Response } from "express";
import { whatsapp } from "../runtime";

export const registerActionRoutes = (app: Express) => {
  app.post("/actions", async (req: Request, res: Response) => {
    try {
      const { action, chatId, payload } = req.body;
      if (action === "send_text") {
        await whatsapp.sendText(chatId, payload);
      }

      res.json({ success: true });
    } catch (err) {
      res.status(200).json({ error: "Action failed" });
    }
  });

  app.get("/chathistory", async (req: Request, res: Response) => {
    try {
      const chatId = req.query.chatid as string;
      const limit = parseInt(req.query.limit as string) || 20;

      const history = await whatsapp.fetchHistory(chatId, limit);
      res.json({ success: true, history });
    } catch (err) {
      res.status(500).json({ error: "Failed to fetch chat history" });
    }
  });

  app.get("/findchatidby", async (req: Request, res: Response) => {
    try {
      const name = req.query.name as string;
      console.log("Finding chat ID for name:", name);

      // NOTE: Search through chats to find matching names
      await whatsapp.Chatlist().then((chats) => {
        const filtered = chats.filter((chat) => {
          if (!chat.name) return false;
          if (chat.name.toLowerCase().includes(name.toLowerCase())) {
            return true;
          }
        });
        res.json({ status: true, chats: filtered });
      });

      res.json({ status: "Chat Not Found" });
    } catch (err) {
      res.status(200).json({ status: "Failed to find chats" });
    }
  });
};
