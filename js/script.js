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
function gorilaAtacar() {
  if (gorilaVida <= 0 || humanosVivos <= 0) return;

  const mortos = Math.min(humanosVivos, Math.floor(Math.random() * 10 + 5));
  humanosVivos -= mortos;
  const dano = mortos * humanosForca;
  danoGorilaTotal += dano;
  log(`🐵 Gorila eliminou ${mortos} humanos!`);

  turnoHumanos();
  atualizarInterface();
}

function gorilaDefender() {
  if (gorilaVida <= 0 || humanosVivos <= 0) return;

  const defesa = Math.floor(Math.random() * 10 + 5);
  gorilaVida += defesa;
  if (gorilaVida > 100) gorilaVida = 100;
  gorilaEnergia += 10;
  if (gorilaEnergia > 100) gorilaEnergia = 100;
  log(`🛡️ Gorila se defendeu e recuperou ${defesa} de vida!`);

  turnoHumanos();
  atualizarInterface();
}

function gorilaCurar() {
  if (gorilaEnergia < 20) {
    log("⚠️ Energia insuficiente para curar.");
    return;
  }
  const cura = Math.floor(Math.random() * 20 + 10);
  gorilaVida = Math.min(100, gorilaVida + cura);
  gorilaEnergia -= 20;
  log(`❤️ Gorila se curou em ${cura} pontos de vida.`);

  turnoHumanos();
  atualizarInterface();
}

function usarHabilidadeEspecial() {
  if (gorilaEnergia < 50) {
    log("⚠️ Energia insuficiente para Rugido Sônico!");
    return;
  }
  const eliminados = Math.min(humanosVivos, Math.floor(Math.random() * 25 + 10));
  humanosVivos -= eliminados;
  gorilaEnergia -= 50;
  danoGorilaTotal += eliminados * humanosForca;
  log(`💣 Rugido Sônico devastador! ${eliminados} humanos eliminados.`);

  turnoHumanos();
  atualizarInterface();
}
function turnoHumanos() {
  if (humanosVivos <= 0) {
    log("🏆 Vitória do Gorila!");
    return;
  }

  const ataque = Math.floor(humanosVivos * (Math.random() * 0.1 + 0.05));
  gorilaVida -= ataque;
  if (gorilaVida < 0) gorilaVida = 0;
  danoHumanosTotal += ataque;
  log(`🧍 Humanos atacaram! Gorila sofreu ${attaque} de dano.`);

  if (gorilaVida <= 0) {
    log("💀 O gorila foi derrotado!");
  }

  document.getElementById("turnoAtual").textContent = "Gorila";
}

function resetar() {
  gorilaVida = 100;
  gorilaEnergia = 100;
  humanosVivos = 100;
  humanosForca = 5;
  danoGorilaTotal = 0;
  danoHumanosTotal = 0;
  document.getElementById("log").innerHTML = "";
  document.getElementById("turnoAtual").textContent = "Gorila";
  atualizarInterface();
}

window.onload = atualizarInterface;
