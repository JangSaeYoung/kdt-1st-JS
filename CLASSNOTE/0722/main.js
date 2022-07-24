// let test = 3;
// let result = solution(test);

function solution(num) {
  var answer = '';

  if (num % 2 === 0) {
    answer = 'Even';
  } else if (num % 2 === 1) {
    answer == 'Odd';
  }
  return answer;
}
solution();
// 마음에 드는 풀이
// function evenOrodd(num) {
//   return num % 2 ? 'Odd' : 'Even';
// }

console.log('짝수/홀수 문제 -->', solution(2));
console.log('------------------');

const strLength = 'Hello, world';
console.log('length -> ', strLength.length);

const strIndexOf = 'Hello, world';
console.log('IndexOf -> ', strIndexOf.indexOf('world'), '번째 있어요');

let str = '우영';
let longStr = str.repeat(5) + '우';
console.log('repeat-> ', longStr);
console.log('-------------');

let strTrim = '     우당탕탕    우영          ';
let tirmStr = strTrim.trim();
console.log('strTrim->', strTrim);
console.log('trim ->', tirmStr);
console.log('-------------');

// let subac = '수박';
// let subacRepeat = subac.repeat(3);
// console.log(subacRepeat);
// let subacLength = subac.length;
// console.log(subacLength);

const waterMelon = n => '수박'.repeat(n).slice(0, n);
console.log('수박 Slice->', waterMelon(6));

function solutionSu(n) {
  var answer = '';
  for (let i = 1; i < n + 1; i++) {
    if (i % 2 === 1) {
      answer = answer + '수';
      console.log('answer는->', answer);
    } else if (i % 2 === 0) {
      answer += '박';
      console.log('짝수answer', answer);
    }
  }
  return answer;
}
solutionSu();
let apple = solutionSu(21);
console.log('수박수문제 -->', apple);
console.log('------------------------');

const pi = 3.14159265358979;
console.log('주어진 숫자 ->', pi);
let int = parseInt(pi);
let float = parseFloat(pi);
console.log('parseInt ->', int);
console.log('parseFloat ->', float);
console.log('int타입은 ->', typeof int);
console.log('float타입은 ->', typeof float);
console.log('-----------다음-------------');

let minus = -999;
console.log('abs ->', Math.abs(minus));
console.log('min ->', Math.min(1, 23, -25, 30, 150));
console.log('max ->', Math.max(1, 23, -25, 30, 150));
console.log('ceil ->', Math.ceil(3.14));
console.log('floor ->', Math.floor(3.99));
console.log('round ->', Math.round(3.52));
console.log('random ->', Math.random());
console.log('-----------다음------------');

// 가장 큰 수와 가장 작은 수 찾아서 소수점 버림 처리
// 절대값의 평균 구하기
// 0부터 100까지의 숫자 중에서 랜덤에서 정수로만 나오게 하기.
// let nums = [-1.23, 13, 14.52, -33.53, 30];
// let numsMin = Math.min(nums);
// console.log(numsMin);
console.log('작은거 ->', Math.min(-1.23, 13, 14.52, -33.53, 30));
console.log('큰거 ->', Math.max(-1.23, 13, 14.52, -33.53, 30));

console.log();
// console.log(nums.Math.min());

// const numsMax = Math.max.apply(null, nums);
// console.log(numsMax);
// const numsMin = Math.min.apply(null, nums);
// console.log(numsMin);

// const numsFloor = numsMax
let nums = [-1.23, 13, 14.52, -33.53, 30];

// let numsArr = new numsArrs(...nums);
// console.log(numsArrs);

let maxNums = Math.max(...nums);
console.log(maxNums);

let minNums = Math.min(...nums);
console.log(minNums);

maxNums = Math.floor(maxNums);
console.log(maxNums);

minNums = Math.floor(minNums);
console.log(minNums);

maxNums = Math.abs(maxNums);
minNums = Math.abs(minNums);

let avg = (maxNums + minNums) / 2;
console.log(avg);

Math.floor(Math.random() * 100);
console.log(Math.floor(Math.random() * 100));
console.log('-----------다음------------');

//정수 N을 입력받아
//n의 약수를 모두 더한 값을 리턴하는 함수 만들기

// function solutionN(n) {
//   var answer = 0;
//   // 정수n의 약수를 구한다.
//   // 그 약수들의 합을 구한다.

//   for (let i = 1; i < n; i++) {
//     if( )
//   }

//   return answer;
// }
// solutionN();
// console.log(solutionN());

let n = 8;
let result = solutionG(n);

function solutionG(n) {
  let answer = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      console.log('여기 들어온 i값은->', i);
      answer = answer + i;
    }
  }
  return answer;
}
console.log('약수의 합 ->', result);
console.log('-----------다음------------');

const numbers1 = [1, 2, 3, 4];
const numbers2 = [1, 2, 3, 4];

numbers1.splice(0, 2);
console.log(numbers1); // [3,4]
numbers2.splice(2, 1, 77);
console.log(numbers2); // [1,2, 77, 4]
console.log('-----------다음------------');

let numbers = [1, 2, 3, 4];
let fruits = ['사과', '딸기', '수박'];
console.log('concat->', numbers.concat(fruits));
console.log('concat 후 원본확인->', numbers);
console.log('concat 후 원본확인->', fruits);
console.log('-----------다음------------');

for (let i = 0; i < numbers.length; i++) {
  console.log('numbers의 요소뽑아내기 ->', numbers[i]);
}
for (let i = 0; i < fruits.length; i++) {
  console.log('fruits의 요소뽑아내기 ->', fruits[i]);
}
console.log('-----------다음------------');

for (let number of numbers) {
  console.log('for of문 돌리면->', number);
}

for (let fruit of fruits) {
  console.log('for of문 돌리면->', fruit);
}

console.log('-----------다음------------');
numbers.forEach(function (item, index, array) {
  console.log('forEach ->', item, index, array);
});

fruits.forEach(function (item, index, array) {
  console.log('forEach ->', item, index, array);
});
console.log('-----------다음------------');

numbers.forEach((item, index, array) => {
  console.log('forEach 화살표함수->', item, index, array);
});
console.log('-----------다음------------');
console.log('---------배열의 합------------');
let numbersSum = [1, 2, 3, 4, 5, 6];
var sum1 = 0;
var sum2 = 0;
var sum3 = 0;

for (let i = 0; i < numbersSum.length; i++) {
  sum1 += numbersSum[i];
}

for (let item of numbersSum) {
  sum2 += item;
}

numbersSum.forEach(function (num) {
  sum3 += num;
});

console.log('sum1', sum1);
console.log('sum2', sum2);
console.log('sum3', sum3);
console.log('-----------다음------------');

//1에서 100까지의 배열을 For문을 사용해서 만들기
let arrayTen = [];
var sumTen1 = 0;
var sumTen2 = 0;
var sumTen3 = 0;

for (let i = 1; i < 101; i++) {
  // arrayTen.push[i];
  arrayTen.push(i);
  // console.log(arrayTen);
}

for (let i = 0; i < arrayTen.length; i++) {
  sumTen1 += arrayTen[i];
  // console.log(sumTen1);
}

for (let item of arrayTen) {
  sumTen2 += item;
  // console.log(sumTen2);
}

arrayTen.forEach(function (num) {
  sumTen3 += num;
  // console.log(sumTen3);
});
console.log('-----------다음------------');

let numbersA = [1, 2, 3, 4, 5, 6];
let forc = numbersA.forEach(function (item) {
  return item;
});
console.log('forEach는 ->', forc, '리턴값 없음');

let map = numbersA.map(function (item) {
  return item;
});

let map2 = numbersA.map(item => item);
console.log('map2는 ->', map2);
console.log('-----------다음------------');

const fruitsMap = ['사과', '파인애플', '수박', '포도', '오렌지'];

let mapObj = fruitsMap.map(function (item, index) {
  return {
    id: index + 1,
    name: item,
  };
});

//화살표함수로 표현
//return 도 줄이기 위해서 중괄호 사용
const fruitsMap2 = ['사과', '파인애플', '수박', '포도', '아륀지'];
let mapObj2 = fruitsMap2.map((item, index) => ({
  id: index + 1,
  name: item,
}));

console.log(mapObj);
console.log(mapObj2);
console.log('-----------다음------------');

let numbersB = [1, 2, 3, 4, 5, 6];
let reduce = numbersB.reduce(function (sum, item, index, arr) {
  console.log(sum, item, index, arr);
  return sum + item;
});
//매개변수
console.log('-----------다음------------');

let numbersC = [];
for (let i = 1; i <= 100; i++) {
  numbersC.push(i);
  // console.log(numbersC);
}

// let reduce2 = numbersC.reduce(function (sum, item) {
//   return sum + item;
// });
// console.log(reduce2);

let strA = 'apple';
// console.log([...strA]);

[...strA].forEach(function (item, index, arr) {
  console.log(item, index, arr);
});
console.log('-----------다음------------');
//filter
let numbersD = [1, 2, 3, 4, 5, 6];
// let arr;
// arr = numbersD.filter(num => num > 3);
// console.log(arr);
// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
// const result = words.filter(word => word.length > 6);
// console.log(result);

let arrD = numbersD.filter(function (item) {
  return item > 3;
  // return item < 4;
});
console.log(arrD);

let arrD2 = numbersD.filter(item => item > 3);
console.log(arrD2);
console.log('-----------다음------------');

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

let arrWords = words.filter(function (item) {
  return item.length >= 6;
});
console.log(arrWords);

let arrWords2 = words.filter(item => item.length >= 6);
console.log(arrWords2);
console.log('-----------다음------------');

const wordsA = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
console.log(wordsA.includes('spray')); // true
console.log(wordsA.includes('J')); // false
console.log('-----------다음------------');

// let fruits1 = ['사과', '딸기', '파인애플', '수박', '참외', '오렌지', '자두', '망고'];
// let fruits2 = ['수박', '사과', '참외', '오렌지', '파인애플', '망고'];
//배열 sam 만들기 : 두 배열에서 동일한 요소만
// 배열 diff 만들기 :두 배열에서 서로 다른 요소만
// 리턴 인클루드 잘 써서 배열에 넣어주기
// let sam = [];
// let fruitSums = fruits1 + fruits2;
// sam = sam.push(fruitSums);
// console.log(fruitSums);

// let fruitSam = fruits1.includes

// let fruitSam = fruitSums.filter(function (item) {
//   return item;
// });

// console.log(fruitSam);

// 강사님
let fruits1 = ['사과', '딸기', '파인애플', '수박', '참외', '오렌지', '자두', '망고'];
let fruits2 = ['수박', '사과', '참외', '오렌지', '파인애플', '망고', '복숭아'];
console.log('과일 나와라->', fruits2);
//filter사용
let same = [];
let diff = [];
same = fruits1.filter(item => fruits2.includes(item));
diff = fruits1.filter(item => !fruits2.includes(item));

//forEach사용
let same2 = [];
let diff2 = [];
fruits1.forEach(function (item) {
  if (fruits2.includes(item)) {
    same2.push(item);
  }
});

fruits1.forEach(function (item) {
  if (!fruits2.includes(item)) {
    diff2.push(item);
  }
});
console.log('같은거 모음->', same);
console.log('다른거 모음->', diff);
console.log('같은거 모음2->', same2);
console.log('다른거 모음2->', diff2);
console.log('-----------다음------------');

//프로그래머스 문제3
//정수를 담고 있는 매열 arr의 평균값을 리턴
//arr은 1이상 100이하 배열

// let arr = [];

// function solutionE(arr) {
//   var answer = 0;
//   for (let i = 1; i < 101; i++) {
//     // 배열의 요소를 돌면서
//     // 그 요소의 합 나누기 배열의 길이
//     //answer +i % arr.length
//     if (arr)
//     answer = answer + i;
//   }
//   return answer;
//}
console.log('-----------다음------------');
// let arr = [1, 2, 3, 4, 5, 6];
let answer = 0;
let sumEl = 0;

let resultA = solutionA([1, 2, 4, 5, 6]);

function solutionA(arr) {
  for (let i = 1; i < arr.length; i++) {
    sumEl = sumEl + arr[i];
    console.log('arr[i]의 값->', arr[i]); // 2,4,5,6
    console.log('sumEl에 합쳐진 요소들->', sumEl); // 2,6,11,17
    answer = sumEl / arr.length;
  }
  return answer;
}
console.log('평균값 구하기->', resultA);

console.log('-----------다음------------');

let obj1 = {a: 1, b: 2};
let obj2 = {c: 3, d: 4};

let assignedObj = Object.assign(obj1, obj2);
console.log('assign하면 ->', assignedObj);
console.log('obj1->', obj1); //처음에 오는 객체는 원본도 변경된다!
console.log('obj2->', obj2);
console.log('-----------다음------------');

const userName = {
  id: 1,
  name: 'tetz',
};
const userEmail = {
  id: 1,
  email: 'xenosign@naver.com',
};

const assignedObj2 = Object.assign(userName, userEmail);
console.log(assignedObj2);
console.log(userName);
console.log('메모리 주소가 같음 그래서->', assignedObj2 === userName);

const a = {po: '뽀로로'};
const b = {po: '뽀로로'};
console.log(a === b);
console.log('-----------다음------------');

//빈 객체를 넣어서 새롭게 반환 받기
const assignedObj3 = Object.assign({}, userName, userEmail);
console.log(assignedObj3);

const assignedObj4 = Object.assign({}, userName);
console.log(assignedObj4);
console.log(userName);
console.log('메모리가 주소가 다름 그래서->', assignedObj4 === userName);
console.log('-----------다음------------');

//keys()
const user = {id: 1, name: 'tetz', email: 'xenosign@naver.com'};
const keys = Object.keys(user);
console.log('객체의 모든 key값 ->', keys); // ["id", "name", "email"]

const values = keys.map(key => user[key]);
console.log('map사용 key값의 모든 value->', values);

console.log('-----------다음------------');

const userB = {
  id: 1,
  name: 'tetz',
  email: 'xenosign@naver.com',
};
const {id, name: tetz, email, address = 'KOREA'} = userB;
// 기본값 설정 const { id, name, email, address = "KOREA"} = user;
// 특정 변수에 넣기 const { id, name: tetz, email, address = "KOREA"} = user;
console.log(id);
console.log(tetz);
console.log(email);
console.log(address);
const fruitsA = ['사과', '딸기', '망고', '수박'];
const [aa, bb, c, d] = fruitsA;
console.log(aa, bb, c, d);
console.log('-----------다음------------');

const fruitsB = ['사과', '바나나', '수박'];
console.log(fruitsB);
console.log('전개연산자->', ...fruitsB);
// console.log("사과", "바나나", "수박");

function conLog(a, b, c) {
  console.log(a, b, c);
}

//conLog("사과", "바나나", "수박", "망고", "딸기");
conLog(fruitsB[0], fruitsB[1], fruitsB[2]);
conLog(...fruitsB);

console.log('-----------다음------------');

const fruitsC = ['사과', '바나나', '수박', '망고', '딸기'];
function conLog(a, b, ...c) {
  console.log(a, b, c);
}
conLog(...fruitsC);

const fruitsD = ['사과', '바나나', '수박', '망고', '딸기'];
function conLog(...rest) {
  rest.forEach(element => {
    console.log(element);
  });
}
conLog(...fruitsD);
console.log('-----------다음------------');
