"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bonjour_1 = require("../messages/bonjour");
//Méthode pour detecter si un utilisateur écrit un message.
exports.default = (client) => {
    client.on("messageCreate", async (message) => {
        if (message.author.bot)
            return;
        /*
         *On récupère le message envoyé par l'utilisateur
         *toLowerCase passe le message en miniscule pour le pas être bloqué si l'utilisateur écrit Bonjour, BONJOUR, BoNjOUR...
         */
        const userMessage = message.content.toLowerCase();
        //Si bonjour est tapé le bot répond automatiquement en fonction du tableau (voir fichier bonjour.ts)
        if (userMessage.includes("bonjour")) {
            await message.reply((0, bonjour_1.Bonjour)());
        }
    });
};
//# sourceMappingURL=messages.js.map