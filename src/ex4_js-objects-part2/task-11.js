/* eslint-disable no-restricted-syntax */
module.exports = function getUniqueSymbols(str) {
  const strToArr = str.split('');
  const finalObject = {};
  for (let i = 0; i < strToArr.length; i += 1) {
    if (finalObject[strToArr[i]] !== undefined) {
      finalObject[strToArr[i]] += 1;
    } else {
      finalObject[strToArr[i]] = 1;
    }
  }
  for (const key in finalObject) {
    console.log(key, finalObject[key]);
  }
};
