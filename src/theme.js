const background = document.querySelector('.background');
const box = document.querySelector('.box-imagem');
const mode = document.getElementById('click');


mode.addEventListener('click', () => {
    if (background.classList.contains('theme1')) {
        background.classList.remove('theme1');
        background.classList.add('theme2');
        localStorage.setItem('theme', 'theme2')
        return;
    }
    background.classList.remove('theme2');
    background.classList.add('theme1');
    localStorage.setItem('theme', 'theme1')

});

function theme() {
    let theme = localStorage.getItem('theme');
    if (theme == 'theme2') {
        background.classList.remove('theme1');
        background.classList.add('theme2');
        return;
    }
    background.classList.remove('theme2');
    background.classList.add('theme1');
}

theme();