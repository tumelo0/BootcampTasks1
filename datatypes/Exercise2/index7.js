// Exercise 2: Boolean and Operators

// Comparison Operators:

const x = 8;
const y = 12;

const isXGreaterThanY = x > y;
const isXLessThanOrEqualToY = x <= y;
const isXEqualToY = x === y;
const isXNotEqualToY = x !== y;

console.log("Is x greater than y?", isXGreaterThanY);
console.log("Is x less than or equal to y?", isXLessThanOrEqualToY);
console.log("Is x equal to y?", isXEqualToY);
console.log("Is x not equal to y?", isXNotEqualToY);


// Logical Operations:

const a = true;
const b = false;

const aAndB = a && b; // Logical AND
const aOrB = a || b; // Logical OR
const notA = !a; // Logical NOT

console.log("a AND b:", aAndB);
console.log("a OR b:", aOrB);
console.log("NOT a:", notA);


// Assignment Operators:

let p = 10;

p += 5; // Add 5 to p
console.log("p after addition:", p);

p -= 3; // Subtract 3 from p
console.log("p after subtraction:", p);

p *= 2; // Multiply p by 2
console.log("p after multiplication:", p);

p /= 4; // Divide p by 4
console.log("p after division:", p);

p %= 7; // Calculate remainder when dividing p by 7
console.log("p after modulus:", p);