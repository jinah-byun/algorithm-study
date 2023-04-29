//1. 주사위의 갯수
function solution(box, n) {
  const width = Math.floor(box[0] / n);
  const length = Math.floor(box[1] / n);
  const height = Math.floor(box[2] / n);

  return width * length * height;
}

//Math.floor() static 메서드는 항상 반올림하여 지정된 숫자보다 작거나 같은 최대 정수를 반환
