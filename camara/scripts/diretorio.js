
import { exibirMembros } from "./membros.js";

const url = 'https://raw.githubusercontent.com/andrezasudmissao-sketch/wdd231/refs/heads/main/camara/dados/membros.json';

async function obterTodosOsMembros(){
    const resposta = await fetch(url);
    const dados = await resposta.json();

    const container = document.querySelector('.cartoes-membros');
    exibirMembros(dados.membros, container);
}

obterTodosOsMembros();
