// May need to include this link in the head of your html fil when testing:
// <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

$(document).ready(function () {
  // Get the current year
  const currentYear = new Date().getFullYear();

  // Regular expression to match the copyright text
  const copyrightRegex = /Copyright © \d{4}/g;

  // Replace the text with the current year and change color to red
  $("html").html(function (index, html) {
    return html.replace(copyrightRegex, function (match) {
      return `<span style="color: red;">${match.replace(
        /\d{4}/,
        currentYear
      )}</span>`;
    });
  });
});
