console.log("Greeting.js running");

let currentTime = new Date().getHours();

console.log(currentTime);

if (currentTime >= 1 && currentTime <= 4) {
    greeting = "You're up late - why the insomnia?";
} else if (currentTime >= 5 && currentTime <= 6) {
    greeting = "You're up early! Good morning!";
} else if (currentTime >= 7 && currentTime <= 11) {
    greeting = "Good morning!";
} else if (currentTime >= 12 && currentTime <= 16) {
    greeting = "Good afternoon!";
} else if (currentTime == 17) {
    greeting = "It's 5 o'clock - why are you still working?";
} else if (currentTime >=18 && currentTime <= 22) {
    greeting = "The best time is between 6pm and 10pm - glad you're here!"
}else {
    greeting = "Good evening!"
}

document.querySelector(".greeting").innerHTML = greeting;