
const dataHora = new Date();

// Pegar o elemento oculto
const campoOculto = document.getElementById('registro-data-hora');
campoOculto.value =dataHora.toISOString()
console.log(dataHora.toISOString());


//toISOString() é um método do objeto Date que transforma a data e hora em um formato padrão internacional, chamado ISO 8601.
//O value é o lugar onde o input guarda o valor dele.