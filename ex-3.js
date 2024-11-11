function validatePIN(pin) {
  //Start coding here

  let answer = false;
  console.log(Number(pin));
  console.log(pin);

  if (pin.length === 4 || (pin.length === 6 && !isNaN(pin))) {
    answer = true;
  } else if (Number(pin) === NaN) {
    console.log(pin);
    console.log(Number(pin));
    answer = false;
  }

  return (pin.length === 4 || pin.length === 6) && !isNaN(pin);
}

let result1 = validatePIN("1234");
console.log(result1); // true

let result2 = validatePIN("12345");
console.log(result2); // false

let result3 = validatePIN("a234");
console.log(result3); // false
