const taskText = document.querySelector('#texto-tarefa');
const toDoList = document.querySelector('#lista-tarefas');
const addTaskButton = document.querySelector('#criar-tarefa');
const removeAllButton = document.querySelector('#apaga-tudo');
const removeCompletedTasksButton = document.querySelector('#remover-finalizados');

addTaskButton.addEventListener('click', addTask);
// removeAllButton.addEventListener('click', removeAllTasks);
// removeCompletedTasksButton.addEventListener('click', removeCompletedTasks);


function addTask() {
  //Adiciona um item na lista de tarefas que interage com cliques do usuário.

  const task = document.createElement('li'); //Cria um elemento li e o atribui na constante task.
  task.setAttribute('class', 'task'); //Configura o atributo class="task" a li criada.
  task.innerText = taskText.value; //Substitui o texto visível da li criada pelo valor do input #texto-tarefa.
  toDoList.appendChild(task); //Adiciona a li criada já com o texto do input a lista ordenada #lista-tarefa.
  taskText.value = ""; //Substitui o valor do input para string vazia, ou seja, remove o valor do input.
}