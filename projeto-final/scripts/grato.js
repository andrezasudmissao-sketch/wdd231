
const local = window.location.search;
//console.log(local);

// Pega os parâmetros enviados via GET
const area = new URLSearchParams(local);
//console.log(info);

// Insere os dados na página
document.querySelector('#agradecimentos').innerHTML =
`
<p>Agradecemos para ${area.get('nome')} ${area.get('sobrenome')}</p>
<p>Email: ${area.get('email-do-usuario')}</p>
<p>Tefefone: ${area.get('tel')}</p>
<p>Nivel de motivacão: ${area.get('escala')}</p>
<p>Discrição: ${area.get('discricao')} </p>
<p> Data e hora do Registro: ${area.get('registro-data-hora')}</p>

`