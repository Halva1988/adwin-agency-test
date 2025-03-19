const callbackBtn = document.querySelector(".callback");
const form = document.querySelector(".callback-form");
const close = document.querySelector(".close");
const nav = document.querySelector(".header-nav");
const menu = document.querySelector(".menu-button");

const toggleMenu = () => {
  nav.classList.toggle("show");
}

const openForm = () => {
  form.style.display = "flex";
}

const closeForm = () => {
  form.style.display = "none";
};

callbackBtn.addEventListener("click", openForm);
close.addEventListener("click", closeForm);
menu.addEventListener("click", toggleMenu);