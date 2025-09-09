const toggleBtn = document.querySelector(".nav-toggle");
const menu = document.getElementById("nav-menu");
toggleBtn?.addEventListener("click", () => {
  const expanded = toggleBtn.getAttribute("aria-expanded") === "true";
  toggleBtn.setAttribute("aria-expanded", String(!expanded));
  menu.classList.toggle("open");
});

document.getElementById("year").textContent = String(new Date().getFullYear());
