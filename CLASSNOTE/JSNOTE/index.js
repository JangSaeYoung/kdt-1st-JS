/* eslint-disable no-unmodified-loop-condition */
/* eslint-disable comma-dangle */
/* eslint-disable space-before-function-paren */
/* eslint-disable eqeqeq */
/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
/* eslint-disable no-trailing-spaces */
/* eslint-disable semi */
/* eslint-disable quotes */

"use strict";

let myName = "장세영";
let email = "syoungbb@naver.com";
let hello = `안녕하세요 제 이름은 ${email}입니다!`;

console.log(myName);
console.log(email);
console.log(hello);
console.log("------------------------------");

let height = "172";
let opacity = "0.7";
// let opacity = "가나다라마"; // NaN

console.log(height);
console.log(opacity);
console.log(height + opacity); // 문자일때 or 숫자일때
console.log(height - opacity);
console.log("------------------------------");

let checked = false; // 0
let isShow = true; // 1

console.log(checked);
console.log(isShow);
console.log(2 + checked); // 2 + 0
console.log(2 + isShow); // 2 + 1
console.log("------------------------------");

let undef;
console.log(undef); // undefined

// undefined
undef = "young";
console.log(undef); // young

console.log("------------------------------");

// Null
let empty = null;
console.log(empty); // null
console.log("------------------------------");

// Array
let fruits = ["orange", "banana", "apple", "water-melon", null];
console.log(fruits[0]); // orange
console.log(fruits[2]);
console.log(fruits[4]); // null
console.log(fruits[5]); // undefined
console.log("------------------------------");

// Object
let judy = {
  name: "장세영",
  age: "비밀",
  isOld: true,
  isMarried: false,
  hoby: ["cafe", "reptile", "dairy", "sticker"],
  brain: null,
  boyFriend: undefined,
};

console.log(judy.name);
console.log(judy.age);
console.log(judy.isOld);
console.log(judy.isMarried);
console.log(judy.hoby);
console.log(judy.brain);
console.log(judy.boyFriend);
console.log("------------------------------");

let myStirng = 123;
console.log("안녕하세요 저는", myStirng, "입니다");
console.log("안녕하세요 저는" + myStirng + "입니다");
console.log(`안녕하세요 저는 ${myStirng} 입니다`); // 숫자 123이 글자로 변경됨.
console.log("------------------------------");

let box = 123;
console.log(box); // 123
box = 789;
console.log(box); // 789
box = "box";
console.log(box); // 데이터 타입 바뀜

console.log("------------------------------");

// Const
const box2 = 333;
console.log(box2);

// box2 = 999;
console.log(box2); // TypeError
console.log("------------------------------");

// var, let, const
// let name = "tetz";
// let name = "LHS";

// console.log(name);

// let name = "LHS";

// if (name == "LHS") {
//   let result = true;
// } else {
//   let result = false;
// }

// console.log(result);
