function solution(array, n) {
  var answer = 0; //리턴값으로 쓸 수 있는 정수
  for (i = 0; i < array.length; i++) {
    if (array[i] == n) {
      // array의 i번쨰수와 매개변수 n이 같다면
      answer++; //answer 1 증가
    }
  }
  return answer;
}
