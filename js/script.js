window.addEventListener('load', () => {
    const mainText = document.querySelector('main .container');
    mainText.classList.add('animation-text');

    // Adiciona a classe permanente após a animação
    mainText.addEventListener('animationend', () => {
        mainText.classList.add('animation-text-permanent');
    });
});

window.addEventListener('scroll', () => {
    let sy = window.scrollY;

    console.log(sy);
    if(sy > 40) {
        const banner1 = document.querySelector('.banner2');
        banner1.classList.add('active-banner2');
    }

    if(sy > 450) {
        const banner3 = document.querySelector('.banner3');
        banner3.classList.add('active-banner3');
    }

    if(sy > 1300){
        const bannerBeers = document.querySelector('.banner-beers');
        bannerBeers.style.opacity = 1;
    }
})
