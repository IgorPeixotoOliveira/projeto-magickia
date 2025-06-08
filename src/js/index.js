const botaoFiltrar = document.querySelector(".btn-filter");
botaoFiltrar.addEventListener("click", function(){
    const categoriaSelecionada = document.querySelector('#categoria').value;
    const precoMaximoSelecionado = document.querySelector('#preco').value;


const cards = document.querySelectorAll(".card");
    cards.forEach (function (card) {
        const categoriaCard = card.dataset.categoria;
        const precoCard = parseFloat(card.dataset.preco);
        
        let showCard = true;

        const temFiltroDeCategoria = categoriaSelecionada !== '';

        const cartaNaoBateComFiltroDeCategoria =  categoriaSelecionada.toLowerCase() !== categoriaCard.toLowerCase();

        if(temFiltroDeCategoria && cartaNaoBateComFiltroDeCategoria ) {
            showCard = false;
        }

        const temFiltroDePreco = precoMaximoSelecionado !== '';
        const cartaNaoBateComFiltroDePrecoMaximo = parseFloat(precoCard) > parseFloat(precoMaximoSelecionado);

        if( temFiltroDePreco && cartaNaoBateComFiltroDePrecoMaximo) {
            showCard = false;
        }

        if (showCard) {
            card.classList.add('show');
            card.classList.remove('hide');
        }else {
            card.classList.remove('show');
            card.classList.add('hide');
        }
    });
});