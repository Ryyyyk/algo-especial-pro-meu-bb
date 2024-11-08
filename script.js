function mostrarResposta() {
    const resposta = document.getElementById('resposta');
    resposta.style.display = 'block';
    resposta.innerHTML = 'Sim! Eu aceito, meu amor. ❤️';
}

function mudarPosicao() {
    const buttonNao = document.getElementById('nao');
    const container = document.querySelector('.container');

    // Obter as dimensões do contêiner
    const containerRect = container.getBoundingClientRect();
    const buttonRect = buttonNao.getBoundingClientRect();

    // Calcular o espaço disponível para o botão se mover dentro do contêiner
    const maxX = containerRect.width - buttonRect.width;
    const maxY = containerRect.height - buttonRect.height;

    // Gerar posições aleatórias dentro dos limites
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    // Aplicar as novas posições
    buttonNao.style.left = `${randomX}px`;
    buttonNao.style.top = `${randomY}px`;
}