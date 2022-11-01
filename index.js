
const startingSeconds = 60;
let time = startingSeconds;

const countdownTimer = document.getElementById('seconds-countdown');

setInterval(updateCountdown, 1000);

function updateCountdown() {
    const time = Math.floor(time)
    let seconds = time;
    

    countdownTimer.innerHTML = `${seconds}`;
    time--;
}