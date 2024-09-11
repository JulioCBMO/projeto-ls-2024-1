const icone = document.querySelector(".icone-menu");
const secao = document.querySelector(".secao-menu");

icone.addEventListener("click", () => {
  secao.classList.toggle("animar");
});