
const BotaoTodos = document.getElementById("todos");
const BotaoCse = document.getElementById("cse");
const BotaoWdd = document.getElementById("wdd");
const classes = document.querySelector(".classe-byu");

function LimparBotoes() { 
    BotaoTodos.classList.remove("ativo")
    BotaoCse.classList.remove("ativo")
    BotaoWdd.classList.remove("ativo")
} 

BotaoTodos.addEventListener("click", function() {
    LimparBotoes();
    BotaoTodos.classList.add("ativo")
   classes.style.display = "block"; // Adicione esta linha para mostrar a classe
})
BotaoCse.addEventListener("click", function() {
    LimparBotoes();
    BotaoCse.classList.add("ativo")
    classes.style.display = "none"; // Adicione esta linha para esconder a classe

})
BotaoWdd.addEventListener("click", function() {
    LimparBotoes();
    BotaoWdd.classList.add("ativo")
    classes.style.display = "block"; // Adicione esta linha para mostrar a classe
})

