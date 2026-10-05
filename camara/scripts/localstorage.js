// Pega o elemento onde a mensagem será exibida na página
const areaMensagem = document.getElementById("mensagem-visita");

// Recupera do localStorage a data da última visita do usuário
const valor = localStorage.getItem("ultimaVisita");
console.log(valor); // Apenas para teste no console



// Verifica se NÃO existe registro de última visita → primeira vez acessando
if (valor == null) {
  
  console.log("!!Primeira visita!!"); // Mensagem de teste

  // Salva a data atual como a primeira visita do usuário
  localStorage.setItem("ultimaVisita", new Date().toISOString());

  // Exibe mensagem de boas-vindas
  areaMensagem.innerHTML = "Boas-vindas! Entre em contato conosco caso tenha alguma dúvida.";
}



// Caso contrário → já existe uma data salva → não é a primeira visita
else {

  console.log("Não é a primeira visita"); // Teste no console

  // Converte a data salva em objeto Date
  const ultimaVisita = new Date(valor);

  // Pega a data atual
  const agora = new Date();

  // Calcula a diferença em milissegundos entre agora e a última visita
  const diferenca = agora - ultimaVisita;

  // Converte a diferença para DIAS inteiros
  const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));

  // Se o intervalo for menor que 1 dia → dias == 0
  if (dias == 0) {
    areaMensagem.innerHTML = "Já voltou? Que legal!";
  }

  // Se o intervalo for exatamente 1 dia
  else if (dias == 1){
    areaMensagem.innerHTML = "Seu último acesso foi há 1 dia.";
  }

  // Se o intervalo for maior que 1 dia
  else{
    areaMensagem.innerHTML = `Seu último acesso foi há ${dias} dias.`;
  }

  // Atualiza a data da última visita para agora
  localStorage.setItem("ultimaVisita", new Date().toISOString());
}









