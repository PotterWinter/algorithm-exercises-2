function fizzBuzz(n) {
  //Start coding here
  let answer = [];
  for (let i = 1; i <= n; i++) {
    toString(answer.push(i));
    if (i % 15 === 0) {
      answer.splice(-1);
      answer.push("FizzBuzz");
    } else if (i % 5 === 0) {
      answer.splice(-1);
      answer.push("Buzz");
    } else if (i % 3 === 0) {
      answer.splice(-1);
      answer.push("Fizz");
    }
  }
  return answer;
}

let result1 = fizzBuzz(3);
console.log(result1); // ["1","2","Fizz"]

let result2 = fizzBuzz(5);
console.log(result2); // ["1","2","Fizz","4","Buzz"]

let result3 = fizzBuzz(15);
console.log(result3); // ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]
