const categorias = [
  { tipoDoCurso: "Todos" },
  { tipoDoCurso: "CSE" },
  { tipoDoCurso: "WDD" }
];

const cursos = [
  { NomeDocurso: "CSE110" },
  { NomeDocurso: "CSE111" },
  { NomeDocurso: "CSE210" },
  { NomeDocurso: "WDD130" },
  { NomeDocurso: "WDD131" },
  { NomeDocurso: "WDD231" }
];

const Minhacategoria = document.querySelector('.categorias');
const Meuscursos = document.querySelector('.cursos');
const buttons = [];

// Cria os botões de categoria
categorias.forEach(cat => {
  const botao = document.createElement("button");
  botao.innerText = cat.tipoDoCurso;
  botao.classList.add("btn-categoria"); // classe para estilização
  Minhacategoria.appendChild(botao);
  buttons.push(botao);
});

// Adiciona comportamento aos botões
buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const categoriaEscolhida = btn.innerText;
    Meuscursos.innerHTML = "";

    let cursosFiltrados = [];

    if (categoriaEscolhida === "Todos") {
      cursosFiltrados = cursos;
    } else {
      cursosFiltrados = cursos.filter(c =>
        c.NomeDocurso.startsWith(categoriaEscolhida)
      );
    }

    // Cria os cartões dos cursos
    cursosFiltrados.forEach(itemCurso => {
      const card = document.createElement("div");
      card.classList.add("card-curso");

      card.innerText = itemCurso.NomeDocurso;

      if (itemCurso.NomeDocurso.startsWith("WDD")) {
        card.classList.add("wdd");
      } else if (itemCurso.NomeDocurso.startsWith("CSE")) {
        card.classList.add("cse");
      }

      Meuscursos.appendChild(card);
    });
  });
});








