window.addEventListener("DOMContentLoaded", () => {
  const data = JSON.parse(localStorage.getItem("favs"));
  console.log(data);
  console.log(getPetFromLocalStorage());
});

function getPetFromLocalStorage() {
  const getPet = JSON.parse(localStorage.getItem("pet"));
  const containerPet = document.querySelector(".singlePetContainer");
  containerPet.innerHTML = "";
  containerPet.innerHTML = `
        <span class="back" onclick="window.location.href='adoptar.html'">
          <i class="fa-solid fa-arrow-left"></i>
        </span>
        <img
        src=${getPet.imagen}
        alt=""
      />
      <div class="container-info">
        <div class="nombre-add-f">
          <h1>${getPet.nombre}</h1>
          <span class="favourite"  onclick=(añadirFavoritos('${getPet._id}'))>
            <i class="fa-solid fa-heart"></i>
          </span>
        </div>
        <div class="raza-edad">
          <div class="raza">
            <img
              src="https://res.cloudinary.com/dp9zv16le/image/upload/v1649555287/sprint-1/Property_1_raza_w2yqcv.png"
              alt=""
            />
            <p>${getPet.raza}</p>
          </div>
          <div class="edad">
            <img
              src="https://res.cloudinary.com/dp9zv16le/image/upload/v1649555286/sprint-1/Property_1_edad_wmm5au.png"
              alt=""
            />
            <p>${getPet.years}</p>
          </div>
        </div>
        <div class="ubicacion">
          <img
            src="https://res.cloudinary.com/dp9zv16le/image/upload/v1649555287/sprint-1/Property_1_map-pin_c3x5e0.png"
            alt=""
          />
          <p>${getPet.ubicacion}</p>
        </div>
        <div class="personalidad">
          <h1>personalidad</h1>
          <div class="tipos">
            <div class="tipo-1">
              <img
                src="https://res.cloudinary.com/dp9zv16le/image/upload/v1649555286/sprint-1/Property_1_Cari%C3%B1oso_efn9ar.png"
                alt=""
              />
              <p>cariñoso</p>
            </div>
            <div class="tipo-2">
              <img
                src="https://res.cloudinary.com/dp9zv16le/image/upload/v1649555286/sprint-1/Property_1_Inquieto_gxfzfm.png"
                alt=""
              />
              <p>inquieto</p>
            </div>
            <div class="tipo-3">
              <img
                src="https://res.cloudinary.com/dp9zv16le/image/upload/v1649555287/sprint-1/Property_1_Tierno_y92blw.png"
                alt=""
              />
              <p>jugueton</p>
            </div>
          </div>
        </div>
        <div class="historia">
          <h1>historia</h1>
          <p>
            ${getPet.nombre} es muy lindo y cariñoso, tiene 5 hermanitos más y
            por cuestiones de espacio y tiempo no podremos cuidar a todos,
            nuestra misión es encontrar la familia ideal para él y seguro que tú
            eres la persona indicada.
          </p>
        </div>
        <div class="contacto">
        <div class="publicador-info">
          <img src="https://res.cloudinary.com/dp9zv16le/image/upload/v1637548550/personal6_nb93wi.png" />
          <div class="publicadoPor">
              <p>Publicado por</p>
              <h2>${getPet.publicadoPor}</h2>
          </div>
         </div>
          <a>Contactar</a>
        </div>
      </div>
        `;
}

getPetFromLocalStorage();

function añadirFavoritos(id) {
  const fav = document.querySelector(".favourite i");
  fav.classList.add("active");
  const pet = JSON.parse(localStorage.getItem("pet"));

  if (pet._id === id) {
    const pushToFav = pet;
    if (JSON.parse(localStorage.getItem("favs")) === null) {
      let favPets = [];
      favPets.push(pushToFav);
      localStorage.setItem("favs", JSON.stringify(favPets));
    } else {
      let favPets = JSON.parse(localStorage.getItem("favs"));
      favPets.push(pushToFav);
      localStorage.setItem("favs", JSON.stringify(favPets));
    }
  }
}
