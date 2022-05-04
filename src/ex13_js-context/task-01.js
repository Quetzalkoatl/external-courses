function Calculator() {
  let value = 0;
  return {
    add(num) {
      value += num || value;
      return this;
    },
    subtract(num) {
      value -= num || value;
      return this;
    },
    multiply(num) {
      value = value * num || value;
      return this;
    },
    divide(num) {
      value = value / num || value;
      return this;
    },
    setState(num) {
      value = num || value;
      return this;
    },
    reset() {
      value = 0;
      return this;
    },
    fetchData(callback) {
      const result = new Promise((resolve) => {
        resolve(callback);
      });
      result.then((value = 500));
      return value;
    },
    getResult() {
      return value;
    },
  };
}

const calculator = new Calculator();

module.exports = calculator;
