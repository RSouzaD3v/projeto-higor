window.addEventListener('load', () => {
    const mainText = document.querySelector('main .container');
    mainText.classList.add('animation-text');

    // Adiciona a classe permanente após a animação
    mainText.addEventListener('animationend', () => {
        mainText.classList.add('animation-text-permanent');
    });

    // Configuração do Intersection Observer
    const options = {
        root: null, // Observa o viewport inteiro
        threshold: 0.2, // Quando 20% do elemento estiver visível
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const target = entry.target;

                // Adiciona classes com base nos elementos observados
                if (target.classList.contains('banner2')) {
                    target.classList.add('active-banner2');
                } else if (target.classList.contains('banner3')) {
                    target.classList.add('active-banner3');
                } else if (target.classList.contains('banner-beers')) {
                    target.style.opacity = 1;
                } else if (target.classList.contains('contact')) {
                    target.classList.add('active-contact');
                }
            }
        });
    }, options);

    // Seleciona e observa os elementos
    const banners = document.querySelectorAll('.banner2, .banner3, .banner-beers, .contact');
    banners.forEach((banner) => observer.observe(banner));
});
