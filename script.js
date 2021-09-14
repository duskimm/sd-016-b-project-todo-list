const addTask = document.querySelector("#criar-tarefa");
const taskInput = document.querySelector('#texto-tarefa');
let toDoList = document.querySelector("#lista-tarefas")
let previousSelected = document.getElementsByClassName("selected");
const resetAll = document.querySelector("#apaga-tudo");
const removeCompleted = document.querySelector("#remover-finalizados")
const createdTask = document.getElementsByClassName("tarefa-criada");
const saveButton = document.querySelector("#salvar-tarefas");
const upButton = document.querySelector("#mover-cima");
const downButton = document.querySelector("#mover-baixo");
const removeSelectedButton = document.querySelector("#remover-selecionado");

window.onload = loadAll();


taskInput.addEventListener("input", function(event){
    event.target.value = this.value;
})
addTask.addEventListener("click", function(){
    let task = document.createElement("li");
    task.innerHTML = taskInput.value;
    task.classList.add("tarefa-criada");
    toDoList.appendChild(task);
    taskInput.value = "";
});

toDoList.addEventListener("click", function(event){
    let selectedTask = event.target;
    if(previousSelected.length > 0){
        previousSelected[0].classList.remove("selected");
            if(selectedTask.classList.contains("selected")){
            selectedTask.classList.remove("selected");
        } else{
            selectedTask.classList.add("selected");
        }
    }
    else{
        selectedTask.classList.add("selected");
    }
})

toDoList.addEventListener("dblclick", function(event){
    let selectedTask = event.target;
    if(selectedTask.classList.contains("completed")){
        selectedTask.classList.remove("completed");
    } else{
        selectedTask.classList.add("completed");
    }
})

resetAll.addEventListener("click", function(){
    while (toDoList.hasChildNodes()) {
        toDoList.removeChild(toDoList.lastChild);
    }
})

// while e hasChildNodes eram novos para mim, graças ao usuário Maurice Perry no stackoverflow, achei essa simples solução. segue o link : https://stackoverflow.com/questions/683366/remove-all-the-children-dom-elements-in-div;
// entendi mais sobre o while aqui https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/while;
// o hasChildNodes é auto explicativo;
//usarei nos opcionais do projeto anterior

removeCompleted.addEventListener("click", function(){
    let completedTasks = toDoList.getElementsByClassName("completed");
    while (completedTasks[0]){
        completedTasks[0].parentNode.removeChild(completedTasks[0]);
    }
})

saveButton.addEventListener("click", function SaveAllTasks(){
    let savedTasks = []; 
    let classList = [];
    for (let i = 0; i< createdTask.length; i++){
         savedTasks.push(createdTask[i].innerHTML);
         let elementClasses = createdTask[i].className;
         classList.push(elementClasses);
         localStorage.setItem('items', JSON.stringify(savedTasks));
         localStorage.setItem('classes', JSON.stringify(classList))
         //o comando json.stringfy transforma as strings javascript no formato Json para serem armazenados corretamente no local storage. Depois vou recuperá-los com o JSON.parse(). 
         //achei esse exercicio no stackoverflow numa resposta do usuário Omar Yared e adaptei para minha realidade. Segue link para a resposta: https://stackoverflow.com/questions/58422340/trying-to-save-all-generated-li-elements-to-local-storage-using-javascript
         console.log(classList)
     }
})

function loadAll() {

    const storedTasks = JSON.parse(localStorage.getItem('items'));
    const storedClasses = JSON.parse(localStorage.getItem('classes'));
    console.log(storedTasks);
    for (i in storedTasks){
        let task = document.createElement("li");
        task.innerHTML = storedTasks[i];
        task.className = storedClasses[i];
        toDoList.appendChild(task);
    }
  }

upButton.addEventListener('click', function(){
    if(previousSelected.length > 0){
        if(previousSelected[0] !== toDoList.children[0])toDoList.insertBefore(previousSelected[0], previousSelected[0].previousElementSibling);   
    }
  })

downButton.addEventListener('click', function(){
    if(previousSelected.length > 0){
        if(previousSelected[0] !== toDoList.lastChild)toDoList.insertBefore(previousSelected[0].nextElementSibling, previousSelected[0]);   
    }
  })
//insert before foi aprendido graças ao developer.mozilla. Conteudo acessado se encontra em : https://developer.mozilla.org/pt-BR/docs/Web/API/Node/insertBefore
removeSelectedButton.addEventListener('click', function(){
    while (previousSelected[0]){
        previousSelected[0].parentNode.removeChild(previousSelected[0]);
    }
  })