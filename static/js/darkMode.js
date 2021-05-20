console.log("Dark Mode running");

const toggleEl = document.querySelector('.toggle');

toggleEl.addEventListener('click', (e) => {
    const html = document.querySelector('html')
    if(html.classList.contains('dark')) {
        html.classList.remove('dark')
        toggleEl.innerHTML = '<i class="fas fa-moon"></i>';
        // e.target.innerHTML = '<i class="fas fa-moon"></i>';
    } else {
        html.classList.add('dark')
        toggleEl.innerHTML = '<i class="fas fa-sun"></i>';
        // e.target.innerHTML = '<i class="fas fa-sun"></i>';
    }
})