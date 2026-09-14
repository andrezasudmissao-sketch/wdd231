const url = 'https://raw.githubusercontent.com/andrezasudmissao-sketch/wdd231/refs/heads/main/camara/dados.json/membros.json';

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
        let NomeDaEmpresa = document.createElement('h2');
        let retrato = document.createElement('img');
        let NumeroDetelefone = document.createElement('p');
        let Nivel_de_associação = document.createElement('p');
        let Produto_servico_oferecido = document.createElement('p');
        let URL_do_site = document.createElement('a');

        // Nome da empresa
        NomeDaEmpresa.textContent = membro.NomeDaEmpresa;

        // Imagem
        retrato.setAttribute('src', `imagens/${membro.Nome_de_arquivo_de_imagem}`);
        retrato.setAttribute('alt', `Logo da empresa ${membro.NomeDaEmpresa}`);
        retrato.setAttribute('loading', 'lazy');
        NumeroDetelefone.textContent = `Telefone: ${membro.NumeroDetelefone}`;
        Nivel_de_associação.textContent = `Nível de associação: ${membro.Nivel_de_associação}`;
        Produto_servico_oferecido.textContent = `Serviço: ${membro.Produto_servico_oferecido}`;

        // Site
        URL_do_site.href = membro.URL_do_site;
        URL_do_site.textContent = "Visitar site";
        URL_do_site.target = "_blank";

        // Montar cartão
        cartao.appendChild(NomeDaEmpresa);
        cartao.appendChild(retrato);
        cartao.appendChild(NumeroDetelefone);
        cartao.appendChild(Nivel_de_associação);
        cartao.appendChild(Produto_servico_oferecido);
        cartao.appendChild(URL_do_site);

        cartoes.appendChild(cartao);
    });
};
