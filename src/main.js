document.addEventListener("DOMContentLoaded", function () {
  // Code à exécuter une fois que le DOM est chargé
  console.log("DOM chargé!");

  const categorySelect = document.getElementById("categorySelect");
  const newsContainer = document.querySelector(".news-container");
  const newsItems = document.querySelectorAll(".news-item");
  const itemsPerPage = 10;
  let currentPage = 1;

  // Store original items for restoration
  const originalItems = Array.from(newsItems);

  // Create pagination controls
  const paginationContainer = document.createElement("div");
  paginationContainer.className = "pagination";
  newsContainer.parentNode.insertBefore(
    paginationContainer,
    newsContainer.nextSibling
  );

  // Function to update pagination controls
  function updatePagination(filteredItems) {
    const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

    // Clear previous pagination
    paginationContainer.innerHTML = "";

    if (totalPages <= 1) return;

    // Add pagination controls
    const paginationControls = document.createElement("div");
    paginationControls.className = "pagination-controls";

    // Previous button with SVG chevron
    if (currentPage > 1) {
      const prevButton = document.createElement("button");
      prevButton.className = "pagination-button";
      prevButton.innerHTML = `<svg width="12" height="22" viewBox="0 0 12 22" fill="none" xmlns="http://www.w3.org/2000/svg" style="transform: rotate(180deg);">
        <path d="M1.95498 0.830793L2.13901 0.63063L2.32305 0.830793L10.9478 10.2114C11.3507 10.6496 11.3507 11.3504 10.9478 11.7886L2.32305 21.1692L2.13901 21.3694L1.95498 21.1692L0.815965 19.9304L0.660391 19.7612L0.815965 19.592L8.71565 11L0.815963 2.40804L0.66039 2.23883L0.815963 2.06962L1.95498 0.830793Z" fill="currentColor" stroke="currentColor" stroke-width="0.5"/>
      </svg>`;
      prevButton.addEventListener("click", () => {
        currentPage--;
        displayItems(filteredItems);
      });
      paginationControls.appendChild(prevButton);
    }

    // Page numbers
    for (let i = 1; i <= totalPages; i++) {
      const pageButton = document.createElement("button");
      pageButton.className = `pagination-button ${i === currentPage ? "active" : ""}`;
      pageButton.textContent = i;
      pageButton.addEventListener("click", () => {
        currentPage = i;
        displayItems(filteredItems);
      });
      paginationControls.appendChild(pageButton);
    }

    // Next button with SVG chevron
    if (currentPage < totalPages) {
      const nextButton = document.createElement("button");
      nextButton.className = "pagination-button";
      nextButton.innerHTML = `<svg width="12" height="22" viewBox="0 0 12 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.95498 0.830793L2.13901 0.63063L2.32305 0.830793L10.9478 10.2114C11.3507 10.6496 11.3507 11.3504 10.9478 11.7886L2.32305 21.1692L2.13901 21.3694L1.95498 21.1692L0.815965 19.9304L0.660391 19.7612L0.815965 19.592L8.71565 11L0.815963 2.40804L0.66039 2.23883L0.815963 2.06962L1.95498 0.830793Z" fill="currentColor" stroke="currentColor" stroke-width="0.5"/>
      </svg>`;
      nextButton.addEventListener("click", () => {
        currentPage++;
        displayItems(filteredItems);
      });
      paginationControls.appendChild(nextButton);
    }

    paginationContainer.appendChild(paginationControls);
  }

  // Function to display items based on current filter and page
  function displayItems(items) {
    // Clear the container
    newsContainer.innerHTML = "";

    // Calculate start and end indices for current page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, items.length);

    // Add items for current page
    for (let i = startIndex; i < endIndex; i++) {
      newsContainer.appendChild(items[i].cloneNode(true));
    }

    // Update pagination
    updatePagination(items);
  }

  // Handle filter changes
  categorySelect.addEventListener("change", () => {
    const category = categorySelect.value;
    currentPage = 1; // Reset to first page when filter changes

    // Filter items
    const filteredItems = originalItems.filter(
      (item) => category === "all" || item.dataset.category === category
    );

    // Display filtered items
    displayItems(filteredItems);
  });

  // Initial display
  displayItems(originalItems);
});
