let a = true;
let b = false;
let c = false;

console.log(a || b || c);
console.log("-----------------------------");

let tetz = "이효슥";
let gender = "female";
// if (tetz == "이효석") {
//   alert("이효석");
// } else if (tetz == "이효슥") {
//   alert("이효슥");
// } else {
//   alert("모르겠어요!!!");
// }

console.log("-----------------------------");

// if (gender == "male") {
//   if (tetz == "이효석") {
//     alert("잘 찾으셨습니다!");
//   } else {
//     alert("이름이 틀렸네요!");
//   }
// } else {
//   alert("성별이 틀렸습니다!");
// }
console.log("-----------------------------");

let day;
switch (new Date().getDay()) {
  case 0:
    day = " 일요일";
    break;
  case 1:
    day = " 월요일";
    break;
  case 2:
    day = " 화요일";
    break;
  case 3:
    day = " 수요일";
    break;
  case 4:
    day = " 목요일";
    break;
  case 5:
    day = " 금요일";
    break;
  case 6:
    day = " 토요일";
    break;
}
console.log(day);

console.log("-----------------------------");
let tetzA = "이효석";
if (tetzA == "이효석") {
  console.log("맞습니다.");
} else {
  console.log("툴렸다.");
}

tetzA == "이효석" ? console.log("맞아") : console.log("틀려");
console.log("-----------------------------");

let dayD = new Date().getDay();
console.log(dayD); // 1

// if (dayD === 1) {
//   alert("월");
// } else if (dayD === 2) {
//   alert("화");
// } else if (dayD === 3) {
//   alert("수");
// } else if (dayD === 4) {
//   alert("목");
// } else if (dayD === 5) {
//   alert("금");
// } else if (dayD === 6) {
//   alert("토");
// } else if (dayD === 7) {
//   alert("일");
// } else {
//   alert("멀티버스~~~~~~~");
// }

// ------여기! 다시 보기!!!!!!!!!!!!!!!1
// let dayName = "";

// if (dayD == 0) {
//   dayName == "일요일";
// } else if (dayD == 1) {
//   dayName == "월요일";
// } else {
//   alert("뭔가 잘못 됬습니다.");
// }

console.log("-----------------------------");
//  FOR문
// for (let i = 0; i < 100; i++) {
//   console.log(i + 1, "번째 반복중");
// }
console.log("-----------------------------");
// let index1 = 0;
// while (index1 < 10) {
//   console.log("인사를 ", index + 1, "번째 드립니다.");
//   index++;
// }

let index2 = 0;
while (1) {
  console.log("인사를 또", index2 + 1, "번째 인사드립니다.");
  index2++;
  if (index2 == 10) {
    break;
  }
}

console.log("-----------------------------");
// 구구단 출력
// let number = 10;

for (let i = 2; i < 10; i++) {
  for (let j = 1; j < 10; j++) {
    // console.log(i, "*", j, "는", i * j);
  }
}

console.log("-----------------------------");
// for (let i = 0; i < 101; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// }

// 내가 생각한 방법 1. 2의 배수 구하고
// 5의 배수 구하고
// 그리고 둘을 구한다 ... 였다.!
// -> if문 앞에서 돌은거는 뒤에 else if로 들어가지 않는다!

let sum = 0;
for (let i = 0; i < 101; i++) {
  // if (i % 2 == 0 || i % 5 == 0) {
  if (i % 2 == 0) {
    sum = sum + i;
  } else if (i % 5 == 0) {
    sum = sum + i;
  }
  // sum = sum+1;
}
// else if / ||연산자
console.log(sum);
console.log("-----------------------------");
