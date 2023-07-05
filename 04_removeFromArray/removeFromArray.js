const removeFromArray = function(arr, itemToRemove) {
  const newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== itemToRemove) {
      newArray.push(arr[i]);
    }
  }
  return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
