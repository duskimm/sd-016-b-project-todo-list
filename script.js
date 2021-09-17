// Para a parte de JS, foram consultados os materiais de W3Schools, MDN Web Docs, 
// Course da Trybe, e aulas da Seção 7 "Working with the DOM (Browser HTML Code) in 
// JavaScript" do curso "JavaScript - The Complete Guide 2021 (Beginner + Advanced)",
// ministrado por Maximilian Schwarzmüller. 

// Links:
// https://www.w3schools.com/
// https://developer.mozilla.org/en-US
// https://app.betrybe.com/course
// https://www.udemy.com/course/javascript-the-complete-guide-2020-beginner-advanced/

window.onload = function () {

  const addTaskButton = document.querySelector('#criar-tarefa');
  addTaskButton.addEventListener('click', addTask); // Quando o botao é clicado, a função addTask é chamada.

  const removeAllButton = document.querySelector('#apaga-tudo');
  removeAllButton.addEventListener('click', removeAllTasks); // Quando o botao é clicado, a função removeAllTasks é chamada.

  const removeCompletedTaskButton = document.querySelector('#remover-finalizados');
  removeCompletedTaskButton.addEventListener('click', removeCompletedTasks); // Quando o botao é clicado, a função removeCompletedTasks é chamada.

}

function addTask() {
  //Adiciona um item na lista de tarefas que interage com cliques do usuário.

  const taskText = document.querySelector('#texto-tarefa');
  const toDoList = document.querySelector('#lista-tarefas');

  if (taskText.value !== "") {
    const task = document.createElement('li'); //Cria um elemento li e o atribui na constante task.
    task.setAttribute('class', 'task'); //Configura o atributo class="task" a li criada.

    task.innerText = taskText.value; //Substitui o texto visível da li criada pelo valor do input #texto-tarefa.
    toDoList.appendChild(task); //Adiciona a li criada já com o texto do input a lista ordenada #lista-tarefa.
    taskText.value = ""; //Substitui o valor do input para string vazia, ou seja, remove o valor do input.

    // Chama a funçao riskTask a partir do evento clique duplo.
    task.addEventListener('dblclick', function riskText() {
      // Risca o texto da li.
      task.classList.toggle('completed');
      //Por meio do classList é possível adicionar ou retirar uma classe ao elemento. O método toggle permite que adicione  atribute class="completed" quando o retorno é false, ou seja, quando essa classe não é um atributo do elemento, e retira esse atributo quando o retorno é true.
    });

    // Chama a função changeBrackground a partir do evento clique.
    task.addEventListener('click', function changeBackground() {
      // Muda a cor do fundo da li. Se houver uma li com a classe 'selected', essa classe será removida dela e será adicionada a li clicada.
      const selectedTask = document.getElementsByClassName('selected');
      if (selectedTask.length > 0) {
        selectedTask[0].classList.remove('selected');
      }
      task.classList.add('selected');
    });
  }
}

function removeAllTasks() {
  // Remove todos os elementos li da ol. Enquanto houver elemento filho na lista ordenada #lista-tarefas, o primeiro será deletado.
  const toDoList = document.getElementById('lista-tarefas');
  while (toDoList.firstElementChild) {
    toDoList.removeChild(toDoList.firstElementChild);
  }
}

function removeCompletedTasks() {
  // Remove todos os elementos com a classe 'completed' da ol. Enquanto houver li com a classe 'completed', o primeiro item será removido.
  const completedTasks = document.getElementsByClassName('completed');
  while (completedTasks.length > 0) {
    completedTasks[0].parentNode.removeChild(completedTasks[0]);
  }
}
