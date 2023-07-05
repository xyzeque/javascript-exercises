const removeFromArray = function(arr, ...itemsToRemove) {
  const newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (!itemsToRemove.includes(arr[i])) {
      newArray.push(arr[i]);
    }
  }
  return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
