const modal = document.getElementById("modal");
const btnfechar = document.getElementById("fechar-modal");

btnfechar.addEventListener("click", () => {
    modal.close(); /*Fecha o modal*/
});



const url = "https://raw.githubusercontent.com/andrezasudmissao-sketch/wdd231/main/camara/dados/niveis.json";
const associacao = document.querySelector("#contanier-niveis");

async function obterDadosDeNiveis() {
    const resposta = await fetch(url);
    const dados = await resposta.json();


    exibirNiveis(dados.niveisDeAssociacao);
}

obterDadosDeNiveis();

const exibirNiveis = (niveis) => {



    niveis.forEach((nivel) => {



        // Criar cartão
        let cartao = document.createElement("section");
        cartao.classList.add("cartao");

        // Título
        let titulo = document.createElement("h2");
        titulo.textContent = nivel.NomedoNivel;

        // Custo sugerido
        let custo = document.createElement("p");
        custo.textContent = `Custo sugerido: ${nivel.CustoSugerido}`;

        // Link para abrir modal
        let link = document.createElement("a");
        link.href = "#";
        link.textContent = "Ver benefícios";
        link.classList.add("link-beneficios");

        // Evento para abrir o modal
        link.addEventListener("click", (event) => {
            event.preventDefault();
            abrirModal(nivel);
        });

        

        // Montar cartão
        cartao.appendChild(titulo);
        cartao.appendChild(custo);
        cartao.appendChild(link);

        associacao.appendChild(cartao);

    });
};

function abrirModal(nivel) {

   
    const tituloModal = document.getElementById("titulo-modal");
    const conteudoModal = document.getElementById("conteudo-modal");
   // 1. Preencher o título do modal
  tituloModal.textContent = nivel.NomedoNivel;

// 2. Criar a lista de benefícios de forma organizada
   const lista = document.createElement("ul");

for (let chave in nivel) {
    if (chave.includes("Beneficio")) {
        const item = document.createElement("li");
        item.textContent = nivel[chave];
        lista.appendChild(item);
    }
}

// 3. Limpar o conteúdo do modal antes de preencher
    conteudoModal.innerHTML = "";

// 4. Criar bloco do custo sugerido
   const blocoCusto = document.createElement("p");
   blocoCusto.innerHTML = `<strong>Custo sugerido:</strong> ${nivel.CustoSugerido}`;

// 5. Criar bloco da associação
   const blocoAssociacao = document.createElement("h3");
   blocoAssociacao.textContent = nivel.Associacao;

// 6. Adicionar tudo ao modal de forma organizada
   conteudoModal.appendChild(blocoCusto);
   conteudoModal.appendChild(blocoAssociacao);
   conteudoModal.appendChild(lista);

// 7. Abrir o modal
   modal.showModal();


};

    





   