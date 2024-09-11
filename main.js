const hamburgerMenu = document.querySelector("#hamburger");
const mobileMenu = document.querySelector(".nav-wrapper");

hamburgerMenu.addEventListener("click", () => {
  mobileMenu.classList.toggle("mobile-drawer");
});
