function moverElemento() {
    document.getElementById('Falso').style.display = 'none';

    var quadrado = document.querySelector('.quadrado');

    // Obtém as dimensões da janela do navegador
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;

    // Define o tamanho do quadrado em porcentagem
    var quadradoWidth = 50;
    var quadradoHeight = 50;

    // Calcula uma posição aleatória para o quadrado, garantindo que ele não ultrapasse as bordas da tela
    var randomX = Math.random() * (200 - quadradoWidth);
    var randomY = Math.random() * (200 - quadradoHeight);

    // Define a nova posição do quadrado
    quadrado.style.left = randomX + '%';
    quadrado.style.top = randomY + '%';

    // Exibe o quadrado
    quadrado.style.display = 'block';
}

function moverElemento2() {
    document.getElementById('Falso').style.display = 'none';

    var quadrado = document.querySelector('.quadrado');

    // Obtém as dimensões da janela do navegador
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;

    // Define o tamanho do quadrado em porcentagem
    var quadradoWidth = 2000;
    var quadradoHeight = 2000;

    // Calcula uma posição aleatória para o quadrado, garantindo que ele não ultrapasse as bordas da tela
    var randomX = Math.random() * (100 - quadradoWidth);
    var randomY = Math.random() * (100 - quadradoHeight);

    // Define a nova posição do quadrado
    quadrado.style.left = randomX + '%';
    quadrado.style.top = randomY + '%';

    // Exibe o quadrado
    quadrado.style.display = 'block';
}