// 1. Criar header
function createHeader() {
  const newHeader = document.createElement('header');
  newHeader.innerHTML = 'Minha Lista de Tarefas';
  document.body.appendChild(newHeader);
}
createHeader();

// 2. Criar p
function createP() {
  const newP = document.createElement('p');
  newP.innerText = 'Clique duas vezes em um item para marcá-lo como completo';
  newP.id = 'funcionamento';
  document.body.appendChild(newP);
}
createP();

// 3. Criar input
function createInput() {
  const newInput = document.createElement('input');
  newInput.id = 'texto-tarefa';
  newInput.name = 'input';
  newInput.value = '';
  document.body.appendChild(newInput);
}
createInput();

// 4.Criar OL
function createOl() {
  const newOl = document.createElement('ol');
  newOl.id = 'lista-tarefas';
  document.body.appendChild(newOl);
}
createOl();
