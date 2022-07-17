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
  list.appendChild(btnCheck);
  btnCheck.classList.add('btnCheck');
  btnCheck.classList.add('off');

  list.insertAdjacentHTML('beforeend', `${todoInput.value}`);

  //list의 btnDel 추가
  list.appendChild(btnDel);
  btnDel.innerText = 'X';
  btnDel.classList.add('btnDel');

  //btnCheck 상태 변화_forEach 적용해볼 것
  const onCheck = document.querySelector('.btnCheck');
  onCheck.addEventListener('click', function () {
    if (onCheck.classList.contains('off')) {
      onCheck.classList.remove('off');
      onCheck.classList.add('on');
      console.log(onCheck);
    } else if (onCheck.classList.contains('on')) {
      onCheck.classList.remove('on');
      onCheck.classList.add('off');
      console.log(onCheck);
    } else {
      onCheck.classList.add('off');
    }
  });

  //btnDel 클릭시 삭제

  //input 초기화
  todoInput.value = '';
});
