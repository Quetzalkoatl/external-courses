module.exports = function getNewObjKey(str, obj) {
  const finalArr = { ...obj };

  if (obj.hasOwnProperty(str)) {
    Object.assign(finalArr, obj);
  } else {
    finalArr[str] = 'new';
  }

  return finalArr;
};
