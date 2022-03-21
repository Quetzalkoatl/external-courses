module.exports = function someSimulation(array, callback) {
  for (let i = 0; i < array.length; i += 1) {
    if (callback(array[i], i, array) === true) return true;
  }

  return false;
};
