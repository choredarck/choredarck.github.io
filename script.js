// Año en el footer
document.addEventListener("DOMContentLoaded", () => {
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});


// PIN "suave". No usar para cosas sensibles.
const PORTFOLIO_PIN = "H4LL0"; // cámbialo por el que quieras

function unlockPortfolio() {
  const lock = document.getElementById("lock-screen");
  const content = document.getElementById("site-content");
  if (lock && content) {
    lock.style.display = "none";
    content.style.display = "block";
  }
}

function checkPin() {
  const input = document.getElementById("pin-input");
  const error = document.getElementById("pin-error");
  if (!input) return;

  const value = input.value.trim();
  if (value === PORTFOLIO_PIN) {
    localStorage.setItem("portfolioUnlocked", "true");
    unlockPortfolio();
  } else {
    if (error) {
      error.style.display = "block";
      error.textContent = "PIN incorrecto.";
    }
  }
}

// Al cargar la página, revisa si ya lo desbloquearon antes
document.addEventListener("DOMContentLoaded", () => {
  const unlocked = localStorage.getItem("portfolioUnlocked");
  if (unlocked === "true") {
    unlockPortfolio();
  }
});
