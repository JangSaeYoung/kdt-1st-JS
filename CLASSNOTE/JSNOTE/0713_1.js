// function sayHello(name, 인사말) {
//   console.log(`hello, ${name} ${인사말}`);
// }

// sayHello('뽀로로로로로로로로로로');
// sayHello('손흥민');
// sayHello('이름이 뭐에요~');
// sayHello('핑크퐁', '만나서 반가워');

function square(number, 제곱근) {
  return number ** 제곱근;
}

console.log(square(2, 3)); //8

function sayHello(name = 'friend!') {
  console.log(`hello, ${name}`);
}

sayHello(); //undefined 매개변수 전달 X

//밑변 높이
//원 반지름
//피타고라스 밑변 윗변 math.sqrt(9)=3;

//삼각형의 넓이
function trySamgac(밑변, 높이) {
  return (밑변 * 높이) / 2;
}
console.log('삼각형의 넓이: ', trySamgac(4, 5));

//원 반지름
function tryWon(r) {
  return 3.14 * r ** 2;
}
console.log('원의 넓이: ', tryWon(3));

//피타고라스 정의
function tryPita2(a, b) {
  return Math.sqrt(a) + Math.sqrt(b);
}
console.log('내가', tryPita2(3, 4));

function tryPita(a, b) {
  var c;
  c = Math.sqrt(a ** 2 + b ** 2);
  return c;
}
console.log('피타고라스정리: ', tryPita(3, 4));

let pita = function tryPita(a, b) {
  var c;
  c = Math.sqrt(a ** 2 + b ** 2);
  return c;
};
console.log('끝-----------------------------');

let heyHi = function () {
  console.log('Hello');
};

sayHi();
heyHi();

function sayHi() {
  console.log('Hello');
}
console.log('끝-----------------------------');

let add = () => {
  alert('화살표함수');
};
// add();
console.log('끝-----------------------------');

//함수 선언문
// function sayHi() {
//   console.log('Say Hi');
// }

//함수 표현식
// let sayHi = function () {
//   console.log('say Hi');
// };

//화살표 함수
// let sayHi = () => {
//   console.log('sayHi');
// };
console.log('끝-----------------------------');

//삼각형의 넓이 - 함수표현식
// let tyrSamgac = function (밑변, 높이) {
//   return (밑변 * 높이) / 2;
// };

//원 반지름 - 함수표현식
// let tyrWon = function (r) {
//   return 3.14 * r ** 2;
// };
//원 반지름 - 화살표함수
// let tyrWon = r => {
//   return 3.14 * r ** 2;
// };

//피타고라스 - 함수표현식
// let tyrPita = function (a, b) {
//   var c;
//   c = Math.sqrt(a ** 2 + b ** 2);
//   return c;
// };
//피타고라스 - 화살표 함수
// let tryPita = (a, b) => {
//   var c;
//   c = Math.sqrt(a ** 2 + b ** 2);
//   return c;
// };
console.log('끝---------------------------');

let kdt = ['고구마', '감자', '게맛살', '소세지', '계란'];
console.log(kdt[0]);
console.log(kdt[1]);
console.log(kdt[2]);
console.log(kdt[3]);
console.log(kdt[4]);
console.log(kdt[5]); //undefined
console.log('끝---------------------------');

let kdtStudents = [
  '강한솔',
  '김윤비',
  '박종익',
  '박혜영',
  '복준우',
  '이지현',
  '정승수',
  '허원',
  '다영',
  '영은',
  '소민',
  '승환',
  '유림',
  '진형',
  '의진',
  '유림',
  '지훈',
  '수지',
  '민정',
];
console.log(kdtStudents.length);
console.log(kdtStudents[5]);
console.log('배열->', kdtStudents);
kdtStudents.push('세영');
console.log('push->', kdtStudents);
kdtStudents.pop('세영');
console.log('pop->', kdtStudents);
kdtStudents.unshift('세영');
console.log('unshift->', kdtStudents);
console.log('---------------------------');

for (let i = 0; i < kdtStudents.length; i++) {
  // console.log(`KDT ${i + 1} 번째 참여자의 성함은 ${kdtStudents[i]} 입니다.`);
}
console.log('---------------------------');

let hello = 'HELLO';
let helloSplit = hello.split('');
console.log(helloSplit);

let reverseArr = helloSplit.reverse();
console.log(reverseArr);

let joinStr = reverseArr.join('');
console.log(joinStr); //OLLEH

let hey = 'Almond Breeze';
let result = hey.split('').reverse().join('');
console.log(result); //ezeerB dnomlA
console.log('---------------------------');

const superMan = {
  name: 'clark',
  age: 33,
  height: 187,
  weight: 77,
};

console.log('나는 객체야', superMan);
console.log('name 접근: ', superMan.name);
console.log('age 접근: ', superMan['age']);

superMan.hairColor = 'blone';
console.log('추가', superMan);

superMan['job'] = '기자';
console.log('추가', superMan);

delete superMan.weight;
console.log('삭제', superMan);
console.log('---------------------------');

let pororo = {
  name: '뽀로로',
  age: 7,
};
console.log('이름,나이 출력 ', pororo);

pororo.gender = 'female';
console.log('gender추가 ', pororo);

pororo.height = 180;
console.log('height추가 ', pororo);

delete pororo.gender;
console.log('gender삭제 ', pororo);

console.log('---------------------------');

console.log('존재 여부 확인:', 'name' in superMan);
console.log('존재 여부 확인:', 'baby' in superMan);

console.log('---------------------------');

console.log('name 있니?:', 'name' in pororo);
console.log('height 있니?:', 'height' in pororo);

console.log('---------------------------');

for (key in superMan) {
  // console.log('superMan의 key는 ', key);
  console.log('superMan의 key 대괄호 접근', superMan[key]);
}
console.log('---------------------------');

for (key in pororo) {
  console.log('pororo의 key는', key);
}
console.log('---------------------------');

let pororoMethod = {
  name: '뽀로로',
  age: 7,
  // fly: function () {
  //   console.log('뽀로로는 날 수 있어요~');
  // },
  fly() {
    console.log('뽀로로는 날 수 있어요~');
  },
  run() {
    console.log('뽀로로가 달려갑니다~~');
  },
  cute: function () {
    console.log('뽀로로는 귀엽습니다!');
  },
};

for (key in pororoMethod) {
  console.log('pororoM의 key는', key);
  // console.log('value입니다 ', value);
}
console.log('---------------------------');

pororoMethod.fly();
pororoMethod['fly'];

pororoMethod.run();
pororoMethod.cute();
