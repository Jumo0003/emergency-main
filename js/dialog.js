/**const btn_open = document.querySelector("#cta_open1");
const btn_close = document.querySelector("#close_btn");

btn_open.addEventListener("click", openModal);
btn_close.addEventListener("click", closeModal);

function openModal() {
  document.querySelector("#dioalog1").showModal();
  document.querySelector("#dioalog1").classList.add("fadeIn");
}

function closeModal() {
  document.querySelector("#dioalog1").close();
}**/

// Find alle knapper der åbner en modal
const openButtons = document.querySelectorAll("button[data-modal]");
// Find alle lukke-knapper
const closeButtons = document.querySelectorAll(".close");

// Når man klikker på en åbn-knap
openButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modalId = button.getAttribute("data-modal");
    const modal = document.getElementById(modalId);
    modal.style.display = "flex";
  });
});

// Når man klikker på et lukke-ikon
closeButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.target.closest(".modal").style.display = "none";
  });
});

// Luk modal hvis man klikker udenfor boksen
window.addEventListener("click", (e) => {
  if (e.target.classList.contains("modal")) {
    e.target.style.display = "none";
  }
});
