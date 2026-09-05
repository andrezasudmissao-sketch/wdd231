

  
  const buttons = document.querySelectorAll('.filter-btn');
  const courses = document.querySelectorAll('.course');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;

      // Remove seleção anterior
      buttons.forEach(b => b.classList.remove('selected'));

      // Regras de cor
      if (filter === "todos") {
        document.querySelector('[data-filter="todos"]').classList.add('selected');
        document.querySelector('[data-filter="cse"]').classList.add('selected');
        document.querySelector('[data-filter="wdd"]').classList.add('selected');
      } else {
        btn.classList.add('selected');
      }

      // Usando filter() para decidir quais cursos mostrar
      const cursosVisiveis = Array.from(courses).filter(course => {
        if (filter === "todos") return true; // mostra todos
        if (filter === "cse") return false;  // nenhum curso
        if (filter === "wdd") return true;   // mostra todos
        // para wdd130, wdd131, wdd231 — mantém aparência atual
        return true;
      });

      // Atualiza a exibição
      courses.forEach(c => c.style.display = "none");
      cursosVisiveis.forEach(c => c.style.display = "block");
    });
  });

