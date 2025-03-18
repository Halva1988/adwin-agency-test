const callbackBtn = document.querySelector(".callback");
const form = document.querySelector(".callback-form");
const close = document.querySelector(".close");

const openForm = () => {
  form.style.display = "flex";
}

const closeForm = () => {
  form.style.display = "none";
};

callbackBtn.addEventListener("click", openForm);
close.addEventListener("click", closeForm);