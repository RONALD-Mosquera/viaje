// Espera a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function() {
  // Obtén las secciones
  let bienvenidaSection = document.querySelector(".bienvenida");
  let elegirSection = document.querySelector(".elegir");
  let resultadoSection = document.querySelector(".resultado");
  let finalSection = document.querySelector(".final");

  // Obtén los enlaces
  let empezarLink = document.getElementById("empezamos");
  let elegirLinks = document.querySelectorAll(".elegir__content");
  let resultadoLinks = document.querySelectorAll(".resultado .elegir__content");

  // Oculta todas las secciones, excepto la de bienvenida inicialmente
  elegirSection.style.display = "none";
  resultadoSection.style.display = "none";
  finalSection.style.display = "none";

  // Agrega un evento de clic al enlace de "Empezar"
  empezarLink.addEventListener("click", function() {
    // Oculta la sección de bienvenida y muestra la sección de elegir
    bienvenidaSection.style.display = "none";
    elegirSection.style.display = "block";
  });

  // Agrega eventos de clic a los enlaces de "Elegir"
  elegirLinks.forEach(function(link) {
    link.addEventListener("click", function() {
      // Oculta la sección de elegir y muestra la sección de resultado
      elegirSection.style.display = "none";
      resultadoSection.style.display = "block";
    });
  });

  // Agrega eventos de clic a los enlaces de "Resultado"
  resultadoLinks.forEach(function(link) {
    link.addEventListener("click", function() {
      // Oculta la sección de resultado y muestra la sección final
      resultadoSection.style.display = "none";
      finalSection.style.display = "block";
    });
  });
});

  