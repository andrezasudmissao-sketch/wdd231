const url = 'https://raw.githubusercontent.com/andrezasudmissao-sketch/wdd231/refs/heads/main/projeto-final/dados/ben-habitos.json';

const habitosContainer = document.querySelector('#habitos-cartoes');

async function obterDadosDeHabitos() {
    const resposta = await fetch(url);
    const dados = await resposta.json();
    exibirhabitos(dados.habitos, habitosContainer); 
}

obterDadosDeHabitos();

const exibirhabitos = (habitos, container) => {
    habitos.forEach((item) => {

        const cardHabitos = document.createElement('section');
        cardHabitos.classList.add('card');

        const titulo = document.createElement('h2');
        titulo.textContent = item.titulo;

        const info = document.createElement('div');
        info.classList.add('info');

        const discricao = document.createElement('p');
        discricao.textContent = item.discricao;

        const exemplo = document.createElement('p');
        exemplo.textContent = item.exemplo;

        info.appendChild(discricao);

        cardHabitos.appendChild(titulo);
        cardHabitos.appendChild(info);
        cardHabitos.appendChild(exemplo)

        container.appendChild(cardHabitos);
    });
}