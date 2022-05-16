function Hangman(word) {
  let currentWord = word;
  let errors = 6;
  let answer = '_'.repeat(currentWord.length);
  let wrongSymbols = [];
  return {
    guess(symbol) {
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
      }
      if (answer === currentWord) {
        console.log(`${answer} | You won!`);
      }
      console.log(answer);
      return answer;
    },
    getGuessedString() {
      console.log(answer);
      return answer;
    },
    getErrorsLeft() {
      console.log(errors);
      return errors;
    },
    getWrongSymbols() {
      console.log(wrongSymbols);
      return wrongSymbols;
    },
    getStatus() {
      console.log(`${answer} | errors left ${errors}`);
    },
    startAgain(newWord) {
      currentWord = newWord;
      errors = 6;
      answer = '_'.repeat(currentWord.length);
      wrongSymbols = [];
    },
  };
}

const hangman = new Hangman('webpurple');

module.exports = hangman;
