const pegaLista = document.getElementById('lista-tarefas');

function addItemList() {
  const localizaOl = document.getElementById('lista-tarefas');
  const localizaButton = document.getElementById('criar-tarefa');

  localizaButton.addEventListener('click', () => {
    const criaLi = document.createElement('li');
    const localizaInput = document.getElementById('texto-tarefa');
    criaLi.innerText = localizaInput.value;
    criaLi.className = 'list';
    localizaOl.appendChild(criaLi);
    localizaInput.value = '';
  });
}
addItemList();

// contais explicado no zoom pelo Luiz Wanderson Turma 16 - Tribe B
function removeColor() {
  const removeBackGroundColor = document.querySelectorAll('.list');

  for (let index = 0; index < removeBackGroundColor.length; index += 1) {
    if (removeBackGroundColor[index].classList.contains('selected')) {
      removeBackGroundColor[index].classList.remove('selected');
      removeBackGroundColor[index].style.backgroundColor = '';
    }
  }
}

function altCor() {
  const addColor = document.querySelectorAll('ol');

  for (let index = 0; index < addColor.length; index += 1) {
    addColor[index].addEventListener('click', (event) => {
      removeColor();
      const evento = event.target;
      evento.classList.add('selected');
      evento.style.backgroundColor = 'rgb(128, 128, 128)';
    });
  }
}
altCor();

function doubleClick() {
  const localizaOl = document.querySelectorAll('ol');
  for (let index = 0; index < localizaOl.length; index += 1) {
    localizaOl[index].addEventListener('dblclick', (event) => {
      if (event.target.classList.contains('completed')) {
        event.target.classList.remove('completed');
      } else {
        event.target.classList.add('completed');
      }
    });
  }
}
doubleClick();

function deleteLi() {
  const elementsLi = document.querySelectorAll('li');
  for (let index = 0; index < elementsLi.length; index += 1) {
    elementsLi[index].remove();
  }
}

const deletar = document.getElementById('apaga-tudo');
deletar.addEventListener('click', deleteLi);

function deleteCompleted() {
  const elementsLiCompleted = document.querySelectorAll('.completed');
  for (let index = 0; index < elementsLiCompleted.length; index += 1) {
    elementsLiCompleted[index].remove();
  }
}

const deletarTudo = document.getElementById('remover-finalizados');
deletarTudo.addEventListener('click', deleteCompleted);

function listaSalva() {
  if (localStorage.getItem('lista') === null) {
    localStorage.setItem('lista', '');
  }
}
listaSalva();

function salveList() {
  const salvaButton = document.querySelector('#salvar-tarefas');
  salvaButton.addEventListener('click', () => {
    const pegaLis = document.querySelector('ol');
    localStorage.setItem('lista', pegaLis.innerHTML);
  });
}
salveList();

function voltaItensSalvos() {
  const salvos = document.querySelector('ol');
  salvos.innerHTML = localStorage.getItem('lista');
}
voltaItensSalvos();

function removeSelected() {
  const elementSelected = document.querySelectorAll('.selected');
  for (let index = 0; index < elementSelected.length; index += 1) {
    elementSelected[index].remove();
  }
}

const deletarSelected = document.getElementById('remover-selecionado');
deletarSelected.addEventListener('click', removeSelected);

function up() {
  const move = document.querySelector('.selected');
  if (move === null) {
    return;
  }
  if (move.previousElementSibling === null) {
    return;
  }
  const moveCima = move.previousElementSibling;
  pegaLista.insertBefore(move, moveCima);
}

const moveUp = document.querySelector('#mover-cima');
moveUp.addEventListener('click', up);

function down() {
  const move2 = document.querySelector('.selected');
  if (move2 === null) {
    return;
  }
  if (move2.nextElementSibling == null) {
    return;
  }
  const list = move2.nextElementSibling;
  pegaLista.insertBefore(list, move2);
}

const moverBaixo = document.querySelector('#mover-baixo');
moverBaixo.addEventListener('click', down);
