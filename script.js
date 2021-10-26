function addTask() {
  let input = document.querySelector('#texto-tarefa');
  let li = document.createElement('li');
  li.innerText = input.value;
  document.querySelector('#lista-tarefas').appendChild(li);
  input.value = '';
}

document.querySelector('#criar-tarefa').addEventListener('click', addTask);