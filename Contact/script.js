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

/*****************SLIDES********************** */

$(document).ready(function () {
  $(".slider").slick({
    arrows: true,
    dots: true,
    slidesToShow: 3,

    speed: 1000,
    autoplaySpeed: 800,
    responsive: [
      {
        breakpoint: 1050,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});
