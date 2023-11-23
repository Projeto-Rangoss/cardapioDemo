const botoesCardapio = document.querySelectorAll('.botaoMenu');
const conteudos = document.querySelectorAll('.conteudoCardapio');

botoesCardapio.forEach((botaoMenu, indice) => {
    botaoMenu.addEventListener('click' , () => {
        desativarBotaoSelecionado();

        selecionarBotaoCarrossel(botaoMenu);

        esconderConteudoAnterior();
         
        mostrarConteudoRelacionado(indice);

    })
})

function mostrarConteudoRelacionado(indice) {
    conteudos[indice].classList.add('ativa');
}

function selecionarBotaoCarrossel(botao) {
    botao.classList.add('selecionado');
}

function esconderConteudoAnterior() {
    const conteudoAtivo = document.querySelector('.ativa');
    conteudoAtivo.classList.remove('ativa');
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}

