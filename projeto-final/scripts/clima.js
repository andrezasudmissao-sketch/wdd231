// Obter elementos do html
const Meulocal = document.querySelector('#local');
const iconeDoClima = document.querySelector('#imagem');
const MinhaDiscrisao = document.querySelector('#discricao');
const Atemperaruda = document.querySelector('#temperatura');

// Criar variaveis necessarias para o URL
const MinhaChave = "88be768d072e126414077d3099f65649";
const mlat = "-7.1187";
const mlon = "-34.88";
const mylingua = "pt_br";

const meuURL = `https://api.openweathermap.org/data/2.5/weather?lat=${mlat}&lon=${mlon}&appid=${MinhaChave}&units=metric&lang=${mylingua}`;

// Obter dados do API
async function apiFetch() {
  try {
    const resposta = await fetch(meuURL);
    if (resposta.ok) {
      const dados = await resposta.json();
      console.log(dados); 
      exibirResultados(dados); // ✔ nome corrigido
    } else {
      throw Error(await resposta.text());
    }
  } catch (erro) {
    console.log(erro);
  }
}

function exibirResultados(dados) {
    Meulocal.innerHTML = dados.name;
    MinhaDiscrisao.innerHTML = dados.weather[0].description;
    Atemperaruda.innerHTML = `${dados.main.temp}°C`;

    // tabela de ícones conforme o clima
    const icones = {   /*objeto*/
        Clear: "imagens/clima-sol-cheio.svg",
        Clouds: "imagens/clima-nuvem.svg",
        Rain: "imagens/clima-chuva.svg"
    };

    // pega o tipo principal do clima
    const clima = dados.weather[0].main;

    // escolhe o ícone correspondente ou usa um padrão
    const iconsrc = icones[clima] || "imagens/clima-padrao.svg";

    iconeDoClima.setAttribute('src', iconsrc);
    iconeDoClima.setAttribute('alt', dados.weather[0].description);

    iconeDoClima.classList.add("rotacao"); //Ela adiciona a classe CSS chamada rotacao ao elemento que está na variável 

}

apiFetch();
