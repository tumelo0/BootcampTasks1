// Exercise 5: Do While loops
// Print numbers from 1 to 10:

let i = 1;
do {
    console.log(i);
    i++;
} while (i <= 10);

// Calculate the sum of all numbers from 1 to 100:

let sum = 0;
let j = 1;
do {
    sum += j;
    j++;
} while (j <= 100);
console.log("Sum of numbers from 1 to 100:", sum);

// Prompt the user for input (greater than 10):
let userInput;
do {
    userInput = parseInt(prompt("Enter a number greater than 10:"));
} while (isNaN(userInput) || userInput <= 10);
console.log("Valid input:", userInput);

// Create a guessing game:

const secretNumber = Math.floor(Math.random() * 10) + 1; // Generate a random number between 1 and 10
let guessedNumber;

do {
    guessedNumber = parseInt(prompt("Guess the secret number (between 1 and 10):"));
    if (guessedNumber === secretNumber) {
        console.log("Congratulations! You guessed the correct number.");
    } else {
        console.log("Try again!");
    }
} while (guessedNumber !== secretNumber);