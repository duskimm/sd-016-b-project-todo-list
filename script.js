// Cria botões.
function createButtons(nameButton, id, pai) {
  const button = document.createElement('button');
  button.id = id;
  button.innerText = nameButton;
  pai.appendChild(button);
}

// Containers.
const inputArea = document.getElementById('input-area');
const listaArea = document.getElementById('lista-area');
const buttonsArea = document.getElementById('buttons-area');
const buttonsSideArea = document.getElementById('buttons-side-area');
// Botões laterais
createButtons('↑', 'mover-cima', buttonsSideArea);
createButtons('↓', 'mover-baixo', buttonsSideArea);
createButtons('✘', 'remover-selecionado', buttonsSideArea);
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
  olList.innerHTML = localStorage.getItem('tarefas-salvas');
  listaArea.appendChild(olList);
}
createListOrdenada();

// Cria botão criar tarefa.
function createButtonTarefa() {
  const buttonTarefa = document.createElement('button');
  buttonTarefa.id = 'criar-tarefa';
  buttonTarefa.innerText = 'Adicionar tarefa';
  inputArea.appendChild(buttonTarefa);
}
createButtonTarefa();

// Evento para adicionar o item na lista.
const olList = document.getElementById('lista-tarefas');
const buttonAddItem = document.getElementById('criar-tarefa');
const input = document.getElementById('texto-tarefa');
buttonAddItem.addEventListener('click', () => {
  const inputValue = document.querySelector('#texto-tarefa').value;
  if (inputValue !== '') {
    const li = document.createElement('li');
    li.classList.add('list-iten');
    li.innerText = inputValue;
    olList.appendChild(li);
    input.value = '';
  }
});

function salvaTarefas() {
  localStorage.setItem('tarefas-salvas', olList.innerHTML);
}

// Evento para mudar o background color do item.
olList.addEventListener('click', (event) => {
  const alvo = event.target;
  for (let index = 0; index < olList.children.length; index += 1) {
    olList.children[index].style.backgroundColor = '';
    olList.children[index].classList.remove('selecionado');
    olList.style.backgroundColor = '';
    olList.classList.remove('selecionado');
  }
  olList.style.backgroundColor = '';
  olList.classList.remove('selecionado');
  alvo.classList.add('selecionado');
});

// Clicar duas vezes risca o item.
olList.addEventListener('dblclick', (event) => {
  const alvo = event.target;
  if (alvo.classList.contains('completed')) {
    alvo.classList.remove('completed');
  } else {
    alvo.classList.add('completed');
    alvo.style.backgroundColor = 'grey';
  }
});


// Adiciona um botão para apagar tudo.
createButtons('Limpar Lista', 'apaga-tudo', buttonsArea);

// Evento que utiliza o botão para apagar a lista.
const buttonClear = document.getElementById('apaga-tudo');
buttonClear.addEventListener('click', () => {
  olList.innerHTML = '';
  salvaTarefas();
});

// Cria botão que remove os finalizados
createButtons('Limpar Completos', 'remover-finalizados', buttonsArea);

// Remove as tarefas completadas.
const buttonRemoveCompleted = document.getElementById('remover-finalizados');
buttonRemoveCompleted.addEventListener('click', () => {
  const selectedItens = document.querySelectorAll('.completed');
  for (let index = 0; index < selectedItens.length; index += 1) {
    olList.removeChild(selectedItens[index]);
  }
  salvaTarefas();
});

// Adiciona um botão que salva as tarefas no localState.
createButtons('Salvar Lista', 'salvar-tarefas', buttonsArea);

// Evento para salvar os itens.
const buttonSaveList = document.getElementById('salvar-tarefas');
buttonSaveList.addEventListener('click', salvaTarefas);

// Botão Up
// Botão mover tarefa para cima.
const buttonUp = document.getElementById('mover-cima');
buttonUp.classList.add('side-buttons');
buttonUp.addEventListener('click', () => {
  const selecionado = document.querySelector('.selecionado');
  const li = document.querySelectorAll('.list-iten');
  if (selecionado === li[0] || selecionado === null) {
    return;
  }
  olList.insertBefore(selecionado, selecionado.previousElementSibling);
});

// Botão Down;
// Botão mover tarefa para baixo.
const buttonDown = document.getElementById('mover-baixo');
buttonDown.classList.add('side-buttons');
buttonDown.addEventListener('click', () => {
  const selecionado = document.querySelector('.selecionado');
  const li = document.querySelectorAll('.list-iten');
  if (selecionado === li[li.length - 1] || selecionado === null) {
    return;
  }
  olList.insertBefore(selecionado.nextElementSibling, selecionado);
});

// Botão remover selecionado.
const buttonRemoveSelecionado = document.getElementById('remover-selecionado');
buttonRemoveSelecionado.classList.add('side-buttons')
buttonRemoveSelecionado.addEventListener('click', () => {
  const selecionado = document.querySelector('.selecionado');
  if (selecionado != null) {
    selecionado.parentElement.removeChild(selecionado);
  }
});
