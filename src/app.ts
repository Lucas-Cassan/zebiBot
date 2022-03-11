import { Client, Intents, Message, TextChannel } from "discord.js";
import message from "./commands/messages";
//Chargement du fichier .env pour récupérer les variables.
require("dotenv").config();

//Log pour voir si le bot est prêt
console.log("Bot is starting...");

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

//Ajout d'un evement pour signaler a l'utilisateur que le client a bien démarré
client.once("ready", () => {
  console.log("The kitten bot has been started.");
});

//Préfix pour détécter les commandes
const prefix = "!";

client.on("messageCreate", (message) => {
  if (message.member.permissions.has("MANAGE_MESSAGES")) {
    console.log("perms ok");

    if (message.content.startsWith(prefix + "clear")) {
      console.log("commande !clear");

      let args = message.content.split(" ");

      if (args[1] == undefined) {
        message.reply("`Nombre de message non rempli ou mal défini.");
      } else {
        let number = parseInt(args[1]);

        if (isNaN(number)) {
          message.reply(
            "`vueillez mettre un nombre pour définir le nombre de messages à supprimer"
          );
        } else {
          (message.channel as TextChannel)
            .bulkDelete(number)
            .then((messages) => {
              console.log(
                "Suppresion de " + messages.size + "messages réussi."
              );
            })
            .catch((err) => {
              console.log("Erreur de clear " + err);
            });
        }
      }
    }
  }
});

//Récupération du token dans le .env
const token = process.env.TOKEN_BOT;

message(client);

//On connecte le bot
client.login(token);
