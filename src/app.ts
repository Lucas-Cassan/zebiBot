import { Client, Intents, Message, TextChannel } from "discord.js";
import message from "./commands/messages";
import clear from "./commands/clear";
import deleteMessage from "./commands/deleteMessage";
import mentions from "./commands/mentions";

//Chargement du fichier .env pour récupérer les variables.
require("dotenv").config();

//Log pour voir si le bot est prêt
console.log("Bip Boup.. ZebiBot est là !");

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

//Ajout d'un evement pour signaler a l'utilisateur que le client a bien démarré
client.once("ready", () => {
  console.log("À toi de jouer ZebiBot");
});

//Récupération du token dans le .env
const token = process.env.TOKEN_BOT;

message(client);
clear(client);
deleteMessage(client);
mentions(client);

//On connecte le bot
client.login(token);
