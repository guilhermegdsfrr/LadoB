
// lista de imagens do carrossel

const imagens = [
    "imagens_fundo",
    "fundo 2.png",
    "fundo 3.jpg"
];

// anti carregamento das imagens

imagens.forEach(caminho => {
    const imagem = new Image();
    imagem.src = caminho;
});

// Config

let indiceAtual = 0;

const elementoImg = document.getElementById("slide");

const tempoTroca = 5000;

// Função para trocar as imagens

function trocarImagem() {

    // Faz a imagem desaparecer
    elementoImg.style.opacity = "0";

    setTimeout(() => {

        indiceAtual++;

        // Volta para a primeira imagem
        if (indiceAtual >= imagens.length) {
            indiceAtual = 0;
        }

        // Carrega a próxima imagem
        elementoImg.src = imagens[indiceAtual];

        // Faz a imagem aparecer novamente
        elementoImg.style.opacity = "1";

    }, 500);
}

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    setInterval(trocarImagem, tempoTroca);
}
