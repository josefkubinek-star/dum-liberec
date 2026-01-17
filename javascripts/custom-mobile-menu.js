(function () {
  function el(tag, attrs = {}, children = []) {
    const node = document.createElement(tag);
    Object.entries(attrs).forEach(([k, v]) => {
      if (k === "class") node.className = v;
      else if (k === "text") node.textContent = v;
      else node.setAttribute(k, v);
    });
    children.forEach((c) => node.appendChild(c));
    return node;
  }

  function closeMenu() {
    document.documentElement.classList.remove("custom-menu-open");
  }
  function openMenu() {
    document.documentElement.classList.add("custom-menu-open");
  }
  function toggleMenu() {
    document.documentElement.classList.toggle("custom-menu-open");
  }

  document.addEventListener("DOMContentLoaded", () => {
    // Only on mobile widths
    const mq = window.matchMedia("(max-width: 76.2344em)");
    if (!mq.matches) return;

    const headerInner = document.querySelector(".md-header__inner");
    if (!headerInner) return;

    // Create overlay + panel (once)
    if (!document.querySelector(".custom-menu-overlay")) {
      const overlay = el("div", { class: "custom-menu-overlay", "aria-hidden": "true" });
      overlay.addEventListener("click", closeMenu);

      const panel = el("nav", { class: "custom-menu-panel", "aria-label": "Menu" });

      // Clone existing navigation list
      const navList = document.querySelector(".md-sidebar--primary .md-nav__list");
      if (navList) {
        const cloned = navList.cloneNode(true);
        cloned.classList.add("custom-menu-list");

        // De-duplicate nav links by href (prevents repeated items like "Zadání")
        const seen = new Set();
        cloned.querySelectorAll("a.md-nav__link").forEach((a) => {
          const href = a.getAttribute("href") || "";
          if (!href) return;
          if (seen.has(href)) {
            const li = a.closest("li");
            if (li) li.remove();
          } else {
            seen.add(href);
          }
        });

        // Remove empty list items after deletions
        cloned.querySelectorAll("li").forEach((li) => {
          if (!li.textContent.trim()) li.remove();
        });

        panel.appendChild(cloned);
      }

      // Add PDF action at bottom
      const pdfBtn = el("button", { class: "custom-menu-pdf", type: "button", text: "Stáhnout stránku jako PDF" });
      pdfBtn.addEventListener("click", () => window.print());
      panel.appendChild(pdfBtn);

      document.body.appendChild(overlay);
      document.body.appendChild(panel);
    }

    // Insert custom hamburger button on FAR RIGHT
    const btn = el("button", {
      class: "custom-hamburger",
      type: "button",
      title: "Menu",
      "aria-label": "Menu",
    });
    btn.innerHTML = "☰";
    btn.addEventListener("click", toggleMenu);

    // Put it as the last element in header (right side)
    headerInner.appendChild(btn);

    // Close menu on route changes / link clicks (for single page nav)
    document.body.addEventListener("click", (e) => {
      const a = e.target.closest("a.md-nav__link");
      if (a && document.documentElement.classList.contains("custom-menu-open")) closeMenu();
    });
  });
})();