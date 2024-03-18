const timerDisplay = document.getElementById('time');
let timeInSeconds = 1800; 
let timerInterval;
const startTimer=()=> {
       timerInterval = setInterval(updateTimer, 1000);
}
const updateTimer=()=> {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    if (timeInSeconds === 0) {
        clearInterval(timerInterval);
        alert("Time's up!");
    } else {
        timeInSeconds--;
    }
}
const endTimer=()=> {
    clearInterval(timerInterval);
}
document.getElementById('button1').addEventListener('click', startTimer);
document.getElementById('button2').addEventListener('click', endTimer);
