module.exports = function getRandomNumber(min, max) {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1));
};
