
const display = document.querySelector("#clock");

const clock = setInterval(function() {
    let date = new Date();

    let currentTime =  date.toLocaleTimeString('pt-BR', {
        hour12: false
    });
    document.getElementById('clock').textContent = currentTime;
}, 1000);

 //Function to kill process of another function in given time
setTimeout(function(){ // Anonymous Function - Unnamed
    clearInterval(clock);
}, 10000);

// Countdown Timer

const startBtn = document.getElementById("startBtn");
const countdown = document.getElementById("countdown");

startBtn.addEventListener("click", function() {
  // Obter o valor de minutos do input
  const minutes = parseInt(document.getElementById("minutes").value);

  // Calcular o tempo total em milissegundos
  const totalTime = minutes * 60 * 1000;

  // Obter a hora atual e a hora de término
  const endTime = Date.now() + totalTime;

  // Atualizar o contador a cada segundo
  const intervalId = setInterval(function() {
    // Obter o tempo restante em milissegundos
    const remainingTime = endTime - Date.now();

    // Verificar se o contador terminou
    if (remainingTime <= 0) {
      clearInterval(intervalId);
      countdown.innerHTML = "Count is Over!";
      return;
    }

    // Converter o tempo restante em minutos e segundos
    const remainingMinutes = Math.floor(remainingTime / 1000 / 60);
    const remainingSeconds = Math.floor((remainingTime / 1000) % 60);

    // Exibir o tempo restante no elemento de contagem regressiva
    countdown.innerHTML = `Time Left: ${remainingMinutes}:${remainingSeconds.toString().padStart(2, "0")}`;
  }, 1000);
});