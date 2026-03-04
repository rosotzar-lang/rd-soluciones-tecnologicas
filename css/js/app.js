// ===== Modal Cotizar =====
document.addEventListener("DOMContentLoaded", () => {
  const overlay = document.getElementById("quoteOverlay");
  const openBtn = document.getElementById("openQuote");
  const closeBtn = document.getElementById("closeQuote");
  const form = document.getElementById("quoteForm");
  const serviceSelect = document.getElementById("serviceSelect");

  // Botones dentro de tarjetas (cotizar servicio)
  const openServiceBtns = document.querySelectorAll(".js-open-quote");

  const openModal = (serviceName = "") => {
    if (!overlay) return;

    overlay.classList.add("show");
    overlay.setAttribute("aria-hidden", "false");

    // Si viene servicio, preseleccionarlo
    if (serviceName && serviceSelect) {
      serviceSelect.value = serviceName;
    }

    // Evitar scroll del body
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    if (!overlay) return;

    overlay.classList.remove("show");
    overlay.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  };

  // Abrir desde botón del menú
  if (openBtn) {
    openBtn.addEventListener("click", () => openModal());
  }

  // Abrir desde botones de servicio
  openServiceBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const service = btn.getAttribute("data-service") || "";
      openModal(service);
    });
  });

  // Cerrar con botón X
  if (closeBtn) closeBtn.addEventListener("click", closeModal);

  // Cerrar al dar click fuera del modal
  if (overlay) {
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) closeModal();
    });
  }

  // Cerrar con tecla ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });

  // Submit (por ahora solo simula envío)
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      // Aquí después conectamos a correo, WhatsApp o backend
      alert("¡Gracias! Recibimos tu solicitud de cotización. En breve te contactamos.");
      form.reset();
      closeModal();
    });
  }
});
