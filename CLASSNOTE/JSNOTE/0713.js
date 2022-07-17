console.log('이건 null인데..?->', typeof null);
console.log(typeof '핑크퐁');
console.log(typeof 77);
console.log(typeof {});

let numBox = 1234;
let stringBox = '글자야';
let bollBox = true;
let nullBox = null;
let objBox = {};
console.log('장->', typeof numBox + " isn't " + typeof stringBox + ' data type');
console.log('강사님->', `${typeof 123} isn't ${typeof 'pororo'} data type`);

console.log(
  '장->',
  'typeof를 ' +
    typeof bollBox +
    '이나 ' +
    typeof nullBox +
    ' 에 사용하면, ' +
    typeof objBox +
    ' 결과를 얻을 수 있습니다.',
);

console.log(
  '강사님->',
  `typeof 를 ${typeof true} 이나 ${typeof null} 에 사용하면, ${typeof {}} 결과를 얻을 수 있습니다.`,
);

console.log('끝------------------------------');

// let mathScore = prompt('수학 점수를 입력해주세요. ');
// let engScore = prompt('영어 점수를 입력해 주세요.');

// console.log('mathScore', mathScore);
// console.log('engScore', engScore);

// mathScore = Number(mathScore);
// console.log(typeof mathScore);
// engScore = Number(engScore);

// let avgScore = (mathScore + engScore) / 2;
// console.log('avgScore', avgScore);
// console.log(typeof avgScore);

let mathScore = '77';
let engScore = '88';

// string을 Number로 형변환
mathScore = Number(mathScore);
engScore = Number(engScore);

let avgScore = (mathScore + engScore) / 2;
console.log(avgScore);
console.log('끝------------------------------');

let nameArr = ['현금이', '다발이', '아깽이', '감자', '새벽이'];
console.log('namveArr길이: ', nameArr.length); // 5

for (let i = 0; i < nameArr.length; i++) {
  console.log(`${i + 1}번째 참가자의 이름은 ${nameArr[i]}입니다.`);
}

let sq = 2 ** 2;
console.log(sq); // 4

let numSqrt = Math.sqrt(sq);
console.log(numSqrt); //2
console.log('끝------------------------------');

let numTen = 10;
numTen = numTen + 5;
console.log(numTen); //15

numTen += 5;
console.log(numTen); //20

let result1, result2;
let num1 = 10,
  num2 = 10;

result1 = num1++;
console.log(result1);

result2 = ++num2;
console.log(result2); // 11
console.log('끝------------------------------');

// let numBase = 10;
// numBase += 1;
// console.log('10->11', numBase);

// numBase -= 1;
// console.log('10->9', numBase);

let numBase = 10;
numBase++;
// numBase -= 5;
// numBase/5;
// numBase *= 3;
console.log('10->11', numBase++);
console.log('끝-----------------------------');

let a = 1;
let b = '1';
console.log(a == b); //true
console.log(a === b); //false
console.log('끝-----------------------------');

// let name = '뽀로로';
// let age = 16;
// let isAdult = age > 19;

// if (isAdult) {
//   console.log('통과');
// } else {
//   console.log('집으로가~');
// }
console.log('끝-----------------------------');

//여성이고 이름이 Jane이거나 성인이면 통과
// let gender = 'M';
// let name = 'Jane';
// let isAdult = true;

// if (gender === 'F' && (name === 'Jane' || isAdult === true)) {
//   console.log('통과');
// } else {
//   console.log('돌아가세요');
// }
console.log('끝-----------------------------');
//성인 isAdult 이거나 vip면 통과
// 성인이면서 Vip여도 취했으면(isDrunken) -> 돌아가
// 성인 아니고 vip도 아니고 취했어도, 돈 money를 줫으면 -> 통과

// 내가 작성
// let isAdult = true;
// let isVip = true;
// let isDrunken = 'drunken';
// let isMoney = 'money';

// if (isAdult === 'true' || isVip === 'true' || isDrunken === 'drunken' || isMoney === 'money') {
//   console.log('통과');
// } else {
//   console.log('돌아가라');
// }

//강사님 작성
//성인 isAdult 이거나 vip면 통과
// 성인이면서 Vip여도 취했으면(isDrunken) -> 돌아가
// 성인 아니고 vip도 아니고 취했어도, 돈 money를 줫으면 -> 통과
let isAdult = false;
let isVip = true;
let isDrunken = false;
let isMoney = false;

if (((isAdult || isVip) && !isDrunken) || isMoney) {
  console.log('통과!!!');
} else {
  console.log('못 지나가!!!');
}
console.log('끝-----------------------------');

// for (let i = 2; i < 10; i++) {
//   for (let j = 1; j < 10; j++) {
//     console.log(`${i} 곱하기 ${j} 는 ${i * j} 입니다.`);
//   }
// }
//10000까지의 숫자 중에서 13의 배수면서 홀수인 숫자 찾기 for/ if
//prompt를 이용해서 13의 배수면서 홀수인 숫자 찾는 프로그램

//10000까지의 숫자
// 13의 배수이면서 홀수

// for (let i = 0; i < 10001; i++) {
//   if (13 * i === 0 && i % 2 === 1) {
//     console.log(i);
//   }
// }
// console.log('여기');

//실습 정답
// for (let i = 0; i < 10001; i += 13) {
//   if (i % 2 === 1) {
//     console.log(i);
//   }
// }

// let userInput = prompt('어디까지 구할까요?');
// userInput = Number(userInput);
// for (let i = 0; i < userInput; i += 13) {
//   if (i % 2 === 1) {
//     console.log(i);
//   }
// }
//실습 정답 끝
console.log('끝-----------------------------');

// let i = 2,
//   j = 1;

// while (i < 10) {
//   while (j < 10) {
//     console.log(`${i} 곱하기 ${j} 는 ${i * j}`);
//     j++;
//   }
//   i++;
//   j = 1;
// }

console.log('끝-----------------------------');

//do..while
let i = 10;
do {
  console.log('Do->', `반복문이 ${i} 번째 실행 중입니다.`);
  i++;
} while (i < 10);

//while
let j = 10;

while (j < 10) {
  console.log('while->', `반복문이 ${j} 번째 실행 중입니다.`);
}

console.log('끝-----------------------------');

// for (let i = 0; i < 100; i++) {
//   if (i == 10) {
//     console.log('멈춰!');
//     // break;
//     continue;
//   }
//   console.log(i);
// }
console.log('끝-----------------------------');
// 1에서 10000까지 중에서 짝수의 합을 구하기 continue 사용해서!

// for (let i = 1; i < 10001; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//     continue;
//   }
//   console.log('내꺼->',i);
// }

let sum = 0;

for (let i = 1; i < 101; i++) {
  if (i % 2 === 0) {
    continue;
  }
  sum += i;
}
console.log(sum);

console.log('끝-----------------------------');
