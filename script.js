const body = document.querySelector('body');
let main;
let input;
let ol;

function mkHeader() {
  const createHeader = document.createElement('header');
  createHeader.innerText = 'Minha Lista de Tarefas';
  body.appendChild(createHeader);
}

function mkMain() {
  const createMain = document.createElement('main');
  body.appendChild(createMain);
}

function mkParagraph() {
  const header = document.querySelector('header');
  const createParagraph = document.createElement('p');
  createParagraph.id = 'funcionamento';
  createParagraph.innerHTML = 'Clique duas vezes em um item para marcá-lo como completo';
  header.appendChild(createParagraph);
}

function mkInput() {
  const createInput = document.createElement('input');
  const toMain = document.querySelector('main'); main = toMain;
  createInput.id = 'texto-tarefa';
  createInput.type = 'text';
  main.appendChild(createInput);
  const toInput = document.querySelector('input'); input = toInput;
}

function mkList() {
  const createOl = document.createElement('ol');
  main.appendChild(createOl);
  createOl.id = 'lista-tarefas';
  const toOl = document.querySelector('ol'); ol = toOl;
}

function mkNewListItem(inputContent) {
  const createLI = document.createElement('li');
  createLI.innerHTML = inputContent;
  createLI.classList = 'toDo';
  ol.appendChild(createLI);
}

function mkButton() {
  const createButton = document.createElement('button');
  createButton.id = 'criar-tarefa';
  createButton.innerHTML = 'Criar Tarefa';
  main.insertBefore(createButton, main.children[1]);
  createButton.addEventListener('click', function tkRstInput() {
    mkNewListItem(input.value);
    input.value = '';
  });
}

function mkEvidence() {
  ol.addEventListener('click', function bgColor(e) {
    const selected = e.target;
    const oldSelected = document.querySelector('.selected');
    if (oldSelected !== null) {
      oldSelected.classList.remove('selected');
      oldSelected.style.backgroundColor = 'white';
    }
    selected.classList.add('selected');
    selected.style.backgroundColor = 'grey';
  });
}

function mkDo() {
  ol.addEventListener('dblclick', function markUp(e) {
    const completed = e.target.classList;
    console.log(completed);
    if (completed.contains('toDo')) {
      completed.toggle('completed');
    }
  });
}

function mkDelAll() {
  const createButton = document.createElement('button');
  createButton.id = 'apaga-tudo';
  createButton.innerText = 'Limpar Lista';
  main.appendChild(createButton);
  createButton.addEventListener('click', function delToDoList() {
    ol.innerHTML = '';
  });
}

function mkDelDones() {
  const createDoneButton = document.createElement('button');
  createDoneButton.id = 'remover-finalizados';
  createDoneButton.innerText = 'Limpar Finalizados';
  main.appendChild(createDoneButton);
  createDoneButton.addEventListener('click', function delDones() {
    const getDones = document.querySelectorAll('.completed');
    for (let i = 0; i < getDones.length; i += 1) {
      document.querySelector('.completed').remove();
    }
  });
}

window.onload = function start() {
  mkHeader();
  mkMain();
  mkParagraph();
  mkInput();
  mkList();
  mkButton();
  mkEvidence();
  mkDo();
  mkDelAll();
  mkDelDones();
};
