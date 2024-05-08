document.addEventListener("DOMContentLoaded", function () {
  function moveElementToLeftIfNeeded(elementId, maxWidth, shouldMove) {
    var element = document.getElementById(elementId);
    if (element) {
      // Set up a MediaQueryList to match the viewport condition
      var mediaQueryList = window.matchMedia(`(max-width: ${maxWidth}px)`);

      // Conditionally apply based on media query
      function applyPosition() {
        if (mediaQueryList.matches === shouldMove) {
          element.style.position = "relative";
          element.style.left = "-100px";
        } else {
          // Reset to default if not matching
          element.style.position = "";
          element.style.left = "";
        }
      }
      // Apply initially
      applyPosition();
      // Reapply on viewport change
      mediaQueryList.addListener(applyPosition);
    }
  }
  moveElementToLeftIfNeeded("contact-submit", 991, false);
  moveElementToLeftIfNeeded("contact-submitB", 991, true);
});
