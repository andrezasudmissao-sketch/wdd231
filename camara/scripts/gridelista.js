
const container = document.querySelector(".cartoes-membros");
const grid = document.getElementById("btnGrid");
const list = document.getElementById("btnList");

let modo = "grid";   // começa em grid

list.addEventListener("click", function () {
    container.classList.remove("grid");  // remover o modo atual (grid)
    container.classList.add("list");     // adicionar o novo modo (list)
    modo = "list";                       // atualizar o estado
});

grid.addEventListener("click", function () {
    container.classList.remove("list");  // remover o modo atual (list)
    container.classList.add("grid");     // adicionar o novo modo (grid)
    modo = "grid";                       // atualizar o estado
});
