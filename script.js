const inputBox = document.querySelector('.inputField input');
const addBtn = document.querySelector('.inputField button');
const todoList = document.getElementById('todoList');
const deleteAllBtn = document.querySelector('.footer button');
const userContainer = document.getElementById('UserContainer');

window.onload = () => {
  localStorage.removeItem('New Todo');
  const user = localStorage.getItem('User');

  if (user) {
    userContainer.textContent = user;
  }

  addBtn.setAttribute('disabled', '');
  deleteAllBtn.setAttribute('disabled', '');
  showTasks();
  todoList.innerHTML = 'You don´t have any task.';
};

// Activate or desactivate the button
inputBox.onkeyup = () => {
  let userEnteredValue = inputBox.value;

  if (userEnteredValue.trim() != 0) {
    addBtn.classList.add('active');
    addBtn.removeAttribute('disabled');
  } else {
    addBtn.classList.remove('active');
    addBtn.setAttribute('disabled', '');
  }
};

// Add a new task
addBtn.onclick = () => {
  let userEnteredValue = inputBox.value;
  let getLocalStorageData = localStorage.getItem('New Todo');

  if (getLocalStorageData == null) {
    listArray = [];
  } else {
    listArray = JSON.parse(getLocalStorageData);
  }

  listArray.push(userEnteredValue);
  localStorage.setItem('New Todo', JSON.stringify(listArray));
  showTasks();
  addBtn.classList.remove('active');
};

// Show current tasks
function showTasks() {
  let getLocalStorageData = localStorage.getItem('New Todo');

  if (getLocalStorageData == null) {
    listArray = [];
  } else {
    listArray = JSON.parse(getLocalStorageData);
  }
  const pendingTasksNumb = document.querySelector('.pendingTasks');
  pendingTasksNumb.textContent = listArray.length;

  if (listArray.length > 0) {
    deleteAllBtn.classList.add('active');
    deleteAllBtn.removeAttribute('disabled');
  } else {
    deleteAllBtn.classList.remove('active');
    deleteAllBtn.setAttribute('disabled', '');
    todoList.innerHTML = 'You don´t have any task.';
    inputBox.value = '';
    return;
  }

  let newLiTag = '';

  listArray.forEach((element, index) => {
    newLiTag += `<li class="task" id="task${
      index + 1
    }">${element}<span id="task${
      index + 1
    }DeleteBtn" class="icon" onclick="deleteTask(${index})"><i class="fas fa-trash"></i></span></li>`;
  });

  todoList.innerHTML = newLiTag;
  inputBox.value = '';
}

// Delete a task
function deleteTask(index) {
  let getLocalStorageData = localStorage.getItem('New Todo');
  listArray = JSON.parse(getLocalStorageData);
  listArray.splice(index, 1);
  localStorage.setItem('New Todo', JSON.stringify(listArray));
  showTasks();
}

deleteAllBtn.onclick = () => {
  let getLocalStorageData = localStorage.getItem('New Todo');

  if (getLocalStorageData == null) {
    listArray = [];
  } else {
    listArray = JSON.parse(getLocalStorageData);
    listArray = [];
  }

  localStorage.setItem('New Todo', JSON.stringify(listArray));
  showTasks();
};
