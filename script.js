const somClick = new Audio("audio/click.mp3");
const musica = document.getElementById("musica");
const botaoCarta = document.getElementById("mostrarCarta");

// Ativa a música e mostra a carta no clique
botaoCarta.addEventListener("click", () => {
  // Toca som do clique
  somClick.play();

  // Só tenta tocar a música se ainda estiver pausada
  if (musica.paused) {
    musica.play().catch((err) => {
      console.log("Erro ao tocar música:", err);
    });
  }

  // Mostra ou oculta a carta
  document.getElementById("carta").classList.toggle("oculto");
});


/* ----------  TIMER  ---------- */
const inicioNamoro = new Date(1996, 11, 9); // Mês 10 = Novembro (0-based)
const timerEl = document.getElementById("timer");

function atualizaTimer() {
  const agora = new Date();
  const diff = agora - inicioNamoro;
  const segundosTotais = Math.floor(diff / 1000);

  const dias = Math.floor(segundosTotais / 86400);
  const horas = Math.floor((segundosTotais % 86400) / 3600);
  const minutos = Math.floor((segundosTotais % 3600) / 60);
  const segundos = segundosTotais % 60;

  timerEl.textContent =
    `Estamos juntos há ${dias.toLocaleString('pt-BR')} dias, ` +
    `${String(horas).padStart(2, "0")}h:` +
    `${String(minutos).padStart(2, "0")}m:` +
    `${String(segundos).padStart(2, "0")}s `;
}

atualizaTimer();
setInterval(atualizaTimer, 1000);

/* ---------- PARTICULAS ---------- */
tsParticles.load("tsparticles", {
  fullScreen: {
    enable: true,
    zIndex: -1,
  },
  particles: {
    number: { value: 20 },
    shape: {
      type: "char",
      character: {
        value: ["❤", "💖", "💕"],
        font: "Verdana",
        style: "",
        weight: "400",
      },
    },
    color: { value: "#ff69b4" },
    opacity: { value: 0.8 },
    size: { value: 16 },
    move: {
      enable: true,
      speed: 1,
      direction: "bottom",
      outModes: { default: "out" },
    },
  },
  background: {
    color: "transparent",
  },
});
