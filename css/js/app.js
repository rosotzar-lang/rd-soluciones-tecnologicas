(function () {
  // ✅ PON AQUÍ TU WHATSAPP (52 + 10 dígitos)
  const WHATSAPP_NUM = "5215500000000";

  const openBtn = document.getElementById("openQuote");
  const overlay = document.getElementById("quoteOverlay");
  const closeBtn = document.getElementById("closeQuote");
  const form = document.querySelector(".quoteForm");

  if (!openBtn || !overlay || !closeBtn) return;

  const openModal = () => overlay.classList.add("show");
  const closeModal = () => overlay.classList.remove("show");

  openBtn.addEventListener("click", openModal);
  closeBtn.addEventListener("click", closeModal);

  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeModal();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && overlay.classList.contains("show")) closeModal();
  });

  // ✅ Enviar a WhatsApp con datos del formulario
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const inputs = form.querySelectorAll(".input");
      const nombre = inputs[0]?.value?.trim() || "";
      const correo = inputs[1]?.value?.trim() || "";
      const telefono = inputs[2]?.value?.trim() || "";

      const servicio = form.querySelector("select")?.value || "";
      const fecha = form.querySelector('input[type="date"]')?.value || "";

      const mensaje = form.querySelector("textarea")?.value?.trim() || "";

      const texto =
        `Hola RD Soluciones Tecnológicas, quiero una cotización.%0A%0A` +
        `Nombre: ${encodeURIComponent(nombre)}%0A` +
        `Correo: ${encodeURIComponent(correo)}%0A` +
        `Teléfono: ${encodeURIComponent(telefono)}%0A` +
        `Servicio: ${encodeURIComponent(servicio)}%0A` +
        `Fecha tentativa: ${encodeURIComponent(fecha)}%0A%0A` +
        `Mensaje: ${encodeURIComponent(mensaje)}`;

      const url = `https://wa.me/${WHATSAPP_NUM}?text=${texto}`;
      window.open(url, "_blank");

      // opcional: cerrar modal
      closeModal();
      form.reset();
    });
  }
  // Header scroll effect
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 40) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
})();
