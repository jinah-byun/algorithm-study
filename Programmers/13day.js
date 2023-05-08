//1. 문자를 하나씩 돈다

function solution(s) {
  let numbers = []; //숫자를 모았으니 넣읍시다(a3)
  let collectNumber = ""; //숫자를 넣읍시다9(a1)
  for (let i = 0; i < s.length; i++) {
    const item = s[i]; //i가 0부터 for문 돌면 const item에 넣도록합시다
    if (item === "Z") {
      numbers.pop();
    } else if (item === " ") {
      numbers.push(Number(collectNumber));
      collectNumber = "";
    } else {
      // 숫자
      collectNumber += item; //숫자를 모았습니다.(a2)
    }
  }
  if (collectNumber !== "") {
    numbers.push(Number(collectNumber));
  }
  //numbers <= 우리가 더해야할 모든 숫자 배열
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

// 몇가지 경우의 수
//a. -, 0-9사이 숫자
//b. Z
//c. 공백
//if문 써야겠쥬

//1-1. 리팩토링
//1. 문자를 하나씩 돈다

function solution(s) {
  let sum = 0;
  const splittedArray = s.split("");
  for (let i = 0; i < splittedArray.length; i++) {
    const item = splittedArray[i];
    if (item !== "Z") {
      sum += Number(item);
    } else {
      sum -= Number(splittedArray[i - 1]);
    }
  }

  return sum;
}
