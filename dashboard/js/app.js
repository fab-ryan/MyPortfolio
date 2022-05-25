const toggle = document.getElementById("toggle");
toggle.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("clicked");
});
const card = document.getElementById("add-card");
const close_card = document.getElementById("close-card");
const show_portfolio = document.getElementById("show-portfolio");
const main_p=document.getElementById("main-p")
card.addEventListener("click", () => {
  show_portfolio.style.display = "block";
  main_p.classList.toggle("blure")
});
close_card.addEventListener("click", () => {
  show_portfolio.style.display = "none";
  main_p.classList.remove("blure")
});
