module.exports = function everySimulation(array, callback) {
  let count = 0;
  for (let i = 0; i < array.length; i += 1) {
    if (callback(array[i], i, array) === true) {
      count += 1;
    } else {
      break;
    }
  }

  return count === array.length;
};
