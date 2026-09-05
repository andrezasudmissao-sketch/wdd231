
const navbtn = document.querySelector("#ham-btn");
const menu = document.querySelector("#barra-navegacao");

navbtn.addEventListener('click', () => {
  navbtn.classList.toggle('show');
  menu.classList.toggle('exibir'); //Menu é exibido na tela pequena quando apertar no botão hamburger
  

})

//element.classList.add("classe") → adiciona a classe ao elemento.
//element.classList.contains("classe") → verifica se a classe já existe.
//element.classList.remove("classe") → remove a classe.
//element.classList.toggle("classe") → adiciona se não existir, remove se já existir.