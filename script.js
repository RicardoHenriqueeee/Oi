// Carrosel e suas funções de passar e voltar imagem
const slide = document.querySelectorAll('.slide');
const botaoAnterior = document.getElementById('botaoAnterior');
const botaoProximo = document.getElementById('botaoProximo');

let slideCorrente = 0;

function slideEsconde() {
    slide.forEach(item => item.classList.remove('on'))
}

function slideMostra() {
    slide[slideCorrente].classList.add('on')
}

function slideProximo() {
    slideEsconde()
    if (slideCorrente === slide.length - 1) {
        slideCorrente = 0
    } else {
        slideCorrente++
    }
    slideMostra()
}

function slideAnterior() {
    slideEsconde()
    if (slideCorrente === 0) {
        slideCorrente = slide.length - 1
    } else {
        slideCorrente--
    }
    slideMostra()
}

botaoProximo.addEventListener('click', slideProximo)
botaoAnterior.addEventListener('click', slideAnterior)