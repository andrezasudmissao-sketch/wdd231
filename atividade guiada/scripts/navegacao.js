
const navbtn = document.querySelector("#ham-btn");
const menu = document.querySelector("#barra-navegacao");

navbtn.addEventListener('click', () => {
  navbtn.classList.toggle('show');
  menu.classList.toggle('exibir');


})

