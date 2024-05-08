// For the browser I tested (Brave), the button has an id of "more-results"
// It may be different for other browsers

function loadMoreResults() {
  const loadMoreButton = document.getElementById("more-results");

  // If the element exists, click it
  if (loadMoreButton) {
    loadMoreButton.click();
    console.log("Clicke more results button.");
  }
  // If not, then simply log that it wasn't found
  if (!loadMoreButton) {
    console.log("More results button not found.");
  }
}
loadMoreResults();
