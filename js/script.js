const toggle = document.querySelector("#toggle");
const body = document.querySelector("body");
const header = document.querySelector(".main-header");
const heading = document.querySelector("h1");
const card = document.querySelectorAll(".card");
const h2 = document.querySelectorAll(".stats-amount");
const h4 = document.querySelectorAll(".stats-overview");
const mode = document.querySelector(".mode");

// function cards() {
//   card.forEach(function (card) {
//     card.classList.toggle("card-dark");
//   });
// }

toggle.addEventListener("click", function () {
  body.classList.toggle("dark-body");
  header.classList.toggle("main-header-dark");
  heading.classList.toggle("dark-headings");

  if (mode.textContent === "Dark Mode") {
    mode.textContent = "Light Mode";
  } else {
    mode.textContent = "Dark Mode";
  }

  card.forEach(function (cards) {
    cards.classList.toggle("card-dark");
  });

  for (let i = 0; i < h2.length; i++) {
    h2[i].style.color = "light-text";
  }

  // h2.forEach(function (marc) {
  //   marc.classList.toggle("light-text");
  //   marc.style.color = "pink";
  // });
});
