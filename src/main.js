document.addEventListener("DOMContentLoaded", function () {
  // Code à exécuter une fois que le DOM est chargé
  console.log("DOM chargé lol!");

  // Exemple d'utilisation de l'API Fetch
  fetch("http://localhost:4000/posts")
    .then((response) => response.json())
    .then((data) => {
      console.log("Données récupérées :", data);
    })
    .catch((error) => {
      console.error("Erreur lors de la récupération des données :", error);
    });
});
