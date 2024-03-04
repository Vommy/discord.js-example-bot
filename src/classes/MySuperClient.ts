import {
  Client,
  Collection,
  CommandInteraction,
  GatewayIntentBits,
} from "discord.js";

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
