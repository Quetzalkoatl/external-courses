module.exports = function mapSimulation(array, callback) {
  const finalArray = [];
  for (let i = 0; i < array.length; i += 1) {
    finalArray.push(callback(array[i], i, array));
  }

  return finalArray;
};
