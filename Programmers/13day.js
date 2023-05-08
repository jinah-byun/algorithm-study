//1. 컨트롤 제트
function solution(s) {
  //100
  let numbers = [];
  let collectNumber = "";
  for (let i = 0; i < s.length; i++) {
    const item = s[i];
    if (item === "z") {
      numbers.pop();
    } else if (item === "") {
      numbers.push(Number(collectNumber));
      collectNumber = "";
    } else {
      collectNumber += item;
    }
  }
  if (collectNumber !== "") {
    numbers.push(Number(collectNumber));
  }
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}
//a. -, 0~9사이 숫자
//b. z
//c. 공백
