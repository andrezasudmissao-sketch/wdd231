

import { exibirMembros } from "./membros.js";

const url = 'https://raw.githubusercontent.com/andrezasudmissao-sketch/wdd231/refs/heads/main/camara/dados/membros.json';

async function obterDadosDeTresMembros() {
    const resposta = await fetch(url);
    const tresMembros = await resposta.json();
    const destaque = tresMembros.membros;

    destaque.sort(() => Math.random() - 0.5); /*Você embaralha*/

    const membros = destaque.slice(0, 3); /*Pega 3*/

    const container = document.querySelector('.Secao-destaque'); /*eleciona o container da página destaque*/
    exibirMembros (membros, container); /*chama a função*/
  

};


obterDadosDeTresMembros()








/*
COMO EXIBIR 3 MEMBROS:

const url = 'https://raw.githubusercontent.com/andrezasudmissao-sketch/wdd231/refs/heads/main/camara/dados/membros.json';

async function obterDadosDeTresMembros() {
    const resposta = await fetch(url);
    const tresMembros = await resposta.json();
    tresMembros.membros.slice(0, 3);
    const membros = tresMembros.membros.slice(0, 3);
    console.log(membros);

};*/