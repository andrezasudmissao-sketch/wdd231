

const formulario = document.querySelector("#formularioHabito");
console.log(formulario);
//document.addEventListener("DOMContentLoaded", function() {


    formulario.addEventListener("submit", function(event) {
        event.preventDefault();

       salvarinformacoes();

        alert("Informações salvas com sucesso!");
    });

    function salvarinformacoes () {

        const name = document.querySelector('#nome');
        const sobrenome = document.querySelector("#sobrenome");
        const email = document.querySelector("#email");
        const telefone = document.querySelector("#telefone");
    
       const usuarioHabito = { //Pega o objeto
       name: name.value,
       sobrenome: sobrenome.value,
       email: email.value,
       telefone: telefone.value
       };

        localStorage.setItem("informacoes", JSON.stringify(usuarioHabito)); 
    };
    

    

  //Transforma em texto:
    //{"nome":"Andreza","sobrenome":"Silva","email":"andreza@gmail.com"

   // const dados = localStorage.getItem("informacoes");
   // const dadosInfo = JSON.parse(dados)
   // const DInfo = localStorage.getItem("informacoes");

  //  console.log(dados);
     
   

