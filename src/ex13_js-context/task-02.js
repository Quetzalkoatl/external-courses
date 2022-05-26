function Hangman(word) {
  let currentWord = '';
  let errors = 6;
  let answer = '_'.repeat(currentWord.length);
  let wrongSymbols = [];
  currentWord = word;
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
        return this;
      }
      if (answer === currentWord) {
        console.log(`${answer} | You won!`);
        return this;
      }
      console.log(answer);
      return this;
    },
    getGuessedString() {
      console.log(answer);
      return this;
    },
    getErrorsLeft() {
      console.log(errors);
      return this;
    },
    getWrongSymbols() {
      console.log(wrongSymbols);
      return this;
    },
    getStatus() {
      console.log(`${answer} | errors left ${errors}`);
      return this;
    },
    startAgain(newWord) {
      currentWord = newWord;
      errors = 6;
      answer = '_'.repeat(currentWord.length);
      wrongSymbols = [];
      return this;
    },
  };
}

const hangman = new Hangman('webpurple');

module.exports = hangman;

hangman.guess('w'); // "w________"
hangman.guess('e'); // "we______e"
hangman.guess('a'); // "wrong letter, errors left 5 | a"
hangman.guess('p'); // "we_p__p_e"
hangman.guess('k'); // "wrong letter, errors left 4 | a,k"
hangman.getGuessedString(); // we_p__p_e
hangman.getErrorsLeft(); // 4
hangman.getWrongSymbols(); // ["a","k"]
hangman.getStatus(); // "we_p__p_e | errors left 4"
hangman
  .guess('b') // "webp___p_e"
  .guess('l') // "webp__ple"
  .guess('u') // "webpu_ple"
  .guess('r'); // "webpurple | You won!"
hangman
  .startAgain('webpurple')
  .guess('w') // "w________"
  .getStatus(); // "w_______ | errors left 6"
