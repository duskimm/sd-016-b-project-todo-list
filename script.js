function createTask(){

const getAddField = document.querySelector('#texto-tarefa');
const getAddButton = document.querySelector('#criar-tarefa');
const getTaskList = document.querySelector('#lista-tarefas');
const delAllBtn = document.querySelector('#apaga-tudo')
const delDone = document.querySelector('#remover-finalizados')


getAddButton.addEventListener('click', function() {
  if (getAddField.value !== '') {
    let newLi = document.createElement('li');
    
    newLi.className = 'item-list';
    newLi.innerText = getAddField.value;
        
    getTaskList.appendChild(newLi);
    getAddField.value = '';

  }     
})  

getTaskList.addEventListener('click',function(e){
  let click = e.target;
  const li = document.querySelectorAll('li')
  
  for(let i = 0; i < li.length; i += 1){
    li[i].style.backgroundColor = 'white'
  }
  click.style.backgroundColor = 'rgb(128, 128, 128)'

})


getTaskList.addEventListener('dblclick', function(evt){
  let clicado = evt.target;

  if(clicado.classList.contains("completed")){
    clicado.classList.remove("completed")
  } else {
    clicado.classList.add("completed")
  }

})

delAllBtn.addEventListener('click', function(){
  getTaskList.innerText = '';
})


delDone.addEventListener('click',function(){
  const finalizados = document.querySelectorAll('.completed')
  
  for(let i = 0; i < finalizados.length; i += 1){
    if(finalizados[i].classList.contains("completed")){
      getTaskList.removeChild(finalizados[i])
    }
  }


})


}


createTask();