const iconMenu = document.querySelector(".menu__icon");
const menuBody = document.querySelector(".header__menu");
const headerLogo = document.querySelector(".header__logo");
const headerBurger = document.querySelector(".header__burder");
const headerRow = document.querySelector(".header__row");

iconMenu.addEventListener("click", function (e) {
  document.body.classList.toggle("_lock");
  iconMenu.classList.toggle("_active");
  menuBody.classList.toggle("_active");
  headerLogo.classList.toggle("_active");
  headerBurger.classList.toggle("_active");
  headerRow.classList.toggle("_pad");
});

/********************************************/

const showButton = document.querySelector(".show__team");
const itemNone = document.querySelectorAll(".item__none");

showButton.addEventListener("click", function () {
  for (let item of itemNone) {
    item.classList.toggle("_block");
    if (item.classList.contains("_block")) {
      showButton.innerHTML = `Свернуть`;
    } else {
      showButton.innerHTML = `Вся команда`;
    }
  }
});
