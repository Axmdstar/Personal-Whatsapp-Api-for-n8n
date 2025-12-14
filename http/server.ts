import { registerActionRoutes } from "./routes";
import express from "express";

export const createHttpServer = () => {
  const app = express();
  app.use(express.json());

  registerActionRoutes(app);

  return app;
};
