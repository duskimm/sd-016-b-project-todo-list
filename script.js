window.onload = function () {

  const addTaskButton = document.querySelector('#criar-tarefa');
  addTaskButton.addEventListener('click', addTask); // Quando o botao é clicado, a função addTask é chamada.

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