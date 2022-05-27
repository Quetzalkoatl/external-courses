module.exports = function firstLetterToUpperCase(str) {
  const strToArrWithUpperCase = str
    .split(' ')
    .map((el) => el.slice(0, 1).toUpperCase() + el.slice(1, el.length))
    .join(' ');

  return strToArrWithUpperCase;
};
