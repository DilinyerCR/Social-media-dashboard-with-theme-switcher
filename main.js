const body = document.querySelector(".body");
const main = document.querySelector(".main");
const button = document.querySelector(".button");
const ball = document.querySelector(".ball");
let isMoved = false;

// Verifica si hay un valor en localStorage al cargar la página
const savedMode = localStorage.getItem("darkMode");
if (savedMode === "enabled") {
  body.classList.add("darkmode");
  ball.style.transform = "translateX(-24px)";
  button.style.background =
    "linear-gradient(to right, hsl(210, 78%, 56%), hsl(146, 68%, 55%))";
  isMoved = !isMoved;
} else {
  button.style.background = "hsl(230, 22%, 74%)";
}

button.addEventListener("click", () => {
  body.classList.toggle("darkmode");
  if (!isMoved) {
    ball.style.transform = "translateX(-24px)";
    button.style.background =
      "linear-gradient(to right, hsl(210, 78%, 56%), hsl(146, 68%, 55%))";
  } else {
    ball.style.transform = "translateX(0)";
    button.style.background = "hsl(230, 22%, 74%)";
  }

  isMoved = !isMoved;

  if (body.classList.contains("darkmode")) {
    localStorage.setItem("darkMode", "enabled");
  } else {
    localStorage.setItem("darkMode", "disabled");
  }
});
