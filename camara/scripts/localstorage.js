
const areaMensagem = document.getElementById("mensagem-visita");


const valor = localStorage.getItem("ultimaVisita");
console.log(valor);

 if (valor == null) {
  console.log("!!Primeira visita!!");

  localStorage.setItem("ultimaVisita", new Date().toISOString()); /*salve a data atual no localStorage*/

  areaMensagem.innerHTML = "<p>Boas-vindas! Entre em contato conosco caso tenha alguma dúvida.</p>";

  } else {
  console.log("Não é a primeira visita");
}








