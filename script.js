const createTaskFunction = document.querySelector('#criar-tarefa');
const listTask = document.querySelector('#lista-tarefas');
const taskText = document.querySelector('#texto-tarefa');
let clickSelected = '';
// Limpa o input após ser preenchido
function inputClean() {
  taskText.value = '';
}
// Cria o evento do botão para buscar a tarefa do input ao clicar com o mouse e insere condição para não ser colocada nenhuma tarefa vazia
function createTaskClick() {
  createTaskFunction.addEventListener('click', () => {
    const task = taskText.value;
    if (task === '') {
      alert('Não há nenhuma tarefa a ser criada!!');
    } else {
      const childTask = document.createElement('li');
      childTask.innerText = task;
      listTask.appendChild(childTask);
      inputClean();
    }
  });
}
createTaskClick();
// Cria o evento do botão para buscar a tarefa do input ao apertar o enter e insere condição para não ser colocada nenhuma tarefa vazia
// Referência: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_trigger_button_enter
function createTaskKeyBoard() {
  taskText.addEventListener('keyup', (event) => {
    const task = taskText.value;
    if (task === '') {
      alert('Não há nenhuma tarefa a ser criada!!');
    } else if (event.keyCode === 13) {
      const childTask = document.createElement('li');
      childTask.innerText = task;
      listTask.appendChild(childTask);
      inputClean();
    }
  });
}
createTaskKeyBoard();

// Após o click analisa se elemento contém ou não o id 'selected' e exclui o id se houver. Cria o evento na lista e coloca o id selected no item selecionado

function clickTask() {
  listTask.addEventListener('click', (event) => {
    const elementList = document.querySelectorAll('#lista-tarefas li');
    for (let index = 0; index < elementList.length; index += 1) {
      if (elementList[index].id === 'selected' || elementList[index].id === '') {
        elementList[index].id = '';
      }
    }
    clickSelected = event.target;
    clickSelected.id = 'selected';
  });
}

clickTask();

// Ao ser dado o dblclick, a função avalia se a classe do elemento está vazia, e se estiver seta a classe nela e o item é taxado. Se estiver com classe (no caso da segundo dblclick), a classe e o tachado são removidos

function doubleClickTask() {
  listTask.addEventListener('dblclick', (event) => {
    if (clickSelected.className === '') {
      clickSelected = event.target;
      clickSelected.id = '';
      clickSelected.className = 'completed';
    } else if (clickSelected.className === 'completed') {
      clickSelected = event.target;
      clickSelected.id = '';
      clickSelected.className = '';
    }
  });
}
doubleClickTask();
// Apaga a lista completa, após apagar toda a lista, também remove do localStorage a lista que está salva localmente
// referência: https://www.javascripttutorial.net/javascript-dom/javascript-removechild/
// const listTask = document.getElementById('lista-tarefas');
function deleteListItem() {
  // const listTask = document.getElementById('lista-tarefas');
  const deleteBtn = document.querySelector('#apaga-tudo');
  deleteBtn.addEventListener('click', () => {
    while (listTask.firstChild) {
      listTask.removeChild(listTask.firstChild);
    }
    localStorage.clear();
  });
}
deleteListItem();
// Apaga todos os item marcados como finalizados
function deleteConcludeItem() {
  const deleteBtn = document.querySelector('#remover-finalizados');
  const itemConclude = document.getElementsByClassName('completed');
  deleteBtn.addEventListener('click', () => {
    while (itemConclude.length > 0) {
      let count = 0;
      listTask.removeChild(itemConclude[count]);
      count += 1;
    }
  });
}
deleteConcludeItem();
// Ao clicar no botão, é removido o elemento que está selecionado com o id selected.
function removeSelected() {
  const btnRemoverSelecionado = document.querySelector('#remover-selecionado');
  btnRemoverSelecionado.addEventListener('click', () => {
    listTask.removeChild(document.querySelector('#selected'));
  });
}

// Move a tarefa seleciona para cima

function moveTaskUp() {
  const swap1 = document.querySelector('#selected');
  const swap2 = document.querySelector('#selected').previousElementSibling;

  if (swap2 === null) {
    return '';
  }
  listTask.insertBefore(swap1, swap2);
}

// Move a tarefa seleciona para baixo

function moveTaskDown() {
  const swap1 = document.querySelector('#selected');
  const swap2 = document.querySelector('#selected').nextElementSibling;

  if (swap2 === null) {
    return '';
  }
  listTask.insertBefore(swap2, swap1);
}

function moveTask() {
  const moveUp = document.querySelector('#mover-cima');
  const moveDown = document.querySelector('#mover-baixo');
  // const teste = document.querySelector('#selected');

  moveUp.addEventListener('click', () => {
    if (document.querySelector('li') && document.querySelector('#selected')) {
      moveTaskUp();
    }
  });
  moveDown.addEventListener('click', () => {
    if (document.querySelector('li') && document.querySelector('#selected')) {
      moveTaskDown();
    }
  });
}

moveTask();
// Conversei com o colega Matheus Nugas sobre a solução abaixo
// Ao clicar no botão de salvar a lista, é salvo no localStorage toda a lista criada, com innerHTML.
function setList() {
  const salveListBtn = document.querySelector('#salvar-tarefas');
  salveListBtn.addEventListener('click', () => {
    const savedItens = listTask.innerHTML;
    localStorage.setItem('list', savedItens);
    alert('Lista salva!!');
  });
}
setList();
removeSelected();
window.onload = () => {
  listTask.innerHTML = localStorage.getItem('list');
};
