document.addEventListener('DOMContentLoaded', () => {
    const registrarSeLink = document.getElementById('registrar-se');
    const tenisEsquerdo = document.getElementById('tenis-esquerdo');
    const tenisDireito = document.getElementById('tenis-direito');

    registrarSeLink.addEventListener('click', () => {
        registrarSeLink.style.color = '#ff00ff'; // Muda a cor do link para rosa após o clique
    });

    // Adiciona evento para o clique no link "aqui"
    registrarSeLink.addEventListener('click', () => {
        // Chama a função para fazer os tênis piscarem
        piscarTênis();
    });

    function piscarTênis() {
        tenisEsquerdo.style.animation = 'piscar 1s infinite alternate';
        tenisDireito.style.animation = 'piscar 1s infinite alternate';
    }
});


