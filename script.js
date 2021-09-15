//SELECTORS
const todoInput = document.getElementById('texto-tarefa')
const todoButton = document.getElementById('criar-tarefa')
const todoList = document.getElementById('lista-tarefas')
const deleteButton = document.getElementById('apaga-tudo')




//EVENT LISTENERS
todoButton.addEventListener('click', addTodo);
deleteButton.addEventListener('click', deleteAll);
// newTodo.addEventListener('dblclick', pintarDeCinza)



//FUNCTIONS
function addTodo(event) {
  //Prevent form from submitting
  event.preventDefault();

  //Criando uma DIV com a estrutura de item na lista e adiciona uma classe nela
  // const todoDiv = document.createElement('div');
  // todoDiv.classList.add('todo');

  //Criando um ITEM NA LISTA - li
  const newTodo = document.createElement('li');
  newTodo.innerText = todoInput.value;
  newTodo.classList.add('todo-item');
  // newTodo.classList.add('pintarDeCinza'); //add somente com duplo click


  // PInta de cinza o item clicado
  newTodo.addEventListener('click', pintarDeCinza)

  function pintarDeCinza() {
    newTodo.classList.add('pintarDeCinza')
    // if (newTodo.classList === '') newTodo.classList.add('pintarDeCinza');
    // if (newTodo.classList === 'pintarDeCinza') newTodo.classList === none;
  }


  //Adiciona risco no item clicando duas vezes
  newTodo.addEventListener('dblclick', itemRiscado)

  function itemRiscado() {
    newTodo.classList.add('completed')
  }


  //Colocando o "newTodo" dentro da div "todoDiv"
  todoList.appendChild(newTodo);

  //Criando botao para marcar como completo-Porem, devo fazer com duplo click
  // const completedButton = document.createElement('button');
  // completedButton.innerHTML = "tarefa feita";
  // todoDiv.appendChild(completedButton);

  //Colocando "todoDiv" dentro de "#LISTA-TAREFAS"
  todoList.appendChild(newTodo);

  // Limpar o Input depois de criar um item
  todoInput.value = '';
}

function deleteAll(e) {
  // const item = e.target;
  //Deletando todos os itens
  todoList.innerHTML = ' '; //Selecionar os "li" que estao sendo criados.
  // todo.remove();
}



