"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const messages_1 = __importDefault(require("./commands/messages"));
//Chargement du fichier .env pour récupérer les variables.
require("dotenv").config();
//Log pour voir si le bot est prêt
console.log("Bot is starting...");
const client = new discord_js_1.Client({
    intents: [discord_js_1.Intents.FLAGS.GUILDS, discord_js_1.Intents.FLAGS.GUILD_MESSAGES],
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
            }
            else {
                let number = parseInt(args[1]);
                if (isNaN(number)) {
                    message.reply("`vueillez mettre un nombre pour définir le nombre de messages à supprimer");
                }
                else {
                    message.channel
                        .bulkDelete(number)
                        .then((messages) => {
                        console.log("Suppresion de " + messages.size + "messages réussi.");
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
(0, messages_1.default)(client);
//On connecte le bot
client.login(token);
//# sourceMappingURL=app.js.map