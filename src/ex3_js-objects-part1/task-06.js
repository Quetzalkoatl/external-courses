module.exports = function getProperty(object, propertyPath) {
  const pathArray = propertyPath.split('.');
  let finalObj = { ...object };

  for (let i = 0; i < pathArray.length; i += 1) {
    let mediumPath = pathArray[i];
    if (finalObj[mediumPath]) {
      finalObj = finalObj[mediumPath];
      mediumPath = pathArray[i + 1];
    } else {
      return undefined;
    }
  }

  return finalObj;
};
