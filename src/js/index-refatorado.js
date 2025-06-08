const botaoFiltrar = document.querySelector(".btn-filter");
botaoFiltrar.addEventListener("click", filtrarCards);

function filtrarCards() {
    const categoriaSelecionada = pegarCategoriaSelecionada();
    const precoMaximoSelecionado = pegarPrecoSelecionado();
    const cards = document.querySelectorAll(".card");

    cards.forEach(function(card) {
        const passouCategoria = verificaCategoria(card, categoriaSelecionada);
        const passouPreco = verificaPreco(card, precoMaximoSelecionado);

        const deveMostrar = passouCategoria && passouPreco;

        mostrarOuEsconderCard(card, deveMostrar);
    });
}
function pegarCategoriaSelecionada() {
    return document.querySelector('#categoria').value;
}
function pegarPrecoSelecionado() {
    return document.querySelector('#preco').value;
}
function verificaCategoria(card, categoriaSelecionada) {
    if (categoriaSelecionada === '') {
        return true;
    }

    const categoriaCard = card.dataset.categoria;
    return categoriaSelecionada.toLowerCase() === categoriaCard.toLowerCase();
}
function verificaPreco(card, precoMaximoSelecionado) {
    if (precoMaximoSelecionado === '') {
        return true;
    }

    const precoCard = parseFloat(card.dataset.preco);
    return precoCard <= parseFloat(precoMaximoSelecionado);
}
function mostrarOuEsconderCard(card, deveMostrar) {
    if (deveMostrar) {
        card.classList.add('show');
        card.classList.remove('hide');
    } else {
        card.classList.remove('show');
        card.classList.add('hide');
    }
}