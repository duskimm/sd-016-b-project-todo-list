// 1. Criar header
function createHeader() {
  const newHeader = document.createElement('header');
  newHeader.innerHTML = 'Minha Lista de Tarefas';
  document.body.appendChild(newHeader);
}
createHeader();

// 2.
function createP() {
  const newP = document.createElement('p');
  newP.innerText = 'Clique duas vezes em um item para marcá-lo como completo';
  newP.id = 'funcionamento';
  document.body.appendChild(newP);
}
createP();
