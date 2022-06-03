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

$(document).ready(function () {
  $(".question__item__title").click(function (event) {
    if ($(".question__list").hasClass("one")) {
      $(".question__item__title").not($(this)).removeClass("_active-acordeon");
      $(".question__item__text").not($(this).next()).slideUp(400);
    }
    $(this).toggleClass("_active-acordeon").next().slideToggle(400);
  });
});
