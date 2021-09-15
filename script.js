function createElementFirstSection() {
  // 3 - Adicione um input com o id="texto-tarefa" onde a pessoa usuária poderá digitar o nome do item que deseja adicionar à lista.
  function createInputTodo() {
    const parent = document.getElementById('first-section');
    const inputTodo = document.createElement('input');
    inputTodo.id = 'texto-tarefa';
    inputTodo.type = 'text';
    inputTodo.placeholder = 'Digite o nome da tarefa';
    parent.appendChild(inputTodo);
  }
  createInputTodo();
  // 4- Adicione uma lista ordenada de tarefas com o id="lista-tarefas"
  function createOl() {
    const parent = document.getElementById('second-section');
    const ol = document.createElement('ol');
    ol.id = 'lista-tarefas';
    parent.appendChild(ol);
  }
  createOl();
  // 5 - Adicione um botão com id="criar-tarefa" e, ao clicar nesse botão, um novo item deverá ser criado ao final da lista e o texto do input deve ser limpo
  function buttonCreateTodo() {
    const parent = document.getElementById('first-section');
    const button = document.createElement('button');
    button.id = 'criar-tarefa';
    button.innerHTML = 'Criar Tarefa';
    parent.appendChild(button);
  }
  buttonCreateTodo();
}
createElementFirstSection();
/*
5 - Adicione um botão com id="criar-tarefa" e, ao clicar nesse botão, um novo item deverá ser criado ao final da lista e o texto do input deve ser limpo
6 - Ordene os itens da lista de tarefas por ordem de criação
*/
function captureCreateTodoList() {
  const inputElement = document.getElementById('texto-tarefa');
  const buttonElement = document.getElementById('criar-tarefa');
  buttonElement.addEventListener('click', function () {
    const text = inputElement.value;
    const li = document.createElement('li');
    li.innerHTML = text;
    const ol = document.getElementById('lista-tarefas');
    ol.appendChild(li);
    inputElement.value = '';
  });
}
captureCreateTodoList();
//7 - Clicar em um item da lista deve alterar a cor de fundo do item para cinza rgb(128,128,128)
//8 - Não deve ser possível selecionar mais de um elemento da lista ao mesmo tempo
function clickChangeColor() {
  const listaTarefas = document.getElementById('lista-tarefas');
  listaTarefas.addEventListener('click', function (event) {
    const tempElement = document.getElementsByTagName('li');
    for (let ind of tempElement) {
      ind.style = 'background-color:';
      ind.id = '';
    }
    const target = event.target;
    if (target.tagName === 'LI') {
      target.style.backgroundColor = 'rgb(128,128,128)';
      target.id = 'selected';
    }
  });
}
clickChangeColor();
/*
         9 - Clicar duas vezes em um item, faz com que ele seja riscado, indicando que foi completo. Deve ser possível desfazer essa ação clicando novamente duas vezes no item
    ✓ Será verificado que, antes da ação ser disparada, o elemento adicionado à lista não tem nem a classe `completed` nem o estilo `line-through solid rgb(0, 0, 0)`
    1) Será verificado que a ação pedida é disparada mediante duplo clique no elemento da lista e que os elementos da lista completos tem em si a classe `completed` e a propriedade `text-decoration` com o valor `line-through solid rgb(0, 0, 0)`
    2) Será verificado que, com um segundo duplo clique, um elemento completo deixa de sê-lo
 */
function doubleClick() {
  const listaTarefas = document.getElementById('lista-tarefas');
  listaTarefas.addEventListener('dblclick', function (event) {
    const target = event.target;
    if (target.tagName === 'LI') {
      target.classList.value === "completed" ? target.classList.remove('completed') : target.classList.add('completed');
      console.log(target);
    }
  });
}
doubleClick();

/* 10 - Adicione um botão com id="apaga-tudo" que quando clicado deve apagar todos os itens da lista
    1) Será verificado que existe um elemento `button` com o id `apaga-tudo`
    2) Será verificado que, dado que uma lista possui tarefas, um clique no botão a deixa vazia
*/
function buttonDeleteAll() {
  const parent = document.getElementById('third-section');
  const button = document.createElement('button');
  button.id = 'apaga-tudo';
  button.innerHTML = 'Apagar Tudo';
  parent.appendChild(button);

  function deleteAll() {
    const buttonElement = document.getElementById('apaga-tudo');
    buttonElement.addEventListener('click', function () {
      const listaTarefas = document.getElementById('lista-tarefas');
      listaTarefas.innerHTML = '';
    });
  }
  deleteAll();
}
buttonDeleteAll();
/*11 - Adicione um botão com id="remover-finalizados" que quando clicado remove **somente** os elementos finalizados da sua lista
    1) Será verificado que existe um elemento `button` com o id `remover-finalizados`
    2) Será verificado que, ao clicar no botão, todos os elementos marcados como feitos são removidos da lista*/
function buttonDeleteFinishedTasks() {
  const parent = document.getElementById('third-section');
  const button = document.createElement('button');
  button.id = 'remover-finalizados';
  button.innerHTML = 'Remover Finalizados';
  parent.appendChild(button);

  function deleteFinishedTasks() {
    const buttonElement = document.getElementById('remover-finalizados');
    buttonElement.addEventListener('click', function () {
      const toDoList = document.getElementById('lista-tarefas');
      const tempElement = document.querySelectorAll('.completed');
      for (let i = 0; i < tempElement.length; i += 1) {
        toDoList.removeChild(tempElement[i]);
      }
    });
  }
  deleteFinishedTasks();
}
buttonDeleteFinishedTasks();
/*12 - Adicione um botão com id="salvar-tarefas" que salve o conteúdo da lista. Se você fechar e reabrir a página, a lista deve continuar no estado em que estava
    1) Será verificado que existe um elemento `button` com o id `salvar-tarefas`
    2) Será verificado que, quando a lista tem vários elementos, alguns dos quais marcados como finalizados, um recarregamento da página mantém a lista exatamente como está.
*/
function buttonSaveTasks() {
  const parent = document.getElementById('third-section');
  const button = document.createElement('button');
  button.id = 'salvar-tarefas';
  button.innerHTML = 'Salvar Tarefas';
  parent.appendChild(button);

  function saveTasks() {
    const buttonElement = document.getElementById('salvar-tarefas');
    buttonElement.addEventListener('click', function () {
      const toDoList = document.getElementById('lista-tarefas');
      localStorage.setItem('tarefas', toDoList.innerHTML);
    });
  }
  saveTasks();
}
buttonSaveTasks();
// Adicione um function para carregar-tarefas lista salvo anteriormente.
function loadTasks() {
  const toDoList = document.getElementById('lista-tarefas');
  toDoList.innerHTML = localStorage.getItem('tarefas');
}
loadTasks();
//14 - Adicione um botão com id="remover-selecionado" que, quando clicado, remove o item selecionado
function buttonRemoveSelected() {
  const parent = document.getElementById('third-section');
  const button = document.createElement('button');
  button.id = 'remover-selecionado';
  button.innerHTML = 'Remover Selecionado';
  parent.appendChild(button);

  function removeSelected() {
    const buttonElement = document.getElementById('remover-selecionado');
    buttonElement.addEventListener('click', function () {
      const toDoList = document.getElementById('lista-tarefas');
      for (let ind of toDoList.children) {
        ind.style.backgroundColor ? toDoList.removeChild(ind) : '';
      }
    });
  }
  removeSelected();
}
buttonRemoveSelected();
//13 - Adicione dois botões, um com id="mover-cima" e outro com id="mover-baixo", que permitam mover o item selecionado para cima ou para baixo na lista de tarefas
function buttonMoveUp() {
    const parent = document.getElementById('third-section');
    const button = document.createElement('button');
    button.id = 'mover-cima';
    button.innerHTML = 'Mover Cima';
    parent.appendChild(button);

    function moveUp() {
        const buttonElement = document.getElementById('mover-cima');
        buttonElement.addEventListener('click', function () {
            const toDoList = document.getElementById('lista-tarefas');
            const selectedElement = toDoList.querySelector('#selected');
            if(selectedElement){
                if (selectedElement.previousElementSibling) {
                    toDoList.insertBefore(selectedElement, selectedElement.previousElementSibling);
                }
            }
        });
    }
    moveUp();
}
buttonMoveUp();

function buttonMoveDown() {
    const parent = document.getElementById('third-section');
    const button = document.createElement('button');
    button.id = 'mover-baixo';
    button.innerHTML = 'Mover Baixo';
    parent.appendChild(button);

    function moveDown() {
        const buttonElement = document.getElementById('mover-baixo');
        buttonElement.addEventListener('click', function () {
            const toDoList = document.getElementById('lista-tarefas');
            const selectedElement = toDoList.querySelector('#selected');
            if(selectedElement){
                if (selectedElement.nextElementSibling) {
                    toDoList.insertBefore(selectedElement, selectedElement.nextElementSibling.nextElementSibling);
                }
            }
        });
    }
    moveDown();
}
buttonMoveDown();