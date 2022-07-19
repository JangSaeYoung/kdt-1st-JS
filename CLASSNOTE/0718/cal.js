//날짜에 날짜를 입력하고
//내용에 내용을 입력하고
// 작성버튼을 누르면
// 입력한 날짜와 입력한 내용이 해당 날짜에 뜬다.

const table = document.querySelector('table');
const dateInput = document.querySelector('#date');
const contentInput = document.querySelector('#content');

let targetBox = '';

table.addEventListener('click', function (e) {
  // console.log('table안에서 ', e.target);
  // console.log('table안에서 tagName ', e.target.tagName);
  // console.log('table안에서 textContent', e.target.textContent);

  if (e.target.tagName === 'P') {
    dateInput.value = e.target.textContent;
    targetBox = e.target.parentNode;
    // console.log('targetBox는', targetBox);
  } else {
    dateInput.value = e.target.firstChild.textContent;
    // console.log(e.target.firstChild.textContent);
    targetBox = e.target;
    // console.log(targetBox);
  }

  if (e.target.tagName === 'DIV') {
    e.target.parentNode.remove();

    dateInput.value = '';
  }
});

function writeSchedule() {
  const newDiv = document.createElement('div');
  newDiv.textContent = contentInput.value;
  targetBox.append(newDiv);
  // console.log('targetBox는', targetBox);

  dateInput.value = '';
  contentInput.value = '';
}
