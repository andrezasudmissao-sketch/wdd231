
  const categorias = [

  { tipoDoCurso:"Todos",  },

  { tipoDoCurso:"CSE", },

  { tipoDoCurso:"WDD",}

  ]


  const cursos = [
    { NomeDocurso:"WDD130", },

    { NomeDocurso:"WDD131",},

    {NomeDocurso:"WDD231", }

  ]
  
  const Minhacategoria = document.querySelector('.categorias');
  const Meuscursos = document.querySelector('.cursos');

  const buttons = []; // lista vazia 

categorias.forEach(cat => {
  const botao = document.createElement("button"); // cria botão
  botao.innerText = cat.tipoDoCurso;              // coloca texto
  Minhacategoria.appendChild(botao);              // adiciona na div
  buttons.push(botao);                            // guarda no array
});

//Para cada botão dentro da lista buttons, execute o código que está aqui dentro:
  buttons.forEach(btn => {
//Quando esse botão for clicado, execute o código que está aqui dentro.
  btn.addEventListener('click', () => {
    const categoriaEscolhida = btn.innerText;
    Meuscursos.innerHTML = "";

    
    cursosFiltrados = [] //lista vazia

     if (categoriaEscolhida === "Todos") {  //Se o botão clicado for ‘Todos’, então não filtre nada. Pegue a lista inteira.
      cursosFiltrados = cursos;             
    } else {
      cursosFiltrados = cursos.filter(c => 
        c.NomeDocurso.startsWith(categoriaEscolhida)   //Se o botão clicado NÃO for ‘Todos’, filtre a lista. Pegue só os cursos cujo nome começa com a categoria.
      );
    }
    
     cursosFiltrados.forEach(itemCurso => {
   const atributo = document.createElement("p"); 
   atributo.innerText = itemCurso.NomeDocurso;       
   
   if (itemCurso.NomeDocurso.startsWith("WDD")) {  //criei esse somente para colocar o background color diferente para os cursos WDD, mas poderia ser feito para todos os cursos.
     atributo.classList.add("wdd");
   } 

   Meuscursos.appendChild(atributo);             
                         
});
    
  });
});







