const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(num1) {
  let sumOfNumber = 0;
  if (num1.length === 0){
    return 0;
  }else{
	for(let i = 0; i < num1.length; i++ ){
    sumOfNumber += num1[i];
  }
  return sumOfNumber;
  }
};

const multiply = function(num1) {
  let multiplyNumber = 1;
  for(let i = 0; i < num1.length; i++){
    multiplyNumber *=num1[i];
  }
  return multiplyNumber;
};

const power = function(base, exponent) {
	return base**exponent;
};

const factorial = function(factorial) {
  if(factorial === 0){
    return 1;
  }else{
    let result = 1;
    for(let i = 1; i <= factorial; i++){
      result *= i;
    }
    return result;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
