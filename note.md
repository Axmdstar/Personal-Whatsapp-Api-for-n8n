# Code Snippet

## Sessions localAuth
```javascript

const { Client, LocalAuth } = require('whatsapp-web.js');
const client = new Client({
  authStrategy: new LocalAuth(), // saves session
  puppeteer: {
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  },
});
```

## Sessions remoteAuth
```javascript
const { RemoteAuth } = require('whatsapp-web.js');
const store = new MongoStore({ mongoose });

const client = new Client({
  authStrategy: new RemoteAuth({
    store,
    backupSyncIntervalMs: 300000,
  }),
});

```

## Listen for Messages
```javascript
client.on('message', async message => {
  console.log(message.body)
})
```

## Send Messages
```javascript
client.on('message', async msg => {
  if (msg.body === 'hi') {
    await msg.reply('Hello 👋')
  }
})
```

## filter Messages
```javascript
client.on('message', async (msg) => {
  if (msg.from.endsWith('@g.us')) {
    console.log('Group message');
  } else {
    console.log('Private message');
  }
});
```

## handing Attachments
```javascript

client.on('message', async (msg) => {
  if (msg.hasMedia) {
    console.log('Media received');
  }
});

if (msg.hasMedia) {
  const media = await msg.downloadMedia();

  console.log(media.mimetype); // image/jpeg
  console.log(media.filename); // optional
  console.log(media.data);     // base64
}


const fs = require('fs');

const buffer = Buffer.from(media.data, 'base64');
fs.writeFileSync(`./uploads/${media.filename}`, buffer);

