function obtenerFavoritos() {
  const getFavoritos = JSON.parse(localStorage.getItem("favs"));
  const mascotasFavoritas = document.querySelector(".mascotas-favoritas");
  mascotasFavoritas.innerHTML = "";

  getFavoritos.forEach((pet) => {
    mascotasFavoritas.innerHTML += `
      <div class="cards">
          <div class="card-mascota">
            <img src=${pet.imagen} alt="" />
            <h1>${pet.nombre}</h1>
            <h2>${pet.raza}</h2>
          </div>
        </div>
      `;
  });
}

obtenerFavoritos();
