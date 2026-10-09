
const desafios = document.getElementById("Mini-desafios");
const Dtitulo = desafios.querySelector("h2");
const Dtexto = desafios.querySelector("p"); //Os D são de "desafios". As variaveis não podem ficam com mesmo nome, mesmo em arquivos diferentes No outro já tem titulo como variavel.


const listaDesafios = [
    "Semana 1 → beber 1 copo de água ao acordar.",
    "Semana 2 → Planejar o dia por 3 dias.",
    "Semana 3 → Caminhar 10 minutos."
]

const primieraSemana = "Semana 1 → Beber 1 copo de água ao acordar.";
const segundaSemana = "Semana 2 → Planejar o dia por 3 dias.";
const terceiraSemana =  "Semana 3 → Caminhar 10 minutos.";

const semanaAtual = 1; // Defina a semana atual aqui (1, 2 ou 3)


 if (semanaAtual == 1) {
    Dtitulo.textContent = "Desafio da Semana 1";
    Dtexto.textContent = "Beber 1 copo de água ao acordar: Logo ao acordar, antes de pegar o celular ou começar qualquer atividade, beba um copo cheio de água. Esse hábito simples ajuda seu corpo a sair do estado de desidratação da noite, ativa o metabolismo, melhora a disposição e dá um sinal mental de “começo de dia saudável”. É um gesto pequeno, mas que cria disciplina e abre espaço para outras escolhas melhores ao longo da manhã.";

  }

  // Se o intervalo for exatamente 1 dia
  else if (semanaAtual == 2){
    Dtitulo.textContent = "Desafio da Semana 2";
    Dtexto.textContent = "Planejar o dia por 3 dias: Durante três dias consecutivos, reserve alguns minutos para organizar o seu dia. Pode ser logo cedo ou na noite anterior. Escreva suas tarefas principais, compromissos e uma pequena meta pessoal. O objetivo não é criar uma agenda perfeita, mas desenvolver clareza mental, reduzir a sensação de caos e treinar sua capacidade de priorizar. Ao final dos três dias, você já começa a perceber mais controle e menos ansiedade.";
  }

  // Se o intervalo for maior que 1 dia
  else{
    Dtitulo.textContent = "Desafio da Semana 3";
    Dtexto.textContent = "Caminhar 10 minutos: Separe 10 minutos do seu dia para caminhar — pode ser na rua, no quintal, no corredor ou até dentro de casa. O foco não é distância, velocidade ou performance, e sim criar o hábito de movimentar o corpo. Caminhar por poucos minutos melhora a circulação, ajuda a aliviar tensões e dá uma sensação de leveza mental. É um compromisso curto, acessível e poderoso para quem está começando uma rotina mais ativa.";
  }
 //textContent cria o elemento que já está no HTML, já o creatElement cria um elemento que não tem no HTML.


