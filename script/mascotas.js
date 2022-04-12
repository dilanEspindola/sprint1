const API_PERROS = "https://backend-sprin1.herokuapp.com/dogs/";
const API_GATOS = "https://backend-sprin1.herokuapp.com/cats/";

async function obtenerPerros() {
  const res = await fetch(API_PERROS);
  const data = await res.json();
  return data;
}

async function mostrarPerros() {
  const mostrarPerros = document.querySelector(".mostrar-mascotas");
  mostrarPerros.innerHTML = "";
  const getPerros = await obtenerPerros();
  getPerros.forEach((perro) => {
    mostrarPerros.innerHTML += `
    <div class="cards">
      <div class="card" onclick="singlePet('${perro._id}')">
        <img
          src=${perro.imagen}
          alt=""
        />
        <h1>${perro.nombre}</h1>
        <h2>${perro.raza}</h2>
      </div>
    </div>
    `;
  });
}

window.addEventListener("DOMContentLoaded", () => {
  mostrarPerros();
  document.querySelector(".selector-perros").classList.add("active-perros");
});

const btnMotrarPerros = document.querySelector(".selector-perros");
btnMotrarPerros.addEventListener("click", () => {
  document.querySelector(".selector-perros").classList.add("active-perros");
  document.querySelector(".selector-gatos").classList.remove("active-gatos");
  mostrarPerros();
});

async function obtenerGatos() {
  const res = await fetch(API_GATOS);
  const data = await res.json();
  return data;
}

async function mostrarGatos() {
  const mostrarPerros = document.querySelector(".mostrar-mascotas");
  mostrarPerros.innerHTML = "";
  const getGatos = await obtenerGatos();
  getGatos.forEach((gato) => {
    mostrarPerros.innerHTML += `
    <div class="cards">
      <div class="card" onclick="singlePet('${gato._id}')">
        <img
          src=${gato.imagen}
          alt=""
        />
        <h1>${gato.nombre}</h1>
        <h2>${gato.raza}</h2>
      </div>
    </div>
    `;
  });
}

const btnMostrarGatos = document.querySelector(".selector-gatos");
btnMostrarGatos.addEventListener("click", () => {
  document.querySelector(".selector-perros").classList.remove("active-perros");
  document.querySelector(".selector-gatos").classList.add("active-gatos");
  mostrarGatos();
});

async function singlePet(id) {
  const gatos = await obtenerGatos();
  const perros = await obtenerPerros();
  const pets = [...gatos, ...perros];

  const getSinglePet = pets.find((pet) => pet._id == id);

  if (JSON.parse(localStorage.getItem("pet") === null)) {
    localStorage.setItem("pet", JSON.stringify(getSinglePet));
    window.location.href = "mascota.html";
  } else {
    localStorage.removeItem("pet");
    localStorage.setItem("pet", JSON.stringify(getSinglePet));
    window.location.href = "mascota.html";
  }
}
