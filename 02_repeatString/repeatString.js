const repeatString = function(str, num) {
  let repeatedString = '';

  if (num >= 0) {
    for (let i = 0; i < num; i++) {
      repeatedString += str;
    }
    return repeatedString;
  } else {
    return 'ERROR';
  }
};


// Do not edit below this line
module.exports = repeatString;
