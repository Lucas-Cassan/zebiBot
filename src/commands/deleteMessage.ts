import { Client, MessageMentions } from "discord.js";

//Méthode pour detecter si un utilisateur écrit un message.
export default (client: Client): void => {
  client.on("messageDelete", (message) => {
    message.channel.send(
      "@here Les gars je vous informe que " +
        message.author.username +
        " a supprimé son message il assume pas !"
    );
  });
};
