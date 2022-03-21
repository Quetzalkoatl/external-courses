module.exports = function sliceSimulation(arr, start, end) {
  let getStart = start;
  let getEnd = end;
  const finalArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (!start) {
      getStart = 0;
    }
    if (start < 0) {
      getStart = arr.length + start;
    }
    if (end < 0) {
      getEnd = arr.length + end;
    }
    if (!end) {
      getEnd = arr.length;
    }
    if (i >= getStart && i < getEnd) {
      finalArr.push(arr[i]);
    }
  }

  return finalArr;
};
