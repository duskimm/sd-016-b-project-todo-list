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

// Após o click analisa se elemento contém ou não o id 'selected' e o exclue se houver. Cria o evento na variável e coloca o id selected no item da lista selecionado

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

// Ao ser dado o dblclick, a função avalia se a classe do elemento está vazia, e se estiver seta a classe nela e o item é taxado. Se estiver com classe (no caso da segundo dblclick), a classe e o tachado é removido

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
    console.log('delete');
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

function moveTaskUp() {
  const moveUp = document.querySelector('#mover-cima');

  moveUp.addEventListener('click', () => {
    // const click = event.target;
    console.log('move up');
    console.log(document.querySelector('#selected').previousElementSibling);
    // utilizar o previousSibling
  });
}

function moveTaskDown() {
  const moveDown = document.querySelector('#mover-baixo');

  moveDown.addEventListener('click', () => {
    console.log('move down');
    let swap1;
    let swap2;

    if (document.querySelector('#selected').nextElementSibling.innerHTML !== null) {
      swap1 = document.querySelector('#selected').innerHTML;
      swap2 = document.querySelector('#selected').nextElementSibling.innerHTML;

    }
    console.log();
    // utilizar o nextSibling
  });
}

// function moveTaskDown() {
//   const moveDown = document.querySelector('#mover-baixo');
//   moveDown.addEventListener('click', () => {
//     const element1 = document.querySelector('#selected').innerHTML;
//     const element2 = document.querySelector('#selected').nextElementSibling.innerHTML;

//     element2.parentNode.insertBefore(element2, element1);
//   });
// }

function moveTask() {
  /**
   * Pegar o item selecionado
   * trocar de posição pra cima ou pra baixo com o próximo item
  */
  moveTaskUp();
  moveTaskDown();
}

moveTask();

// Conversei com o colega Matheus Nugas sobre a solução abaixo
// Ao clicar no botão de salvar a lista, é salvo no localStorage toda a lista criada, com innerHTML.

function setList() {
  const salveListBtn = document.querySelector('#salvar-tarefas');
  salveListBtn.addEventListener('click', () => {
    const savedItens = listTask.innerHTML;
    localStorage.setItem('list', savedItens);
  });
}
setList();

removeSelected();

window.onload = () => {
  listTask.innerHTML = localStorage.getItem('list');
};
