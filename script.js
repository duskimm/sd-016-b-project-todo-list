window.onload = function() {
    console.log('kkk');
}
    const lista = document.querySelector('#lista-tarefas');
    const botaoCria = document.querySelector('#criar-tarefa');
    const botaoApaga = document.querySelector('#apaga-tudo');
    const botaoRemove = document.querySelector('#remover-finalizados');
    

    function addTask() {
        const conteudo = document.querySelector('#texto-tarefa').value;
        const nova = document.createElement('li');
        nova.classList.add('task');
        nova.innerText = conteudo;
        lista.appendChild(nova);
        document.querySelector('#texto-tarefa').value = '';
        nova.addEventListener('click', paintTask)
        nova.addEventListener('dblclick', completTask)
    }

    function getClean() {
        const tasks = document.querySelectorAll('.task')
        for(let i = 0; i < tasks.length; i += 1) {
            tasks[i].remove();
        }   
    }

    function rmCompleted() {
        const tasks = document.querySelectorAll('.task.completed')
        for(let i = 0; i < tasks.length; i += 1) {
            tasks[i].remove();
        }   
    }

    function paintTask() {
        const tasks = document.querySelectorAll('.task')
        const task = event.target;
        for(let i = 0; i < tasks.length; i += 1) {
             if (task == tasks[i]) {
                 task.style.backgroundColor = 'rgb(128,128,128)';
                task.classList.add('selected')
            } else {
                tasks[i].style.backgroundColor = 'white';
                tasks[i].classList.remove('selected')
            }
        }
    }
    function completTask() {
        const task2 = event.target;
        task2.classList.toggle('completed')
        console.log(task2);
    }
    
    function createListenersButtons() {
        botaoCria.addEventListener('click', addTask);
        botaoApaga.addEventListener('click', getClean);
        botaoRemove.addEventListener('click', rmCompleted);
    } createListenersButtons();


