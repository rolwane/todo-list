// minha OL
const lista = document.querySelector('#lista-tarefas');

function addTask() {
  const input = document.querySelector('#texto-tarefa');
  const li = document.createElement('li');
  li.innerText = input.value;
  lista.appendChild(li);
  input.value = '';
}

function selectTask(e) {
  if (e.target.id !== 'lista-tarefas') {
    if (e.target.classList.contains('selected')) {
      e.target.classList.remove('selected');
    } else {
      if (document.querySelector('.selected')) {
        document.querySelector('.selected').classList.remove('selected');
      }
      e.target.classList.add('selected');
    }
  }
}

function taskDone(e) {
  if (e.target.id !== 'lista-tarefas') {
    if (e.target.classList.contains('completed')) {
      e.target.classList.remove('completed');
    } else {
      e.target.classList.add('completed');
    }
  }
}

function clearAll() {
  lista.innerHTML = '';
}

document.querySelector('#criar-tarefa').addEventListener('click', addTask);
lista.addEventListener('click', selectTask);
lista.addEventListener('dblclick', taskDone);
document.querySelector('#apaga-tudo').addEventListener('click', clearAll);
