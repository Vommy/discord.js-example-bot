import { SlashCommandBuilder, ChatInputCommandInteraction } from "discord.js";

module.exports = {
  data: new SlashCommandBuilder()
    .setName("greet")
    .setDescription("Greets the user who invoked this command in their dms."),
  async execute(interaction: ChatInputCommandInteraction) {
    const birthday = interaction.user.createdAt;
    await interaction.user.send("HI! Your birthday is " + birthday);
    //MUST ALWAYS REPLY AFTER A COMMAND.
    await interaction.reply("Greeting sent!");
  },
};
