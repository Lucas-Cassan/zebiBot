import { Client, Message } from "discord.js";
import { zebiSpeak } from "../messages/zebiSpeak";

//Méthode pour detecter si un utilisateur écrit un message.
export default (client: Client): void => {
  client.on("messageCreate", async (message: Message) => {
    if (message.author.bot) return;

    //Si tu mentionnes le bot répond automatiquement en fonction du tableau (voir fichier zebiSpeak.ts)
     if (message.mentions.has(client.user)) {
      await message.reply(zebiSpeak());
     }
  });
};
