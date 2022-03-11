//Renvoit un message aléatoire en fonction du tableau Bonjour
export const Bonjour = (): string => {
  const messages: string[] = [
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

