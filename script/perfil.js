window.addEventListener("DOMContentLoaded", () => {
  if (JSON.parse(localStorage.getItem("userEdited"))) {
    return acutalizarUsuario();
  }
});

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  const nombre = document.querySelector("#nombre").value;
  const apellido = document.querySelector("#apellido").value;
  const correo = document.querySelector("#correo").value;
  const datosParaEditar = {
    nombre,
    apellido,
    correo,
  };

  if (JSON.parse(localStorage.getItem("userEdited")) === null) {
    localStorage.setItem("userEdited", JSON.stringify(datosParaEditar));
    alert();
  } else {
    localStorage.removeItem("userEdited");
    localStorage.setItem("userEdited", JSON.stringify(datosParaEditar));
    alert();
  }
  acutalizarUsuario();
});

function alert() {
  Swal.fire({
    position: "center",
    icon: "success",
    title: "Usuario editado",
    showConfirmButton: false,
    timer: 1500,
  });
}

function acutalizarUsuario() {
  const data = JSON.parse(localStorage.getItem("userEdited"));
  const fullname = [data.nombre, data.apellido];
  document.querySelector(".nombre").textContent = fullname.join(" ");
  document.querySelector("#nombre").value = data.nombre;
  document.querySelector("#apellido").value = data.apellido;
  document.querySelector("#correo").value = data.correo;
}
