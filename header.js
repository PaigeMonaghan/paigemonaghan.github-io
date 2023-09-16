// header.js
document.addEventListener("DOMContentLoaded", function () {
  fetch("header.html")
    .then(response => response.text())
    .then(headerHtml => {
      document.querySelector("header").innerHTML = headerHtml;
    });
});
