const url = 'https://raw.githubusercontent.com/andrezasudmissao-sketch/wdd231/refs/heads/main/camara/dados/membros.json';

const cartoes = document.querySelector('.cartoes-membros');

async function obterDadosDeMembros() {
    const resposta = await fetch(url);
    const dados = await resposta.json();
    exibirMembros(dados.membros);
}

obterDadosDeMembros();

const exibirMembros = (membros) => {
    membros.forEach((membro) => {

        let cartao = document.createElement('section');
        cartao.classList.add('cartao');

        let NomeDaEmpresa = document.createElement('h2');
        NomeDaEmpresa.textContent = membro.NomeDaEmpresa;


        // contêiner principal (lado a lado)
        let info = document.createElement('div');
        info.classList.add('info');

        // contêiner dos textos (em coluna)
        let texto = document.createElement('div');
        texto.classList.add('texto');

        let retrato = document.createElement('img');
        retrato.src = `imagens/${membro.Nome_de_arquivo_de_imagem}`;
        retrato.alt = `Logo da empresa ${membro.NomeDaEmpresa}`;
        retrato.loading = 'lazy';

        let NumeroDetelefone = document.createElement('p');
        NumeroDetelefone.textContent = `Telefone: ${membro.NumeroDetelefone}`;

        let Nivel_de_associação = document.createElement('p');
        Nivel_de_associação.textContent = `Nível de associação: ${membro.Nivel_de_associação}`;

        let Produto_servico_oferecido = document.createElement('p');
        Produto_servico_oferecido.textContent = `Serviço: ${membro.Produto_servico_oferecido}`;

        let URL_do_site = document.createElement('a');
        URL_do_site.href = membro.URL_do_site;
        URL_do_site.textContent = "Visitar site";
        URL_do_site.target = "_blank";

        // textos em coluna
        texto.appendChild(NumeroDetelefone);
        texto.appendChild(Nivel_de_associação);
        texto.appendChild(Produto_servico_oferecido);
        texto.appendChild(URL_do_site);

      
        info.appendChild(texto);  
        info.appendChild(retrato); 

        // montar cartão
        cartao.appendChild(NomeDaEmpresa);
        cartao.appendChild(info);

        cartoes.appendChild(cartao);
    });
};
