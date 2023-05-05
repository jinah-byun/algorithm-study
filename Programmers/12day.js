//1. 모음제거
function solution(my_string) {
  let answer = "";
  for (let i = 0; i < my_string.length; i++) {
    const item = my_string[i];
    if (item === "a") {
      continue;
    }
    if (item === "e") {
      continue;
    }
    if (item === "i") {
      continue;
    }
    if (item === "o") {
      continue;
    }
    if (item === "u") {
      continue;
    }
    answer += item;
  }
}
// 1-1. 모음제거 리팩토링
function solution(my_string) {
  let answer = "";
  const vowels = ["a", "e", "i", "o", "u"];

  for (let i = 0; i < my_string.length; i++) {
    const item = my_string[i];

    let isVowel = false;
    for (let j = 0; j < vowels.length; j++) {
      if (item === vowels[j]) {
        isVowel = true;
        break;
      }
    }
    if (isVowel) continue;
    answer += item;
  }
}

//2. 문자열 정렬하기(1)-바스키코드
function solution(my_string) {
  var answer = [];
  for (let i = 0; i < my_string.length; i++) {
    const item = Number(my_string[i]); //문자를 하나씩 꺼낸다
    if (Number.isNaN(item)) {
      continue;
    }
    answer.push(item);
  }
  answer.sort((a, b) => a - b);
  return answer;
}

//3. 숨어있는 숫자의 덧셈(1)
function solution(my_string) {
  let answer = 0;

  for (let i = 0; i < my_string.length; i++) {
    const item = Number(my_string[i]); //문자를 하나씩 꺼낸다
    if (Number.isNaN(Number(item))) {
      continue;
    }
    answer += item;
  }

  return answer;
}
