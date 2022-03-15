module.exports = function objectWithoutPrototype() {
  const obj = Object.create(null);

  return obj;
};
