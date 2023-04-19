// 8day

// 1. 배열 자르기
function solution(numbers, num1, num2) {
  let cnt = num1;
  let answer = [];
  while (cnt <= num2) {
    answer.push(numbers[cnt]);
    cnt = cnt + 1;
  }
  return answer;
}

//2. 외계행성의 나이
function solution(age) {
  var answer = "";

  const stringAge = String(age);

  let cnt = 0;
  while (cnt < stringAge.length) {
    if (stringAge[cnt] === "0") {
      // 0-> 48 + 49 -> 문자 '0' 48에 49를 더하면 문자'a'이다
      answer = answer + "a"; // 'a'-> 97, 아스키코드 참고
    }
    if (stringAge[cnt] === "1") {
      answer = answer + "b";
    }
    if (stringAge[cnt] === "2") {
      answer = answer + "c";
    }
    if (stringAge[cnt] === "3") {
      answer = answer + "d";
    }
    if (stringAge[cnt] === "4") {
      answer = answer + "e";
    }
    if (stringAge[cnt] === "5") {
      answer = answer + "f";
    }
    if (stringAge[cnt] === "6") {
      answer = answer + "g";
    }
    if (stringAge[cnt] === "7") {
      answer = answer + "h";
    }
    if (stringAge[cnt] === "8") {
      answer = answer + "i";
    }
    if (stringAge[cnt] === "9") {
      answer = answer + "j";
    }
    cnt = cnt + 1;
  }
  return answer;
}

//2-1.  외계행성의 나이 반복문 사용 (꼭! 알아두기, 컴퓨터가 어떻게 문자를 저장하는지)
function solution(age) {
  var answer = "";
  const stringAge = String(age);

  let cnt = 0;
  while (cnt < stringAge.length) {
    answer = answer + String.fromCharCode(stringAge[cnt].charCodeAt(0) + 49);

    cnt = cnt + 1;
  }
  return answer;
}

//1) PROGRAMMERS-962 행성에 불시착
//2) 0~9(a~j)

// 3.진료 순서 정하기
function solution(emergency) {
  let newEmergencyArray = [];
  let cnt = 0;
  while (cnt < emergency.length) {
    newEmergencyArray.push({ value: emergency[cnt], idx: cnt });
    cnt = cnt + 1;
  }
  newEmergencyArray.sort((a, b) => b.value - a.value);

  var answer = new Array(emergency.length);

  cnt = 0;
  while (cnt < newEmergencyArray.length) {
    let item = newEmergencyArray[cnt];
    answer[item.idx] = cnt + 1;
    cnt = cnt + 1;
  }
  return answer;
}

// 4.순서쌍의 개수
function solution(n) {
  var answer = 0;
  let cnt = 1;
  let maxNumber = 1000001;
  while (true) {
    if (cnt > n) {
      break;
    }
    if (n % cnt === 0) {
      answer = answer + 1;
    }
    cnt = cnt + 1;
  }
  return answer;
}
