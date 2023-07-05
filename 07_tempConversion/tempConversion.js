const convertToCelsius = function(temp) {
  const celsius = ((temp - 32) * 5/9).toFixed(1);
  return parseFloat(celsius);
};

const convertToFahrenheit = function(temp) {
  const fahrenheit = (temp * 9/5 + 32).toFixed(1);
  return parseFloat(fahrenheit);
};



// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
