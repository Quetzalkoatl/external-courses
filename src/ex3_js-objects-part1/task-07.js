/* eslint-disable no-restricted-syntax */
/* eslint-disable no-continue */
/* eslint-disable guard-for-in */
// module.exports = function objDeepClone(obj) {
//   const finalObj = JSON.parse(JSON.stringify(obj));

//   return finalObj;
// };

module.exports = function objDeepClone(obj) {
  const finalObj = {};
  for (const key in obj) {
    if (obj[key] instanceof Object) {
      finalObj[key] = objDeepClone(obj[key]);
      continue;
    }
    finalObj[key] = obj[key];
  }

  return finalObj;
};
