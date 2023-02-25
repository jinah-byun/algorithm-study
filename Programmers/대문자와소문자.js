function solutio(my_string) {
  var answer = "";
  for (let a of my_string)
    answer += a === a.toLowerCase() ? a.toUpperCase() : a.toLowerCase();
  return answer;
}
