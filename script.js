const sidenav = document.querySelector(".side-nav");
const btn = document.querySelector(".hamburger-btn");
const backg = document.querySelector(".background");

btn.addEventListener("click", () => {
  sidenav.classList.toggle("show");
  backg.classList.toggle("dark");
});
