// This will test your understanding of basic Regex knowledge and the use of jquery and or
// dom selectors to apply changes to already loaded html.
// Create a script to be added to the <head> of an html document that does the following:
// automatically update any year in the text "Copyright © XXXX" to the current year
// update all instances of "Copyright © XXXX" no matter where they are placed
// change the text color of "Copyright © XXXX" to red

$(document).ready(function () {
  const currentYear = new Date().getFullYear();

  const copyrightRegex = /Copyright © \d{4}/g;

  $("body").html(function (index, html) {
    return html.replace(copyrightRegex, function (match) {
      return `<span style="color: red;">Copyright © ${currentYear}</span>`;
    });
  });
});
