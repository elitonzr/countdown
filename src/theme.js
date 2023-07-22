const mode = document.getElementById('click');

mode.addEventListener('click', () => {
    console.log('Click')
    const background = document.querySelector('.background');
    const box = document.querySelector('.box-imagem');
    if (background.classList.contains('theme')) {
        background.classList.remove('theme');
        return;
    }
    background.classList.add('theme');

});