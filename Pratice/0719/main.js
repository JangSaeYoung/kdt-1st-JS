// const getNone = document.querySelector('.none');
// console.log('none) innerHTML --> ', getNone.innerHTML);
// console.log('none) innerText  --> ', getNone.innerText);
// console.log('none) textContent --> ', getNone.textContent);

function showNoneHTML() {
  alert(getNone.innerHTML);
}

function showNoneText() {
  alert(getNone.innerText);
}

function showNoneContent() {
  alert(getNone.textContent);
}

console.log('---------');

// const getValue = document.querySelector('.test');
// console.log('test) innerHTML -->  ', getValue.innerHTML);
// console.log('test) innerText -->  ', getValue.innerText);
// console.log('test) textContent -->  ', getValue.textContent);

function showTestHtml() {
  alert(getValue.innerHTML);
}

function showTestText() {
  alert(getValue.innerText);
}

function showTestContent() {
  alert(getValue.textContent);
}
console.log('---------');

const getValue2 = document.querySelector('.test2');
console.log('test2) innerHTML --> ', getValue2.innerHTML);
console.log('test2) innerText --> ', getValue2.innerText);
console.log('test2) textContent --> ', getValue2.innerText);

function showtextHTML() {
  alert(getValue2.innerHTML);
}

function showtextText() {
  alert(getValue2.innerText);
}

function showtextContent() {
  alert(getValue2.textContent);
}

console.log('---------');

// const red = document.querySelector('.color');
// console.log('color) innerHTML --> ', red.innerHTML);
// console.log('color) innerText --> ', red.innerText);
// console.log('color) textontent --> ', red.textContent);
// red.innerHTML = "<div style='color:red;'>빨강</div>";
// red.innerText = "<div style='color:red;'>빨강</div>";
console.log('---------');

const rainbow = document.querySelector('.rainbow');

let i = 2;

function showInnerHTML() {
  alert(rainbow.innerHTML);
  rainbow.innerHTML = "<div style='color:red;'>빨간 사과</div>";
}

function showInnerText() {
  rainbow.innerText = "<div style='color:green;'>초록 사과</div>";
  alert(rainbow.innerText);
}

function showAppleContent() {
  alert(rainbow.textContent);
}
