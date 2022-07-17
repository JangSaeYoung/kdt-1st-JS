let boxEl = document.querySelector('.box');
console.log('boxEl안에는: ', boxEl);
// 클래스는 . 찍어서 호출

let smallBoxEl = document.querySelector('.box .small__box');
console.log('smallBoxEl안에는: ', smallBoxEl);

let boxElId = document.getElementById('second-box');
console.log('boxElId안에는: ', boxElId);
// id는 #없이 id이름만으로 호출
console.log('-----------------------------');

// classList에 'active'라는 이름의 class를 add 추가
let boxElClassName = document.querySelector('.box');
boxElClassName.classList.add('active');
console.log(boxElClassName);
console.log('포함됬니?', boxElClassName.classList.contains('active')); //true
boxElClassName.classList.remove('active');
console.log('제거되있니?', boxElClassName.classList.contains('active')); //false

//addEventListener
boxEl.addEventListener('click', function () {
  // alert('Add event listener');
});
// 두번째 .box가 선택되지 않은 이유는 querySelector가 첫번째만 지목하기 때문이다!!!!!

//찾아서 오렌지로 또 누르면 스카이블루로
//조건이 일어날 가능성을 생각해보고 하나씩 작성해보기
boxEl.addEventListener('click', function () {
  if (boxEl.classList.contains('orange')) {
    boxEl.classList.remove('orange');
    boxEl.classList.add('skyblue');
  } else if (boxEl.classList.contains('skyblue')) {
    boxEl.classList.remove('skyblue');
    boxEl.classList.add('orange');
  } else {
    boxEl.classList.add('orange');
  }
});
console.log('-----------------------------');

//setAttribute
let boxInputEl = document.querySelector('.box');
let inputEl = document.getElementById('input');
console.log('boxInputEl안에는: ', boxInputEl);
console.log('imputEl안에는: ', inputEl);

boxInputEl.addEventListener('click', function () {
  //박스를 클릭하면
  // inputEl.setAttribute('placeholder', '아이디를 입력하세요.'); // 이거 해주세요
  // inputEl.setAttribute('type', 'button');
  // inputEl.setAttribute('type', 'password');

  boxInputEl.textContent = 'KDT';
});

console.log('-----------------------------');

// 실습 - test_box로 작업
let boxTestEl = document.querySelector('.test_box');
console.log('boxTestEl안에는: ', boxTestEl);

// boxTestEl.addEventListener('click', function () {
//   boxTestEl.classList.add('test_1');
// });

// boxTestEl.addEventListener('click', function () {
//   if (boxTestEl.classList.contains('orange')) {
//     boxTestEl.classList.remove('orange');
//     boxTestEl.classList.add('skyblue');
//   } else if (boxTestEl.contains('skyblue')) {
//     boxTestEl.classList.remove('skyblue');
//     boxTestEl.classList.add('orange');
//   }
// });

//강사님
boxTestEl.addEventListener('click', function () {
  // boxTestEl.classList.add('orange');
  if (boxTestEl.classList.contains('orange')) {
    boxTestEl.classList.remove('orange');
    boxTestEl.classList.add('skyblue');
    console.log(boxTestEl);
  } else if (boxTestEl.classList.contains('skyblue')) {
    boxTestEl.classList.remove('skyblue');
    boxTestEl.classList.add('orange');
    console.log(boxTestEl);
  } else {
    boxTestEl.classList.add('orange');
  }
});

let testBtn1 = document.getElementById('test_btn1');
console.log('testBtn1안에는 ', testBtn1);
let testInput = document.getElementById('test_input');
console.log('testInput안에는 ', testInput);
let testSpan = document.getElementById('test_span');
console.log('testSpan안에는 ', testSpan);

testBtn1.addEventListener('click', function () {
  testInput.setAttribute('placeholder', '아이디를 입력하세요');
  testSpan.textContent = '아이디를 입력하세요';
});

//입력 클릭 시 test인풋에 입력받은 값을 span 요소 컨텐츠로 만들기
//첫번째 방법 생각 -> onClick 사용하기
// function printSpan() {
//   const newSpan = document.getElementById('test_input').value;
//   console.log('newSpan입력값 확인: ', newSpan);
//   document.getElementById('new_span').innerText = newSpan;
// }
//실습끝
console.log('-----------------------------');

//두번째 방법 생각 -> onClick 안 쓰고 적용해보기
let testBtn2 = document.getElementById('test_btn2');
let newSpanInput = document.getElementById('new_span');

testBtn2.addEventListener('click', function () {
  const newSpan = document.getElementById('test_input').value;
  console.log('newSpan입력값 확인: ', newSpan);
  newSpanInput.textContent = newSpan;
});
//강사님
// testBtn2.addEventListener('click', function () {
//   let inputText;
//   inputText = testInput.value;
//   testSpan.textContent = inputText;
// });
console.log('-----------------------------');

// let boxEls = document.querySelectorAll('.qbox');
// console.log('boxEls안에는 ', boxEls);

// boxEls.forEach(function (boxEl, index) {
//   boxEl.classList.add(`box_${index + 1}`);
// });
// console.log('forEach돌면: ', boxEls);
console.log('-----------------------------');

//무지개 만들기
// let rboxEls = document.querySelectorAll('.rbox');
// console.log('rbox안에는', rboxEls);

// rboxEls.forEach(function (rainbowEl, index) {
//   rainbowEl.classList.add(`box_color${index + 1}`);
// });
// console.log('rboxEls안에는 ', rboxEls);

let rboxEls = document.querySelectorAll('.rbox');

// rboxEls.forEach(function (rboxEl, index) {
//   rboxEl.classList.add(`box_color${index + 1}`);
// });
// console.log('rboxEl안에는 ', rboxEls);

// rboxEls.forEach(function (rboxEl, index) {
//   if (index % 7 === 0) {
//     rboxEl.classList.add(`box_color1`);
//   } else if (index % 7 === 1) {
//     rboxEl.classList.add(`box_color2`);
//   } else if (index % 7 === 2) {
//     rboxEl.classList.add(`box_color3`);
//   } else if (index % 7 === 3) {
//     rboxEl.classList.add(`box_color4`);
//   } else if (index % 7 === 4) {
//     rboxEl.classList.add(`box_color5`);
//   } else if (index % 7 === 5) {
//     rboxEl.classList.add(`box_color6`);
//   } else if (index % 7 === 6) {
//     rboxEl.classList.add(`box_color7`);
//   }
// });

// css 직접 접근
rboxEls.forEach(function (rboxEl, index) {
  if (index % 7 === 0) {
    rboxEl.style.backgroundColor = 'red';
  } else if (index % 7 === 1) {
    rboxEl.style.backgroundColor = 'orange';
  } else if (index % 7 === 2) {
    rboxEl.style.backgroundColor = 'yellow';
  } else if (index % 7 === 3) {
    rboxEl.style.backgroundColor = 'green';
  } else if (index % 7 === 4) {
    rboxEl.style.backgroundColor = 'blue';
  } else if (index % 7 === 5) {
    rboxEl.style.backgroundColor = 'navy';
  } else if (index % 7 === 6) {
    rboxEl.style.backgroundColor = 'purple';
  }
});
