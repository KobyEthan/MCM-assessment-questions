// For the browser I tested (Brave), the load more button was found by the id "more-results"
// It may be different for other browsers

function loadMoreResults1() {
  const loadMoreButton = document.getElementById("more-results");

  // Check if the button element was found
  if (loadMoreButton) {
    // Simulate a click on the button
    loadMoreButton.click();
    console.log("Clicked the 'more results' button.");
  } else {
    // Log a message if the button was not found
    console.log("The 'more results' button was not found.");
  }
}
loadMoreResults1();

// Here's how to do it in Google Chrome:

function loadMoreResults2() {
  // Use getElementsByClassName to retrieve elements with the specified class
  const loadMoreElement = document.querySelector("span.OTvAmd");

  // Check if the element was found with the specified class
  if (loadMoreElement) {
    // Simulate a click on the element
    loadMoreElement.click();
    console.log("Clicked the 'more results' element.");
  } else {
    // Log a message if no element was found
    console.log("The 'more results' element was not found.");
  }
}
loadMoreResults2();
