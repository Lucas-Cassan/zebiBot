"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bonjour = void 0;
//Renvoit un message aléatoire en fonction du tableau Bonjour
const Bonjour = () => {
    const messages = [
        "Bonjour",
        "Wesh gros !",
        "Salut toi !",
        "Heyyy",
        "Salut",
        "Holà !",
        "Bien le bonjour",
        "Bien le sang ?",
    ];
    //Recherche une chaine de caractères aléatoire dans le tableau messages.
    return messages[Math.round(Math.random() * (messages.length - 1))];
};
exports.Bonjour = Bonjour;
//# sourceMappingURL=bonjour.js.map