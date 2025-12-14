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
};
