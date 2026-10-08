

const diario = document.getElementById("d-diarios");
const titulo = diario.querySelector("h2");
const texto = diario.querySelector("p");


const listaDesafiosDiarios = [
    "Dia 1: O que você fez hoje que te aproximou do hábito que deseja construir?",

    "Dia 2: Qual pequena vitória você teve ao manter seu hábito?",

    "Dia 3: O que você pode melhorar amanhã para fortalecer esse hábito?",

    "Dia 4: Que hábito positivo você repetiu hoje sem perceber?",

    "Dia 5: Qual foi o maior obstáculo para manter seu hábito hoje — e como você lidou com ele?",

    "Dia 6: O que você aprendeu sobre seu comportamento ao tentar manter esse hábito?",

    "Dia 7: Se amanhã fosse um recomeço, qual seria a primeira ação para manter esse hábito vivo?"

]

const Mdata = new Date();
DiaDeHoje = Mdata.getDate();

DiaAtual = DiaDeHoje % 7 //uma variável que recebe o resto da divisão.

if (DiaAtual == 0) {
    DiaAtual = 7;  //Apenas atribuição.
}
IndiceDias = DiaAtual - 1; //Converte para índice da lista (0 a 6)

IndiceDesafios = listaDesafiosDiarios[IndiceDias]

titulo.textContent = "Reflexão do Dia";
texto.textContent = IndiceDesafios;


