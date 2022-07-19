//기본적으로 사용할 요소를 미리 호출
const inputTask = document.querySelector('.input-task');
// console.log('inputTask는', inputTask);

const addBtn = document.querySelector('.input-btn');
console.log('addBtn는', addBtn);

const todoList = document.querySelector('.todo-list');
console.log('todoList는', todoList);

addBtn.addEventListener('click', function () {
  if (inputTask.value === '') {
    inputTask.setAttribute('placeholder', '할 일이 있을텐데요?');
  } else {
    const addLi = document.createElement('li');
    const checkBox = document.createElement('input');

    //li추가가 없다!!!!
    checkBox.setAttribute('type', 'checkbox');
    checkBox.addEventListener('click', function () {
      if (checkBox.checked === true) {
        // checkBox.parentNode.style = "text-decoration: line-through;"
        checkBox.parentNode.style.textDecoration = 'line-through';
      } else {
        checkBox.parentNode.style.textDecoration = 'none';
      }
    });

    const deleteBtn = document.createElement('input');
    deleteBtn.setAttribute('type', 'button');
    deleteBtn.setAttribute('value', '삭제');
    // deleteBtn.setAttribute('onclick', 'deleteTask(this)');

    addLi.append(checkBox);
    // <li> <input type = "checkbox" /></li>
    // addLi.textContent = inputTask.value;
    addLi.append(inputTask.value);
    addLi.append(deleteBtn);
    todoList.append(addLi);

    inputTask.value = '';
  }
});

todoList.addEventListener('click', function (e) {
  // console.log(e.target);
  // console.log(e.target.tagName);
  console.log('tagName', e.target.tagName);
  console.log('getAttribute', e.target.getAttribute);

  if (e.target.tagName === 'INPUT' && e.target.getAttribute('type') === 'button') {
    e.target.parentNode.remove();
  }
});
