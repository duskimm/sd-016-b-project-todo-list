let getAddField = document.querySelector('#texto-tarefa');
let getAddButton = document.querySelector('#criar-tarefa');
let getTaskList = document.querySelector('#lista-tarefas');




getAddButton.addEventListener('click', function() {
  if (getAddField.value !== '') {
    let newLi = document.createElement('li');
    newLi.className = 'item-list';
    newLi.innerText = getAddField.value;
    let itens = document.getElementsByClassName('item-list')

    getTaskList.appendChild(newLi);
    getAddField.value = '';

    for(let i = 0; i < itens.length; i += 1){
      itens[i].addEventListener('click', function(){
      itens[i].style.backgroundColor = 'rgb(128, 128, 128)'
      })
    

    }
        
  }     
})  



