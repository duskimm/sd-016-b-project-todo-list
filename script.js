const adicionaTarefa = document.getElementById('criar-tarefa'); // Botão de criar tarefa
const tarefa = document.getElementById('texto-tarefa'); // Conteúdo no campo de adicionar tarefa
const lista = document.getElementById('lista-tarefas'); // lista de tarefas
const apagaTudo = document.getElementById('apaga-tudo'); // Botão de apagar todas as tarefas
const removeFinalizados = document.getElementById('remover-finalizados');

// Botão adicionando tarefas na lista
adicionaTarefa.addEventListener('click', () => {
  const novoItem = document.createElement('li');
  novoItem.innerText = tarefa.value;
  novoItem.className += 'itensDaLista';
  lista.appendChild(novoItem);
  tarefa.value = '';
});

// Adiciona a cor cinza ao clicar no item da lista, e marca se está riscado ou não
function trocaCinza(event) {
  const todasTarefas = document.querySelectorAll('.itensDaLista');
  for (let index = 0; index < todasTarefas.length; index += 1) {
    todasTarefas[index].classList.remove('cinza');
  }
  event.target.classList.add('cinza');
}

// instruções da função toggle retiradas do site https://www.w3schools.com/howto/howto_js_toggle_class.asp e do vídeo https://www.youtube.com/watch?v=IKzlUvYSZO4
function riscaTarefa(event) {
  event.target.classList.toggle('completed');
}

lista.addEventListener('click', trocaCinza);
lista.addEventListener('dblclick', riscaTarefa);

// Botão apagando todas as tarefas
apagaTudo.addEventListener('click', () => {
  while (lista.firstChild) {
    lista.removeChild(lista.firstChild);
  }
});

// Botão que apaga apenas os finalizados
function removerRiscados() {
  const todasTarefas = document.querySelectorAll('.itensDaLista');
  for (let index = 0; index < todasTarefas.length; index += 1) {
    if (todasTarefas[index].classList.contains('completed')) {
      lista.removeChild(todasTarefas[index]);
    }
  }
}

removeFinalizados.addEventListener('click', removerRiscados);
