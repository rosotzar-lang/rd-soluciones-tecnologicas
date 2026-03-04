document.addEventListener("DOMContentLoaded", () => {
  const openBtns = document.querySelectorAll(".openQuote");
  const overlay = document.getElementById("quoteOverlay");
  const closeBtn = document.getElementById("closeQuote");

  if (!openBtns.length || !overlay || !closeBtn) return;

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

  openBtns.forEach(btn => btn.addEventListener("click", openModal));
  closeBtn.addEventListener("click", closeModal);

  // Cerrar si das click fuera del modal
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeModal();
  });

  // Cerrar con ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });

  // Submit: solo confirma (puedes cambiarlo luego)
  const form = document.getElementById("quoteForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("¡Listo! Recibimos tu solicitud.");
      form.reset();
      closeModal();
    });
  }
});
