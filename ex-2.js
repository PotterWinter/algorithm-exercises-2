function countPositivesSumNegatives(input) {
  //Start coding here
  let possitive = []
  let minus = 0
  for (let i=0; i <= input.length; i++){
    if ( input[i] > 0 ){
      possitive.push(input[i])
    } else if (input[i] < 0) {
      console.log(input[i] * -1)
      minus += (input[i] * -1)
      console.log(minus)
    }
  }
  return [...possitive.slice(-1),minus * -1]
}

let result1 = countPositivesSumNegatives([
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15,
]);
console.log(result1); // [10, -65]

let result2 = countPositivesSumNegatives("");
console.log(result2); // []
