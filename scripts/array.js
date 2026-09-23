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
const Meuscursos = document.querySelector('.lista-cursos'); // ← mudou aqui
const buttons = [];

// Cria os botões
categorias.forEach(cat => {
  const botao = document.createElement("button");
  botao.innerText = cat.tipoDoCurso;
  botao.classList.add("btn-categoria");
  Minhacategoria.appendChild(botao);
  buttons.push(botao);
});

// Adiciona comportamento
buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const categoriaEscolhida = btn.innerText;
    Meuscursos.innerHTML = ""; // agora só apaga os cursos, não os botões

    let cursosFiltrados = [];

    if (categoriaEscolhida === "Todos") {
      cursosFiltrados = cursos;
    } else {
      cursosFiltrados = cursos.filter(c =>
        c.NomeDocurso.startsWith(categoriaEscolhida)
      );
    }

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








