const inputArea = document.getElementById('input-area');
const listaArea = document.getElementById('lista-area');

// const buttonsArea = document.getElementById('buttons-area');

// Cria input.
function createInputTarefa() {
  const input = document.createElement('input');
  input.id = 'texto-tarefa';
  input.type = 'text';
  input.placeholder = 'Adicione sua nova tarefa';
  inputArea.appendChild(input);
}
createInputTarefa();

// Cria lista ordenada.
function createListOrdenada() {
  const olList = document.createElement('ol');
  olList.id = 'lista-tarefas';
  listaArea.appendChild(olList);
}
createListOrdenada();

// Cria botão criar tarefa.
function createButtonTarefa() {
  const button = document.createElement('button');
  button.id = 'criar-tarefa';
  button.innerText = 'Adicionar tarefa';
  inputArea.appendChild(button);
}
createButtonTarefa();

// Evento para adicionar o item na lista.
const olList = document.getElementById('lista-tarefas');
const buttonAddItem = document.getElementById('criar-tarefa');
const input = document.getElementById('texto-tarefa');
buttonAddItem.addEventListener('click', () => {
  const inputValue = document.querySelector('#texto-tarefa').value;
  const li = document.createElement('li');
  li.innerText = inputValue;
  olList.appendChild(li);
  input.value = '';
});

// Evento para mudar o background color do item.
olList.addEventListener('click', (event) => {
  for (let index = 0; index < olList.children.length; index += 1) {
    olList.children[index].style.backgroundColor = '';
  }
  const alvo = event.target;
  alvo.style.backgroundColor = 'grey';
});

// Clicar duas vezes risca o item.
olList.addEventListener('dblclick', (event) => {
  const alvo = event.target;
  if (alvo.classList.contains('completed')) {
    alvo.className = '';
  } else {
    alvo.classList.add('completed');
  }
});
