
const url = 'https://byui-cse.github.io/cse-ww-program-pt/data/profetas-dos-ultimos-dias.json';

const cartoes = document.querySelector('#cartoes');

async function obterDadosDeProfetas() {

        const resposta = await fetch(url); //Crie uma função async// Aguarde a conclusão da busca
        const dados = await resposta.json(); // Aguarde a conversão da resposta para JSON 
        exibirProfetas(dados.profetas);
        //console.table(dados.profetas); // Exiba os dados buscados
};

obterDadosDeProfetas();

const exibirProfetas = (profetas) => {
  profetas.forEach((profeta) => {
    // Crie elementos para adicionar ao elemento div.cartoes
    let cartao = document.createElement('section');
    let nomeCompleto = document.createElement('h2'); 
    let retrato = document.createElement('img');
    let localNascimento = document.createElement('p')
    let nascimento = document.createElement('p')

    // Crie o conteúdo h2 para mostrar o nome completo do profeta
    nomeCompleto.textContent = `${profeta.nome}  Smith`; 
    // Crie o retrato da imagem definindo todos os atributos relevantes
    retrato.setAttribute('src', profeta.urlImagem);
    retrato.setAttribute('alt', `Retrato de ${profeta.nome}  Smith`); 
    retrato.setAttribute('loading', 'lazy');
    retrato.setAttribute('width', '340');
    retrato.setAttribute('height', '440');

    localNascimento.textContent = profeta.localNascimento;
    nascimento.textContent = profeta.nascimento;

    // Acrescente a seção(cartao) com os elementos criados
    cartao.appendChild(nomeCompleto); 
    cartao.appendChild(localNascimento);
    cartao.appendChild(nascimento);
    cartao.appendChild(retrato);
    
     
    cartoes.appendChild(cartao);

    
  }); // fim da arrow function e do loop forEach
}

