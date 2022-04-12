window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    const contenedorLogo = document.querySelector(".contenedor-logo");
    contenedorLogo.style.display = "none";
    document.querySelector(".descripcion").style.display = "flex";
  }, 3000);
});

document.querySelector(".btn-siguiente").addEventListener("click", () => {
  document.querySelector(".descripcion").style.display = "none";
  document.querySelector(".descripcion-2").style.display = "flex";
});
