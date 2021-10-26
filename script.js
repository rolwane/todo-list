function addTask() {
  const input = document.querySelector('#texto-tarefa');
  const li = document.createElement('li');
  li.innerText = input.value;
  document.querySelector('#lista-tarefas').appendChild(li);
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

document.querySelector('#criar-tarefa').addEventListener('click', addTask);
document.querySelector('#lista-tarefas').addEventListener('click', selectTask);
document.querySelector('#lista-tarefas').addEventListener('dblclick', taskDone);
