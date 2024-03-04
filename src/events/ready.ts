import { Client } from "discord.js";
const { Events } = require("discord.js");

module.exports = {
  name: Events.ClientReady,
  once: true,
  execute(client: Client) {
    if (client.user) {
      console.log(`Ready! Logged in as ${client.user.tag}`);
    } else {
      console.error(`[ERROR]: Client user is null`);
    }
  },
};
