//Menu Burger//

const btn = document.querySelector(".btn");
const menu = document.querySelector(".menuBurger");


btn.addEventListener("click", function (event) {
  menu.classList.toggle("isOpen");
  btn.classList.toggle("btnCross");

});

////////