(function () {
  function qs(sel, root = document) { return root.querySelector(sel); }
  function qsa(sel, root = document) { return Array.from(root.querySelectorAll(sel)); }

  function normalizeHref(href) {
    try {
      const u = new URL(href, window.location.href);
      // normalize trailing slashes
      u.hash = "";
      return u.pathname.replace(/\/+$/, "/");
    } catch {
      return (href || "").replace(/\/+$/, "/");
    }
  }

  function buildMenuItems() {
    const links = qsa(".md-sidebar--primary a.md-nav__link[href]");
    const items = [];
    const seen = new Set();

    for (const a of links) {
      const rawHref = a.getAttribute("href") || "";
      const text = (a.textContent || "").trim();

      // skip empty/placeholder links
      if (!text) continue;
      if (!rawHref || rawHref === "#" || rawHref.startsWith("#")) continue;

      const href = normalizeHref(rawHref);
      const key = (text.toLowerCase() + "||" + href);

      if (seen.has(key)) continue;
      seen.add(key);

      items.push({ text, href });
    }
    return items;
  }

  function closeMenu() { document.documentElement.classList.remove("custom-menu-open"); }
  function toggleMenu() { document.documentElement.classList.toggle("custom-menu-open"); }

  document.addEventListener("DOMContentLoaded", () => {
    const mq = window.matchMedia("(max-width: 76.2344em)");
    if (!mq.matches) return;

    const headerInner = qs(".md-header__inner");
    if (!headerInner) return;

    // Create overlay + panel once
    if (!qs(".custom-menu-overlay")) {
      const overlay = document.createElement("div");
      overlay.className = "custom-menu-overlay";
      overlay.addEventListener("click", closeMenu);

      const panel = document.createElement("nav");
      panel.className = "custom-menu-panel";
      panel.setAttribute("aria-label", "Menu");

      const ul = document.createElement("ul");
      ul.className = "custom-menu-ul";

      const items = buildMenuItems();

      for (const it of items) {
        const li = document.createElement("li");
        li.className = "custom-menu-li";

        const link = document.createElement("a");
        link.className = "custom-menu-a";
        link.href = it.href;
        link.textContent = it.text;

        li.appendChild(link);
        ul.appendChild(li);
      }

      panel.appendChild(ul);

      // PDF button at bottom
      const pdf = document.createElement("button");
      pdf.type = "button";
      pdf.className = "custom-menu-pdf";
      pdf.textContent = "Stáhnout stránku jako PDF";
      pdf.addEventListener("click", () => window.print());
      panel.appendChild(pdf);

      document.body.appendChild(overlay);
      document.body.appendChild(panel);
    }

    // Add custom hamburger button (right side)
    if (!qs(".custom-hamburger")) {
      const btn = document.createElement("button");
      btn.className = "custom-hamburger";
      btn.type = "button";
      btn.setAttribute("aria-label", "Menu");
      btn.title = "Menu";
      btn.textContent = "☰";
      btn.addEventListener("click", toggleMenu);
      headerInner.appendChild(btn);
    }

    // Close on link click
    document.body.addEventListener("click", (e) => {
      const a = e.target.closest(".custom-menu-a");
      if (a) closeMenu();
    });
  });
})();