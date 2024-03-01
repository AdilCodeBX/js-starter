/* eslint-disable prefer-const */
/* eslint-disable no-restricted-globals */
/* eslint-disable brace-style */
/* eslint-disable linebreak-style */
/* eslint-disable indent */

'use strict';

// Say hello let'us build a calculator
alert("Hello there, let'us build a simple calculator");
// ask the user for the first number
let num1 = Number(prompt('please enter first number:'));

// ask operation
const operation = prompt('please enter operation: (+, -, *, /, %):');
// ask the user for the second number
let num2 = Number(prompt('please enter second number:'));

while (isNaN(num1) || isNaN(num2)) {
  num1 = Number(prompt('please enter first number:'));
  num2 = Number(prompt('please enter second number:'));
}

let result = null;

if (operation === '+') {
  result = num1 + num2;
} else if (operation === '-') {
  result = num1 - num2;
} else if (operation === '*') {
  result = num1 * num2;
} else if (operation === '/') {
  result = num1 / num2;
} else if (operation === '%') {
  result = num1 % num2;
} else {
  result = 'Invalid operation';
}

const message = 'The result is: ';

alert(message + result);
