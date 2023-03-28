const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const words = [
  easy = "apple", "banana", "orange", "pear", "grape", "kiwi",
  medium = "cherry", "mango", "pineapple", "strawberry", "blueberry",
  defificulty = "watermelon", "peach", "apricot", "plum", "pomegranate"
];

function shuffleWord(word) {
  let shuffled = '';
  word = word.split('');
  while (word.length > 0) {
    shuffled += word.splice(word.length * Math.random() << 0, 1);
  }
  return shuffled;
}

function playGame(difficulty) {
  const attempts = { easy: 10, medium: 7, difficult: 5 };
  let word = words[Math.floor(Math.random() * words.length)];
  let scrambled = shuffleWord(word);

  console.log(`Your word is: ${scrambled}`);

  let remainingAttempts = attempts[difficulty];
  rl.setPrompt(`Guess the word (${remainingAttempts} attempts remaining): `);
  rl.prompt();

  rl.on('line', (guess) => {
    remainingAttempts--;
    if (guess.trim().toLowerCase() === word) {
      console.log('Congratulations, you guessed the word!');
      rl.close();
    } else if (remainingAttempts === 0) {
      console.log(`Sorry, you're out of attempts. The word was "${word}".`);
      rl.close();
    } else {
      console.log(`Incorrect. You have ${remainingAttempts} attempts remaining.`);
      rl.prompt();
    }
  });
}

rl.question('Select a difficulty (easy/medium/difficult): ', (difficulty) => {
  if (difficulty === 'easy' || difficulty === 'medium' || difficulty === 'difficult') {
    playGame(difficulty);
  } else {
    console.log('Invalid difficulty level. Please select easy, medium, or difficult.');
    rl.close();
  }
});
