// Script para a página inicial (index.html)
if (document.getElementById('startButton')) {
    document.getElementById('startButton').addEventListener('click', function() {
        window.location.href = 'valentine.html';
    });
}

// Script para a página do casal (valentine.html)
if (document.querySelector('.valentine-container')) {
    const heartsContainer = document.querySelector('.hearts-container');

    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        const size = Math.random() * 20 + 10; // Tamanho entre 10px e 30px
        heart.style.width = `${size}px`;
        heart.style.height = `${size}px`;
        heart.style.left = `${Math.random() * 100}vw`; // Posição horizontal aleatória
        heart.style.animationDuration = `${Math.random() * 5 + 5}s`; // Duração da animação entre 5 e 10 segundos
        heart.style.animationDelay = `${Math.random() * 5}s`; // Atraso na animação para que não apareçam todos juntos

        heartsContainer.appendChild(heart);

        // Remover o coração após a animação para não acumular elementos
        heart.addEventListener('animationend', () => {
            heart.remove();
        });
    }

    // Criar corações a cada 300ms
    setInterval(createHeart, 300);
}