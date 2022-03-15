/* eslint-disable no-restricted-syntax */
module.exports = function checkPrototypeProperty(str, obj) {
  for (const key in Object.getPrototypeOf(obj)) {
    if (key === str) {
      return Object.getPrototypeOf(obj)[key];
    }
  }

  return undefined;
};
