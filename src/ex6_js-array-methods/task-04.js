module.exports = function filterSimulation(array, callback) {
  const finalArray = [];
  for (let i = 0; i < array.length; i += 1) {
    if (callback(array[i], i, array)) {
      finalArray.push(array[i]);
    }
  }

  return finalArray;
};
