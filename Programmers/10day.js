//1. 점의 위치 구하기

function solution(dot) {
  const x = dot[0];
  const y = dot[1];
  if (x > 0 && y > 0) {
    return 1;
  }

  if (x < 0 && y > 0) {
    return 2;
  }

  if (x < 0 && y < 0) {
    return 3;
  }

  if (x > 0 && y < 0) {
    return 4;
  }
}

//2. 2차원으로 만들기-배열안에 배열
//[1,2,3,4,5]
//["apple", "banana"]
//[[1,2,3,],[1,2,3]] - 이차원 배열
function solution(num_list, n) {
  const result = [];
  let tempArray = [];
  for (let i = 0; i < num_list.length; i++) {
    const item = num_list[i];
    tempArray.push(item);
    if (tempArray.length === n) {
      result.push(tempArray);
      tempArray = [];
    }
  }
  return result;
}

//3. 공 던지기
function solution(numbers, k) {
  let cnt = 1;
  for (let i = 0; ; i += 2) {
    i %= numbers.length; // i = i % numbers.length;
    const item = numbers[i];
    if (cnt === k) {
      return item;
    }
    cnt += 1;
  }
}

//4. 배열 회전시키기
// numbers[numbers.length-1]
function solution(numbers, direction) {
  const answer = [];
  if (direction === "right") {
    answer.push(numbers[numbers.length - 1]);
    for (let i = 0; i < numbers.length - 1; i++) {
      answer.push(numbers[i]);
    }
  } else {
    for (let i = 1; i < numbers.length; i++) {
      answer.push(numbers[i]);
    }
    answer.push(numbers[0]);
  }

  return answer;
}
