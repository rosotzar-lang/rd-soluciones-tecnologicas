// RD Soluciones Tecnológicas - app.js
(function () {
  const openBtn = document.getElementById("openQuote");
  const overlay = document.getElementById("quoteOverlay");
  const closeBtn = document.getElementById("closeQuote");

  if (!openBtn || !overlay || !closeBtn) return;

  const openModal = () => {
    overlay.classList.add("show");
    overlay.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    overlay.classList.remove("show");
    overlay.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  };

  openBtn.addEventListener("click", openModal);
  closeBtn.addEventListener("click", closeModal);

  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeModal();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && overlay.classList.contains("show")) closeModal();
  });
})();
