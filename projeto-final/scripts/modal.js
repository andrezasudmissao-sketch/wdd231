const btnAbrir1 = document.querySelector("#btnAbrir1");
const btnAbrir2 = document.querySelector("#btnAbrir2");
const btnAbrir3 = document.querySelector("#btnAbrir3");

const caixaDialogo = document.querySelector("#caixaDialogo");
const btnFechar = document.querySelector("#btnFechar");
const caixaDialogoTexto = document.querySelector("#caixaDialogo div");

btnAbrir1.addEventListener("click", () => {
    caixaDialogo.showModal();
    caixaDialogoTexto.innerHTML = `
    <nav>
        <ul>
            <li>Caminhar ou correr alguns minutos por dia.</li>
            <li>Fazer alongamentos ao acordar.</li>
            <li>Visitar um nutricionista e montar um plano alimentar.</li>
            <li>Beber mais água ao longo do dia.</li>
            <li>Fazer exercícios simples em casa.</li>
            <li>Subir escadas em vez de usar elevador.</li>
            <li>Dormir mais cedo para melhorar o descanso.</li>
            <li>Preparar refeições mais naturais.</li>
        </ul>
      </nav>
    `;
});

btnAbrir2.addEventListener("click", () => {
    caixaDialogo.showModal();
    caixaDialogoTexto.innerHTML = `
    <nav>
        <ul>
            <li>Fazer 5 minutos de respiração profunda.</li>
            <li>Praticar meditação guiada.</li>
            <li>Escrever pensamentos e emoções em um caderno.</li>
            <li>Reduzir o tempo de tela antes de dormir.</li>
            <li>Fazer uma pausa consciente durante o dia.</li>
            <li>Conversar com alguém de confiança.</li>
            <li>Ler algo leve ou inspirador.</li>
            <li>Passar alguns minutos ao ar livre.</li>
        </ul>
      </nav>
    `;
});

btnAbrir3.addEventListener("click", () => {
    caixaDialogo.showModal();
    caixaDialogoTexto.innerHTML = `
    <nav>
        <ul>
            <li>Criar uma lista de tarefas simples para o dia.</li>
            <li>Dividir grandes objetivos em passos menores.</li>
            <li>Organizar o ambiente de trabalho.</li>
            <li>Usar blocos de tempo.</li>
            <li>Priorizar apenas 3 tarefas importantes por dia.</li>
            <li>Evitar multitarefas.</li>
            <li>Fazer pequenas pausas.</li>
            <li>Revisar o dia à noite.</li>
        </ul>
      </nav>
    `;
});

btnFechar.addEventListener("click", () => {
    caixaDialogo.close();
});





