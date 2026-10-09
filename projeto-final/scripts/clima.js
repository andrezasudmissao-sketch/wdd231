// Obter elementos do html

const Meulocal = document.querySelector('#local');
const MinhaDiscrisao = document.querySelector('#discricao');
const Atemperaruda = document.querySelector('#temperatura');
const iconeDoClima = document.querySelector('#imagem');

// Criar variaveis necessarias para o URL

const MinhaChave = "88be768d072e126414077d3099f65649"
const mlat = "-7.1187"
const mlon = "-34.88"
const mylang = "pt_br"

const meuURL = `https://api.openweathermap.org/data/2.5/weather?lat=${mlat}&lon=${mlon}&appid=${MinhaChave}&units=metric&lang=${mylang}`
const Urltrehoras = `https://api.openweathermap.org/data/2.5/forecast?lat=${mlat}&lon=${mlon}&appid=${MinhaChave}&units=metric&lang=${mylang}`

// Obter dados do API
async function apiFetch() {
  try {
    const resposta = await fetch(meuURL);
    if (resposta.ok) {
      const dados = await resposta.json();
      console.log(dados); 
      mostrarResultados(dados);

    } else {
        throw Error(await resposta.text());
    }
  } catch (erro) {
      console.log(erro);
  }
}

//Pega dados do APi

function mostrarResultados(dados) {
Meulocal.innerHTML = dados.name
MinhaDiscrisao.innerHTML = dados.weather[0].description;
Atemperaruda.innerHTML = `${dados.main.temp}°C`;
const iconesrc = `https://openweathermap.org/img/w/${dados.weather[0].icon}.png`;

iconeDoClima.setAttribute('src', iconesrc);
iconeDoClima.setAttribute('alt', dados.weather[0].description);
descrDaLegenda.textContent = `${descr}`;
 }

apiFetch();