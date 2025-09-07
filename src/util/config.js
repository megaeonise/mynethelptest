require("dotenv").config();

const BOT_TOKEN = process.env.BOTTOKEN;
const SERVERS = process.env.SERVERS.split(",");
const ROLES = process.env.ROLES.split(",");
const INTERVAL = process.env.INTERVAL;

module.exports = { BOT_TOKEN, SERVERS, ROLES, INTERVAL };
