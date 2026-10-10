// Pega o elemento onde a mensagem será exibida na página
const areaMensagem = document.querySelector("#mensagem-visita");

// Recupera do localStorage a data da última visita do usuário
const valor = localStorage.getItem("ultimaVisita");
console.log(valor); // Apenas para teste no console



// Verifica se NÃO existe registro de última visita → primeira vez acessando
if (valor == null) {
  
  console.log("!!Primeira visita!!"); // Mensagem de teste

  // Salva a data atual como a primeira visita do usuário
  localStorage.setItem("ultimaVisita", new Date().toISOString());

  // Exibe mensagem de boas-vindas
  const areaMensagem = "Boas-vindas! Entre em contato conosco caso tenha alguma dúvida.";
  localStorage.setItem("mensagemVisita", areaMensagem.innerHTML);
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
    const areaMensagem = "Já voltou? Que legal!";
    localStorage.setItem("mensagemVisita", areaMensagem.innerHTML);
  }

  // Se o intervalo for exatamente 1 dia
  else if (dias == 1){
    const areaMensagem = "Seu último acesso foi há 1 dia.";
    localStorage.setItem("mensagemVisita", areaMensagem.innerHTML);
  }

  // Se o intervalo for maior que 1 dia
  else{
    const areaMensagem = `Seu último acesso foi há ${dias} dias.`;
    localStorage.setItem("mensagemVisita", areaMensagem.innerHTML);
  }

  // Atualiza a data da última visita para agora
  localStorage.setItem("ultimaVisita", new Date().toISOString());
}









