//피자 나눠먹기 1

function solution(n) {
  return n % 7 === 0 ? Math.floor(n / 7) : Math.floor(n / 7) + 1;
}

//피자 나눠먹기 2
function solution(n) {
  var answer = 0;
  let pizzaCount = 1;

  while (true) {
    if ((pizzaCount * 6) % n === 0) {
      return pizzaCount;
    }
    pizzaCount = pizzaCount + 1;
  }
  return answer;
}

//피자 나눠먹기 3
function solution(slice, n) {
  var answer = Math.ceil(n / slice);
  return answer;
}

//배열의 평균값(numbers 의 합/ numbers.length )
function solution(numbers) {
  var answer = 0;
  let sum = 0;
  let cnt = 0;
  while (cnt < numbers.length) {
    sum = sum + numbers[cnt];
    cnt = cnt + 1;
  }

  return sum / numbers.length;
}
