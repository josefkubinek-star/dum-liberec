document.addEventListener("DOMContentLoaded", () => {
  const drawer = document.getElementById("__drawer");
  const label = document.querySelector('label[for="__drawer"]');
  if (!drawer || !label) return;

  // ensure click always toggles checkbox
  label.addEventListener("click", (e) => {
    // allow normal behavior first; then enforce state
    setTimeout(() => {
      // If it didn't toggle, force it open
      if (!drawer.checked) drawer.checked = true;
    }, 0);
  });

  // clicking overlay closes drawer
  const overlay = document.querySelector(".md-overlay");
  if (overlay) {
    overlay.addEventListener("click", () => {
      drawer.checked = false;
    });
  }
});