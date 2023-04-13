//1. 옷가게 할인받기
function solution(price) {
  if (price >= 500000) {
    return Math.floor(price * 0.8);
  }
  if (price >= 300000) {
    return Math.floor(price * 0.9);
  }
  if (price >= 100000) {
    return Math.floor(price * 0.95);
  }

  return price;
}
//2. 아이스 아메리카노

function solution(money) {
  return [Math.floor(money / 5500), money % 5500];
}
//1) money/5500 나눈 몫을 구한다.
//2) money/5500 나눈 나머지를 구한다.
//3) 매열에 차례대로 담는다.

//3. 나이 출력
function solution(age) {
  return new Date().getFullYear() - age;
}

//4. 배열 뒤집기
function solution(num_list) {
  const newArray = [];
  let cnt = num_list.length - 1;
  while (cnt >= 0) {
    newArray.push(num_list[cnt]);
    cnt = cnt - 1;
  }
  return newArray;
}

//5. 문자열 뒤집기
function solution(my_string) {
  var answer = "";
  let cnt = my_string.length - 1;
  while (cnt >= 0) {
    answer += my_string[cnt];
    cnt = cnt - 1;
  }
  return answer;
}

//6. 별찍기(직각삼각형 출력하기)
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input = line.split(" ");
}).on("close", function () {
  const n = Number(input[0]);

  let line = 1;
  while (line <= n) {
    let starStr = "";
    let cnt = 0;
    while (cnt < line) {
      starStr = starStr + "*";
      cnt = cnt + 1;
    }
    console.log(starStr);
    line = line + 1;
  }
});
//7. 짝수 홀수 개수 출력하기
function solution(num_list) {
  let cnt = 0;
  let even = 0;
  let odd = 0;
  while (cnt < num_list.length) {
    if (num_list[cnt] % 2 === 0) {
      even = even + 1;
    } else {
      odd = odd + 1;
    }
    cnt = cnt + 1;
  }
  return [even, odd];
}

//8. 문자 반복 출력하기
function solution(my_string, n) {
  var answer = "";
  let cnt = 0;
  while (cnt < my_string.length) {
    const repeatCharacter = my_string[cnt];

    let repeatCnt = 0;
    while (repeatCnt < n) {
      answer = answer + repeatCharacter;
      repeatCnt = repeatCnt + 1;
    }
    cnt = cnt + 1;
  }
  return answer;
}
