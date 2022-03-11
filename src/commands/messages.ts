import { Client, Message, MessageMentions } from "discord.js";
import { Bonjour } from "../messages/bonjour";

//Méthode pour detecter si un utilisateur écrit un message.

export default (client: Client): void => {
  client.on("messageCreate", async (message: Message) => {
    if (message.author.bot) return;

    /*
     *On récupère le message envoyé par l'utilisateur
     *toLowerCase passe le message en miniscule pour le pas être bloqué si l'utilisateur écrit Bonjour, BONJOUR, BoNjOUR...
     */
    const userMessage = message.content.toLowerCase();
    //Si bonjour est tapé le bot répond automatiquement en fonction du tableau (voir fichier bonjour.ts)
    if (userMessage.includes("bonjour")) {
      await message.reply(Bonjour());
    }
  });
};
