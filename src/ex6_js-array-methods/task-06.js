module.exports = function reduceSimulation(array, callback, initialValue) {
  let count = 1;
  let previousValue = array[0];
  if (initialValue) {
    previousValue = initialValue;
    count = 0;
  }
  for (let i = count; i < array.length; i += 1) {
    previousValue = callback(previousValue, array[i], i, array);
  }

  return previousValue;
};
