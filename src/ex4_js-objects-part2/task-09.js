module.exports = function mergeTwoStrings(mainString, sideString, num) {
  const mainStrToArr = mainString.split(' ');
  const mergedString = [];

  for (let i = 0; i < mainStrToArr.length; i += 1) {
    mergedString.push(mainStrToArr[i]);
    if (i === num) {
      mergedString.push(sideString);
    }
  }

  return mergedString.join(' ');
};
