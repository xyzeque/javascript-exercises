const palindromes = function (str) {
  // removes non-alphanumeric characters and converts to lowercase
  const strModified = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  // reverses modified string
  const strReversed = strModified.split('').reverse().join('');
  // compares modified string with the reversed version
  return strModified === strReversed;
};

// Do not edit below this line
module.exports = palindromes;
