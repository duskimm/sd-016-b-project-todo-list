window.onload = function() {
    carregaSalvos()

}
    const lista = document.querySelector('#lista-tarefas');
    const botaoCria = document.querySelector('#criar-tarefa');
    const botaoApaga = document.querySelector('#apaga-tudo');
    const botaoRmFinalizados = document.querySelector('#remover-finalizados');
    const botaoSalva = document.querySelector('#salvar-tarefas');
    const botaoAcima = document.querySelector('#mover-cima');
    const botaoAbaixo = document.querySelector('#mover-baixo');
    const botaoRmSelecionado = document.querySelector('#remover-selecionado');

// ANALISAR O CASO DE CARREGAR AS TAREFAS SALVAS, POIS ESTÁ FALHANDO TODO O NPM TESTE QUANDO HABILITA O CARREGAMENTO ONLOAD.









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
    }

    
    function saveTasks() {
        var tasks = document.querySelectorAll('.task')
        const selected = document.querySelector('.selected')
        const completed = document.querySelectorAll('.completed')
        let array = [];
        for(let i = 0; i < tasks.length; i += 1) {
            if (tasks[i] == selected ){
                if (tasks[i] == completed[0] ){
                    array.push('z' + tasks[i].innerHTML + 'x' );
                    } else {
                        array.push('z' + tasks[i].innerHTML);
                    }
                } else {
                    array.push(tasks[i].innerHTML);
        }
        localStorage.setItem('tarefas', JSON.stringify(array));
    }
}

    function upTask() {
        var tasks = document.querySelectorAll('.task')
        const selected = document.querySelector('.selected')
        const completed = document.querySelectorAll('.completed')
        let array = []
        for(let i = 0; i < tasks.length; i += 1) {
            if (tasks[i] == selected ){
                if (tasks[i] == completed[0] ){
                    array.push('z' + tasks[i].innerHTML + 'x' );
                    } else {
                        array.push('z' + tasks[i].innerHTML);
                    }
            } else {
            array.push(tasks[i].innerHTML);
            }
        }
        for (let i = 0; i < tasks.length; i += 1) {
            if( selected === tasks[i] && selected != tasks[0]) {
            var sobra = array.splice(i-1 , 1);
            array.splice(i,0, sobra[0])
            rendTask(array);
            }

        }
    }

    function downTask() {
        var tasks = document.querySelectorAll('.task')
        const selected = document.querySelector('.selected')
        const completed = document.querySelectorAll('.completed')
        let array = []
        for(let i = 0; i < tasks.length; i += 1) {
            if (tasks[i] == selected ){
                if (tasks[i] == completed[0] ){
                    array.push('z' + tasks[i].innerHTML + 'x' );
                    } else {
                        array.push('z' + tasks[i].innerHTML);
                    }
            } else {
            array.push(tasks[i].innerHTML);
            }
        }
        for (let i = 0; i < tasks.length; i += 1) {
            if( selected === tasks[i] && selected != tasks[tasks.length-1]) {
            var sobra = array.splice(i+1 , 1);
            array.splice(i,0, sobra[0])
            rendTask(array);
            }
        }
    }

    function rendTask(array) {
        var tasks = document.querySelectorAll('.task')
        const selected = document.querySelector('.selected')
        for ( var i = 0; i < tasks.length; i += 1) {
            tasks[i].remove()
            var nova = document.createElement('li');
            verifySelectedCompleted(array, i, nova, tasks);
            lista.appendChild(nova);
            nova.addEventListener('click', paintTask)
            nova.addEventListener('dblclick', completTask)
        }
    }

    function verifySelectedCompleted(array, i, nova, tasks) {
        let last = array[i].charAt(array[i].length -1)
        if(array[i].charAt(0) === 'z' && last != 'x' ) {
            nova.classList.add('task');
            nova.classList.add('selected');
            nova.innerHTML = array[i].substring(1);
        } else if(array[i].charAt(0) === 'z' && last == 'x' ) {
            nova.classList.add('task');
            nova.classList.add('selected');
            nova.classList.add('completed');
            nova.innerHTML = array[i].substring(1, array[i].length -1);
        } else {
            nova.classList.add('task');
            tasks[i].classList.remove('selected')
            nova.innerHTML = array[i];
            }
            return nova
    }

    function rmSelected() {
        const tasks = document.querySelectorAll('.task.selected')[0]
        tasks.remove();
    }

    function createListenersButtons() {
        botaoCria.addEventListener('click', addTask);
        botaoApaga.addEventListener('click', getClean);
        botaoRmFinalizados.addEventListener('click', rmCompleted);
        botaoSalva.addEventListener('click', saveTasks);
        botaoAbaixo.addEventListener('click', downTask);
        botaoAcima.addEventListener('click', upTask);
        botaoRmSelecionado.addEventListener('click', rmSelected);

    } createListenersButtons();

    function carregaSalvos() {
        if (localStorage.getItem('tarefas') === null) {
            localStorage.setItem('tarefas', JSON.stringify([]));
          } else {
        const conteudo = JSON.parse(localStorage.getItem('tarefas'));

        for( let i = 0; i < conteudo.length; i += 1) {
            const task = document.createElement('li');
            task.innerHTML = conteudo[i];
            task.classList.add('task');
            lista.appendChild(task);
            
        }
        rendTask(conteudo);
    }
}    



