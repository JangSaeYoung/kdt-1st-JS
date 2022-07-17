const btn = document.querySelector('#todo_btn');
const todoList = document.querySelector('.todo_list');
const todoInput = document.querySelector('#todo_form');

btn.addEventListener('click', function () {
  const list = document.createElement('li');
  const btnCheck = document.createElement('button');
  const btnDel = document.createElement('button');

  //todos에 list 추가
  todoList.appendChild(list);
  list.classList.add('item');

  //list의 btnCheck 추가
  btnCheck.classList.add('btnCheck');
  btnCheck.classList.add('off');

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

  //list의 btnDel 추가
  btnDel.innerText = 'X';
  btnDel.classList.add('btnDel');
  btnDel.setAttribute('onclick', 'delLi(this)');
  console.log('btn 왜 안와 ', btnDel);

  list.appendChild(btnDel);

  // function delLi(t) {
  //   console.log('삭제버튼 할래', t);
  //   t.parentNode.remove();
  // }

  delLi = function (t) {
    console.log('와라제발', t);
    t.parentNode.remove();
  };

  //input 초기화
  todoInput.value = '';
});
