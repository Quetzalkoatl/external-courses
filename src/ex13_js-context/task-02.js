function Hangman(word) {
  let currentWord = word;
  let errors = 6;
  let answer = '_'.repeat(currentWord.length);
  let wrongSymbols = [];
  function guess(symbol) {
    let count = 0;
    for (let i = 0; i < currentWord.length; i += 1) {
      if (symbol.toLowerCase() === currentWord[i].toLowerCase()) {
        const test = answer.split('');
        test[i] = symbol.toLowerCase();
        answer = test.join('');
        count += 1;
      }
    }
    if (count === 0) {
      errors -= 1;
      wrongSymbols.push(symbol.toLowerCase());
      console.log(
        `wrong letter, errors left ${errors} | ${wrongSymbols.join(',')}`,
      );
      return this;
    }
    if (answer === currentWord) {
      console.log(`${answer} | You won!`);
      return this;
    }
    console.log(answer);
    return this;
  }
  function getGuessedString() {
    console.log(answer);
    return this;
  }
  function getErrorsLeft() {
    console.log(errors);
    return this;
  }
  function getWrongSymbols() {
    console.log(wrongSymbols);
    return this;
  }
  function getStatus() {
    console.log(`${answer} | errors left ${errors}`);
    return this;
  }
  function startAgain(newWord) {
    currentWord = newWord;
    errors = 6;
    answer = '_'.repeat(currentWord.length);
    wrongSymbols = [];
    return this;
  }
  return {
    guess,
    getWrongSymbols,
    getStatus,
    getErrorsLeft,
    getGuessedString,
    startAgain,
  };
}

const hangman = new Hangman('webpurple');

module.exports = hangman;
