const table = document.querySelector('table');
const dateInput = document.querySelector('#date');
const contentInput = document.querySelector('#content');

// let targetBox = '';
let targetBox;

table.addEventListener('click', function (e) {
  console.log('e.target', e.target);
  console.log('currunt', e.currentTarget);
  console.log('tagName ', e.target.tagName);
  // console.log('table안에서 textContent', e.target.textContent);

  if (e.target.tagName === 'P') {
    dateInput.value = e.target.textContent;
    targetBox = e.target.parentNode;
    // console.log('targetBox는', targetBox);
  } else if (e.target.tagName === 'DIV') {
    e.target.remove();
  } else {
    dateInput.value = e.target.firstChild.textContent;
    // console.log(e.target.firstChild.textContent);
    targetBox = e.target;
    // console.log(targetBox);
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

console.log('----');
// 강사님
// table.addEventListener('click', function (e) {
//   if (e.target.tagName === 'P') {
//     console.log('class는 ', e.target.className === 'as');
//     dateInput.value = e.target.textContent;
//     targetBox = e.target.parentNode;
//   } else if (e.target.tagName === 'TD') {
//     dateInput.value = e.target.firstChild.textContent;
//     targetBox = e.target;
//   }
// });

// function writeSchedule() {
//   const newDiv = document.createElement('div');
//   newDiv.textContent = contentInput.value;

//   newDiv.addEventListener('click', function () {
//     // newDiv.remove();
//     // newDiv.style = 'text-decoration: line-through';
//     if (newDiv.style.textDecoration === 'line-through') {
//       newDiv.remove();
//     } else {
//       newDiv.style = 'text-decoration: lind-through';
//     }
//   });

//   targetBox.append(newDiv);
//   contentInput.value = '';
// }

// function withSchedule() {
//   // let task = content.value;
//   // let divEl = document.createElement('div');
//   deleteTask();
// }

// function deleteTask(t) {
//   t.remove();
// }
