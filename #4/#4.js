function loadMoreResults() {
  // get the element we want to click
  // for the browser I tested (Brave), the button has an id of "more-results".

  const loadMoreButton = document.getElementById("more-results");

  // if the element exists, click it
  if (loadMoreButton) {
    loadMoreButton.click();
    console.log("Clicke more results button.");
  }
  // if not, then simply log that it wasn't found
  if (!loadMoreButton) {
    console.log("More results button not found.");
  }
}
// call the function
loadMoreResults();
