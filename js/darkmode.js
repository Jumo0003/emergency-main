/***********dark and light mode */

const html = document.querySelector("html");
const btn = document.querySelector("#toggle");

if (localStorage.getItem("darkmode")) {
  html.classList.toggle("dark");
  btn.textContent = "Light";
}

function toggleTheme() {
  html.classList.toggle("dark");
  console.log("toggletheme");

  if (html.classList.contains("dark")) {
    btn.textContent = "Light";
    localStorage.setItem("darkmode", true);
  } else {
    btn.textContent = "dark";
    localStorage.setItem("darkmode", false);
  }
}

btn.addEventListener("click", toggleTheme);
