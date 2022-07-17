const btn = document.querySelector('#todo_btn');
const todoList = document.querySelector('.todo_list');
const todoInput = document.querySelector('#todo_form');

btn.addEventListener('click', function () {
  const list = document.createElement('li');
  const btnCheck = document.createElement('button');
  const btnDel = document.createElement('div');

  //todos에 list 추가
  todoList.appendChild(list);
  list.classList.add('item');

  //list의 btnCheck 추가
  btnCheck.classList.add('btnCheck');
  btnCheck.classList.add('off');
  // list.appendChild(btnCheck);

  btnCheck.addEventListener('click', function () {
    if (btnCheck.classList.contains('off')) {
      btnCheck.classList.remove('off');
      btnCheck.classList.add('on');
      btnCheck.parentNode.style.textDecoration = 'line-through';
    } else if (btnCheck.classList.contains('on')) {
      btnCheck.classList.remove('on');
      btnCheck.classList.add('off');
      btnCheck.parentNode.style.textDecoration = 'none';
    } else {
      btnCheck.classList.add('off');
    }
  });
  list.appendChild(btnCheck);
  list.insertAdjacentHTML('beforeend', `${todoInput.value}`);

  //input 초기화
  todoInput.value = '';

  //list의 btnDel 추가
  list.appendChild(btnDel);
  btnDel.innerText = 'X';
  btnDel.classList.add('btnDel');
  console.log(btnDel);

  //btnCheck 상태 변화_forEach 적용해볼 것
  // const onCheck = document.querySelectorAll('.btnCheck');
  // onCheck.addEventListener('click', function () {
  //   if (onCheck.classList.contains('off')) {
  //     onCheck.classList.remove('off');
  //     onCheck.classList.add('on');
  //     console.log(onCheck);
  //   } else if (onCheck.classList.contains('on')) {
  //     onCheck.classList.remove('on');
  //     onCheck.classList.add('off');
  //     console.log(onCheck);
  //   } else {
  //     onCheck.classList.add('off');
  //   }
  // });

  list.addEventListener('click', function () {
    list.style.color = 'lightGray';
  });

  let newLists = document.querySelectorAll('.item');
  newLists.forEach(function (newList, index) {
    newList.classList.add(`newList${index + 1}`);
  });

  console.log('newLists안에는1 ', newLists);

  //btnDel 클릭시 삭제
  const onDel = document.querySelector('.btnDel');
  onDel.addEventListener('click', () => {
    todoList.removeChild(list);
  });
});
