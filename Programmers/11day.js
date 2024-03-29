//1. 주사위의 갯수
function solution(box, n) {
  const width = Math.floor(box[0] / n);
  const length = Math.floor(box[1] / n);
  const height = Math.floor(box[2] / n);

  return width * length * height;
}
//1. 주사위의 갯수-refactor
function solution(box, n) {
  let answer = 1;
  for (let i = 0; i < 3; i++) {
    answer *= Math.floor(box[i] / n);
  }

  return answer;
}
//Math.floor() static 메서드는 항상 반올림하여 지정된 숫자보다 작거나 같은 최대 정수를 반환

//2. 합성수 찾기
function solution(n) {
  let answer = 0;
  for (let i = n; i >= 1; i--) {
    // i가 합성수인지 비교해야하는 숫자
    let isCount = false;
    for (let num = 2; num < i - 1; num++) {
      if (i % num === 0) {
        //합성수
        isCount = true;
      }
    }
    // isCount => 합성수 여부를 확인할 수 있음.
    if (isCount) {
      answer += 1;
    }
  }
  return answer;
}

//2-1.refactor 합성수 찾기

const getISCount = (i) => {
  let isCount = false;
  for (let num = 2; num < i - 1; num++) {
    if (i % num === 0) {
      //합성수
      isCount = true;
    }
  }
  return isCount;
};
function solution(n) {
  let answer = 0;
  for (let i = n; i >= 1; i--) {
    // i가 합성수인지 비교해야하는 숫자
    const isCount = getISCount(i);
    // isCount => 합성수 여부를 확인할 수 있음.
    if (isCount) {
      answer += 1;
    }
  }
  return answer;
}

//3. 최대값 만들기
function solution(numbers) {
  const sortedNumbers = numbers.sort((a, b) => b - a);
  return sortedNumbers[0] * sortedNumbers[1];
}

//4. 팩토리얼
const getFactorial = (i) => {
  let result = 1;
  for (let v = 1; v <= i; v++) {
    result *= v;
  }
  return result;
};

function solution(n) {
  for (let i = 1; ; i++) {
    const result = getFactorial(i);
    if (n < result) {
      return i - 1;
    }
  }
}
