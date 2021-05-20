console.log("Greeting.js running");

let currentTime = new Date().getHours();

console.log(currentTime);

if (currentTime >= 1 && currentTime <= 4) {
    greeting = "You're up late - why the insomnia?";
} else if (currentTime >= 5 && currentTime <= 6) {
    greeting = "You're up early! Good morning!";
} else if (currentTime >= 7 && currentTime <= 11) {
    greeting = "Good monrning!";
} else if (currentTime >= 12 && currentTime <= 16) {
    greeting = "Good afternoon!";
} else if (currentTime == 17) {
    greeting = "It's 5 O'Clock - why are you still working?";
} else {
    greeting = "Good evening!"
}

document.querySelector(".greeting").innerHTML = greeting;