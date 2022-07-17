function helloKdt() {
  //   alert("hello KDT World");
}

function returnFunc() {
  return 123;
}
let num = returnFunc();

console.log(num);
console.log(returnFunc());
console.log("-----------------------------");

// 기명함수
function hello() {
  console.log("익명함수");
}
let World = function () {
  console.log("기명함수");
};

hello();
World();
console.log("-----------------------------");

let judy = {
  name: "장세영",
  age: "비밀",
  isOld: true,
  isMarried: false,
  hoby: ["cafe", "reptile", "dairy", "sticker"],
  brain: null,
  boyFriend: undefined,

  // Method
  getName: function () {
    return this.name;
  },

  doesHeMarried: function () {
    return this.isMarried;
  },

  getAge: function () {
    return this.age;
  },

  getBoyFriend: function () {
    // return this.boyFriend;
    console.log(this.boyFriend);
  },
};

// let hisName = judy.getName();
// console.log(hisName);

// console.log(judy.doesHeMarried());

let sheAge = judy.getAge();
console.log(sheAge);

console.log(judy.getBoyFriend());
judy.getBoyFriend();

console.log("-----------------------------");

// 매개변수
function sum(a, b) {
  return a + b;
}
let a = sum(10, 20);

console.log(a);
console.log(sum(15, 13));

function gob(c, d) {
  return c * d;
}
let gugu = gob(5, 5);
console.log(gugu); // 25
console.log(gob(8, 6)); // 48

console.log("-----------------------------");

function onClick() {
  alert("클릭 클릭 클릭 클릭 온클릭!!!!!");
}
