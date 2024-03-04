import { Client, Collection, GatewayIntentBits } from "discord.js";

/**
 * Adds commands collections for command handler code.
 */
class MySuperClient extends Client {
  public commands: Collection<string, any>;

  constructor() {
    super({
      intents: [GatewayIntentBits.Guilds],
    });
    this.commands = new Collection();
  }
}

export default MySuperClient;
