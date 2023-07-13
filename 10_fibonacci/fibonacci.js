const fibonacci = function fibonacci(n) {

  // check if input is negative   
  if (n <= 0) {
    return 'OOPS';
  }
  // fibonacci sequence always starts with 1 1
  if (n === '1' || n === '2') {
    return 1;
  }
  
  let a = 1;
  let b = 1;
  let result = 0;
  
  // calculates fibonacci number if input is greater than 3
  for (let i = 3; i <= n; i++) {
    result = a + b;
    a = b;
    b = result;
  }
  
  return result;
}


// Do not edit below this line
module.exports = fibonacci;
