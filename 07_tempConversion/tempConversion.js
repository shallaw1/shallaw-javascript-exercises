let y = 32;
const convertToCelsius = function(temperature) {
  if (temperature === y) return 0;
  let result = ((temperature - y) * 5)/9;
  return Math.round(result * 10) / 10;
};

const convertToFahrenheit = function(temperature) {
  if (temperature === 0) return 32;
  let result = ((temperature * 9)/5) +32;
  return Math.round(result * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
