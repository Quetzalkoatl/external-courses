module.exports = function deleteSpace(str) {
  return str.replace(/^\s|\s$/g, '');
};
