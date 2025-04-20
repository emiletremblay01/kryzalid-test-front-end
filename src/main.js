document.addEventListener("DOMContentLoaded", function () {
  // Code à exécuter une fois que le DOM est chargé
  console.log("DOM chargé lol!");

  const categorySelect = document.getElementById("categorySelect");
  const newsItems = document.querySelectorAll(".news-item");

  // Handle filter changes
  categorySelect.addEventListener("change", () => {
    const category = categorySelect.value;

    newsItems.forEach((item) => {
      if (category === "all" || item.dataset.category === category) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
});
