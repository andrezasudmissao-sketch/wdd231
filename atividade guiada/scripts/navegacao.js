
const navbtn = document.querySelector("#ham-btn");
navbtn .addEventListener("click", () => {
    navbtn.classList.toggle('show');
})

const barraNavegacao = document.querySelector('#barra-navegacao');
botaoDeNav.addEventListener('click', () => {
  botaoDeNav.classList.toggle('exibir'); 
  barraNavegacao.classList.toggle('exibir');  
});
