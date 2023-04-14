//1. 특정문자 제거하기
function solution(my_string, letter) {
  var answer = "";
  let cnt = 0;

  while (cnt < my_string.length) {
    if (my_string[cnt] !== letter) {
      answer = answer + my_string[cnt];
    }
    cnt = cnt + 1;
  }
  return answer;
}

// 1.my_string 원소를 하나씩 꺼내기
// 2. letter 와 문자 비교
// 3. letter 에 들어있지 않은 문자를 추가하기?

// 반복문을 쓴다

//2. 각도기
function solution(angle) {
  var answer = 0;

  if (angle > 0 && angle < 90) {
    return 1;
  }
  if (angle === 90) {
    return 2;
  }
  if (angle > 90 && angle < 180) {
    return 3;
  }
  if (angle === 180) {
    return 4;
  }
  return answer;
}

//조건1. 0 < 각 < 90 예각
//조건2. 각 = 90 직각
//조건3. 90 < 각 < 180 둔각
//조건4. 각 = 180 평각
// 왜 자꾸 같다를 "="쓰는 것일까 --;

//3. 양꼬치
function solution(n, k) {
  let yangPrice = n * 12000;
  let drinkPrice = k * 2000;
  let discountNumber = Math.floor(n / 10) * 2000;

  return yangPrice + drinkPrice - discountNumber;
}

//4. 짝수의 합
function solution(n) {
  let cnt = 1;
  let sum = 0;
  while (cnt <= n) {
    if (cnt % 2 === 0) {
      sum = sum + cnt;
    }
    cnt = cnt + 1;
  }
  return sum;
}
