console.log("script.js running");

const hourEl = document.querySelector('.hour');
const minuteEl = document.querySelector('.minute');
const secondsEl = document.querySelector('.second');
const timeEl = document.querySelector('.time');
const dateEl = document.querySelector('.date');
const toggleClockEl = document.querySelector('.toggle');

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// toggleClockEl.addEventListener('click', (e) => {
//     const html = document.querySelector('html')
//     if(html.classList.contains('dark')) {
//         html.classList.remove('dark')
//         e.target.innerHTML = 'Dark Mode';
//     } else {
//         html.classList.add('dark')
//         e.target.innerHTML = 'Light Mode';
//     }
// })

function setTime () {
    const time = new Date();
    const month = time.getMonth();
    const day = time.getDay();
    const date = time.getDate();
    const hours = time.getHours();
    const hoursForClock = hours % 12;
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';

    hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(hoursForClock, 0, 11, 0, 360)}deg)`;
    minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0, 59, 0, 360)}deg)`;
    secondsEl.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 59, 0, 360)}deg)`;

    hourEl.style.transition = `${hours === 0 ? "none" : "all 0.5s ease-in"}`;
    minuteEl.style.transition = `${minutes === 0 ? "none" : "all 0.5s ease-in"}`;
    secondsEl.style.transition = `${seconds === 0 ? "none" : "all 0.5s ease-in"}`;

    timeEl.innerHTML = `${hoursForClock}:${minutes < 10 ? `0${minutes}` : minutes} ${ampm}`
    dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`
}

// StackOverflow https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min; 
}

setTime()

setInterval(setTime, 1000);