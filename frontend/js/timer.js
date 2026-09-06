let timerInterval = null;
let startTime = 0;
let elapsedTime = 0;

// Seleção dos elementos do DOM
const display = document.getElementById('display');
const startBtn = document.getElementById('startBtn');
const pauseBtn = document.getElementById('pauseBtn');
const stopBtn = document.getElementById('stopBtn');

// Formata milissegundos para HH:MM:SS
function formatTime(ms) {
  const totalSeconds = Math.floor(ms / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  const pad = (num) => String(num).padStart(2, '0');
  return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

function startTimer() {
  startTime = Date.now() - elapsedTime;
  
  timerInterval = setInterval(() => {
    elapsedTime = Date.now() - startTime;
    display.textContent = formatTime(elapsedTime);
  }, 1000);

  // Ajusta estado dos botões
  startBtn.disabled = true;
  pauseBtn.disabled = false;
  stopBtn.disabled = false;
}

function pauseTimer() {
  clearInterval(timerInterval);
  
  startBtn.disabled = false;
  pauseBtn.disabled = true;
  startBtn.textContent = 'Continuar';
}

function stopTimer() {
  clearInterval(timerInterval);
  elapsedTime = 0;
  display.textContent = '00:00:00';

  startBtn.disabled = false;
  pauseBtn.disabled = true;
  stopBtn.disabled = true;
  startBtn.textContent = 'Iniciar';
}

// Event Listeners
startBtn.addEventListener('click', startTimer);
pauseBtn.addEventListener('click', pauseTimer);
stopBtn.addEventListener('click', stopTimer);