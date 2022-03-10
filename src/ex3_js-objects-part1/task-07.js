module.exports = function objDeepClone(obj) {
  const finalObj = JSON.parse(JSON.stringify(obj));

  return finalObj;
};
