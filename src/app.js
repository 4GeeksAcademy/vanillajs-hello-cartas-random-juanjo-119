import "./style.css";

window.onload = function () {
  //variable de palos y valores
  const palos = [
    { simbolo: "♥", color: "rojo" },
    { simbolo: "♦", color: "rojo" },
    { simbolo: "♣", color: "negro" },
    { simbolo: "♠", color: "negro" }
  ];
  const valores = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

  //genera la carta aleatoria
  function cartaAleatoria() {
    const palo = palos[Math.floor(Math.random() * palos.length)];
    const valor = valores[Math.floor(Math.random() * valores.length)];
    return { valor, palo };
  }

  //muestra la carta
  function mostrarCarta(carta) {
    const text = `${carta.valor}${carta.palo.simbolo}`;
    const color = carta.palo.color;

    document.getElementById("tl").textContent = text;
    document.getElementById("br").textContent = text;
    document.getElementById("mid").textContent = carta.palo.simbolo;

    document.querySelectorAll(".corner, .mid").forEach(el => {
      el.classList.remove("rojo", "negro");
      el.classList.add(color);
    });
  }

  function nuevaCarta() {
    const carta = cartaAleatoria();
    mostrarCarta(carta);
  }
  nuevaCarta();

  //boton para cambiar la carta
  document.getElementById("nuevaCartaBtn").addEventListener("click", nuevaCarta);

  // temporizador: cada 10 segundos cambia la carta
  setInterval(nuevaCarta, 10000);

  // cambia el ancho y alto de la carta
  const btn = document.getElementById("cambiarTamaño");

  btn.addEventListener("click", () => {
    const carta = document.getElementById("carta");
    const ancho = document.getElementById("ancho").value;
    const alto = document.getElementById("alto").value;

    if (carta) {
      carta.style.width = ancho + "px";
      carta.style.height = alto + "px";
    }
  });

};
