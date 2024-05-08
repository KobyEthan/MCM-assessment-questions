document.addEventListener("DOMContentLoaded", function () {
  // Find the anchor element with class 'frvtbum'
  const bbbLink = document.querySelector("a.frvtbum");

  // Check if the anchor element is found
  if (bbbLink) {
    // Remove the 'href' attribute to disable the link
    bbbLink.removeAttribute("href");
  }
  // I do not think that removing "Click for Profile" is possible if it's in the image itself and is therefore not selectable in the DOM.
  // Please let me know if I misunderstood the question or if there is another way to do it.
  // Thank you!
});
