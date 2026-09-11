const data = new Date();
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