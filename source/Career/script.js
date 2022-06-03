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

/******************************************************/

/**********************ACORDERON ON JS**************************/

//ищем все блоки
const coolItem = document.querySelectorAll(".cool__item");

const closeItem = (el) => {
  const content = el.querySelector(".cool__item__text");
  el.classList.remove("active");
  content.style.maxHeight = null;
};

const openItem = (el) => {
  const content = el.querySelector(".cool__item__text");
  el.classList.add("active");
  content.style.maxHeight = content.scrollHeight + "px";
};

const closeAllItem = () => coolItem.forEach((item) => closeItem(item));

coolItem.forEach((el) => {
  el.addEventListener("click", () => {
    if (el.classList.contains("active")) {
      closeItem(el);
    } else {
      closeAllItem();
      openItem(el);
    }
  });
});
