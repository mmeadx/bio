console.log("script.js running");

const toggle = document.querySelectorAll('.faq-toggle');

toggle.forEach(x => {
    x.addEventListener('click', () => {
    x.parentNode.classList.toggle('active')
})
});

