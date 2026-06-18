document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".md-header__inner");
  if (!header || document.querySelector(".pdf-print-btn")) return;

  const btn = document.createElement("button");
  btn.type = "button";
  btn.className = "pdf-print-btn md-header__button";
  btn.title = "Stáhnout stránku jako PDF";
  btn.setAttribute("aria-label", "Stáhnout jako PDF");
  btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9.5 11.5c0 .83-.67 1.5-1.5 1.5H7v2H5.5V9H8c.83 0 1.5.67 1.5 1.5v1zm5 2c0 .83-.67 1.5-1.5 1.5h-2.5V9H13c.83 0 1.5.67 1.5 1.5v3zm4-3H17v1h1.5V13H17v2h-1.5V9h3v1.5zM7 10.5h1v1H7v-1zM12 10.5h1v3h-1v-3z"/>
  </svg>`;
  btn.addEventListener("click", () => window.print());

  // vložit před search button
  const searchBtn = header.querySelector("[data-md-toggle='search']");
  if (searchBtn) {
    header.insertBefore(btn, searchBtn);
  } else {
    header.appendChild(btn);
  }
});
