// TASK 2 - Declare variables
let num1 = 10;
let num2 = 5;

// TASK 3 - Perform arithmetic operators such as +, -, *, /, % on variables
const addition = num1 + num2;
console.log(addition);

const subtraction = num1 - num2;
console.log(subtraction);

const multiplication = num1 * num2;
console.log(multiplication);

const division = num1 / num2;
console.log(division);

const modulus = num1 % num2;
console.log(modulus);

// TASK 4 - Icrement and Decrement each variable by 1
  // For num1
let incrementNumb1 = ++num1;
console.log(incrementNumb1);

let decrementNumb1 = --num1;
console.log(decrementNumb1);

  // For num2
let incrementNumb2 = ++num2;
console.log(incrementNumb2);

let decrementNumb2 = --num2;
console.log(decrementNumb2);

// TASK 5 - Get input from users and store in variable
let input1 = prompt("enter first value"); 
let input2 = prompt("enter second value"); 

// TASK 6 - convert the input to numbers
const convertInput1 = parseFloat(input1);
const convertInput2 = parseFloat(input2);

// TASK 7 - Perform arithmetic operators such as +, -, *, /, % on user input
  // operator +
console.log(convertInput1 + convertInput2);
  // operator -
console.log(convertInput1 - convertInput2);
  // operator *
console.log(convertInput1 * convertInput2);
  // operator /
console.log(convertInput1 / convertInput2);
  // operator %
console.log(convertInput1 % convertInput2);
