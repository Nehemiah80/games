// Define the words for each difficulty level
const words = {
    easy: ["apple", "banana", "cherry", "grape", "kiwi", "orange"],
    medium: ["apricot", "blueberry", "mango", "papaya", "peach", "strawberry"],
    difficult: ["avocado", "blackberry", "cantaloupe", "pineapple", "pomegranate", "watermelon"]
  };
  
  // Function to scramble a word
  function scrambleWord(word) {
    let scrambledWord = '';
    let letters = word.split('');
    while (letters.length > 0) {
      let randomIndex = Math.floor(Math.random() * letters.length);
      scrambledWord += letters[randomIndex];
      letters.splice(randomIndex, 1);
    }
    return scrambledWord;
  }
  
  // Function to prompt the user to choose a difficulty level
  function getDifficulty() {
    let difficulty = '';
    while (difficulty !== 'easy' && difficulty !== 'medium' && difficulty !== 'difficult') {
      difficulty = prompt("Choose a difficulty level: easy, medium,  difficult");
    }
    return difficulty;
  }
  
  // Get the difficulty level from the user
  const difficulty = getDifficulty();
  
  // Select a random word from the chosen difficulty level
  const wordList = words[difficulty];
  const randomIndex = Math.floor(Math.random() * wordList.length);
  const word = wordList[randomIndex];
  
  // Scramble the word
  const scrambledWord = scrambleWord(word);
  
  // Prompt the user to guess the scrambled word
  let guess = '';
  while (guess !== word) {
    guess = prompt(`Scrambled word: ${scrambledWord}\nWhat is the unscrambled word?`);
    if (guess === null) {
      console.log("Goodbye!");
      process.exit(0);
    }
    if (guess !== word) {
      console.log("Incorrect. Try again.");
    }
  }
  
  console.log("Correct! You win!");