import express from "express";
import {
  InteractionType,
  InteractionResponseType,
  InteractionResponseFlags,
  MessageComponentTypes,
  ButtonStyleTypes,
} from "discord-interactions";

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

/**
 * Interactions endpoint. This is where all of our requests from Discord will be sent to.
 */
app.post("/interactions", (req: Request, res: Response) => {
  //Check if the request is valid.
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
});

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
