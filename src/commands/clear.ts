import { Client, Message, TextChannel } from "discord.js";

//Préfix pour détécter les commandes
const prefix = "!";

//Méthode pour detecter si un utilisateur écrit un message.
export default (client: Client): void => {
  client.on("messageCreate", (message) => {
    if (message.member.permissions.has("MANAGE_MESSAGES")) {
      console.log("perms ok");

      if (message.content.startsWith(prefix + "clear")) {
        console.log("commande !clear");

        let args = message.content.split(" ");

        if (args[1] == undefined) {
          message.reply("Chef il me faut un nombre après la commande !");
        } else {
          let number = parseInt(args[1]);

          if (isNaN(number)) {
            message.reply(
              "Tu te fous de moi là ? il me faut un nombre après la commande pas autre choses !"
            );
          } else {
            (message.channel as TextChannel)
              .bulkDelete(number)
              .then((messages) => {
                message.channel.send(
                  "Et voilà" + message.author.username + ", 'ai supprimé " + messages.size + " messages"
                );
              })
              .catch((err) => {
                console.log("Erreur de clear " + err);
              });
          }
        }
      }
    } else {
      message.reply("T'as pas les droits sale fou !");
    }
  });
};
