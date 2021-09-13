window.onload = function () {
  let adicionaTarefa = document.getElementById('criar-tarefa'); // Botão de criar tarefa
  let tarefa = document.getElementById('texto-tarefa').value; // Conteúdo no campo de adicionar tarefa
  let lista = document.getElementById('lista-tarefas'); // lista de tarefas

  adicionaTarefa.addEventListener('click', () => {
    const novoItem = document.createElement('li');
    novoItem.innerText = tarefa;
    lista.appendChild(novoItem);
    tarefa = '';
  });
};

/* ao clicar no botão, deve ser criado uma nova linha na ol (addEventListener + createElement)
   depois, pega o texto que está na tarefa e adiciona na linha criada
*/
