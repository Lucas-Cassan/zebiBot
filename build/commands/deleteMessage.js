"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Préfix pour détécter les commandes
const prefix = "!";
exports.default = (client) => {
    client.on("messageDelete", async (message) => {
        if (message.member.permissions.has("MANAGE_MESSAGES")) {
            if (message.content.startsWith(prefix + "clear"))
                ;
        }
    });
};
//# sourceMappingURL=deleteMessage.js.map