function showValue() {
  $('input').val('가나다라');
  // document.querySelector('input').value = '가나다라마사바';
}

// $('span').text('이렇게 바꿔줄래');
document.querySelector('span').textcontent = '이렇게 바꾸지';

//변경을 누르면 Inputdml value값을 "가나다라마바사"로 만들기
//자바스크립트
const changeBtn = document.querySelector('.change-btn');
const inputText = document.querySelector('.test-input');
const testSpan = document.querySelector('.test-span');

// changeBtn.addEventListener('click', function () {
//   inputText.value = '가나다라마바사';
// });

//jquery
$('.change-btn').on('click', function () {
  let text = $('inputText').val();
  $('testSpan').text(text);
});

//출력 누르면 input에 입력한 내용이 span의 내용으로 적용되도록 만들기
const outBtn = document.querySelector('.out-btn');
console.log(outBtn);

outBtn.addEventListener('click', function () {
  const inputValue = document.querySelector('.test-input').value;
  console.log(inputValue);
  // span.textContent = inputValue;
  testSpan.textContent = inputText.value;
});

$('changeBtn').on('click', function () {
  $('.test-input').val('가나다라마사바');
});

$('arrt-input').on('click', function () {
  $('arrt-input').attr('type', 'button');
  $('arrt-input').attr('value', 'button');
});

//실습 ----------------------------------------------
//자바스크립트
const changeBtn1 = document.querySelector('.btn2');
const changeBtn2 = document.querySelector('.btn3');
const inputText2 = document.querySelector('.test2');

changeBtn1.addEventListener('clcik', function () {
  document.querySelector('inputText2').setAttribute('placeholder', '변경1을 누르셨습니다.');
});

// $('btn2').on("click", function () {
//   $('test2').attr('placeholder', '변경1을 누르셨습니다.');
// });

// -----------------------------------------------------
changeBtn2.addEventListener('clcik', function () {
  document.querySelector('inputText2').setAttribute('type', 'radio');
});

$('.btn3').on('click', function () {
  $('.test2').attr('type', 'radio');
});

$('.number').css('background-color', 'orange');
document.querySelector('.number').style = 'background-color: red; font-size: 40px';

// $('.style').css('background-color', 'orange');

const orangeBtn = document.querySelector('.btn-style1');
const divStyle1 = document.querySelector('.style1');

// orangeBtn.addEventListener('click', function () {
//   divStyle1.style = 'background-color: orange;';
// });

function changeCSS() {
  document.querySelector('.style1').style = 'background-color: orange;';
}

function changeCSS2() {
  $('.style2').css('background-color: skyblue;');
}

//html 변경 (제이쿼리 / 자바스크립트)
// $('.pororo').html('<h1>루피</h1>');
document.querySelector('.pororo').innerHTML = '<h1>루피</h1>';

//
const li = document.createElement('li');
li.textContent = 'before추가';

const li2 = document.createElement('li');
li2.textContent = 'after추가';

$('.me').before(li);
$('.me').after(li2);

// 실습
const changeInput = document.querySelector('.changeInput');
const changebtn1 = document.querySelector('.changeBtn1');
const changebtn2 = document.querySelector('.changeBtn2');
const changeUl = document.querySelector('.changeUl');
const changeLi = document.createElement('li');

function changeLi1() {
  const changeLi = document.createElement('li');
  changeLi.textContent = changeInput.value;
  changeUl.append(changeLi);
}

function changeLi2() {
  let text = $('.changeInput').val();
  $('.changeUl').prepend(`<li>${text}</li>`);
}

const children = document.querySelector('.ancestor').children;
const childNodes = document.querySelector('.ancestor').childNodes;

console.log('children은', children);
console.log('childNodes은', childNodes);
