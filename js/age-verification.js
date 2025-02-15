/*
document.addEventListener("DOMContentLoaded", function () {
    const ageModal = document.getElementById("age-modal");
    const confirmAge = document.getElementById("confirm-age");
    const denyAge = document.getElementById("deny-age");

    if (localStorage.getItem("ageVerified") !== "true") {
        ageModal.style.display = "flex";
    }

    function detectBot() {
        const botIndicators = [
            navigator.webdriver,
            /bot|crawl|spider|curl|headless/i.test(navigator.userAgent),
            !window.chrome && "InstallTrigger" in window 
        ];
        return botIndicators.some(indicator => indicator);
    }

    if (detectBot()) {
        alert("Acesso negado: comportamento suspeito detectado.");
        window.location.href = "https://www.google.com";
    }

    confirmAge.addEventListener("click", function () {
        localStorage.setItem("ageVerified", "true");
        ageModal.style.display = "none";
    });

    denyAge.addEventListener("click", function () {
        alert("Você precisa ter mais de 18 anos para acessar este site.");
        window.location.href = "https://www.jusbrasil.com.br/artigos/a-criminalizacao-do-fornecimento-de-bebidas-alcoolicas-a-menores-de-18-anos/169306418"; // Redireciona para outra página
    });
});

*/