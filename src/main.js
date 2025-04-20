document.addEventListener('DOMContentLoaded', function () {
  // Code à exécuter une fois que le DOM est chargé
  console.log('DOM chargé lol!');

  const categorySelect = document.getElementById('categorySelect');
  const newsContainer = document.querySelector('.news-container');
  const newsItems = document.querySelectorAll('.news-item');

  // Store original items for restoration
  const originalItems = Array.from(newsItems);

  // Handle filter changes
  categorySelect.addEventListener('change', () => {
    const category = categorySelect.value;

    // Clear the container
    newsContainer.innerHTML = '';

    // Filter and re-add items
    originalItems.forEach((item) => {
      if (category === 'all' || item.dataset.category === category) {
        newsContainer.appendChild(item.cloneNode(true));
      }
    });
  });
});
