
//import { empurroezinhos } from "../dados/infor-modal.js";

const dialogo = document.querySelector("#meuModal");
const titulo = dialogo.querySelector("h2");
const lista = dialogo.querySelector("ul"); // troque o <p> por <ul> no HTML
const buttonFechar = dialogo.querySelector("#fecharModal");


// botão fechar
buttonFechar.addEventListener("click", () => dialogo.close());

