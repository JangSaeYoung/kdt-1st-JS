function showPhone() {
  const inputNum = document.querySelector('.inputNum');
  const showSolA = document.querySelector('.solA');
  let inputNumValue = inputNum.value;

  function solutionA(inputNumValue) {
    var answer = '';
    answer = '*'.repeat(inputNumValue.length - 4) + inputNumValue.slice(-4);
    return answer;
  }

  showSolA.innerText = '개인정보 보호 ' + solutionA(inputNumValue);
  showSolA.classList.add('show');
}
console.log('----------------------');

function showPlus() {
  const inputB = document.querySelector('.inputB');
  const showSolB = document.querySelector('.solB');
  let inputBValue = inputB.value;

  function solutionB(inputBValue) {
    let answerB = 0;
    let strings = String(inputBValue);

    for (let i = 0; i < strings.length; i++) {
      answerB += Number(strings[i]);
    }
    return answerB;
  }
  showSolB.innerText = '합계: ' + solutionB(inputBValue);
  showSolB.classList.add('show');
}

console.log('----------------------');

function showNumber() {
  const showSolC = document.querySelector('.solC');

  if (showSolC.classList.contains('solCShow')) {
    showSolC.classList.remove('solCShow');
    showSolC.classList.add('solA');
  } else if (showSolC.classList.contains('solA')) {
    showSolC.classList.remove('solA');
    showSolC.classList.add('solCShow');
  } else {
    showSolC.classList.add('solCShow');
  }
}

console.log('----------------------');

function showArray() {
  const showSolD = document.querySelector('.solD');

  if (showSolD.classList.contains('solDShow')) {
    showSolD.classList.remove('solDShow');
    showSolD.classList.add('solA');
  } else if (showSolD.classList.contains('solA')) {
    showSolD.classList.remove('solA');
    showSolD.classList.add('solDShow');
  } else {
    showSolD.classList.add('solDShow');
  }
}

console.log('----------------------');

function solutionD(arr, divisor) {
  var answerD = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % divisor === 0) {
      answerD.push(arr[i]);
    }
  }

  answerD.sort((a, b) => a - b);

  if (answerD.length === 0) {
    answerD.push(-1);
  }
  return answerD;
}
