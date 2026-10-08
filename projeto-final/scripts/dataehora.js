const data = new Date(); /*data atual*/
console.log(data);

// Ano atual
const anoAtual = data.getFullYear();
const spanAno = document.getElementById('anoatual');
spanAno.textContent = anoAtual;

// Última modificação
const ultimaModificacao = document.lastModified;
const spanUltimaModificacao = document.getElementById('ultimaModificacao');
spanUltimaModificacao.textContent =
  `Última modificação do documento: ${ultimaModificacao}`;


  //Uma boa forma de memorizar é:

//getDate() → dia do mês (1-31)
//getDay() → dia da semana (0-6)
//getMonth() → mês (0-11)
//getFullYear() → ano (ex.: 2026)//