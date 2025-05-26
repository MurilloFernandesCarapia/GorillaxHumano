let gorilaVida = 100;
let gorilaEnergia = 100;
let humanosVivos = 100;
let humanosForca = 5;
let danoGorilaTotal = 0;
let danoHumanosTotal = 0;

function atualizarInterface() {
  document.getElementById("gorilaVidaTexto").textContent = gorilaVida + " / 100";
  document.getElementById("gorilaEnergiaTexto").textContent = gorilaEnergia + " / 100";
  document.getElementById("humanosVivos").textContent = humanosVivos;
  document.getElementById("humanosForca").textContent = humanosForca;
  document.getElementById("gorilaEnergia").textContent = gorilaEnergia;
  document.getElementById("danoGorila").textContent = danoGorilaTotal;
  document.getElementById("danoHumanos").textContent = danoHumanosTotal;

  document.getElementById("gorilaVidaBar").style.width = gorilaVida + "%";
  document.getElementById("gorilaEnergiaBar").style.width = gorilaEnergia + "%";
  document.getElementById("humanosVidaBar").style.width = (humanosVivos) + "%";
}

function log(texto) {
  const logArea = document.getElementById("log");
  const entrada = document.createElement("p");
  entrada.textContent = texto;
  logArea.prepend(entrada);
}
