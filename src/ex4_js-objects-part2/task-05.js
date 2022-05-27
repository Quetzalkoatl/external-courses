module.exports = function getSubstringInString(str, substr) {
  const strToArray = str.split(' ');

  for (let i = 0; i < strToArray.length; i += 1) {
    if (strToArray[i] === substr) {
      return true;
    }
  }

  return false;
};
