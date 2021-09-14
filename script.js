const botao = document.getElementById('criar-tarefa');
const input = document.getElementById('texto-tarefa');
const listaDeTarefas = document.getElementById('lista-tarefas');

function novaTarefa(tarefa) {
   if(tarefa.target === botao && input.value !== ''){
       const criaTarefa = document.createElement('li');
       listaDeTarefas.appendChild(criaTarefa).innerHTML = input.value;
       input.value = '';
   } 
}
document.addEventListener('click', novaTarefa);
