const add = function(a, b) {
	const sum = a + b;
  return sum;
};

const subtract = function(a, b) {
	const diff = a - b;
  return diff;
};

const sum = function(arr) {
	let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};

const multiply = function(...num) {
  if (num.length === 0) {
    return 0;
  }

  return num.reduce((accumulator, current) => accumulator * current);

};

const power = function(base, exponent) {
	const power = Math.pow(base, exponent);
  return power;
};

const factorial = function(num) {
	if (num === 0 || num === 1) {
    return 1;
  } else {
    let result = 1;
    for (let i = 2; i <= num; i++) {
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
