const sumAll = function(a, b) {
  let min = Math.min(a,b);
  let max = Math.max(a,b);
  let sum = 0;
  if (typeof a !== 'number' || typeof b !== 'number' || a < 0 || b < 0) {

    return 'ERROR';
  } else {
    for (let i = min; i <= max; i++) {
      sum += i;
    }

    return sum;
  }
};

// Do not edit below this line
module.exports = sumAll;
