// Exercise 3: For loops

// Print numbers from 1 to 10:

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// Print all even numbers between 1 and 20:

for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}

// Calculate the sum of all numbers from 1 to 100:

let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log("Sum of numbers from 1 to 100:", sum);

// Print each element of the array [1, 2, 3, 4, 5]:

const numbers = [1, 2, 3, 4, 5];
for (const num of numbers) {
    console.log(num);
}

// Find and print the largest number in the array [3, 7, 2, 5, 10, 6]:

const moreNumbers = [3, 7, 2, 5, 10, 6];
let largestNumber = moreNumbers[0]; // Initialize with the first element

for (const num of moreNumbers) {
    if (num > largestNumber) {
        largestNumber = num;
    }
}

console.log("Largest number:", largestNumber);


