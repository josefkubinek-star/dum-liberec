document.addEventListener("DOMContentLoaded", () => {
  // find header container
  const headerInner = document.querySelector(".md-header__inner");
  if (!headerInner) return;

  // create button
  const btn = document.createElement("button");
  btn.className = "dl-cta";
  btn.type = "button";
  btn.textContent = "Stáhnout stránku jako PDF";
  btn.title = "Stáhnout stránku jako PDF";
  btn.addEventListener("click", () => window.print());

  // place it on the right side of header:
  // Material usually has header options container; try to append near search/actions
  const options =
    headerInner.querySelector(".md-header__options") ||
    headerInner.querySelector(".md-header-nav") ||
    headerInner;

  options.appendChild(btn);
});