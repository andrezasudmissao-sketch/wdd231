
const url = "https://raw.githubusercontent.com/andrezasudmissao-sketch/wdd231/main/camara/dados/niveis.json";
const associacao = document.querySelector("#contanier-niveis");

async function obterDadosDeNiveis() {
    const resposta = await fetch(url);
    const dados = await resposta.json();
    console.log(dados);

        exibirNiveis(dados.niveisDeAssociacao);
     }


obterDadosDeNiveis()

const exibirNiveis = (niveis,) => {
    niveis.forEach((nivel) => {

        let cartao = document.createElement('section');
        cartao.classList.add('cartao');

        let titulo = document.createElement('h2');
        titulo.textContent = nivel.NomedoNivel;

        cartao.appendChild(titulo)
        associacao.appendChild(cartao)



    })};

    //para cada nível:
    //criar section
   // criar h2
   // criar botão
   // colocar h2 dentro da section
   // colocar botão dentro da section
  //  adicionar section ao container

  //  quando clicar no botão:
     //   preencher dialog-title com nivel.NomedoNivel
      //  preencher dialog-body com os benefícios
      //  abrir o dialog
