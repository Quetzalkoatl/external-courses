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
      Promise.resolve(callback).then(() => {
        value = 500;
      });
      return this;
    },
    getResult() {
      return value;
    },
  };
}

const calculator = new Calculator();

module.exports = calculator;
