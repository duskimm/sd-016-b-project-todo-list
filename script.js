let adicionaTarefa = document.getElementById('criar-tarefa'); // Botão de criar tarefa
let tarefa = document.getElementById('texto-tarefa'); // Conteúdo no campo de adicionar tarefa
let lista = document.getElementById('lista-tarefas'); // lista de tarefas

adicionaTarefa.addEventListener('click', () => {
  let novoItem = document.createElement('li');
  novoItem.innerText = tarefa.value;
  lista.appendChild(novoItem);
  tarefa.value = '';
});

/* ao clicar no botão, deve ser criado uma nova linha na ol (addEventListener + createElement)
   depois, pega o texto que está na tarefa e adiciona na linha criada
*/
