

// URL DOS CARDS
const url = 'https://raw.githubusercontent.com/andrezasudmissao-sketch/wdd231/refs/heads/main/projeto-final/dados/cards.json';

const cardsContainer = document.querySelector('#cards-destaque');

// BUSCAR DADOS
async function obterDadosDeCards() {
    const resposta = await fetch(url);
    const dados = await resposta.json();
    exibirCards(dados.cards, cardsContainer); 
}


obterDadosDeCards();

// CRIAR CARDS
const exibirCards = (cards, container) => {
    cards.forEach((item) => {

        const cardDestaque = document.createElement('section');
        cardDestaque.classList.add('card');

        // TÍTULO DO CARD
        const titulocard = document.createElement('h2');
        titulocard.textContent = item.titulo;

        const info = document.createElement('div');
        info.classList.add('info');

        const texto = document.createElement('p');
        texto.textContent = item.texto;

        // BOTÃO
        const button = document.createElement('a');
        button.textContent = "Curioso(a)? Saiba Mais:";
        button.dataset.categoria = item.categoria;

        // EVENTO DO BOTÃO → ABRE O MODAL
        button.addEventListener("click", () => {
            dialogo.showModal();
            tituloModal.textContent = item.titulo; // título do MODAL
                 
        });

        // IMAGEM
        const retrato = document.createElement('img');
        retrato.src = `imagens/${item.imagem}`;
        retrato.alt = `foto do card ${item.titulo}`;
        retrato.loading = 'lazy';

        // MONTAGEM DO CARD
        info.appendChild(texto);
        info.appendChild(retrato);
        info.appendChild(button);

        cardDestaque.appendChild(titulocard); // título do CARD
        cardDestaque.appendChild(info);

        container.appendChild(cardDestaque);
    });
}

// FECHAR MODAL
buttonFechar.addEventListener("click", () => dialogo.close());

