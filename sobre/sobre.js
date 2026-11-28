// lista de imagens do carrossel

console.log("JavaScritp funcionando")

const imagens = [
    "imagens_fundo/fundo 1.png",
    "imagens_fundo/fundo 2.png",
    "imagens_fundo/fundo 3.png",
];

// anti carregamento das imagens

imagens.forEach(caminho => {
    const imagem = new Image();
    imagem.src = caminho;
});

const textos = [
    {
        titulo: "Nossa essência",
        texto: "Mais do que discos, uma paixão que atravessa gerações.",
        texto2: "O Lado B nasceu do apreço pela música e pela experiência única que os discos de vinil proporcionam. Nosso propósito é valorizar esse formato atemporal, reunindo amantes da música e colecionadores em torno de uma paixão em comum."
    },
    {
        titulo: "Conectando pessoas",
        texto: "A música aproxima, compartilha histórias e cria conexões.",
        texto2: "Acreditamos que a experiência musical vai além de simplesmente ouvir. Por isso, buscamos oferecer um ambiente onde pessoas possam compartilhar conhecimentos, trocar experiências, descobrir novos artistas e fortalecer os laços construídos pela paixão musical."
    },
    {
        titulo: "Preservando a cultura",
        texto: "Cada vinil carrega uma história. Nosso compromisso é mantê-la viva.",
        texto2: "Trabalhamos para valorizar a cultura dos discos físicos, incentivando sua descoberta, preservação e circulação. Mais do que comercializar vinis, queremos contribuir para que a história da música continue alcançando novas gerações."
    }
];


const conteudo = document.querySelector(".historia-conteudo");
const titulo = document.getElementById("historia-titulo");
const texto = document.getElementById("historia-texto");
const texto2 = document.getElementById("historia-texto2");

// Config

const slide1 = document.getElementById("slide1");
const slide2 = document.getElementById("slide2");

let indiceAtual = 0;
let usandoSlide1 = true;
const tempoTroca = 5000;

// Função para trocar as imagens

function trocarImagem() {

    const proximoIndice = (indiceAtual + 1) % imagens.length;

    const atual = usandoSlide1 ? slide1 : slide2;
    const proxima = usandoSlide1 ? slide2 : slide1;

    proxima.onload = () => {

        proxima.onload = null;

        // Inicia a transição da imagem
        proxima.classList.add("entrando");

        // Faz o texto desaparecer
        conteudo.classList.add("oculto");

        // Atualiza o texto
        setTimeout(() => {

            titulo.textContent = textos[proximoIndice].titulo;
            texto.textContent = textos[proximoIndice].texto;
            texto2.textContent = textos[proximoIndice].texto2;

            conteudo.classList.remove("oculto");

        }, 750);

        // Finaliza a transição da imagem
        setTimeout(() => {

            proxima.classList.add("ativo");
            proxima.classList.remove("entrando");
            atual.classList.remove("ativo");

            usandoSlide1 = !usandoSlide1;
            indiceAtual = proximoIndice;

        }, 1500);
    };

    proxima.src = imagens[proximoIndice];
}
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    setInterval(trocarImagem, tempoTroca);
}
