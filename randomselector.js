
 // Define an array of names
const names = ["kate","Ben", "Innocent", "Ruth", "Jonah", "Joshua", "Muplang", "Ummi", "Anthonia", "Micheal", ];

// Generate a random index into the array
const randomIndex = Math.floor(Math.random() * names.length);

// Get the name at the random index
const randomName = names[randomIndex];

// Generate a random number to determine whether to add "Truth" or "Dare"
const randomTruthOrDare = Math.random();

// If the random number is less than 0.5, add "Truth" to the name; otherwise add "Dare"
const truthOrDare = randomTruthOrDare < 0.5 ? "Truth" : "Dare";

// Concatenate the name and "Truth" or "Dare"
const selectedName = randomName + " " + truthOrDare;

// Output the selected name with "Truth" or "Dare"
console.log(selectedName);