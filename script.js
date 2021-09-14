let submit = document.getElementById('criar-tarefa');
let textField = document.getElementById('texto-tarefa');
let listElements = document.getElementsByTagName('li');
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

        for (let index = 0; index < listElements.length; index++) {
            
            listElements[index].addEventListener('click',function(event){

                listElements[index].style.backgroundColor = 'rgb(128, 128, 128)';
        })
    }       
    })


      
        
     