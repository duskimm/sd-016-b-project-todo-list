let submit = document.getElementById('criar-tarefa');
let textField = document.getElementById('texto-tarefa');
let valueInput = '';

    textField.addEventListener('blur',function(){
        valueInput = document.getElementById('texto-tarefa').value;    
        console.log(valueInput);
    })

    submit.addEventListener('click',function(){

        let li = document.createElement('li');
        let taskList = document.getElementById('lista-tarefas');
        let taskListLength = taskList.children.length;
        taskList.appendChild(li);
        li.innerText = valueInput;
        textField.value = ''; 

        if (taskList.children != 0 ){
             let great = taskListLength;
            for (let index = 0; index < taskListLength; index++) {
                               
                taskList.children[great]= taskList.children[index];
                great--;
              
            }

            
        }
                
    })

 