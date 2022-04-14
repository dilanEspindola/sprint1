window.addEventListener("DOMContentLoaded", () => {
  document.querySelector("form input").value =
    "¡Hola! Me encantaría adoptar a Rocky.";
});

document.querySelector("form").addEventListener("submit", (e) => {
  const msg = document.querySelector("form input").value;
  setTimeout(() => {
    mostarMsg1(msg);
    if (!(msg === "")) {
      document.querySelector("form input").value = "";
    }
  }, 200);
  setTimeout(() => {
    mostrarMsg2();
  }, 2000);
  setTimeout(() => {
    mostrarMsg3();
  }, 4500);
  e.preventDefault();
});

function mostarMsg1(msg) {
  const cuerpoChat = document.querySelector(".cuerpo-chat");
  cuerpoChat.innerHTML = `
    <div class="msg-1 msg">
        <div class="contenedor-msg">
            <p>${msg}</p>
        </div>
    </div>
  `;
}

function mostrarMsg2() {
  const msg2 = document.createElement("div");
  msg2.classList.add("msg-2");
  msg2.innerHTML = `
    <div class="contenedor-msg">
        <p>¡Hola! claro, podemos acordar un
        lugar y hora para que conoscas a
        Rocky.</p>
    </div>
  `;
  const cuerpoChat = document.querySelector(".cuerpo-chat");
  cuerpoChat.appendChild(msg2);
}

function mostrarMsg3() {
  const msg2 = document.createElement("div");
  msg2.classList.add("msg-2");
  msg2.innerHTML = `
      <div class="contenedor-msg">
          <p>Estaría bien mañana a las 11:00 am?</p>
      </div>
    `;
  const cuerpoChat = document.querySelector(".cuerpo-chat");
  cuerpoChat.appendChild(msg2);
}
