import dotenv from "dotenv";

dotenv.config();

interface Config {
  N8nWebhookTest: string;
  N8nWebhookProduction: string;
  AllowedGroups: string;
  AllowedNumbers?: string;
}

const config: Config = {
  N8nWebhookTest: process.env.N8N_WEBHOOK_URL_TEST,
  N8nWebhookProduction: process.env.N8N_WEBHOOK_URL_PRODUCTION,
  AllowedGroups: process.env.ALLOWED_GROUPS,
  AllowedNumbers: process.env.ALLOWED_NUMBERS,
};

export default config;
