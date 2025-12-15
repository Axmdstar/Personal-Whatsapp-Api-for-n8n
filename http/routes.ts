import { Express, Request, Response } from "express";
import { whatsapp } from "../runtime";

export const registerActionRoutes = (app: Express) => {
  app.post("/actions", async (req: Request, res: Response) => {
    const { action, chatId, payload } = req.body;

    try {
      if (action === "send_text") {
        await whatsapp.sendText(chatId, payload);
      }

      res.json({ success: true });
    } catch (err) {
      res.status(500).json({ error: "Action failed" });
    }
  });

  app.get("/chathistory/:chatid", async (req: Request, res: Response) => {
    const chatId = req.params.chatid;
    const limit = parseInt(req.query.limit as string) || 20;

    try {
      const history = await whatsapp.fetchHistory(chatId, limit);
      res.json({ success: true, history });
    } catch (err) {
      res.status(500).json({ error: "Failed to fetch chat history" });
    }
  });

  app.get("/findchatidby", async (req: Request, res: Response) => {
    const name = req.query.name as string;
    try {
      const chats = await whatsapp.Chatlist();
      const filtered = chats.filter((chat) =>
        chat.name.toLowerCase().includes(name.toLowerCase()),
      );
      res.json({ success: true, chats: filtered });
    } catch (err) {
      res.status(500).json({ error: "Failed to find chats" });
    }
  });
};
