const url = 'https://raw.githubusercontent.com/andrezasudmissao-sketch/wdd231/refs/heads/main/projeto-final/dados/cards.json';

const cardContainer = document.querySelector('#cards-destaque');

async function obterDadosDeCards() {


    const resposta = await fetch(url);
    const dados = await resposta.json();
    exibirCards(dados.cards);
}


obterDadosDeCards();

const exibirCards = (cards) => {


    cards.forEach((item) => {

        const cartao = document.createElement('section');
        cartao.classList.add('cartao');

        const info = document.createElement('div');
        info.classList.add('info');

        const texto = document.createElement('div');
        texto.classList.add('texto');

        const titulo = document.createElement('h2');
        titulo.textContent = item.titulo;

        const paragrafo = document.createElement('p');
        paragrafo.textContent = item.texto;

        const retrato = document.createElement('img');
        retrato.src = `imagens/${item.imagem}`;
        retrato.alt = `Imagem sobre ${item.titulo}`;
        retrato.loading = 'lazy';

        const botao = document.createElement('button');
        botao.textContent = "Curioso(a)? Saiba Mais";


        texto.appendChild(titulo);
        texto.appendChild(paragrafo);
        texto.appendChild(botao);

        info.appendChild(texto);
        info.appendChild(retrato);

        cartao.appendChild(info);

        cardContainer.appendChild(cartao);
    });
};
;







       







