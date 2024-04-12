
const launchDate = new Date(2024, 5, 30, 12, 0, 0);

function updateTimer() {
    const now = new Date().getTime();
    const difference = launchDate - now;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    document.querySelector('.p-days').textContent = formatTime(days);
    document.querySelector('.p-hours').textContent = formatTime(hours);
    document.querySelector('.p-minutes').textContent = formatTime(minutes);
    document.querySelector('.p-seconds').textContent = formatTime(seconds);   
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

setInterval(updateTimer, 1000);