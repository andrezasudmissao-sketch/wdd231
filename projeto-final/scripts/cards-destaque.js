const url = 'https://raw.githubusercontent.com/andrezasudmissao-sketch/wdd231/refs/heads/main/projeto-final/dados/cards.json';

const cardsContainer = document.querySelector('#cards-destaque');

async function obterDadosDeCards() {
    const resposta = await fetch(url);
    const dados = await resposta.json();
    exibirCards(dados.cards, cardsContainer); // <-- CORRETO
}

obterDadosDeCards();

const exibirCards = (cards, container) => {
    cards.forEach((item) => {

        const cardDestaque = document.createElement('section');
        cardDestaque.classList.add('card');

        const titulo = document.createElement('h2');
        titulo.textContent = item.titulo;

        const info = document.createElement('div');
        info.classList.add('info');

        const texto = document.createElement('p');
        texto.textContent = item.texto;

        const retrato = document.createElement('img');
        retrato.src = `imagens/${item.imagem}`;
        retrato.alt = `foto do card ${item.titulo}`;
        retrato.loading = 'lazy';

        info.appendChild(texto);
        info.appendChild(retrato);

        cardDestaque.appendChild(titulo);
        cardDestaque.appendChild(info);

        container.appendChild(cardDestaque);
    });
}
