import express from "express";
import {
  InteractionType,
  InteractionResponseType,
  InteractionResponseFlags,
  MessageComponentTypes,
  ButtonStyleTypes,
  verifyKeyMiddleware,
} from "discord-interactions";
import { Client } from "discord.js";

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

/**
 * Interactions endpoint. This is where all of our requests from Discord will be sent to.
 */
app.post(
  "/interactions",
  verifyKeyMiddleware(process.env.PUBLIC_KEY || ""),
  (req: express.Request, res: express.Response) => {
    //Extract the type, ID and data of the request.
    const message = req.body;

    //Check what type the request is.
    if (message !== null) {
      if (message.type === InteractionType.APPLICATION_COMMAND) {
        const name = message.data;
        if (name === "play") {
          return res.send({
            type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
            data: { content: "Voila!" },
          });
        }
      }
    }
    //Check if in VC
    //IF not in VC AND request = play then
    //Join VC
    //Else
    //Send error saying need to join vc first.
    //Play song request
    //Play song
    //Pause song request
    //Check if in vc
    //Pause song
    //Skip song request
    //Check if in vc
    //Skip song
    //Queue song request
    //Check if in vc
    //Add song to queue
    //Disconnect request
    //Check if connected
    //Disconnect
    //Handle error
  }
);

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
