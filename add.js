let openBtn = document.querySelector(".navbar_btn_burgeer");
let closeBtn = document.querySelector(".burgen_munu_btn_close");

let burgerMenu = document.querySelector(".burger_menu");

openBtn.addEventListener("click", () => {
  burgerMenu.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  burgerMenu.style.display = "none";
});
