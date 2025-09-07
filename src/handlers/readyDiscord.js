const { SERVERS, ROLES, INTERVAL } = require("../util/config");
const { changeRoleColor } = require("../util/changeRoleColor");
const readyDiscord = (client) => {
  //   console.log("AGLA \n sAGLA \n PAGla");
  //   console.log(client.guilds.cache.get(SERVERS[0]).roles.cache);
  changeRoleColor(client.guilds.cache.get(SERVERS[0]).roles.cache, INTERVAL);
  console.log("back");
};
module.exports = { readyDiscord };
