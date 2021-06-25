console.log("script.js running");

const testimonialsContainer = document.querySelector('.testimonials-container');
const testimonial = document.querySelector('.testimonial');
const userImage = document.querySelector('.user-image');
const userName = document.querySelector('.username');
const userRole = document.querySelector('.role')

const testimonials = [
    {
        name: 'Nicole Mead',
        position: 'Merchandizing Manager',
        photo: 'https://content.malakye.com/media/uploads/images/personalprofiles/thumbs/725791_637020192158432060.jpeg',
        text: "What a guy! A great brother, dog dad and whirlwind in the kitchen."
    },
    {
        name: 'Tony Lipari',
        position: 'Friend and Confidant',
        photo: 'https://media-exp1.licdn.com/dms/image/C4E03AQHZDYAzTMAsag/profile-displayphoto-shrink_800_800/0/1600437732097?e=1629936000&v=beta&t=vMoVtutrAoFZhwWq7ezMQOnjKyMZ1FYvhVAonTVw5Yc',
        text: "Matt really knows life. He can cook me a chicken anyday of the week. He makes my armpits tingle and my backhair stand on end. Woof."
    },
    {
        name: 'Molly Kalda',
        position: 'Wifey Extraordinaire',
        photo: 'https://images.squarespace-cdn.com/content/v1/5b71dbcb0dbda3b1c8395ac1/1550094551391-R987B5PYRONY5VQIM84G/021119.JPG?format=2500w',
        text: "Why did I marry him? Because he asked!"
    },
    {
        name: 'Tim Walz',
        position: 'MN Gov',
        photo: 'https://images.squarespace-cdn.com/content/v1/5b71dbcb0dbda3b1c8395ac1/1545171145593-7M2BQYA3GRZJ90QZR3CY/TimWalz.jpg?format=2500w',
        text: "Minnesota's biggest fan."
    }
];

let idx = 1;

function updateTestimonial() {
    const {name, position, photo, text} = testimonials[idx]

    testimonial.innerHTML = text;
    userImage.src = photo;
    userName.innerHTML = name;
    userRole.innerHTML = position;

    idx++

    if(idx > testimonials.length - 1) {
        idx = 0;
    }
}

setInterval(updateTestimonial, 10000);

