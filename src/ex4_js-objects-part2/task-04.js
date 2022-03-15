module.exports = function firstLetterToUpperCase(str) {
  return str[0].toUpperCase() + str.substring(1, str.length);
};
