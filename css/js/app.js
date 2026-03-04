document.addEventListener("DOMContentLoaded", () => {
  const overlay = document.getElementById("quoteOverlay");
  const openBtn = document.getElementById("openQuote");
  const closeBtn = document.getElementById("closeQuote");

  if (!overlay) return;

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

  if (openBtn) openBtn.addEventListener("click", openModal);
  if (closeBtn) closeBtn.addEventListener("click", closeModal);

  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeModal();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });
});
