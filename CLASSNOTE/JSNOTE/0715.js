const pororo = {
  name: '뽀로로',
  height: 70,
  weight: 50,
  gender: 'none',
  say: function () {
    console.log('뽀로로가 말을 합니다.');
  },
};

for (key in pororo) {
  console.log('key는', key);
  console.log('[key]의 데이터는', pororo[key]); // 데이터에 접근.
  pororo[key];
}

pororo.say(); // 뽀로로가 말을 합니다

function sayHello() {
  console.log(`hello, i'm ${this.name}`);
  console.log('sayHello에서 this는', this);
}

let boy = {
  name: 'Justin',
  sayHello,
};

let girl = {
  name: 'Anna',
  sayHello,
};

boy.sayHello(); // hello, i'm jausin
girl.sayHello();

console.log('-----------------------------');

function showHeight() {
  console.log(`키는 ${this.height}입니다.`);
}

function showName() {
  console.log(`이름은 ${this.name}입니다.`);
}

const pororoObj = {
  name: '뽀로로',
  height: 70,
  weight: 50,
  gender: 'none',
  // showName: function () {
  //   console.log(pororoObj.name);
  // },
  showName,
  showHeight,
};

const loopyObj = {
  name: '루피',
  height: 180,
  weight: 50,
  gender: 'none',
  // showName: function () {
  //   console.log(loopyObj.name);
  // },
  showHeight,
  showName,
};

//이름을 출력하는 메소드
pororoObj.showName();
pororoObj.showHeight();

loopyObj.showName();
loopyObj.showHeight();

console.log('-----------------------------');

let showPhone = () => {
  console.log(this.phone); // undefined
  console.log(this);
};

const Saeyoung = {
  phone: '010',
  showPhone,
};

const dotoung = {
  phone: '017',
  showPhone,
};

Saeyoung.showPhone();
dotoung.showPhone();
console.log('-----------------------------');

//생성자 함수
function Fruits(name, price) {
  this.name = name;
  this.price = price;
  this.showPrice = function () {
    console.log(`${this.name}의 가격은 ${this.price}원 입니다!`);
  };
}

let orange = new Fruits('오렌지', 3000);
let dragonFruit = new Fruits('용과', 2500);
let banana = new Fruits('바나나', 2000);
let pineApple = new Fruits('파인애플', 5000);

orange.showPrice();
dragonFruit.showPrice();
banana.showPrice();
pineApple.showPrice();

//생성자 함수 - 실습
function KdtStudents(name, gender) {
  this.name = name;
  this.gender = gender;
  this.showStudent = function () {
    console.log(`${this.name}님은 ${this.gender}입니다.`);
  };
}

let sol = new KdtStudents('한솔', '남성');
sol.showStudent();
let won = new KdtStudents('허원', '여성');
won.showStudent();
let jay = new KdtStudents('세영', '여성');
jay.showStudent();
console.log('-----------------------------');
