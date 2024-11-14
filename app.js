const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav-sidebar");
const navElementAbout = document.querySelectorAll('a[href="#about"]');
const navElementPortfolio = document.querySelectorAll('a[href="#portfolio"]');

const ITOpenLabel = document.getElementById("it-open-label");
const audioOpenLabel = document.getElementById("audio-open-label");
const ITPanel = document.getElementById("it-panel");
const audioPanel = document.getElementById("audio-panel");

ITOpenLabel.addEventListener("click", function () {
  audioPanel.classList.remove("active");
  ITPanel.classList.contains("active")
    ? null
    : ITPanel.classList.add("active");
});

audioOpenLabel.addEventListener("click", function () {
  ITPanel.classList.remove("active");

  audioPanel.classList.contains("active")
    ? null
    : audioPanel.classList.add("active");
});

// Toggle sidebar visibility when hamburger icon is clicked
hamburger.addEventListener("click", function () {
  nav.classList.toggle("active");
});

// Hide sidebar when it is clicked
nav.addEventListener("click", function () {
  nav.classList.remove("active");
});

// Smooth scroll to #about section when navElementAbout is clicked
navElementAbout.forEach((element) => {
  element.addEventListener("click", function (event) {
    event.preventDefault();
    document.querySelector("#about").scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Smooth scroll to #portfolio section when navElementPortfolio is clicked
navElementPortfolio.forEach((element) => {
  element.addEventListener("click", function (event) {
    event.preventDefault();
    document.querySelector("#portfolio").scrollIntoView({
      behavior: "smooth",
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("one").checked = true;
  document.getElementById("three").checked = true;
});
