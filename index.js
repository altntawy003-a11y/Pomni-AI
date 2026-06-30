import { Client } from 'meowsab';
import { group, access } from "./system/control.js";
import UltraDB from "./system/UltraDB.js";
import sub from './sub.js';

/* =========== Client ========== */
const client = new Client({
  phoneNumber: '201026727354', // Bot number
  prefix: [".", "/", "!"],
  fromMe: false, 
  owners: [201552492135]
  // Owner 1
    {
  "name": "𓆩𝕂𝕠𝕜𝕦𝕤𝕙𝕚𝕓𝕠𓆪",
  "jid": "201037731259@s.whatsapp.net",
  "lid": "119048675283108@lid"
}
  ],
  settings: { noWelcome: false },
  commandsPath: './plugins'
});

client.onGroupEvent(group);
client.onCommandAccess(access);

/* =========== Database ========== */
if (!global.db) {
    global.db = new UltraDB();
}

/* =========== Config ========== */
const { config } = client;
config.info = { 
  nameBot: "𓆩𝕂𝕠𝕜𝕦𝕤𝕙𝕚𝕓𝕠𓆪", 
  nameChannel: "✦『 𝑻𝒘𝒊𝒍𝒊𝒈𝒉𝒕 𝑻𝒆𝒂𝒎 』✦", 
  idChannel: "120363409255768764@newsletter",
  urls: {
    repo: "https://github.com/deveni0/Pomni-AI",
    api: "https://emam-api.web.id",
    channel: "https://whatsapp.com/channel/0029VbD1EyCCXC3Hkr8tbk3V"
  },
  copyright: { 
    pack: '𓆩𝕂𝕠𝕜𝕦𝕤𝕙𝕚𝕓𝕠𓆪', 
    author: 'K'
  },
  images: [
    "https://files.catbox.moe/9sbklv.jpg",
    "https://files.catbox.moe/3h88il.jpg",
    "https://files.catbox.moe/ao4rf6.jpg"
  ]
};

/* =========== Start ========== */
client.start();

setTimeout(async () => {
if (client.commandSystem) { 
sub(client)
  }
}, 2000);


/* =========== Catch Errors ========== */
process.on('uncaughtException', (e) => {
    if (e.message.includes('rate-overlimit')) {}
});

process.on('unhandledRejection', (err) => {
    console.error('Unhandled Rejection:', err)
});


/* 
=========== Memory Monitor ========== 

setInterval(() => {
    const used = process.memoryUsage().rss / 1024 / 1024
    if (used > 800) {
        console.log(`🔄 Bot memory full (${used.toFixed(1)}MB), restarting...`)
        process.exit(1) 
    }
}, 300_000) 

*/
