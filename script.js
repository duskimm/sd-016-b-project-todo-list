window.onload = function () {
  function header() {
    const headerTitle = document.getElementById('header-container');
    const headerH1 = document.createElement('h1');
    headerH1.innerText = 'Minha Lista de Tarefas';
    headerH1.id = 'title';
    headerTitle.appendChild(headerH1);
  }
  header();

  function textParagraph() {
    const headerTitle = document.getElementById('header-container');
    const paragraph = document.createElement('p');
    paragraph.innerText = 'Clique duas vezes em um item para marcá-lo como completo';
    paragraph.id = 'funcionamento';
    headerTitle.appendChild(paragraph);
  }
  textParagraph();

  function assignmentInput() {
    const assignment = document.getElementById('header-container');
    const assignmentText = document.createElement('input');
    assignmentText.id = 'texto-tarefa';
    assignment.appendChild(assignmentText);
  }
  assignmentInput();
}

