//counter code
const startingMinutes = 60;
let time = startingMinutes;

const countdownTimer = document.getElementByID('seconds-countdown');

setInterval(updateCountdowveronn, 1000);

function updateCountdown() {
    const time = Math.floor(time)
    let seconds = time;

    countdownTimer.innerHTML = `${seconds}`;
    time--;
}
