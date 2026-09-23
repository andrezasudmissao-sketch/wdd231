function exibirInfosDoCurso(curso) {
  infosDoCurso.innerHTML = '';
  infosDoCurso.innerHTML = `
    <button id="fecharModal">❌</button>
    <h2>${curso.materia} ${curso.numero}</h2>
    <h3>${curso.nome}</h3>
    <p><strong>Créditos</strong>: ${curso.creditos}</p>
    <p><strong>Certificado</strong>: ${curso.certificado}</p>
    <p>${curso.descricao}</p>
    <p><strong>Tecnologias</strong>: ${course.tecnologia.join(', ')}</p>
  `;
  infosDoCurso.showModal();

  fecharModal.addEventListener("click", () => {
    infosDoCurso.close();
  });
}

courseDiv.addEventListener('click', () => {
  exibirInfosDoCurso(curso);
});


/*Adicione o seguinte conteúdo à exibição do modal:
- Botão que fechará o modal.
- Receptor de eventos para fechar o modal quando o usuário clica fora do modal.
- Matéria e número
- Título
- Créditos
- Descrição
- Certificado
- Arquitetura Tecnológica*/