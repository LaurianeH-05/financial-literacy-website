// Add JavaScript code for your web site here and call it from index.html.
const modeBtn = document.querySelector('.mode-btn')
const catGif = document.querySelector('.cat-gif')

let isDarkMode = false;
let isLightMode = true;

function toggleMode() {
    if (document.body.classList.contains('dark-mode')) {
        document.body.classList.remove('dark-mode');
        document.body.classList.add('light-mode');
        modeBtn.textContent='Toggle Dark Mode'
        catGif.src = 'images/dark-mode-cat.gif';
    } else {
        document.body.classList.remove('ligth-mode');
        document.body.classList.add('dark-mode');
        modeBtn.textContent='Toggle Light Mode'
        catGif.src = 'images/light-mode-cat.gif';
    }
}

document.body.classList.add('light-mode')
modeBtn.addEventListener('click', toggleMode)
