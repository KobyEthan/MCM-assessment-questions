function overrideMediaQueryButton() {
  const button = document.getElementById("contact-submit");

  if (button && window.innerWidth >= 991) {
    button.style.margin = "10px auto";
  }
}

window.addEventListener("load", overrideMediaQueryButton);

window.addEventListener("resize", overrideMediaQueryButton);
