FROM node:20-slim

# install dependencies needed for puppeteer
RUN apt-get update && apt-get install -y \
  chromium\
  ca-certificates \
  fonts-liberation \
  libatk-bridge2.0-0 \
  libatk1.0-0 \
  libcups2 \
  libnss3 \
  libxss1 \
  libasound2 \
  libxshmfence1 \
  libgbm1 \
  libgtk-3-0 \
  wget \
  --no-install-recommends && rm -rf /var/lib/apt/lists/*

ENV PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium
ENV N8N_WEBHOOK_URL_TEST="https://n8n.devaxmed.me/webhook-test/ec8e3a8e-3664-42da-97d7-0194aa6130f0"
ENV N8N_WEBHOOK_URL_PRODUCTION="https://n8n.devaxmed.me/webhook/ec8e3a8e-3664-42da-97d7-0194aa6130f0"

ENV ALLOWED_NUMBERS="252614918632@c.us,252612553160@c.us"
ENV ALLOWED_GROUPS="120363404246210535@g.us,120363028942444813@g.us,120363424636092364@g.us,120363407319427638@g.us"

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["node", "dist/app.js"]

