//재귀함수
function Fibo(n) {
  if (n <= 1) {
    return 1;
  } else {
    return Fibo(n - 1) + Fibo(n - 2);
  }
}
console.log(Fibo(10)); //89

//for문
function forFibo(n) {
  let last1 = 1;
  let last2 = 1;
  let result = 0;

  for (let i = 1; i < n; i++) {
    result = last1 + last2;
    last1 = last2;
    last2 = result;
  }
  return result;
}
console.log(forFibo(10)); //89
