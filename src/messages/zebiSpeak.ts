//Renvoit un message aléatoire en fonction du tableau zebiSpeak
export const zebiSpeak = (): string => {
  const messages: string[] = [
    "Y à quoi ?",
    "Oui c'est moi ?",
    "ZebiBot ici pour vous servir ?",
    "J'ai pas le temps sorry",
    "Mmmh ?",
    "Un problème ?",
    "Je peux t'aider ?",
  ];

  //Recherche une chaine de caractères aléatoire dans le tableau messages.
  return messages[Math.round(Math.random() * (messages.length - 1))];
};
