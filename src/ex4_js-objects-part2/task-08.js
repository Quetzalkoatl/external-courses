module.exports = function getCamelCase(str) {
  const strToCamelCase = str
    .split(' ')
    .map(
      (el) => el.slice(0, 1).toUpperCase() + el.slice(1, el.length).toLowerCase(),
    )
    .join('');

  const firstLetter = strToCamelCase.slice(0, 1).toLowerCase();
  const otherLetters = strToCamelCase.slice(1, strToCamelCase.length);
  return firstLetter + otherLetters;
};
