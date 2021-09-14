let adicionaTarefa = document.getElementById('criar-tarefa'); // Botão de criar tarefa
let tarefa = document.getElementById('texto-tarefa'); // Conteúdo no campo de adicionar tarefa
let lista = document.getElementById('lista-tarefas'); // lista de tarefas

// Botão adicionando tarefas na lista
adicionaTarefa.addEventListener('click', () => {
  let novoItem = document.createElement('li');
  novoItem.innerText = tarefa.value;
  novoItem.className += 'itensDaLista';
  lista.appendChild(novoItem);
  tarefa.value = '';
});

// Adiciona a cor cinza ao clicar no item da lista, e marca se está riscado ou não
function trocaCinza(event) {
  let todasTarefas = document.querySelectorAll('.itensDaLista');
  for (let index = 0; index < todasTarefas.length; index += 1) {
    todasTarefas[index].classList.remove('cinza');
  }
  event.target.classList.add('cinza');
}

// instruções da função toggle retiradas do site https://www.w3schools.com/howto/howto_js_toggle_class.asp
function riscaTarefa(event) {
  event.target.classList.toggle('completed');
}

lista.addEventListener('click', trocaCinza);
lista.addEventListener('dblclick', riscaTarefa);
