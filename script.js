const button = document.getElementById('criar-tarefa');
const list = document.getElementById('lista-tarefas');
const text = document.getElementById('texto-tarefa');

button.addEventListener('click', function (){
  if(text.value.length > 0){
  let item = document.createElement('li')
  item.innerText = text.value;
  list.appendChild(item);
  text.value = null
}
})
