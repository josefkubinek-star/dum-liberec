document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector(".md-sidebar--primary .md-nav__list");
  if (!nav) return;

  // avoid duplicates
  if (document.querySelector(".drawer-pdf")) return;

  const li = document.createElement("li");
  li.className = "md-nav__item drawer-pdf";

  const btn = document.createElement("button");
  btn.type = "button";
  btn.className = "md-nav__link";
  btn.textContent = "Stáhnout stránku jako PDF";
  btn.addEventListener("click", () => window.print());

  li.appendChild(btn);

  // append to the very bottom
  nav.appendChild(li);
});