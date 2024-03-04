import { ChatInputCommandInteraction, Client } from "discord.js";

//Dependencies
const dotenv = require("dotenv");
const express = require("express");
const fs = require("node:fs");
const path = require("node:path");
const { Collection, Events, GatewayIntentBits } = require("discord.js");

dotenv.config();
const app = express();

const client = new Client({
  intents: [GatewayIntentBits.Guilds],
});

//Initializes client commands as a new collection.
client.commands = new Collection();

const foldersPath = path.join(__dirname, "commands");
const commandFolders = fs.readdirSync(foldersPath);

/**
 * Reads all of the command specified in the command folder.
 * Sets it up as / commands in Discord.
 */
for (const folder of commandFolders) {
  const commandsPath = path.join(foldersPath, folder);
  const commandFiles = fs
    .readdirSync(commandsPath)
    .filter((file: String) => file.endsWith(".js"));
  for (const file of commandFiles) {
    const filePath = path.join(commandsPath, file);
    const command = require(filePath);
    //Filters incomplete commands that don't have a data property or execute property.
    if ("data" in command && "execute" in command) {
      client.commands.set(command.data.name, command);
    } else {
      console.log(
        `[WARNING] The command at ${filePath} is missing a require "data" or "execute" property.`
      );
    }
  }
}

/**
 * Event listener
 * Listens for when an interaction is created, then executes the async function.
 * */
client.on(
  Events.InteractionCreate,
  async (interaction: ChatInputCommandInteraction) => {
    const command = interaction.client.commands.get(interaction.commandName);

    //If there is no command because it did not match any of the commands in the collection.
    if (!command) {
      console.error(
        `No command matching ${interaction.commandName} was found.`
      );
    }

    //A command was found.
    //Execute the command,
    //OR
    //Provide an appropriate error.
    try {
      await command.execute(interaction);
    } catch (error) {
      console.error(error);
      if (interaction.replied || interaction.deferred) {
        await interaction.followUp({
          content: "There was an error while executing the command!",
          ephemeral: true,
        });
      } else {
        await interaction.reply({
          content: "There was an error while executing this command~!",
          ephemeral: true,
        });
      }
    }
  }
);

client.once(Events.ClientReady, (readyClient: Client) => {
  if (readyClient.user)
    console.log(`Ready, Logged in as ${readyClient.user.tag}`);
});

client.login(process.env.TOKEN);

/*  
const PORT = process.env.PORT || 3000;

app.use("/interactions", async (req: Request, res: Response) => {
  const message = req.body;
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
*/
