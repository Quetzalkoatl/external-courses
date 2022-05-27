const Calculator = function () {
  let value = 0;
  return {
    getResult() {
      return value;
    },
    reset() {
      value = 0;
      return value;
    },
    add(num) {
      const bestNum = num || 0;
      value += bestNum;
      function addMore(additionalValue) {
        const bestValue = additionalValue || 0;
        value += bestValue;

        return addMore;
      }

      return addMore;
    },
    subtract(num) {
      const bestNum = num || 0;
      value -= bestNum;
      function substractMore(additionalValue) {
        const bestValue = additionalValue || 0;
        value -= bestValue;

        return substractMore;
      }

      return substractMore;
    },
    multiply(num) {
      const bestNum = num || 1;
      value *= bestNum;
      function multiplyMore(additionalValue) {
        const bestValue = additionalValue || 1;
        value *= bestValue;

        return multiplyMore;
      }

      return multiplyMore;
    },
    divide(num) {
      const bestNum = num || 1;
      value /= bestNum;
      function divideMore(additionalValue) {
        const bestValue = additionalValue || 1;
        value /= bestValue;

        return divideMore;
      }

      return divideMore;
    },
  };
};

const calculator = Calculator();

module.exports = calculator;
