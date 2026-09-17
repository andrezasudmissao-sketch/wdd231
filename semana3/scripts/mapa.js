const url = 'https://api.openweathermap.org/data/2.5/___________';

// selecione os elementos HTML no documento
const tempAtual = document.querySelector('#temp-atual');
const iconeDoClima = document.querySelector('#icone-do-clima');
const descrDaLegenda = document.querySelector('figcaption');

async function apiFetch() {
  try {
    const resposta = await fetch(url);
    if (resposta.ok) {
      const dados = await resposta.json();
      console.log(dados); // somente teste
      // mostrarResultados(dados); // retire o comentário quando estiver pronto
    } else {
        throw Error(await resposta.text());
    }
  } catch (erro) {
      console.log(erro);
  }
}

apiFetch();

function mostrarResultados(dados) {
  tempAtual.innerHTML = `${dados._____}&deg;F`;
  const iconesrc = `https://openweathermap.org/img/w/${______}.___`;
  let descr = dados.weather[0].______;
  iconeDoClima.setAttribute('___', _____);
  iconeDoClima.setAttribute('___', _____);
  descrDaLegenda.textContent = `${descr}`;
}