//Menu Burger//

const btn = document.querySelector(".btn");
const menu = document.querySelector(".menuBurger");
const barre = document.querySelectorAll(".barre")

btn.addEventListener("click", function (event) {
  menu.classList.toggle("isOpen");
  btn.classList.toggle("btnCross");
  

});

////////