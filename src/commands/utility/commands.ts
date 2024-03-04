import { SlashCommandBuilder, ChatInputCommandInteraction } from "discord.js";

/* All Discord command names must be lowercase. 
  Every discord command requires a response. The simplest way to respond is by using interactions, which come in different types.
*/

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Responds with Pong!"),
  async execute(interaction: ChatInputCommandInteraction) {
    await interaction.reply("Pong!");
  },
};
