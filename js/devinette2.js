/*
Activité : jeu de devinette
*/

// NE PAS MODIFIER OU SUPPRIMER LES LIGNES CI-DESSOUS
// COMPLETEZ LE PROGRAMME UNIQUEMENT APRES LE TODO

console.log("Bienvenue dans ce jeu de devinette !");

// Cette ligne génère aléatoirement un nombre entre 1 et 100
var solution = Math.floor(Math.random() * 100) + 1;

// Décommentez temporairement cette ligne pour mieux vérifier le programme
//console.log("(La solution est " + solution + ")");

// TODO : complétez le programme
var saisie = Number(prompt("Entrez un nombre entre 1 et 100 :"));
var tentative = 0;

while ((saisie !== solution) && (tentative < 6)) {
  if (saisie > solution) {
    console.log(saisie + " est trop grand");
  }
  else {
    console.log(saisie + " est trop petit");
  }
  tentative++;
  var saisie = Number(prompt("Entrez un nombre entre 1 et 100 :"));
}

if (saisie === solution) {
  console.log("Bravo ! La solution est " + solution + ". Vous avez trouvé en " + tentative + " essais");
}
else {
  console.log("Vous avez perdu.. La solution était " + solution +"!");
}
