// Seleção dos elementos do HTML
const toggleBtn = document.getElementById('toggleBtn');
const display = document.getElementById('display');
const taskInput = document.getElementById('taskDescription');

let timerInterval = null;
let seconds = 0;
let isRunning = false;

// Função para formatar o tempo (00:00:00)
function formatTime(totalSeconds) {
  const hrs = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
  const mins = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
  const secs = String(totalSeconds % 60).padStart(2, '0');
  return `${hrs}:${mins}:${secs}`;
}

// Alterna entre Iniciar e Parar
toggleBtn.addEventListener('click', () => {
  isRunning = !isRunning;

  if (isRunning) {
    // Estado: Rodando (Stop timer)
    toggleBtn.textContent = 'Stop timer';
    toggleBtn.classList.remove('btn-start');
    toggleBtn.classList.add('btn-stop');

    timerInterval = setInterval(() => {
      seconds++;
      display.textContent = formatTime(seconds);
    }, 1000);
  } else {
    // Estado: Parado (Start timer)
    toggleBtn.textContent = 'Start timer';
    toggleBtn.classList.remove('btn-stop');
    toggleBtn.classList.add('btn-start');

    // 1. Para o contador
    clearInterval(timerInterval);
    
    // 2. Reseta o tempo para zero
    seconds = 0;
    display.textContent = formatTime(seconds);

    // 3. Limpa o campo de entrada
    taskInput.value = '';
  }
});