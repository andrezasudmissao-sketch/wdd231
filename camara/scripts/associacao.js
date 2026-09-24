
const url = "https://raw.githubusercontent.com/andrezasudmissao-sketch/wdd231/main/camara/dados/niveis.json";
const associacao = document.querySelector("#contanier-niveis");

async function obterDadosDeNiveis() {
    const resposta = await fetch(url);
    const dados = await resposta.json();
    console.log(dados);

        exibirNiveis(dados.niveis);
     }


obterDadosDeNiveis()

const exibirNiveis = (niveis,) => {
    niveis.forEach((nivel) => {

        let cartao = document.createElement('section');
        cartao.classList.add('cartao');

        let  = document.createElement('h2');
        NomeDaEmpresa.textContent = membro.NomeDaEmpresa;

    })};