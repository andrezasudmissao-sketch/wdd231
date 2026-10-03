

const cartoes = document.querySelector('.cartoes-areas');
 
const exibirAreas = (locais) => 
    locais.forEach((area) => {



        const cartao = document.createElement('section');
        cartao.classList.add('cartao');

        const titulo = document.createElement('h2');
        titulo.textContent = area.titulo;


        // contêiner principal (lado a lado)
        const info = document.createElement('div');
        info.classList.add('info');

        // contêiner dos textos (em coluna)
        const texto = document.createElement('div');
        texto.classList.add('texto');

        const retrato = document.createElement('img');
        retrato.src = `imagens/${area.img}`;
        retrato.alt = `Imagem da area ${area.titulo}`;
        retrato.loading = 'lazy';

        const nome = document.createElement('p');
        nome.textContent = `nome: ${area.nome}`;

        const endereco = document.createElement('p');
        endereco.textContent = `endereco: ${area.endereco}`;

        const descricao = document.createElement('p');
        descricao.textContent = `descricao: ${area.descricao}`;

        // textos em coluna
        texto.appendChild(nome);
        texto.appendChild(endereco);
        texto.appendChild(descricao);
    
        info.appendChild(texto);  
        info.appendChild(retrato); 

        // montar cartão
        cartao.appendChild(titulo);
        cartao.appendChild(info);
        cartoes.appendChild(cartao)
       

    });


export { exibirAreas };