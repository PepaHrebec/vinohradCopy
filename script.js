const sidenav = document.querySelector(".side-nav");
const btn = document.querySelector(".hamburger");
const backg = document.querySelector(".background");

btn.addEventListener("click", () => {
  btn.classList.toggle("is-active");
  sidenav.classList.toggle("show");
  backg.classList.toggle("dark");
});
