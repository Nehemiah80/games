const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Word lists for different difficulty levels
const easyWords = ["dog", "cat", "hat", "cup", "rug", "sun"];
const mediumWords = ["apple", "orange", "banana", "grape", "kiwi", "peach"];
const difficultWords = ["javascript", "algorithm", "computer", "programming", "debugging", "testing"];

// Scramble function to randomly scramble the letters of a word
function scrambleWord(word) {
  let letters = word.split('');
  for (let i = letters.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [letters[i], letters[j]] = [letters[j], letters[i]];
  }
  return letters.join('');
}

// Game function to play the word scramble game
function playGame(wordList) {
  let score = 0;
  let numWords = wordList.length;

  // Loop through each word in the word list
  for (let i = 0; i < numWords; i++) {
    let word = wordList[i];
    let scrambledWord = scrambleWord(word);

    console.log(`Scrambled word: ${scrambledWord}`);

    // Prompt user for answer
    rl.question('Your guess: ', (answer) => {
      if (answer.toLowerCase() === word.toLowerCase()) {
        console.log('Correct!');
        score++;
      } else {
        console.log(`Incorrect. The correct answer was "${word}".`);
      }

      // Check if all words have been played
      if (i === numWords - 1) {
        console.log(`Game over. Your final score is ${score} out of ${numWords}.`);
        rl.close();
      }
    });
  }
}

// Prompt user for difficulty level and start game
rl.question('Select difficulty level (easy, medium, difficult): ', (answer) => {
  switch (answer.toLowerCase()) {
    case 'easy':
      playGame(easyWords);
      break;
    case 'medium':
      playGame(mediumWords);
      break;
    case 'difficult':
      playGame(difficultWords);
      break;
    default:
      console.log('Invalid input. Please select a difficulty level.');
      rl.close();
  }
});