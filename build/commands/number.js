"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommandMinMax = void 0;
const builders_1 = require("@discordjs/builders");
exports.CommandMinMax = {
    data: new builders_1.SlashCommandBuilder()
        .setName("minmax")
        .setDescription("Genère un nombre compris entre le min et le max")
        .addNumberOption((option) => option
        .setName("min")
        .setMinValue(0)
        .setDescription("La valeur minimum")
        .setRequired(true))
        .addNumberOption((option) => option
        .setName("max")
        .setMinValue(1)
        .setDescription("La valeur maximum")
        .setRequired(true))
        .toJSON(),
    run: async (client, interaction) => {
        var _a, _b;
        //On récupère les options
        let min = (_a = interaction.options.getNumber("min")) !== null && _a !== void 0 ? _a : 0;
        let max = (_b = interaction.options.getNumber("max")) !== null && _b !== void 0 ? _b : 0;
        await interaction.deferReply();
        //On vérifie que les deux ne valent pas 0 (le max est réglé a 1 mais on sait jamais)
        if (min == 0 && max == 0) {
            await interaction.followUp({
                ephemeral: true,
                content: "Il manque des nombres !",
            });
            return;
        }
        //On remet le min et max dans le bon sens
        let t = max;
        if (min > max) {
            max = min;
            min = t;
        }
        //On récupère notre chiffre aléatoire
        let value = Math.round(Math.random() * (max - min)) + min;
        let message = `[${min} - ${max}] Et voici votre chiffre : ${value}`;
        if (value == min) {
            message = "Oh non qu'elle décéption de tomber sur " + value + " (Min)";
        }
        if (value == max) {
            message = value + " ça c'est un chiffre qui en jette ! (Max)";
        }
        //On répond uniquement a celui qui execute la commande
        await interaction.followUp({
            ephemeral: true,
            content: message,
        });
    },
};
//# sourceMappingURL=number.js.map