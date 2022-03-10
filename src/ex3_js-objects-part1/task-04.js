module.exports = function objKey(str, obj) {
  const finalArr = { ...obj };

  if (obj.hasOwnProperty(str)) {
    Object.assign(finalArr, obj);
  } else {
    finalArr[str] = 'new';
  }

  return finalArr;
};
