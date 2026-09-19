
const url = 'https://raw.githubusercontent.com/andrezasudmissao-sketch/wdd231/refs/heads/main/camara/dados/membros.json';

async function obterDadosDeTresMembros() {
    const resposta = await fetch(url);
    const tresMembros = await resposta.json();
    const destaque = tresMembros.membros;
    destaque.sort(() => Math.random() - 0.5);
    const sete = destaque.slice(0, 7);
    sete.sort(() => Math.random() - 0.5);
    const membros = sete.slice(0, 3);
    console.log(membros)

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