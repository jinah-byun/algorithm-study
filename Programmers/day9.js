//1. 개미군단
function solution(hp) {
  let cnt = 0;
  if (hp >= 5) {
    cnt += Math.floor(hp / 5);
    hp -= Math.floor(hp / 5) * 5;
  }
  if (hp >= 5) {
    cnt += Math.floor(hp / 3);
    hp -= Math.floor(hp / 3) * 3;
  }
  if (hp >= 5) {
    cnt += Math.floor(hp / 1);
    hp -= Math.floor(hp / 1) * 1;
  }

  return cnt;
}

//1-1. 개미군단 refactor
function solution(hp) {
  let cnt = 0;
  let arr = [5, 3, 1]; // 배열을 만들어준다.
  let i = 0;

  while (i < arr.length) {
    let item = arr[i];
    if (hp >= item) {
      cnt += Math.floor(hp / item);
      hp -= Math.floor(hp / item) * item;
    }
    i += 1;
  }
  return cnt;
}

//1-2. for문으로 바꾸기

function solution(hp) {
  let cnt = 0;
  let arr = [5, 3, 1]; // 배열을 만들어준다.
  let i = 0;

  for (let i = 0; i < arr.length; i++) {
    let item = arr[i];
    if (hp >= item) {
      cnt += Math.floor(hp / item);
      hp -= Math.floor(hp / item) * item;
    }
  }
  return cnt;
}

//2. 모스부호
function solution(letter) {
  let currentMorse = "";
  let answer = "";
  for (let i = 0; i < letter.length; i++) {
    const item = letter[i];
    if (item === " ") {
      answer += morse[currentMorse];
      currentMorse = "";
    } else {
      currentMorse += item;
    }
  }
  answer += morse[currentMorse];
  return answer;
}

//2-1. 모스부호 refactor
function solution(letter) {
  let answer = "";
  const splittedLetter = letter.split("");
  for (let i = 0; i < splittedLetter.length; i++) {
    answer += morse[splittedLetter[i]];
  }
  return answer;
}

//2. 가위 바위 보
const win = {
  2: "0",
  0: "5",
  5: "2",
};

function solution(rsp) {
  var answer = "";
  for (let i = 0; i < rsp.length; i++) {
    const item = rsp[i];
    if (item === "2") {
      answer += "0";
    }
    if (item === "2") {
      answer += "5";
    }
    if (item === "5") {
      answer += "2";
    }
  }
  return answer;
}
