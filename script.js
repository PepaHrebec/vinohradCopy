const sidenav = document.querySelector(".side-nav");
const btn = document.querySelector(".hamburger-btn");

btn.addEventListener("click", () => {
  sidenav.classList.toggle("show");
});
