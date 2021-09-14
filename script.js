function novoItemList() {
  const buttonList = document.getElementById("criar-tarefa");
  
  buttonList.addEventListener('click', function(){
    const textInput = document.getElementById("texto-tarefa");
    const novoItem = document.createElement('li');
    const listaTarefas = document.getElementById("lista-tarefas");  
    
    novoItem.innerHTML = textInput.value;
    novoItem.className = 'itemList';
    textInput.value = '';
    listaTarefas.appendChild(novoItem);
  });
}
novoItemList();

function armazenaItem(){
  const listaOl = document.getElementById('lista-tarefas').innerHTML;
  localStorage.setItem('saved', listaOl);
}
armazenaItem();
