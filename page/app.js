const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav-sidebar");
const navElementAbout = document.querySelectorAll('a[href="#about"]');
const navElementPortfolio = document.querySelectorAll('a[href="#portfolio"]');


document.addEventListener("DOMContentLoaded", function() {
  // Set the active class on the IT tab button
  document.getElementById("it-about-button").classList.add('active');
  // Open the IT tab content
  openCity(null, 'it');
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
navElementAbout.forEach(element => {
  element.addEventListener("click", function (event) {
    event.preventDefault();
    document.querySelector("#about").scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Smooth scroll to #portfolio section when navElementPortfolio is clicked
navElementPortfolio.forEach(element => {
  element.addEventListener("click", function (event) {
    event.preventDefault();
    document.querySelector("#portfolio").scrollIntoView({
      behavior: "smooth",
    });
  });
});

function openCity(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  if (evt) {
    evt.currentTarget.className += " active";
  }
}