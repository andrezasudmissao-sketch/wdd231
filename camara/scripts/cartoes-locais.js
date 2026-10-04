

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
        retrato.src = `./imagens/${area.img}`;
        retrato.alt = `Imagem da area ${area.titulo}`;
        retrato.loading = 'lazy';

        const nome = document.createElement('p');
        nome.textContent = `Nome: ${area.nome}`;

        const endereco = document.createElement('p');
        endereco.textContent = `Endereço: ${area.endereco}`;

        const descricao = document.createElement('p');
        descricao.textContent = `Descrição: ${area.descricao}`;

        const textoDosite = document.createElement('a');
        textoDosite.href = area.textoDosite;
        textoDosite.textContent = "Saiba mais";
        textoDosite.target = "_blank";

        // textos em coluna
        texto.appendChild(nome);
        texto.appendChild(endereco);
        texto.appendChild(descricao);
    
        info.appendChild(textoDosite);
        info.appendChild(texto);  
        info.appendChild(retrato); 
       
       
        // montar cartão
        cartao.appendChild(titulo);
        cartao.appendChild(info);
        cartoes.appendChild(cartao)

       textoDosite.classList.add("botao-saiba-mais");


    });


export { exibirAreas };
console.log(exibirAreas);
