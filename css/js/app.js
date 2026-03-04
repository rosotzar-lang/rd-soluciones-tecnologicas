(() => {
  // ✅ Tu WhatsApp (52 + 10 dígitos)
  const WHATSAPP_NUM = "5215520255290";

  // ✅ Botones (usa class para poder tener 2)
  const openBtns = document.querySelectorAll(".openQuote");
  const overlay = document.getElementById("quoteOverlay");
  const closeBtn = document.getElementById("closeQuote");

  // ✅ Form (ponle id="quoteForm" en tu <form>)
  const form = document.getElementById("quoteForm");

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

  openBtns.forEach((btn) => btn.addEventListener("click", openModal));
  closeBtn.addEventListener("click", closeModal);

  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeModal();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && overlay.classList.contains("show")) closeModal();
  });

  // ✅ Enviar a WhatsApp (si existe el form)
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      // Campos (ajusta según tus inputs)
      const nombre = form.querySelector('[name="nombre"]')?.value?.trim() || "";
      const empresa = form.querySelector('[name="empresa"]')?.value?.trim() || "";
      const telefono = form.querySelector('[name="telefono"]')?.value?.trim() || "";
      const estado = form.querySelector('[name="estado"]')?.value?.trim() || "";
      const correo = form.querySelector('[name="correo"]')?.value?.trim() || "";

      const plazo = form.querySelector('input[name="plazo"]:checked')?.value || "";
      const empleados = form.querySelector('input[name="empleados"]:checked')?.value || "";
      const mensajeExtra = form.querySelector('[name="mensaje"]')?.value?.trim() || "";

      const msg =
        `Hola RD Soluciones Tecnológicas, quiero una cotización.\n\n` +
        `Nombre: ${nombre}\n` +
        `Empresa: ${empresa}\n` +
        `Teléfono: ${telefono}\n` +
        `Estado: ${estado}\n` +
        `Correo: ${correo}\n` +
        `Plazo: ${plazo}\n` +
        `Empleados: ${empleados}\n\n` +
        `Mensaje: ${mensajeExtra}`;

      const url = `https://wa.me/${WHATSAPP_NUM}?text=${encodeURIComponent(msg)}`;
      window.open(url, "_blank");

      closeModal();
      form.reset();
    });
  }

  // ✅ Header scroll effect
  const header = document.querySelector(".header");
  if (header) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 40) header.classList.add("scrolled");
      else header.classList.remove("scrolled");
    });
  }
})();
