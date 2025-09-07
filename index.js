///Archaic code from when before I hosted it on Heroku
// console.log("hi guys welcome to my lets play");

///Environmental Variable and dependancies
const { Client, GatewayIntentBits } = require("discord.js");
const { readyDiscord } = require("./src/handlers/readyDiscord");
const { gotMessage } = require("./src/handlers/gotMessage");
const { BOT_TOKEN } = require("./src/util/config.js");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
  ],
});

client.on("clientReady", readyDiscord);
client.on("messageCreate", gotMessage);

client.login(BOT_TOKEN);

// client.on(Events.MessageCreate, gotMessage);
