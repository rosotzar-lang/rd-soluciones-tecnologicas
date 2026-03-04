@@ -1,18 +1,30 @@
(function () {
  // ✅ PON AQUÍ TU WHATSAPP (52 + 10 dígitos)
(() => {
  // ✅ Tu WhatsApp (52 + 10 dígitos)
  const WHATSAPP_NUM = "5215520255290";

  const openBtn = document.getElementById("openQuote");
  // ✅ Botones (usa class para poder tener 2)
  const openBtns = document.querySelectorAll(".openQuote");
  const overlay = document.getElementById("quoteOverlay");
  const closeBtn = document.getElementById("closeQuote");
  const form = document.querySelector(".quoteForm");

  if (!openBtn || !overlay || !closeBtn) return;
  // ✅ Form (ponle id="quoteForm" en tu <form>)
  const form = document.getElementById("quoteForm");

  const openModal = () => overlay.classList.add("show");
  const closeModal = () => overlay.classList.remove("show");
  if (!openBtns.length || !overlay || !closeBtn) return;

  openBtn.addEventListener("click", openModal);
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
@@ -23,88 +35,47 @@
    if (e.key === "Escape" && overlay.classList.contains("show")) closeModal();
  });

  // ✅ Enviar a WhatsApp con datos del formulario
  // ✅ Enviar a WhatsApp (si existe el form)
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
  // ✅ Header scroll effect
  const header = document.querySelector(".header");
  if (header) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 40) header.classList.add("scrolled");
      else header.classList.remove("scrolled");
    });
  }
});
})();
/* ===== FORMULARIO COTIZACION A WHATSAPP ===== */

const form = document.getElementById("quoteForm");

if(form){

form.addEventListener("submit", function(e){

e.preventDefault();

const nombre = form.nombre.value;
const empresa = form.empresa.value;
const telefono = form.telefono.value;
const estado = form.estado.value;
const correo = form.correo.value;

const plazo = document.querySelector('input[name="plazo"]:checked')?.value || "";
const empleados = document.querySelector('input[name="empleados"]:checked')?.value || "";

const mensaje =
`Hola RD Soluciones Tecnológicas.

Quiero solicitar una cotización.

Nombre: ${nombre}
Empresa: ${empresa}
Teléfono: ${telefono}
Estado: ${estado}
Correo: ${correo}
Plazo: ${plazo}
Empleados: ${empleados}
`;

const numero = "5215500000000"; // TU WHATSAPP

const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;

window.open(url, "_blank");

});

}
