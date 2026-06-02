const btnMenu = document.querySelector(".btn-menu");
const menuHeader = document.querySelector(".menu-header");
const menuLinks = document.querySelectorAll(".menu-header a");

function toggleMenu() {
  menuHeader.classList.toggle("menu-header-open");
  btnMenu.classList.toggle("x");
}

function closeMenu() {
  menuHeader.classList.remove("menu-header-open");
  btnMenu.classList.remove("x");
}

btnMenu.addEventListener("click", toggleMenu);

menuLinks.forEach((link) => {
  link.addEventListener("click", closeMenu);
});

const cursor = document.querySelector(".cursor");

/* POPUP */
const popup = document.getElementById("popup");
const closePopup = document.getElementById("closePopup");

if (popup) {
  setTimeout(() => {
    popup.classList.add("show");
  }, 3000); // 5 segundos
}

if (closePopup) {
  closePopup.addEventListener("click", () => {
    popup.classList.remove("show");
  });
}