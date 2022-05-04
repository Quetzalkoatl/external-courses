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
    async fetchData(callback) {
      await callback;
      value = 500;
      return this;
    },
    getResult() {
      return value;
    },
  };
}

const calculator = new Calculator();

// module.exports = calculator;
console.log(calculator.getResult()); // 0

calculator.fetchData(calculator.add(50));

// -- завершение асинхронной операции --

console.log(calculator.getResult()); // 500
