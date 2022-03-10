/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */

// Способ номер 1
module.exports = function objDeepClone(obj) {
  const finalObj = {};
  for (const key in obj) {
    if (obj[key] instanceof Object) {
      finalObj[key] = objDeepClone(obj[key]);
    }
    finalObj[key] = obj[key];
  }

  return finalObj;
};

// Способ номер 2
// module.exports = function objDeepClone(obj) {
//   const finalObj = JSON.parse(JSON.stringify(obj));

//   return finalObj;
// };
